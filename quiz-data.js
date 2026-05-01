window.QUIZ_APP = {
  title: "檢醫考試 6 總整理練習",
  subtitle: "內容依據《總整理.md》抽出高頻重點，先配對再填空。",
  defaultGroup: "止血凝血",
  defaultSectionId: "coagulation-enzyme-complex",
  groupOptions: ["白血球", "紅血球", "止血凝血", "幹細胞移植", "輸血醫學", "顯微鏡圖片"]
};

window.QUIZ_SECTIONS = [
  // ─────────────── 白血球 ───────────────
  {
    id: "neutrophil-morphology",
    group: "白血球",
    title: "Neutrophil 型態異常（重要，會考）",
    matching: {
      clueLabel: "型態 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Toxic granules", clue: "Dark coarse granules，secondary granule ↑，對應 sepsis 或嚴重細菌感染" },
        { answer: "Döhle bodies", clue: "感染或中毒時 ribosome 遺跡，淡藍色 basophilic inclusion" },
        { answer: "Cytoplasmic vacuoles", clue: "嚴重感染後 degeneration，吞噬細菌的痕跡" },
        { answer: "Hypersegmented neutrophil", clue: "葉酸 / Vit B12 缺乏（megaloblastic anemia），核分葉 > 6 葉" },
        { answer: "Pelger-Huet anomaly", clue: "MDS（maturation disorder），核分葉不完全、葫蘆狀；化療後可見 pseudo-Pelger-Huet" },
        { answer: "May-Hegglin anomaly", clue: "Autosomal dominant；WBC 內有 basophilic inclusion body + giant platelet，功能正常" },
        { answer: "Alder-Reilly anomaly", clue: "Mucopolysaccharidosis；粗顆粒（metachromatic granule），lymphocyte 也有 granule" },
        { answer: "Chediak-Higashi syndrome", clue: "Phagocytosis disorder；peroxidase 缺乏，無法 degranulation；外觀白子；骨髓移植才能存活" }
      ]
    }
  },
  {
    id: "leukemoid-vs-leukoerythroblastic",
    group: "白血球",
    title: "Leukemoid reaction vs Leuko-erythroblastic reaction（重要，會考）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Leukemoid reaction", clue: "非白血病的劇烈反應；LAP score 高；無費城染色體" },
        { answer: "Leuko-erythroblastic reaction", clue: "同時有 myeloid precursor 和 erythroblast，多半代表 malignant process" },
        { answer: "Metastatic neoplasm in bone marrow", clue: "Leuko-erythroblastic reaction 最常見成因" },
        { answer: "Miliary tuberculosis", clue: "在台灣要特別想到的 Leuko-erythroblastic reaction 成因" }
      ]
    },
    fill: [
      {
        prompt: "Leukemoid reaction 和 CML 鑑別時，前者的 LAP score 會偏 ______。",
        answers: ["高", "high"],
        explanation: "Leukemoid reaction 的 LAP score 高，CML 則低。"
      }
    ]
  },
  {
    id: "neutrophilia-neutropenia",
    group: "白血球",
    title: "Neutrophilia / Neutropenia",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Infection（pyogenic）", clue: "Neutrophilia 最常見原因" },
        { answer: "Steroid", clue: "將 neutrophil 從組織趕入血管，造成 neutrophilia 的藥物" },
        { answer: "Kostmann's syndrome", clue: "Congenital neutropenia，maturation arrest 在 promyelocyte 後" },
        { answer: "ELANE gene mutation", clue: "佔 severe congenital neutropenia 的 45%；需骨髓移植" },
        { answer: "Cyclic neutropenia", clue: "以 21 天為週期低落的 neutropenia" }
      ]
    },
    fill: [
      {
        prompt: "化療後感染，抗生素需 cover ______。",
        answers: ["Pseudomonas", "pseudomonas"],
        explanation: "化療後 neutropenia 感染最需覆蓋 Pseudomonas。"
      }
    ]
  },
  {
    id: "eosinophilia-basophilia",
    group: "白血球",
    title: "Eosinophilia / Basophilia",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Allergy disease", clue: "Eosinophilia 最常見原因（asthma、hay fever）" },
        { answer: "Tissue-invasive parasite", clue: "Eosinophilia 的感染原因；台灣少見，外籍移工需考慮" },
        { answer: "CML", clue: "Basophilia 最重要的惡性原因，常一起考" },
        { answer: "Polycythemia vera", clue: "Basophilia 的另一個重要血液疾病" },
        { answer: "Smallpox / Chickenpox", clue: "Basophilia 的感染性原因（反應性）" }
      ]
    },
    fill: [
      {
        prompt: "Liu's stain 下 basophil granule 會 ______，染片上呈現髒髒一片，是玻片必考題。",
        answers: ["溶出", "溶解"],
        explanation: "Basophil 的特殊染色行為。"
      }
    ]
  },
  {
    id: "monocytosis",
    group: "白血球",
    title: "Monocytosis / Monocytopenia",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Recovery from myelosuppression", clue: "Monocytosis 最常見原因（化療後）" },
        { answer: "TB（tuberculosis）", clue: "台灣最需考慮的感染性 monocytosis 原因" },
        { answer: "Hairy cell leukemia", clue: "Monocytopenia 的重要原因" },
        { answer: "Glucocorticoids", clue: "造成 monocytopenia 的藥物（transient）" }
      ]
    }
  },
  {
    id: "lymphocyte-markers",
    group: "白血球",
    title: "Lymphocyte 表面標記（要記）",
    matching: {
      clueLabel: "提示",
      answerLabel: "答案",
      rows: [
        { answer: "CD19", clue: "B cell 最重要、最先背的 marker" },
        { answer: "CD3", clue: "T cell 最核心的 marker 之一" },
        { answer: "CD4", clue: "T cell marker，也和 HLA class II 一起搭配記憶" },
        { answer: "CD8", clue: "T cell marker，也和 HLA class I 一起搭配記憶" }
      ]
    }
  },
  {
    id: "lymphocytopenia",
    group: "白血球",
    title: "Lymphocytopenia（重要，會考）（09 考古）",
    matching: {
      clueLabel: "類型 / 線索",
      answerLabel: "答案",
      rows: [
        { answer: "Destructive", clue: "radiation、chemotherapy、corticosteroids" },
        { answer: "Debilitative", clue: "starvation、aplastic anemia、terminal cancer、renal failure" },
        { answer: "Infectious", clue: "viral hepatitis、influenza、typhoid fever、TB" },
        { answer: "Congenital immunodeficiency", clue: "Wiskott-Aldrich syndrome 常放在這類" }
      ]
    },
    fill: [
      {
        prompt: "Lymphocytopenia 的 congenital immunodeficiency 代表疾病，考試常放的是 ______ syndrome。",
        answers: ["Wiskott-Aldrich", "Wiskott Aldrich", "Wiskott-Aldrich syndrome"],
        explanation: "總整理把 Wiskott-Aldrich syndrome 放在這個分類。"
      }
    ]
  },
  {
    id: "lymphocytosis",
    group: "白血球",
    title: "Lymphocytosis（重要，會考）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "EBV infection", clue: "大量 atypical lymphocyte；常見於小朋友；良性" },
        { answer: "ATL（Adult T-cell leukemia）", clue: "成人出現 atypical lymphocyte → 惡性；要鑑別" },
        { answer: "ALL", clue: "小孩；可能伴 bone pain；機器可能 miss → 需人工閱片 + 照會血液科" },
        { answer: "Pertussis（百日咳）", clue: "感染性 lymphocytosis；小兒科最常見" }
      ]
    },
    fill: [
      {
        prompt: "ALL 小孩若腫瘤細胞比例低，機器 CBC 可能誤判，需做 ______ 閱片確認。",
        answers: ["人工", "手工"],
        explanation: "血液科請會診的核心理由。"
      }
    ]
  },
  {
    id: "scid",
    group: "白血球",
    title: "SCID（Severe Combined Immune Deficiency）",
    fill: [
      {
        prompt: "SCID 的三個高頻臨床線索是反覆 respiratory infection、protracted diarrhea 和 ______ to thrive。",
        answers: ["failure", "failure to thrive"],
        explanation: "SCID 的關鍵句型就是反覆感染、腹瀉和 failure to thrive。"
      },
      {
        prompt: "SCID 若能在 newborn screening 提早發現，最重要的根治方向是及早做 ______ 移植。",
        answers: ["骨髓", "骨髓移植", "造血幹細胞", "造血幹細胞移植"],
        explanation: "提早做骨髓或造血幹細胞移植最關鍵。"
      }
    ]
  },
  {
    id: "hlh",
    group: "白血球",
    title: "Hemophagocytic Lymphohistiocytosis（HLH，嗜血症候群）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Perforin mutation", clue: "HLH 的核心機轉，讓 T cell 殺不死目標" },
        { answer: "EBV", clue: "台灣最常見的 HLH 觸發感染" },
        { answer: "Pancytopenia", clue: "HLH 三主徵之一" },
        { answer: "Hepatosplenomegaly", clue: "HLH 三主徵之一" }
      ]
    }
  },

  // ─────────────── 紅血球 ───────────────
  {
    id: "rbc-indices",
    group: "紅血球",
    title: "RBC Indices（要知道每個指標意義）",
    matching: {
      clueLabel: "指標 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "MCV", clue: "Hematocrit (%) × 10 ÷ RBC count；正常值 90 ± 8 fL" },
        { answer: "MCH", clue: "Hb (g/dL) × 10 ÷ RBC count；正常值 30 ± 3 pg" },
        { answer: "MCHC", clue: "Hb (g/dL) × 100 ÷ Hct (%)；正常值 33 ± 2%" },
        { answer: "RDW-CV", clue: "SD ÷ mean MCV × 100；單位為 %；越大代表骨髓問題（09考古：單位）" }
      ]
    }
  },
  {
    id: "body-iron",
    group: "紅血球",
    title: "Body Iron Distribution（09考古重點！）",
    matching: {
      clueLabel: "提示",
      answerLabel: "答案",
      rows: [
        { answer: "Hemoglobin", clue: "Iron 含量最多的部位（男 2500 mg、女 1700 mg）" },
        { answer: "Transferrin iron", clue: "Iron 含量最少的部位（男女均約 3 mg）" }
      ]
    },
    fill: [
      {
        prompt: "只有 ______ 性貧血才需要補鐵；thalassemia 給鐵反而造成鐵沉積。",
        answers: ["缺鐵", "IDA", "iron deficiency"],
        explanation: "補鐵的最重要適應症判斷。"
      },
      {
        prompt: "1 cc 血液約含 ______ mg 鐵。",
        answers: ["1"],
        explanation: "方便估算失血鐵量的臨床記憶法。"
      }
    ]
  },
  {
    id: "rbc-morphology",
    group: "紅血球",
    title: "RBC 型態異常（考古重點，背名稱＋成因）",
    matching: {
      clueLabel: "型態 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Spherocyte", clue: "無 central pale zone，小而圓，代表 cell membrane 變少" },
        { answer: "Target cell", clue: "Cell membrane 太多，形成箭靶狀" },
        { answer: "Schistocyte", clue: "RBC 被切碎成碎片，常見於血管內溶血" },
        { answer: "Dacrocyte", clue: "Tear drop cell，RBC 通過骨髓時受擠壓變形" },
        { answer: "Burr cell", clue: "短而鈍、均勻鋸齒狀，和 uremia 很常一起考" },
        { answer: "Spur cell", clue: "尖而不規則突起，常見於 advanced liver disease" }
      ]
    }
  },
  {
    id: "rbc-stain-inclusion",
    group: "紅血球",
    title: "RBC 染色 / 內含物異常",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Hypochromic", clue: "central pale zone > 1/2，Hb 太少，看起來較 pale" },
        { answer: "Polychromasia", clue: "藍灰色 RBC，代表 reticulocyte 增多" },
        { answer: "Basophilic stippling", clue: "RBC 內藍色小點，想到 thalassemia 或 lead poisoning" },
        { answer: "Rouleaux formation", clue: "RBC 像錢幣一樣疊在一起，代表 hyperglobulinemia（myeloma、肝硬化）" },
        { answer: "Howell-Jolly body", clue: "紫色小點，代表核殘留物，脾臟切除後典型" },
        { answer: "Heinz body", clue: "一般染色看不到，需 supravital stain，想到 G6PD deficiency" }
      ]
    }
  },
  {
    id: "ida-vs-thalassemia",
    group: "紅血球",
    title: "IDA vs Thalassemia 比較（考古重點！）（08、10考古）",
    matching: {
      clueLabel: "特徵 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "IDA", clue: "RBC 數量偏少，platelet 可 mild thrombocytosis，serum iron < 30 μg/dL" },
        { answer: "Thalassemia", clue: "RBC 數量代償性偏高，platelet 正常，target cell 常見" },
        { answer: "IDA", clue: "停經前婦女常見，family history 無關" },
        { answer: "Thalassemia", clue: "年輕人、和遺傳與 family history 有關" }
      ]
    },
    fill: [
      {
        prompt: "Thalassemia 雖然也是 microcytic anemia，但 RBC 數量通常代償性偏 ______。",
        answers: ["高", "多", "增加"],
        explanation: "這是和 IDA 最實用的鑑別點之一。"
      }
    ]
  },
  {
    id: "cobalamin-deficiency",
    group: "紅血球",
    title: "Cobalamin（B12）Deficiency Anemia（08考古問 lab feature、10考古）",
    matching: {
      clueLabel: "Lab feature / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Pancytopenia", clue: "B12 deficiency 常不只 RBC 低，WBC 和 PLT 也會下降" },
        { answer: "LDH ↑↑", clue: "骨髓內溶血造成的典型 lab feature" },
        { answer: "Indirect hyperbilirubinemia", clue: "骨髓內溶血造成，臉色可檸檬黃" },
        { answer: "Hypersegmented neutrophil", clue: "血液抹片高頻特徵" },
        { answer: "Low reticulocyte count", clue: "骨髓無法有效造血，所以 reticulocyte 不會高" }
      ]
    },
    fill: [
      {
        prompt: "B12 deficiency 的 macrocytic anemia，總整理提醒 MCV 會大於 ______ fL。",
        answers: ["115"],
        explanation: "這是筆記中直接標出的數字。"
      },
      {
        prompt: "B12 吸收需要胃分泌的 ______ factor。",
        answers: ["intrinsic", "intrinsic factor"],
        explanation: "胃切除或 pernicious anemia 時就會影響吸收。"
      }
    ]
  },
  {
    id: "hemolytic-anemia",
    group: "紅血球",
    title: "Hemolytic Anemia",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Extravascular hemolysis", clue: "Plasma Hb 通常不高，urine Hb 不出現" },
        { answer: "Intravascular hemolysis", clue: "Plasma Hb ↑，urine hemosiderin ＋，severe 時 urine Hb ＋" },
        { answer: "EMA stain + flow cytometry", clue: "Hereditary spherocytosis 的重點診斷工具" },
        { answer: "TTP / HUS", clue: "Traumatic hemolytic anemia 中會有碎片 + 血小板明顯下降" }
      ]
    },
    fill: [
      {
        prompt: "Hereditary spherocytosis 的 flow cytometry 若 fluorescence intensity < ______，特異度可達 90%。",
        answers: ["0.8"],
        explanation: "這個數字直接整理在總整理裡。"
      }
    ]
  },

  // ─────────────── 止血凝血 ───────────────
  {
    id: "coagulation-enzyme-complex",
    group: "止血凝血",
    title: "Coagulation Enzyme Complex（固定考點）",
    matching: {
      clueLabel: "組成 / 作用",
      answerLabel: "Complex",
      rows: [
        { answer: "Extrinsic tenase", clue: "phospholipid membrane + tissue factor + factor VIIa；活化 factor X、factor IX" },
        { answer: "Intrinsic tenase", clue: "phospholipid membrane + factor VIIIa + factor IXa；活化 factor X" },
        { answer: "Prothrombinase", clue: "phospholipid membrane + factor Va + factor Xa；活化 factor II → thrombin" },
        { answer: "Protein C-ase", clue: "phospholipid membrane + thrombomodulin + thrombin；活化 protein C" }
      ]
    },
    fill: [
      {
        prompt: "老師特別強調 extrinsic tenase 寫組成時要寫 ______ factor，不要只寫 factor III。",
        answers: ["tissue", "tissue factor"],
        explanation: "考試請寫 tissue factor。"
      }
    ]
  },
  {
    id: "primary-hemostasis",
    group: "止血凝血",
    title: "Primary Hemostasis 考古重點",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "GPIb-V-IX + vWF", clue: "Platelet adhesion，讓血小板黏到受傷血管壁" },
        { answer: "GPIIb-IIIa + fibrinogen / vWF", clue: "Platelet aggregation，靠 bridge 把血小板連起來" },
        { answer: "Bernard-Soulier syndrome", clue: "GPIb-V-IX 缺陷造成的 adhesion defect" },
        { answer: "Glanzmann thrombasthenia", clue: "GPIIb-IIIa 缺陷造成的 aggregation defect" },
        { answer: "Weibel-Palade bodies", clue: "endothelial cell 儲存 vWF 的位置" }
      ]
    },
    fill: [
      {
        prompt: "vWF 是由 endothelial cell 分泌，儲存在 ______-Palade bodies。",
        answers: ["Weibel", "Weibel-Palade", "Weibel Palade"],
        explanation: "這是 primary hemostasis 的固定考點。"
      },
      {
        prompt: "分子量越 ______ 的 vWF multimer，功能越強，因為可同時 binding 更多 platelet。",
        answers: ["大", "高", "大顆"],
        explanation: "大 multimer 功能更強。"
      }
    ]
  },
  {
    id: "anticoagulant-pathway",
    group: "止血凝血",
    title: "Anticoagulant Pathway 考古重點",
    matching: {
      clueLabel: "提示",
      answerLabel: "答案",
      rows: [
        { answer: "Protein S", clue: "Activated protein C 需要的 cofactor" },
        { answer: "Factor Va", clue: "APC 會分解的目標之一" },
        { answer: "Factor VIIIa", clue: "APC 會分解的另一個重要目標" },
        { answer: "Antithrombin", clue: "除了 thrombin 外，也可抑制 VIIa、IXa、Xa、XIa、XIIa" }
      ]
    },
    fill: [
      {
        prompt: "APC 真正分解的是 Va 和 ______a，不是 activated factor X。",
        answers: ["viii", "VIII", "8"],
        explanation: "APC 失活 Va 與 VIIIa。"
      }
    ]
  },
  {
    id: "pt-aptt-mixing",
    group: "止血凝血",
    title: "PT / aPTT / Mixing Test 考古重點",
    matching: {
      clueLabel: "判讀 / 線索",
      answerLabel: "答案",
      rows: [
        { answer: "Factor VIII / IX / XI / XII", clue: "PT normal、aPTT prolong 時考慮的 intrinsic pathway 因子" },
        { answer: "Factor I / II / V / X", clue: "PT prolong、aPTT prolong 時考慮的 common pathway 因子" },
        { answer: "Correctable mixing test", clue: "1:1 混 normal pooled plasma 後 correction，代表 factor deficiency" },
        { answer: "Immediate prolongation", clue: "強 inhibitor；最重要先想 lupus anticoagulant" },
        { answer: "Time-dependent prolongation", clue: "較弱、需培養的 inhibitor；最常見 factor VIII inhibitor" },
        { answer: "Factor XII deficiency", clue: "aPTT 可很長，但臨床上通常不出血" }
      ]
    },
    fill: [
      {
        prompt: "PT 正常、aPTT 延長時，代表 common pathway 正常，因此只考慮 ______ pathway 的單一因子。",
        answers: ["intrinsic", "內在"],
        explanation: "這是判讀邏輯本身。"
      },
      {
        prompt: "老年人自發性瘀青、aPTT 延長、mixing test 立即矯正但 1 小時後不矯正，最要想到 factor ______ inhibitor。",
        answers: ["viii", "VIII", "8"],
        explanation: "這就是 acquired hemophilia 的高頻題型。"
      }
    ]
  },
  {
    id: "bleeding-normal-coag",
    group: "止血凝血",
    title: "出血但 PT / aPTT 正常時的鑑別",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "vWD type 1", clue: "Some of vWD 可呈現 platelet 正常但有出血傾向" },
        { answer: "Dysfibrinogenemia", clue: "Fibrin 結構不穩造成出血；用 fibrinogen、TT 等確認" },
        { answer: "Factor XIII deficiency", clue: "Urea clot stability test：clot 若 1 天內溶解即為 deficiency" },
        { answer: "α2-antiplasmin deficiency", clue: "過度 fibrinolysis 造成出血" }
      ]
    },
    fill: [
      {
        prompt: "Factor XIII deficiency 的篩檢方法：加 ______ 後，clot 若 1 天內溶解即陽性。",
        answers: ["urea", "urea clot stability test"],
        explanation: "Urea clot stability test 是 factor XIII deficiency 的重要篩檢。"
      }
    ]
  },
  {
    id: "anticoagulant-monitoring",
    group: "止血凝血",
    title: "Anticoagulant Monitoring（考古）",
    matching: {
      clueLabel: "藥物 / 線索",
      answerLabel: "答案",
      rows: [
        { answer: "aPTT", clue: "UFH / heparin 主要用這個監測" },
        { answer: "PT / INR", clue: "Warfarin 主要用這個監測" }
      ]
    },
    fill: [
      {
        prompt: "一般劑量 heparin 不常讓 PT prolong，因為 PT reagent 常加入 heparin ______。",
        answers: ["neutralizer", "heparin neutralizer"],
        explanation: "這是總整理中對 heparin / PT 的補充。"
      }
    ]
  },

  // ─────────────── 幹細胞移植 ───────────────
  {
    id: "hla-basic",
    group: "幹細胞移植",
    title: "HLA 配對基礎（必考）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Class I", clue: "A / B / C；所有有核細胞與血小板；和 CD8 結合" },
        { answer: "Class II", clue: "DR / DP / DQ；B cell、monocyte、macrophage、activated T cell；和 CD4 結合" },
        { answer: "1/4", clue: "任兩兄弟姊妹 fully matched 的機率" },
        { answer: "6p", clue: "HLA 所在染色體位置（第 6 對短臂）" }
      ]
    },
    fill: [
      {
        prompt: "NTUH 看 HLA 的 ______ 個位點，> 8 相符即可視為 fully matched。",
        answers: ["10", "十"],
        explanation: "這是筆記直接列出的台大作法。"
      }
    ]
  },
  {
    id: "donor-conditioning",
    group: "幹細胞移植",
    title: "Donor 優先順序 / Conditioning 種類",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "HLA matched sibling", clue: "Donor 第一選擇；近年少子化所以越來越少" },
        { answer: "Matched unrelated donor (MUD)", clue: "台灣找慈濟；配對機率約 75%" },
        { answer: "Haploidentical donor", clue: "父母/兄弟半合；台大現在做最多" },
        { answer: "Cord blood", clue: "現已少用；有體重限制 < 20 kg" },
        { answer: "Myeloablative (MAC)", clue: "骨髓清空，不輸幹細胞會死；適合小孩/青壯年/白血病" },
        { answer: "Nonmyeloablative", clue: "Minimal cytopenia，可自行恢復；適合再生不良性貧血" },
        { answer: "Reduced intensity", clue: "介於兩者之間；適合年紀大病人" }
      ]
    },
    fill: [
      {
        prompt: "TBI 副作用包括長不高與 secondary malignancy，後者通常在 ______ 年內發生。",
        answers: ["7"],
        explanation: "TBI 的 secondary malignancy 風險期。"
      }
    ]
  },
  {
    id: "transplant-complications",
    group: "幹細胞移植",
    title: "Complications 以 100 天為界（07 考點）",
    matching: {
      clueLabel: "提示 / 時間點",
      answerLabel: "答案",
      rows: [
        { answer: "Acute GVHD", clue: "Early complication；典型器官是皮膚、肝、GI" },
        { answer: "Chronic GVHD", clue: "Late complication；嘴眼乾、肺 fibrosis" },
        { answer: "CMV", clue: "Early infection 裡很重要的病毒" },
        { answer: "Varicella-Zoster", clue: "Late infection 需要注意的病毒" },
        { answer: "Secondary malignancies", clue: "100 天後的晚期併發症之一" }
      ]
    }
  },
  {
    id: "acute-gvhd",
    group: "幹細胞移植",
    title: "Acute GVHD 分期（Seattle system）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "皮膚（rash）", clue: "Acute GVHD 分期三指標之一" },
        { answer: "肝（bilirubin）", clue: "Acute GVHD 分期三指標之一" },
        { answer: "腸胃（diarrhea）", clue: "Acute GVHD 分期三指標之一" },
        { answer: "Methotrexate + Cyclosporin A", clue: "抗排斥一線藥組合" },
        { answer: "JAK inhibitors", clue: "Acute GVHD 最新治療藥物" }
      ]
    }
  },
  {
    id: "infection-phases",
    group: "幹細胞移植",
    title: "感染三期（08, 09 考點）",
    matching: {
      clueLabel: "病原 / 線索",
      answerLabel: "答案",
      rows: [
        { answer: "Phase I Pre-engraftment", clue: "最早期，細菌與黴菌為主，如 Pseudomonas、Klebsiella、Candida" },
        { answer: "Phase II Post-engraftment", clue: "免疫重建中，CMV 與 EBV 最重要" },
        { answer: "Phase III Late phase", clue: "晚期，VZV、encapsulated bacteria、Pneumocystis" }
      ]
    },
    fill: [
      {
        prompt: "CMV viral load 上升到 5000 或 baseline 的 ______ 倍就要介入。",
        answers: ["兩", "2", "二"],
        explanation: "總整理是寫 baseline 兩倍。"
      }
    ]
  },
  {
    id: "ptld",
    group: "幹細胞移植",
    title: "PTLD（移植後淋巴增生疾病）（08, 09 考點）",
    matching: {
      clueLabel: "提示",
      answerLabel: "答案",
      rows: [
        { answer: "EBV", clue: "PTLD 最密切相關的病毒" },
        { answer: "ATG / T-cell depletion", clue: "讓 T cell 下降，增加 PTLD 風險的重要因子" },
        { answer: "Rituximab", clue: "CD20(+) 時常用的治療" },
        { answer: "Haploidentical transplantation", clue: "台大現在做很多，PTLD 需特別注意的 donor 類型" }
      ]
    },
    fill: [
      {
        prompt: "PTLD 的監測是每週做 EBV viral load 的 ______。",
        answers: ["QPCR", "qPCR"],
        explanation: "總整理直接寫每週 QPCR 追蹤。"
      }
    ]
  },
  {
    id: "sos-vod",
    group: "幹細胞移植",
    title: "SOS / VOD（Sinusoidal Obstructive Syndrome）（08, 09 考點）",
    fill: [
      {
        prompt: "SOS / VOD 的診斷強調發生在 day ______ post-HCT 之前。",
        answers: ["21"],
        explanation: "before day 21 是定義的一部分。"
      },
      {
        prompt: "Bilirubin > 2 mg/dL 之外，還要在 3 項中符合 2 項：hepatomegaly / RUQ pain、ascites、以及體重增加超過 ______%。",
        answers: ["5"],
        explanation: "診斷標準寫的是 weight gain > 5%。"
      },
      {
        prompt: "SOS / VOD 的神藥、自費但效果很顯著的藥物是 ______。",
        answers: ["defibrotide"],
        explanation: "總整理直接稱它為神藥。"
      }
    ]
  },
  {
    id: "car-t",
    group: "幹細胞移植",
    title: "CAR-T 細胞療法（08 考點）",
    matching: {
      clueLabel: "副作用 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Cytokine storm (CRS)", clue: "最常見副作用，常在 day 6–7 發生" },
        { answer: "Tocilizumab", clue: "CRS 的第一線治療（anti-IL-6）" },
        { answer: "ICANS", clue: "神經毒性，攻擊 CNS，可快速致死" },
        { answer: "Steroid", clue: "ICANS 的主要治療" },
        { answer: "B cell aplasia", clue: "因 anti-CD19 也會殺正常 B cell" }
      ]
    },
    fill: [
      {
        prompt: "CAR-T 最早主要用在 ______ cell ALL。",
        answers: ["B", "B cell", "B-cell"],
        explanation: "最早就是用在 B cell ALL。"
      },
      {
        prompt: "CAR-T relapse 最常出現在大約 ______ 個月。",
        answers: ["6", "六"],
        explanation: "總整理特別提到 6 個月時最常復發。"
      }
    ]
  },

  // ─────────────── 輸血醫學（一） ───────────────
  {
    id: "blood-type-system",
    group: "輸血醫學",
    title: "血型系統分類（重要！）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Protein blood group（Model 1）", clue: "基因→蛋白；代表：Rh、Kidd、Duffy；需輸血/懷孕才致敏，無自然抗體" },
        { answer: "Carbohydrate blood group（Model 2）", clue: "基因→轉接酶→修飾醣鏈；代表：ABO；出生後 6 個月自然形成抗體" },
        { answer: "SNP（antithetical antigen）", clue: "Protein blood group 最常見機制；如 Kidd 的 Jka / Jkb，非A即B" },
        { answer: "RhD 陰性", clue: "Stop codon / deletion 造成的 Null phenotype" }
      ]
    }
  },
  {
    id: "abo-mechanism",
    group: "輸血醫學",
    title: "ABO 血型分子機制（必考）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "H antigen", clue: "H transferase 接 fucose 到前驅物上的產物；= O 型抗原" },
        { answer: "A antigen", clue: "A transferase 再接 galactosamine 到 H antigen 上" },
        { answer: "B antigen", clue: "B transferase 再接 galactose 到 H antigen 上" },
        { answer: "孟買血型（Bombay）", clue: "H gene mutation → 無 H/A/B antigen；只能接受孟買血型輸血" },
        { answer: "亞孟買血型（para-Bombay）", clue: "同上但有 Se allele → 分泌物有 H antigen；台灣多見（1/8000）" }
      ]
    }
  },
  {
    id: "rbc-antibody-types",
    group: "輸血醫學",
    title: "紅血球抗體種類（重要！）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Anti-A、Anti-B（自然）", clue: "出生後 6 個月自然形成；IgM 為主；補體活化能力最強" },
        { answer: "不規則抗體（Anti-D 等）", clue: "需輸血或懷孕才致敏；monomer IgG；造成遲延性溶血 / 新生兒溶血" },
        { answer: "自體抗體（pan-reactive）", clue: "自體免疫疾病；IgG 或 IgM；WAIHA / 冷凝集素症" }
      ]
    },
    fill: [
      {
        prompt: "補體活化能力：IgM 最強；IgG 中，______ 和 ______ 較強（另兩個 IgG2、IgG4 很弱）。",
        answers: ["IgG1", "IgG3"],
        explanation: "IgM > IgG1、IgG3 ≫ IgG2、IgG4。"
      }
    ]
  },
  {
    id: "hemolysis-mechanism",
    group: "輸血醫學",
    title: "溶血機轉",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "Intravascular hemolysis", clue: "補體完全活化（C1→C9）→ MAC 穿孔；發生在血管內" },
        { answer: "Extravascular（IgG only）", clue: "僅 IgG 附著，無補體；在脾臟被 Fcγ receptor 吞噬" },
        { answer: "Extravascular（部分補體）", clue: "活化至 C3b/C3d 後停；在肝臟被 complement receptor 吞噬" }
      ]
    }
  },
  {
    id: "neonatal-rh",
    group: "輸血醫學",
    title: "新生兒 Rh 溶血症 / 自體溶血比較（09 考古）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "第二胎起", clue: "Rh(-) 母親通常在這之後才有 maternal IgG 攻擊胎兒 RBC" },
        { answer: "Anti-RhD Ig（Rh prophylaxis）", clue: "第一胎時施打，讓母體不致敏的預防措施" },
        { answer: "WAIHA（溫性）", clue: "抗體 IgG；最強反應溫度 37°C；DAT 陽性 IgG 或 IgG+C3d" },
        { answer: "CAD（冷凝集素症）", clue: "抗體 IgM；最強反應溫度 4°C；DAT 陽性 C3d only；冷環境誘發末端發紺" }
      ]
    },
    fill: [
      {
        prompt: "CAD 的 DAT 結果是 C3d only（沒有 IgM），原因是 IgM 到核心溫度後會 ______，但活化的補體殘留。",
        answers: ["脫落", "解離", "dissociate"],
        explanation: "IgM 在核心溫度脫落，但 C3d 留在 RBC 上。"
      },
      {
        prompt: "台灣 Rh(-) 比例約 ______%（西方約 15%）。",
        answers: ["0.1~0.3", "0.1-0.3", "0.1到0.3"],
        explanation: "台灣 Rh(-) 比例極低，老師多次強調。"
      }
    ]
  },
  {
    id: "pretransfusion-coombs",
    group: "輸血醫學",
    title: "輸血前三大檢查 / Coombs Test（必考）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "ABO 血型（正＋反向）", clue: "預防 ABO 不相容急性溶血；3 分鐘" },
        { answer: "不規則抗體篩檢", clue: "預防 ABO 以外遲延性溶血；20~30 分鐘；方法：Indirect Coombs test" },
        { answer: "交叉試驗（大交叉）", clue: "Recipient serum + Donor RBC；最終安全確認；3 分鐘" },
        { answer: "Direct Coombs test（DAT）", clue: "In vivo sensitization；用於輸血反應調查、AIHA 診斷；檢體是 RBC" },
        { answer: "Indirect Coombs test（IAT）", clue: "In vitro sensitization；用於不規則抗體篩檢、孕婦篩查；檢體是血清" }
      ]
    },
    fill: [
      {
        prompt: "不規則抗體篩檢的篩選細胞通常選自 ______ 型捐血者（共 3 名）。",
        answers: ["O", "O型"],
        explanation: "選 O 型是為了排除 ABO 抗體干擾。"
      },
      {
        prompt: "IgG（15 nm）無法直接凝集 RBC 是因為 RBC 間距達 24 nm（sialic acid 負電排斥），需加 ______ 橋接。",
        answers: ["anti-IgG", "Coombs reagent"],
        explanation: "這是 indirect Coombs test 的作用原理。"
      }
    ]
  },
  {
    id: "emergency-transfusion",
    group: "輸血醫學",
    title: "緊急輸血 / 考古快答（一）",
    matching: {
      clueLabel: "情況 / 題型",
      answerLabel: "答案",
      rows: [
        { answer: "O 型 Packed RBC", clue: "無病人血型時緊急輸血的選擇（歐美首選 O(-)，台灣 Rh(-) 少，O(+) 亦可）" },
        { answer: "Anti-B only", clue: "A 型 Rh(-) 未曾輸血男性血清測得的抗體（B06/B07/B08 每年必考）" },
        { answer: "不規則抗體篩檢", clue: "Anti-E 等不規則抗體在哪項輸血前檢查檢出" },
        { answer: "Direct Coombs test（DAT）", clue: "疑 AIHA 時，檢查 RBC 上是否有抗體附著（in vivo）" },
        { answer: "TACO（循環過載）", clue: "美國 2010–16 年輸血相關死亡 No.1（08/09 考古）" }
      ]
    }
  },

  // ─────────────── 輸血醫學（二） ───────────────
  {
    id: "blood-products-storage",
    group: "輸血醫學",
    title: "血品種類與保存（09 考古重點）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "血品",
      rows: [
        { answer: "Packed RBC", clue: "1–6°C；35–42 天；2 單位（台灣）= 1 單位（歐美）" },
        { answer: "Washed RBC", clue: "1–6°C；24 小時內輸注；適用 IgA 缺乏、嚴重輸血過敏" },
        { answer: "Platelet concentrate / Apheresis", clue: "22–24°C 室溫持續搖盪；5 天；不可冷藏" },
        { answer: "FFP（新鮮冷凍血漿）", clue: "-18°C；1 年；8 小時內冷凍；含所有凝血因子" },
        { answer: "Frozen plasma（非 fresh）", clue: "-18°C；採血 8 小時以上才冷凍；Factor V 和 VIII 明顯減少" },
        { answer: "Cryoprecipitate（冷凍沉澱品）", clue: "FFP 於 4°C 解凍的沉澱；5–8 mL；含 Factor VIII、XIII、vWF、fibrinogen" }
      ]
    },
    fill: [
      {
        prompt: "Cryoprecipitate 目前臨床主要用途是補充 ______（用於 DIC 患者）。",
        answers: ["fibrinogen", "纖維蛋白原"],
        explanation: "雖含 Factor VIII，但現在 Factor VIII 有藥可補，所以主要用途是 fibrinogen。"
      },
      {
        prompt: "血小板無論濃厚液或 apheresis，都需在 22–24°C 室溫 ______ 保存，最多 5 天。",
        answers: ["持續搖盪", "搖盪"],
        explanation: "血小板不能冷藏，須持續搖盪。"
      }
    ]
  },
  {
    id: "transfusion-threshold",
    group: "輸血醫學",
    title: "輸血閾值（Transfusion Threshold）",
    matching: {
      clueLabel: "血品 / 線索",
      answerLabel: "答案",
      rows: [
        { answer: "Hb < 7 g/dL（Strong）", clue: "穩定病患的 RBC 輸血閾值；實證醫學支持 Restrictive strategy" },
        { answer: "< 10,000 /μL（Strong）", clue: "化療病患血小板預防性輸注閾值" },
        { answer: "< 50,000 /μL", clue: "已出血或手術前的血小板輸注閾值" },
        { answer: "PT / PTT > 1.5× 正常值（Weak）", clue: "FFP 輸注的 lab 觸發條件" }
      ]
    },
    fill: [
      {
        prompt: "實證醫學（1999 NEJM）支持的 RBC 輸血策略是 ______ strategy（Hb < 7 g/dL 才輸）。",
        answers: ["Restrictive", "restrictive"],
        explanation: "Restrictive strategy 效果不亞於 liberal，甚至可能更好。"
      }
    ]
  },
  {
    id: "transfusion-reaction-classification",
    group: "輸血醫學",
    title: "輸血反應分類（頻率）（考古重點）",
    matching: {
      clueLabel: "輸血反應 / 線索",
      answerLabel: "頻率分類",
      rows: [
        { answer: "常見（≈ 1/100）", clue: "輸血過敏（蕁麻疹）、FNHTR（發燒）、TACO" },
        { answer: "偶見（≈ 1/數千）", clue: "休克性過敏（anaphylaxis）、TRALI" },
        { answer: "少見（< 1/10,000）", clue: "輸血相關敗血症、急性溶血、TA-GVHD、非免疫性溶血" }
      ]
    },
    fill: [
      {
        prompt: "輸血反應中，可危及生命的四大類為：循環過載、急性肺傷害、急性溶血輸血反應、輸血相關 ______。",
        answers: ["移植物反宿主反應", "TA-GVHD", "GVHD"],
        explanation: "記四個可危及生命的 reactions。"
      }
    ]
  },
  {
    id: "acute-delayed-hemolysis",
    group: "輸血醫學",
    title: "急性 / 延遲性溶血反應",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "ABO 不相容", clue: "急性溶血最常見原因；IgM 活化補體 → MAC → 血管內溶血" },
        { answer: "Hemoglobinemia / Hemoglobinuria", clue: "急性溶血的典型 lab 發現；血漿和尿液都呈紅色" },
        { answer: "Anti-D / Anti-E（IgG）", clue: "延遲性溶血的主要抗體；不完全活化補體（至 C3b/C3d）" },
        { answer: "脾臟 / 肝臟 macrophage", clue: "延遲性溶血（血管外溶血）的吞噬場所" },
        { answer: "Spherocyte 增加", clue: "延遲性溶血時血液抹片可見，因受損 RBC 膜不穩定" }
      ]
    },
    fill: [
      {
        prompt: "延遲性溶血反應通常在輸血後 ______ 天至 ______ 週發生，Hb 在第 5 天後才開始下降。",
        answers: ["2", "2天至1週"],
        explanation: "延遲性溶血時間軸。"
      },
      {
        prompt: "急性溶血反應的腎臟損傷可進展至 Acute ______ Necrosis → AKI。",
        answers: ["Tubular", "tubular"],
        explanation: "大量 hemoglobin 的腎毒性造成 ATN。"
      }
    ]
  },
  {
    id: "ta-gvhd",
    group: "輸血醫學",
    title: "TA-GVHD（輸血相關移植物反宿主反應）（考古）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "捐血者 T 淋巴球", clue: "TA-GVHD 的攻擊主角，在受血者體內存活並增殖" },
        { answer: "Pancytopenia", clue: "TA-GVHD 最常見致死原因（骨髓抑制）" },
        { answer: "Skin biopsy", clue: "TA-GVHD 診斷方法之一：lymphocyte infiltration" },
        { answer: "WBC chimerism（STR analysis）", clue: "TA-GVHD 診斷方法之一：出現 6 個 peaks（patient + donor DNA）" },
        { answer: "血品輻射照射（Irradiation）", clue: "TA-GVHD 預防方法；破壞淋巴球 DNA；適用近親輸血、幹細胞移植病人" }
      ]
    },
    fill: [
      {
        prompt: "TA-GVHD 症狀在輸血後約 ______ 天起才出現（皮膚紅疹、腹瀉、黃疸、Pancytopenia）。",
        answers: ["10"],
        explanation: "輸血當下沒症狀，10 天後才發作。"
      },
      {
        prompt: "TA-GVHD 最容易發生在捐血者為 HLA ______ 子（子集合在病患中）的情況。",
        answers: ["同合", "homozygous", "homozygote"],
        explanation: "捐血者 HLA 同合子 → 病患異合子且含那套 HLA → 單向相容 → GVHD。"
      }
    ]
  },
  {
    id: "trali",
    group: "輸血醫學",
    title: "TRALI（輸血相關急性肺傷害）Two-hit Model（08 考古）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "First hit（neutrophil priming）", clue: "病患本身 sepsis/手術/癌症 → neutrophil 在肺部微血管預激活" },
        { answer: "Second hit（anti-HLA / anti-HNA Ab）", clue: "捐血者血漿中的抗體活化 primed neutrophil → 非心因性肺水腫" },
        { answer: "男性捐血者血漿", clue: "TRALI 預防措施；multiparous women 易有 anti-HLA/HNA 抗體" },
        { answer: "Non-cardiogenic pulmonary edema", clue: "TRALI 的 X 光表現；左心功能正常（與 TACO 鑑別）" }
      ]
    },
    fill: [
      {
        prompt: "TRALI 臨床表現：Dyspnea、Fever、Hypoxia、低血壓、Leukopenia、胸部 X 光見 ______ pulmonary edema。",
        answers: ["non-cardiogenic", "non cardiogenic"],
        explanation: "Non-cardiogenic 是與 TACO（cardiogenic）的關鍵鑑別點。"
      }
    ]
  },
  {
    id: "taco",
    group: "輸血醫學",
    title: "TACO（輸血相關循環過載）（08 考古）",
    matching: {
      clueLabel: "線索 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "美國 2010–16 輸血相關死亡 No.1", clue: "TACO 的流行病學地位（08 考古固定考點）" },
        { answer: "Cardiogenic pulmonary edema", clue: "TACO 的機轉；與 TRALI（non-cardiogenic）相反" },
        { answer: "Pro-BNP ↑", clue: "TACO 的特徵性 lab 發現；左心功能異常" },
        { answer: "利尿劑", clue: "TACO 治療效果顯著；TRALI 效果不佳" },
        { answer: "1/100–1/1000", clue: "TACO 的發生率（高但常被忽略）" }
      ]
    },
    fill: [
      {
        prompt: "TACO 好發於老人、重症、CHF、多次化療者；預防上腎功能差者需減少輸血量或給 ______。",
        answers: ["利尿劑", "diuretics"],
        explanation: "但腎臟完全無功能者不能給利尿劑。"
      }
    ]
  },
  {
    id: "trali-vs-taco",
    group: "輸血醫學",
    title: "TRALI vs TACO 鑑別（重要！）",
    matching: {
      clueLabel: "特徵 / 提示",
      answerLabel: "答案",
      rows: [
        { answer: "TRALI", clue: "Non-cardiogenic；有發燒；血壓通常低；左心功能正常；偶見" },
        { answer: "TACO", clue: "Cardiogenic；無發燒；血壓通常高；Pro-BNP 明顯↑；常見（死亡 No.1）" },
        { answer: "TRALI", clue: "利尿劑效果不佳；機轉：anti-HLA/HNA 抗體活化 neutrophil" },
        { answer: "TACO", clue: "利尿劑效果顯著；機轉：心因性肺水腫（心衰竭）" }
      ]
    }
  },

  // ─────────────── 顯微鏡圖片 ───────────────
  {
    id: "lm-granulocytes",
    group: "顯微鏡圖片",
    title: "顆粒球",
    matching: {
      clueLabel: "顯微鏡圖片",
      answerLabel: "細胞名稱",
      rows: [
        { clue: "images/lm/Basophil micro.jpeg", answer: "Basophil", isImage: true },
        { clue: "images/lm/Eosinophil micro.jpeg", answer: "Eosinophil", isImage: true },
        { clue: "images/lm/Hyper-segmented neutrophil micro.jpeg", answer: "Hyper-segmented neutrophil", isImage: true },
        { clue: "images/lm/Blast+basophil micro.jpeg", answer: "Blast + Basophil", isImage: true },
        { clue: "images/lm/Basophil+eosinophil micro.jpeg", answer: "Basophil + Eosinophil", isImage: true },
        { clue: "images/lm/Faggot cell micro.jpeg", answer: "Faggot cell", isImage: true }
      ]
    }
  },
  {
    id: "lm-mono-lympho",
    group: "顯微鏡圖片",
    title: "單核球 & 淋巴球",
    matching: {
      clueLabel: "顯微鏡圖片",
      answerLabel: "細胞名稱",
      rows: [
        { clue: "images/lm/Monocyte micro.jpeg", answer: "Monocyte", isImage: true },
        { clue: "images/lm/Monocyte with phagosome micro.jpeg", answer: "Monocyte with phagosome", isImage: true },
        { clue: "images/lm/Monocyte+eosinophil micro.jpeg", answer: "Monocyte + Eosinophil", isImage: true },
        { clue: "images/lm/Large lymphocyte micro.jpeg", answer: "Large lymphocyte", isImage: true },
        { clue: "images/lm/Promyelocyte micro.jpeg", answer: "Promyelocyte", isImage: true }
      ]
    }
  },
  {
    id: "lm-rbc-others",
    group: "顯微鏡圖片",
    title: "紅血球異常 & 其他",
    matching: {
      clueLabel: "顯微鏡圖片",
      answerLabel: "細胞名稱",
      rows: [
        { clue: "images/lm/Fragmented RBC micro.jpeg", answer: "Fragmented RBC", isImage: true },
        { clue: "images/lm/Giant platelet micro.jpeg", answer: "Giant platelet", isImage: true },
        { clue: "images/lm/Howell jolly body micro.jpeg", answer: "Howell-Jolly body", isImage: true },
        { clue: "images/lm/Malaria micro.jpeg", answer: "Malaria", isImage: true },
        { clue: "images/lm/Rouleaux formation micro.jpeg", answer: "Rouleaux formation", isImage: true },
        { clue: "images/lm/Target cell micro.jpeg", answer: "Target cell", isImage: true }
      ]
    }
  },
  {
    id: "lm-all",
    group: "顯微鏡圖片",
    title: "★ 全部混合",
    combineGroupImages: true,
    matching: { clueLabel: "顯微鏡圖片", answerLabel: "細胞名稱", rows: [] }
  }
];
