const appConfig = window.QUIZ_APP || {};
const sections = window.QUIZ_SECTIONS || [];

const GROUP_OPTIONS =
  Array.isArray(appConfig.groupOptions) && appConfig.groupOptions.length > 0
    ? appConfig.groupOptions
    : [...new Set(sections.map((section) => section.group).filter(Boolean))];

let currentGroup = appConfig.defaultGroup || GROUP_OPTIONS[0] || "";
let currentSectionId = appConfig.defaultSectionId || "";
let answerMode = false;

const matchingState = {
  pairs: [],
  total: 0,
  matched: 0,
  errors: 0,
  selectedClue: null,
  selectedAnswer: null
};

const fillState = {
  pool: [],
  total: 0,
  index: 0,
  completed: 0,
  correct: 0,
  errors: 0,
  answered: false
};

const flashcardState = {
  deck: [],
  index: 0,
  flipped: false,
  known: 0,
  unknown: 0,
  total: 0
};

const elements = {
  title: document.getElementById("pageTitle"),
  subtitle: document.getElementById("pageSubtitle"),
  groupChips: document.getElementById("groupChips"),
  sectionChips: document.getElementById("sectionChips"),
  sectionSummary: document.getElementById("sectionSummary"),
  resetBtn: document.getElementById("resetBtn"),
  toggleAnswerBtn: document.getElementById("toggleAnswerBtn"),
  statusBar: document.getElementById("statusBar"),
  progressText: document.getElementById("progressText"),
  errorText: document.getElementById("errorText"),
  flashcardSection: document.getElementById("flashcardSection"),
  fcProgress: document.getElementById("fcProgress"),
  flashcard: document.getElementById("flashcard"),
  flashcardInner: document.getElementById("flashcardInner"),
  fcImage: document.getElementById("fcImage"),
  fcImageBack: document.getElementById("fcImageBack"),
  fcAnswer: document.getElementById("fcAnswer"),
  fcHint: document.getElementById("fcHint"),
  fcControls: document.getElementById("fcControls"),
  fcKnownBtn: document.getElementById("fcKnownBtn"),
  fcUnknownBtn: document.getElementById("fcUnknownBtn"),
  matchingSection: document.getElementById("matchingSection"),
  clueColLabel: document.getElementById("clueColLabel"),
  answerColLabel: document.getElementById("answerColLabel"),
  clueCol: document.getElementById("clueCol"),
  answerCol: document.getElementById("answerCol"),
  fillSection: document.getElementById("fillSection"),
  fillCountText: document.getElementById("fillCountText"),
  fillPrompt: document.getElementById("fillPrompt"),
  fillHint: document.getElementById("fillHint"),
  fillInput: document.getElementById("fillInput"),
  submitFillBtn: document.getElementById("submitFillBtn"),
  nextFillBtn: document.getElementById("nextFillBtn"),
  fillFeedback: document.getElementById("fillFeedback"),
  fillExplanation: document.getElementById("fillExplanation"),
  resultCard: document.getElementById("resultCard"),
  resultScore: document.getElementById("resultScore"),
  resultText: document.getElementById("resultText"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  answerView: document.getElementById("answerView"),
  answerContent: document.getElementById("answerContent")
};

function shuffle(list) {
  const array = [...list];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function normalizeAnswer(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[()（）[\]{}<>《》"'`~!！?？,，.。:：;；\-_/\\＋+]/g, "");
}

function createChip(text, isActive, className, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `cat-btn${className ? ` ${className}` : ""}${isActive ? " active" : ""}`;
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function getSectionsForGroup(group) {
  return sections.filter((section) => section.group === group);
}

function ensureCurrentSection() {
  const groupSections = getSectionsForGroup(currentGroup);
  if (groupSections.length === 0) {
    currentSectionId = "";
    return null;
  }

  const existing = groupSections.find((section) => section.id === currentSectionId);
  if (existing) {
    return existing;
  }

  currentSectionId = groupSections[0].id;
  return groupSections[0];
}

function getActiveSection() {
  return ensureCurrentSection();
}

function getSectionTypes(section) {
  const types = [];
  if (Array.isArray(section?.matching?.rows) && section.matching.rows.length > 0) {
    types.push(isFlashcardSection(section) ? "圖片辨識" : "配合題");
  }
  if (Array.isArray(section?.fill) && section.fill.length > 0) {
    types.push("填空題");
  }
  return types;
}

// ── Flashcard helpers ──

function isFlashcardSection(section) {
  if (section?.combineGroupImages) return true;
  const rows = section?.matching?.rows || [];
  return rows.length > 0 && rows.every((row) => row.isImage);
}

function getImageRowsForSection(section) {
  if (section?.combineGroupImages) {
    return sections
      .filter((s) => s.group === section.group && !s.combineGroupImages)
      .flatMap((s) => (s.matching?.rows || []).filter((r) => r.isImage));
  }
  return section?.matching?.rows || [];
}

function buildFlashcardDeck(section) {
  return shuffle(
    getImageRowsForSection(section).map((row) => ({ image: row.clue, answer: row.answer }))
  );
}

function restartFlashcard(section) {
  flashcardState.deck = buildFlashcardDeck(section);
  flashcardState.total = flashcardState.deck.length;
  flashcardState.index = 0;
  flashcardState.flipped = false;
  flashcardState.known = 0;
  flashcardState.unknown = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const card = flashcardState.deck[flashcardState.index];
  if (!card) return;
  elements.fcProgress.textContent = `${flashcardState.index + 1} / ${flashcardState.total}`;
  elements.fcImage.src = card.image;
  elements.fcImageBack.src = card.image;
  elements.fcAnswer.textContent = card.answer;
  elements.flashcardInner.classList.remove("flipped");
  flashcardState.flipped = false;
  elements.fcHint.classList.remove("hidden");
  elements.fcControls.classList.add("hidden");
}

function flipFlashcard() {
  if (flashcardState.flipped) return;
  flashcardState.flipped = true;
  elements.flashcardInner.classList.add("flipped");
  elements.fcHint.classList.add("hidden");
  elements.fcControls.classList.remove("hidden");
}

function rateFlashcard(knew) {
  if (!flashcardState.flipped) return;
  flashcardState.flipped = false;
  elements.fcControls.classList.add("hidden");
  if (knew) {
    flashcardState.known += 1;
  } else {
    flashcardState.unknown += 1;
  }
  updateStatus();
  if (flashcardState.index < flashcardState.total - 1) {
    flashcardState.index += 1;
    renderFlashcard();
  } else if (isSectionComplete()) {
    showSectionResult();
  }
}

// ── Core state helpers ──

function buildMatchingPairs(section) {
  const matching = section?.matching?.rows || [];
  return matching
    .filter((row) => typeof row.clue === "string" && row.clue.trim() && typeof row.answer === "string" && row.answer.trim() && !row.isImage)
    .map((row, index) => ({
      id: `${section.id}-match-${index}`,
      clue: row.clue,
      answer: row.answer,
      isImage: false
    }));
}

function buildFillPool(section) {
  const fill = section?.fill || [];
  return fill.filter((question) => typeof question.prompt === "string" && question.prompt.trim());
}

function hideResult() {
  elements.resultCard.classList.remove("show");
}

function updateStatus() {
  const section = getActiveSection();
  if (isFlashcardSection(section)) {
    const rated = flashcardState.known + flashcardState.unknown;
    elements.progressText.textContent = `${rated} / ${flashcardState.total}`;
    elements.errorText.textContent = String(flashcardState.unknown);
    return;
  }
  const total = matchingState.total + fillState.total;
  const completed = matchingState.matched + fillState.completed;
  const errors = matchingState.errors + fillState.errors;
  elements.progressText.textContent = `${completed} / ${total}`;
  elements.errorText.textContent = String(errors);
}

function renderGroupChips() {
  elements.groupChips.innerHTML = "";
  GROUP_OPTIONS.forEach((group) => {
    elements.groupChips.appendChild(
      createChip(group, group === currentGroup, "", () => {
        if (group === currentGroup) {
          return;
        }
        currentGroup = group;
        answerMode = false;
        hideResult();
        restartSection();
        renderAll();
      })
    );
  });
}

function renderSectionChips() {
  const groupSections = getSectionsForGroup(currentGroup);
  elements.sectionChips.innerHTML = "";

  groupSections.forEach((section) => {
    elements.sectionChips.appendChild(
      createChip(section.title, section.id === currentSectionId, "section-btn", () => {
        if (section.id === currentSectionId) {
          return;
        }
        currentSectionId = section.id;
        answerMode = false;
        hideResult();
        restartSection();
        renderAll();
      })
    );
  });
}

function renderSectionSummary() {
  const section = getActiveSection();
  if (!section) {
    elements.sectionSummary.textContent = "目前這個分類還沒有章節。";
    return;
  }

  const types = getSectionTypes(section);
  elements.sectionSummary.textContent = `目前章節：${section.title}${types.length > 0 ? ` ｜ 題型：${types.join(" + ")}` : ""}`;
}

function renderEmptyMatchingBoard(message) {
  elements.clueCol.innerHTML = "";
  elements.answerCol.innerHTML = "";

  const emptyClue = document.createElement("div");
  emptyClue.className = "empty-card";
  emptyClue.textContent = message;

  const emptyAnswer = document.createElement("div");
  emptyAnswer.className = "empty-card";
  emptyAnswer.textContent = "切換到別的章節後再試一次。";

  elements.clueCol.appendChild(emptyClue);
  elements.answerCol.appendChild(emptyAnswer);
}

function makeTile(text, id, type, isImage) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = `tile${isImage ? " tile-image" : ""}`;
  tile.dataset.id = id;
  tile.dataset.type = type;
  if (isImage) {
    const img = document.createElement("img");
    img.src = text;
    img.alt = "";
    img.className = "tile-img";
    tile.appendChild(img);
  } else {
    tile.textContent = text;
  }
  tile.addEventListener("click", () => onMatchingTile(tile));
  return tile;
}

function renderMatchingBoard() {
  const section = getActiveSection();
  const matching = section?.matching || {};
  elements.clueColLabel.textContent = matching.clueLabel || "線索 / 提示";
  elements.answerColLabel.textContent = matching.answerLabel || "答案";

  if (matchingState.pairs.length === 0) {
    renderEmptyMatchingBoard("這個章節目前沒有配合題。");
    return;
  }

  const shuffledClues = shuffle(matchingState.pairs.map((pair) => ({ id: pair.id, text: pair.clue, isImage: pair.isImage })));
  const shuffledAnswers = shuffle(matchingState.pairs.map((pair) => ({ id: pair.id, text: pair.answer })));

  elements.clueCol.innerHTML = "";
  elements.answerCol.innerHTML = "";

  shuffledClues.forEach((item) => elements.clueCol.appendChild(makeTile(item.text, item.id, "clue", item.isImage)));
  shuffledAnswers.forEach((item) => elements.answerCol.appendChild(makeTile(item.text, item.id, "answer", false)));
}

function clearSelected(type) {
  document.querySelectorAll(`.tile[data-type="${type}"].selected`).forEach((tile) => {
    tile.classList.remove("selected");
  });
}

function onMatchingTile(tile) {
  if (tile.classList.contains("matched") || tile.classList.contains("flashing") || answerMode) {
    return;
  }

  if (tile.dataset.type === "clue") {
    clearSelected("clue");
    tile.classList.add("selected");
    matchingState.selectedClue = tile;
  } else {
    clearSelected("answer");
    tile.classList.add("selected");
    matchingState.selectedAnswer = tile;
  }

  if (matchingState.selectedClue && matchingState.selectedAnswer) {
    tryMatchingPair();
  }
}

function tryMatchingPair() {
  const clueTile = matchingState.selectedClue;
  const answerTile = matchingState.selectedAnswer;
  matchingState.selectedClue = null;
  matchingState.selectedAnswer = null;

  if (!clueTile || !answerTile) {
    return;
  }

  if (clueTile.dataset.id === answerTile.dataset.id) {
    clueTile.classList.remove("selected");
    answerTile.classList.remove("selected");
    clueTile.classList.add("matched");
    answerTile.classList.add("matched");
    matchingState.matched += 1;
    updateStatus();
    if (isSectionComplete()) {
      showSectionResult();
    }
    return;
  }

  matchingState.errors += 1;
  clueTile.classList.remove("selected");
  answerTile.classList.remove("selected");
  clueTile.classList.add("flashing");
  answerTile.classList.add("flashing");
  updateStatus();

  window.setTimeout(() => {
    clueTile.classList.remove("flashing");
    answerTile.classList.remove("flashing");
  }, 360);
}

function resetFillFeedback() {
  elements.fillFeedback.textContent = "";
  elements.fillFeedback.className = "fill-feedback";
  elements.fillExplanation.textContent = "";
  elements.fillExplanation.classList.remove("show");
}

function getCurrentFillQuestion() {
  return fillState.pool[fillState.index] || null;
}

function getPrimaryAnswer(question) {
  return Array.isArray(question.answers) && question.answers.length > 0 ? question.answers[0] : "";
}

function renderFillQuestion() {
  const question = getCurrentFillQuestion();

  if (!question) {
    elements.fillCountText.textContent = "0 / 0";
    elements.fillPrompt.textContent = "這個章節目前沒有填空題。";
    elements.fillHint.textContent = "";
    elements.fillInput.value = "";
    elements.fillInput.disabled = true;
    elements.submitFillBtn.disabled = true;
    elements.nextFillBtn.disabled = true;
    elements.nextFillBtn.textContent = "下一題";
    resetFillFeedback();
    return;
  }

  elements.fillCountText.textContent = `${fillState.index + 1} / ${fillState.total}`;
  elements.fillPrompt.textContent = question.prompt;
  elements.fillHint.textContent = question.hint || "";
  elements.fillInput.disabled = fillState.answered;
  elements.submitFillBtn.disabled = fillState.answered;

  if (fillState.index === fillState.total - 1 && fillState.answered) {
    elements.nextFillBtn.disabled = true;
    elements.nextFillBtn.textContent = "已完成";
  } else {
    elements.nextFillBtn.disabled = !fillState.answered;
    elements.nextFillBtn.textContent = fillState.index === fillState.total - 1 ? "完成本節" : "下一題";
  }

  if (!fillState.answered) {
    elements.fillInput.value = "";
    resetFillFeedback();
  }
}

function checkFillAnswer() {
  const question = getCurrentFillQuestion();
  if (!question || fillState.answered) {
    return;
  }

  const rawValue = elements.fillInput.value.trim();
  if (!rawValue) {
    elements.fillFeedback.textContent = "先輸入答案再送出。";
    elements.fillFeedback.className = "fill-feedback wrong";
    return;
  }

  const answers = Array.isArray(question.answers) ? question.answers : [];
  const isCorrect = answers.some((answer) => normalizeAnswer(answer) === normalizeAnswer(rawValue));

  fillState.answered = true;
  fillState.completed += 1;
  elements.fillInput.disabled = true;
  elements.submitFillBtn.disabled = true;

  if (isCorrect) {
    fillState.correct += 1;
    elements.fillFeedback.textContent = `答對了：${getPrimaryAnswer(question)}`;
    elements.fillFeedback.className = "fill-feedback correct";
  } else {
    fillState.errors += 1;
    elements.fillFeedback.textContent = `這題正解是：${getPrimaryAnswer(question)}`;
    elements.fillFeedback.className = "fill-feedback wrong";
  }

  elements.fillExplanation.textContent = question.explanation || "";
  elements.fillExplanation.classList.toggle("show", Boolean(question.explanation));

  if (fillState.index === fillState.total - 1) {
    elements.nextFillBtn.disabled = true;
    elements.nextFillBtn.textContent = "已完成";
  } else {
    elements.nextFillBtn.disabled = false;
  }

  updateStatus();
  if (isSectionComplete()) {
    showSectionResult();
  }
}

function goToNextFillQuestion() {
  if (!fillState.answered || fillState.index >= fillState.total - 1) {
    return;
  }

  fillState.index += 1;
  fillState.answered = false;
  renderFillQuestion();
  updateStatus();
  elements.fillInput.focus();
}

function restartMatching(section) {
  matchingState.pairs = buildMatchingPairs(section);
  matchingState.total = matchingState.pairs.length;
  matchingState.matched = 0;
  matchingState.errors = 0;
  matchingState.selectedClue = null;
  matchingState.selectedAnswer = null;
  renderMatchingBoard();
}

function restartFill(section) {
  fillState.pool = buildFillPool(section);
  fillState.total = fillState.pool.length;
  fillState.index = 0;
  fillState.completed = 0;
  fillState.correct = 0;
  fillState.errors = 0;
  fillState.answered = false;
  renderFillQuestion();
}

function restartSection() {
  const section = getActiveSection();
  hideResult();
  if (isFlashcardSection(section)) {
    restartFlashcard(section);
    matchingState.pairs = [];
    matchingState.total = 0;
    matchingState.matched = 0;
    matchingState.errors = 0;
    matchingState.selectedClue = null;
    matchingState.selectedAnswer = null;
  } else {
    restartMatching(section);
  }
  restartFill(section);
  updateStatus();
}

function isSectionComplete() {
  const section = getActiveSection();
  if (isFlashcardSection(section)) {
    return flashcardState.total > 0 && (flashcardState.known + flashcardState.unknown) >= flashcardState.total;
  }
  const matchingDone = matchingState.matched === matchingState.total;
  const fillDone = fillState.completed === fillState.total;
  return matchingDone && fillDone && (matchingState.total + fillState.total > 0);
}

function showSectionResult() {
  const section = getActiveSection();
  let score, totalErrors;

  if (isFlashcardSection(section)) {
    score = flashcardState.total === 0 ? 0 : Math.round((flashcardState.known / flashcardState.total) * 100);
    totalErrors = flashcardState.unknown;
  } else {
    const totalItems = matchingState.total + fillState.total;
    const successBase = matchingState.total + fillState.correct;
    score = totalItems === 0 ? 0 : Math.max(0, Math.round((successBase / (totalItems + matchingState.errors || 1)) * 100));
    totalErrors = matchingState.errors + fillState.errors;
  }

  elements.resultScore.textContent = `${score}%`;
  elements.resultScore.className = `big ${score === 100 ? "perfect" : score >= 70 ? "good" : "bad"}`;

  if (totalErrors === 0) {
    elements.resultText.textContent = "這一節全對，可以直接切到下一個標題。";
  } else if (score >= 70) {
    elements.resultText.textContent = `這一節完成了，累計錯 ${totalErrors} 次，再刷一次會更穩。`;
  } else {
    elements.resultText.textContent = `這一節完成了，累計錯 ${totalErrors} 次，建議先看答案再回頭重做。`;
  }

  elements.resultCard.classList.add("show");
}

function renderVisibility() {
  const section = getActiveSection();
  const hasMatching = Array.isArray(section?.matching?.rows) && section.matching.rows.length > 0;
  const hasFill = Array.isArray(section?.fill) && section.fill.length > 0;
  const useFlashcard = isFlashcardSection(section);

  elements.flashcardSection.classList.toggle("hidden", answerMode || !useFlashcard);
  elements.matchingSection.classList.toggle("hidden", answerMode || !hasMatching || useFlashcard);
  elements.fillSection.classList.toggle("hidden", answerMode || !hasFill);
  elements.answerView.classList.toggle("hidden", !answerMode);
  elements.statusBar.classList.toggle("hidden", answerMode);
  elements.toggleAnswerBtn.textContent = answerMode ? "返回練習" : "顯示答案";
}

function createAnswerTable(headers, rows) {
  const table = document.createElement("table");
  table.className = "answer-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = document.createElement("tbody");
  rows.forEach((cells) => {
    const tr = document.createElement("tr");
    cells.forEach((cell) => {
      const td = document.createElement("td");
      if (cell instanceof Node) {
        td.appendChild(cell);
      } else {
        td.textContent = String(cell);
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

function renderAnswers() {
  const section = getActiveSection();
  elements.answerContent.innerHTML = "";

  if (!section) {
    const block = document.createElement("div");
    block.className = "answer-block";
    block.textContent = "目前這個分類沒有答案可顯示。";
    elements.answerContent.appendChild(block);
    return;
  }

  const matchingRows = isFlashcardSection(section)
    ? getImageRowsForSection(section)
    : (section.matching?.rows || []);

  if (matchingRows.length > 0) {
    const block = document.createElement("section");
    block.className = "answer-block";

    const title = document.createElement("h3");
    title.className = "answer-block-title";
    title.textContent = isFlashcardSection(section)
      ? `圖片辨識答案｜${section.title}`
      : `配合題答案｜${section.title}`;

    const table = createAnswerTable(
      [section.matching?.clueLabel || "線索 / 提示", section.matching?.answerLabel || "答案"],
      matchingRows.map((row) => {
        if (row.isImage) {
          const img = document.createElement("img");
          img.src = row.clue;
          img.alt = row.answer;
          img.className = "answer-img";
          return [img, row.answer];
        }
        return [row.clue, row.answer];
      })
    );

    block.appendChild(title);
    block.appendChild(table);
    elements.answerContent.appendChild(block);
  }

  if (Array.isArray(section.fill) && section.fill.length > 0) {
    const block = document.createElement("section");
    block.className = "answer-block";

    const title = document.createElement("h3");
    title.className = "answer-block-title";
    title.textContent = `填空題答案｜${section.title}`;

    const table = createAnswerTable(
      ["題目", "答案 / 提醒"],
      section.fill.map((question) => [
        question.prompt,
        question.explanation ? `${getPrimaryAnswer(question)} ｜ ${question.explanation}` : getPrimaryAnswer(question)
      ])
    );

    block.appendChild(title);
    block.appendChild(table);
    elements.answerContent.appendChild(block);
  }
}

function setAnswerMode(nextMode) {
  answerMode = nextMode;
  hideResult();
  if (answerMode) {
    renderAnswers();
  }
  renderVisibility();
}

function renderAll() {
  renderGroupChips();
  renderSectionChips();
  renderSectionSummary();
  renderVisibility();
}

function applyConfig() {
  document.title = appConfig.title || "檢醫考試 6 總整理練習";
  elements.title.textContent = appConfig.title || "檢醫考試 6 總整理練習";
  elements.subtitle.textContent = appConfig.subtitle || "內容依據《總整理.md》抽出高頻重點，先配對再填空。";
}

elements.resetBtn.addEventListener("click", () => {
  answerMode = false;
  restartSection();
  renderAll();
});

elements.toggleAnswerBtn.addEventListener("click", () => {
  setAnswerMode(!answerMode);
});

elements.playAgainBtn.addEventListener("click", () => {
  answerMode = false;
  restartSection();
  renderAll();
});

elements.flashcard.addEventListener("click", flipFlashcard);

elements.fcKnownBtn.addEventListener("click", () => rateFlashcard(true));
elements.fcUnknownBtn.addEventListener("click", () => rateFlashcard(false));

elements.submitFillBtn.addEventListener("click", () => {
  checkFillAnswer();
});

elements.nextFillBtn.addEventListener("click", () => {
  goToNextFillQuestion();
});

elements.fillInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();
  if (fillState.answered) {
    goToNextFillQuestion();
  } else {
    checkFillAnswer();
  }
});

applyConfig();
ensureCurrentSection();
restartSection();
renderAll();
