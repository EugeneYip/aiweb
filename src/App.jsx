import React, { useMemo, useState } from "react";

const theme = {
  bg: "#FCFAF2",
  card: "#F7F3E8",
  ink: "#1E2732",
  subInk: "#485665",
  teal: "#2E5C6E",
  plum: "#622954",
  gold: "#B28C4A",
  olive: "#748067",
  line: "#D9D0BE",
  soft: "#EFE7D7",
  danger: "#8A3B2F",
  ok: "#3E6B52",
};

const SOURCE_MARKDOWN = `# STRT 6200 Final Exam
### Professor Michael J. Enright｜Strategic Decision-Making

---

## 第 0 部｜Enright 實際打分的六個動作

教授在 Last Day Slide 23 明示評分 rubric 只有四句：*"Read the questions. Use the right tools for the job. Don't include extraneous material. Use your time wisely."* 翻譯成 exam mechanics：

| 動作 | 檢驗標準 |
|---|---|
| 1. 迅速辨認 case 在哪幾個 levels 上 binding | 不寫全五層，只寫 binding 者 |
| 2. 調出對的 analytical tool | 不是背哪個 tool 存在，而是選對 |
| 3. 拿 case 具體 evidence 推出 conclusion | 引用 reading 原文，不是記憶預載 |
| 4. 標註 confidence level | BARD 或 POE 語氣校準 |
| 5. 把 conclusion 連到 actionable strategy | "What should they do?" |
| 6. 預期 implementation 會撞上人性障礙 | "How will this actually work?" |

所有答題動作都要能對應至少一件。

---

## 第 1 部｜Enright 分析脊椎

### 1.1 完整分析鏈 (Last Day Slide 15, Tier 1)

Search → Sort → Analyze → Hypothesize → Test → Conclude (BARD or POE) → Formulate Strategy → Implement

### 1.2 BARD vs POE 語氣校準 (Last Day 提及，法律式解讀為合理推論)

| 語氣標籤 | 使用時機 | 句型範例 |
|---|---|---|
| **BARD 語氣** (beyond reasonable doubt) | 強 evidence，幾無合理替代解釋 | "The evidence clearly indicates..."、"Given [specific facts], the conclusion is..." |
| **POE 語氣** (preponderance of evidence) | 證據相對傾向但有限 | "On balance, the reading suggests..."、"The more likely outcome is..." |

**紀律:**
- 每題至少一個明確 conclusion
- 拒絕下結論 = 零分
- 強 evidence 卻用 hedging = 也會被扣
- 無 evidence 卻用 BARD = 過度自信扣分
- 教授要 calibrated confidence
- **不在答案中展開 BARD/POE 法律定義** (ChatGPT 與我方共識) — 只作為 confidence marker 使用

### 1.3 三層 Zoom 分析法 (Last Day Slide 13, Tier 1)

| 距離 | 焦點 |
|---|---|
| **6 inches away** | 細節組織進 framework (數字、quotes、事件) |
| **3 meters away** | 每塊分析的 major conclusion (puzzle pieces) |
| **10 meters away** | 整個 puzzle：How is value created? How are competitors exceeded? How do we get paid? |

### 1.4 The 4 Commandments (Last Day Slide 16, 大寫強調, Tier 1)

1. **UNDERSTAND THE INDUSTRY AND WHAT IT DOES!!!**
2. **DRAW THE PICTURES!!**
3. **TURN ONE COMPLICATED THING INTO MANY SIMPLE THINGS!!**
4. **Build the puzzle, then solve the puzzle**

Execution mantra: *"Show up, ask the right questions, don't stop until they are answered, put the pieces together, remember people are people."*

### 1.5 Strategy Philosophy (Last Day Slide 3, Tier 1)

Doing strategy well is often：
- ¼ Showing up
- ¼ Knowing what questions to ask
- ¼ Not stopping until the questions are completely answered
- ¼ Knowing how to make strategy work in the organization

三個 ¼ 不關於「知道甚麼」，而是「如何動起來」。

---

## 第 2 部｜Underlying Economics

### 2.1 七維度掃描 (Last Day Slide 18, Tier 1)

| 維度 | 核心問題 | 結構含意 |
|---|---|---|
| **Scale Economies** | Output 增加時 average cost 下降？ | 大 scale → few players → oligopoly / monopoly |
| **Scope Economies** | 做多個 related business 降 total cost？ | 整合型公司優勢 → 多角化合理 |
| **Learning Economies** | 累積生產量增加時成本下降？ | 先進者持久 cost advantage → entry deterrence |
| **Network Economies** | User base 增加時 value 提升？ | Winner-take-all、self-reinforcing |
| **Nexus Economies** | Must-pass 關鍵節點？ | 控制者準壟斷、被迫穿過者 commodity |
| **Standards** | Technical / interface standards 誰控制？ | 標準持有者 quasi-monopolist |
| **Fixed vs Sunk vs Variable Cost** | 三種成本各占多少？ | 決定 competitive 行為與 exit barriers |

### 2.2 Fixed / Sunk / Variable 三種成本 (Tier 1)

| 成本類型 | 定義 | 決策含意 |
|---|---|---|
| **Variable Cost** | 隨 output 變動 | Price > VC 時值得多賣 |
| **Fixed Cost** | 短期固定，長期可避免 | 影響 scale economies 與 break-even |
| **Sunk Cost** | 已投入且**無法回收** | 不影響未來決策，但造成 **exit barrier** |

**三種結構含意:**
- High fixed + low variable → 削價誘因 → fierce price competition (HK mobile telecom, Ch.4 example)
- High sunk → 退不出去 → subsidized / hypercompetition (airlines)
- Low fixed + high variable → perfect competition tendency (餐飲、零售小店)

### 2.3 Industry Economics 六問 (Tier 1)

分析任何 business-facing case 前先問：

1. 這個 industry 實際在做甚麼 (form + function + direct competition)？
2. Cost structure — capital / labor / knowledge / marketing intensive？Fixed / sunk / variable 比例？
3. Scale / scope / learning 在哪裡成立？
4. Network / nexus / standards / installed-base effects 是否存在？
5. 這套 economics 推向哪一種 competition type？
6. Value 在哪裡被 capture，由誰 capture？

### 2.4 核心因果鏈 (Tier 1)

\`\`\`
Underlying economics 
  → Industry structure (concentration, barriers)
    → Type of competition (5 types)
      → Competitive variables (price vs non-price)
        → Ferocity of competition (9 drivers)
          → Industry profit potential
            → Firm performance (modified by SPARK + bargaining)
\`\`\`

### 2.5 Profitability Ranking 教學意義 (Implementation lecture, Tier 1 ranking; Tier 2 詳細機制)

教授 ranking：**1 Water meters → 2 Pharmaceuticals → 3 Automobiles → 4 Semiconductors → 5 PCs → 6 Airlines**

**水表最高 (Tier 2 機制):** Buyer configuration split (specification ≠ procurement ≠ payment)；成本占建築總成本 trivial；municipality 偏好 reliable 版本避免 under-measurement；結果 high WTP + low price sensitivity + concentrated supply。

**航空最低 (Tier 1 ranking):** Low differentiation → perfect competition tendency；high fixed + high sunk (飛機) → exit barriers；customers price sensitive；commodity + 無法退出 → 長期 breakeven。

**教學核心:** 利潤不來自 glamour 或 technological sophistication，來自**結構**。

### 2.6 高分作答模板

> "The industry's profit potential is driven by [specific underlying economics]. Because [scale / fixed cost / network / etc.], the industry structure tends toward [type of competition]. Competition is primarily on [price or non-price variable], making ferocity [high/moderate/low]. This translates to [high/low] industry profitability. However, specific firms' actual profits depend on their ability to [SPARK advantages / cluster positioning] relative to competitors."

---

## 第 3 部｜Industry Level 深入

### 3.1 Industry Definition (Ch.4 verbatim, Tier 1)

> *"An industry consists of products or services that have similar form and function that are in direct competition with each other, and the firms that supply them."*

- 三要素：Form、Function、Direct competition
- **策略性定義**，非 SIC / NAICS 統計分類
- 邊界隨時間 merge 或 fragment
- 是 profit analysis 的地基

### 3.2 Five Types of Competition (Lecture Notes Ch.4 slide 13, Tier 1)

從最差到最好 profitability：

Subsidized Competition ← Perfect Competition ← Hypercompetition ← Oligopoly → Monopoly

| 類型 | 核心特徵 |
|---|---|
| **Monopoly** | 單一 firm，無競爭，regulation 未限制時最賺 |
| **Oligopoly** | 少數 firms，recognition of interdependence |
| **Hypercompetition** (D'Aveni) | 多 firms + 來自 related industries 的潛在新進者，差異化只能短期 |
| **Perfect Competition** | 多 firms 無差異化，只 price 競爭 |
| **Subsidized Competition** | 虧損 firms 被維持存活 |

### 3.3 Table 4.3 重組為診斷工具 (Tier 1)

| 若該條件強 → | 產業趨向 | 利潤含意 |
|---|---|---|
| Barriers to entry 高 | Monopoly / tight oligopoly | 高 |
| 產品 differentiation 大 | Oligopoly (distinguishable) | 中到高 |
| 品牌存在 | Oligopoly (sustained advantage) | 高 |
| Scale / learning / scope 經濟大 | Oligopoly / monopoly | 高 |
| 與 customers / channels / suppliers preferential | Oligopoly (sustained) | 高 |
| Information asymmetry 大 | Oligopoly (sustained) | 高 |
| 運輸成本高 | 地理性 oligopoly / 地方 monopoly | 高 |
| Collusion 可能 | Oligopoly → cartel-like | 高 |
| Exit barriers 高 + 需求萎縮 | Subsidized / 持續 ferocious | 極低 |

### 3.4 Competition 三維分析 (Tier 1)

**維度 1：Type** (上述五類)

**維度 2：Competitive Variables** (Last Day Slide 18)
- Price
- Quality / Performance
- Brand
- Service
- Speed / Time-to-market
- Access (distribution, channels)
- Ecosystem / Platform

**關鍵洞察:** 同屬 oligopoly，在哪個 variable 競爭決定 profit。HK property (location + features) 高獲利 vs. HK mobile telecom (price due to overcapacity) 低獲利。

**維度 3：Ferocity 九個驅動因素** (Lecture Notes Ch.4 slide 21, Tier 1)

1. Industry concentration 低
2. Collusion 可能性低
3. Industry growth 低或負
4. Product homogeneity 高
5. Differentiation 低
6. Capacity utilization 低
7. Corporate stakes 高
8. Exit barriers 高
9. Entry barriers 低

這九個不是背誦 list，是診斷工具 — 拿到 case 問自己：哪幾格勾起來？

### 3.5 Industry Level Drivers 完整 Template (Tier 1)

1. **Industry Characteristics** — Relevant segments, activities, resources, knowledge; technologies and processes; geographic scope
2. **Competition** — Ferocity, nature, identity, strategies, capabilities of competitors
3. **Cooperation** — Scope for cooperation; alliances; joint development; lobbying
4. **Strategic Groupings** — Groups of firms with similar strategies; intra-group vs. between-group
5. **Lead Firms** — 六類型 (見 3.6)
6. **Micro Policies & Institutions**

### 3.6 Lead Firm 六類型 (Ch.4 原文, Tier 1)

| 類型 | 行為 | Enright 案例 |
|---|---|---|
| **Standard Setter** | 設定產業標準 | IBM System 360、IBM PC |
| **Statesman** | 產業長者 | HSBC (HK banking) |
| **Enforcer** | 執行規則 | Saudi Aramco (OPEC) |
| **Predator** | 積極削弱對手 | Microsoft (browser wars) |
| **Frame-breaker** | 重新定義產業 | Dell、Southwest Airlines |
| **Outlier** | 自成一格 | Ben & Jerry's、Body Shop |

**高分洞察:** Nokia 早期是 standard setter (Nordic → Europe → World)；Apple 進入後變成 frame-breaker 重新定義 "standard" 為 software platform，Nokia 的 standard 優勢瞬間失效 — 這是 Nokia 衰退的 industry-level 深層解釋。

### 3.7 Competitor Envelope Analysis™ (Ch.4 Table 4.5, Lecture Notes Ch.4 Slide 27, Tier 1)

Enright 註冊商標工具。不是分析當前 competitors，是分析他們變 smart 後多難纏。

**七個核心問題:**
1. What if competitors were to optimize their activities?
2. What if competitors were to fully leverage their resources and knowledge?
3. What if competitors overcame strategic shortcomings?
4. What if competitors add to their resources or knowledge?
5. What if competitors were taken over by savvy, deep-pocketed firms?
6. What would we do if we managed the competitors?
7. How tough might competitors be in the future if they are smart?

**兩個額外動作 (Ch.4 verbatim):**
- 識別 **related industries 的潛在新進者** (Sega / Sony / Nintendo 沒料到 Microsoft X-box)
- 識別 **unmet demand segments** (Dell、IKEA、Southwest Airlines 都是抓到 unmet need 而贏)

**考試高分位置:** 任何題目問 "future competitive position" 或 "sustainability of advantage"，都應優先 deploy CEA。

### 3.8 Coopetition (Ch.4 verbatim, Tier 1)

Ray Noorda (Novell 創辦人) coined；Brandenburger + Nalebuff 的書發揚。**同一組 players 可能在 activity A 合作，activity B 競爭。**

案例 (Ch.4 原文):
- Pratt & Whitney / Rolls-Royce：low thrust 合作、medium/high thrust 對抗
- Pratt + Rolls 聯盟 vs. GE + SAFRAN 聯盟
- Rolls / SAFRAN 在 Concorde 合作
- Pratt / GE 在軍用機競爭、在 NASA 合作

**考試應用:** 看到 "both competitor and partner" 情境 (RTZ + Chinalco)，要能**在 activity level 拆解**，不只 firm level 判斷。

---

## 第 4 部｜Firm Level 完整框架

### [補丁 1] 4.0 Performance 是 Relative Concept (Ch.2, Tier 1)

**任何 performance 聲稱都必須指明比較對象。Performance 永遠是相對概念，比較對象有四類：**

1. **Competitors** — 產業內對手
2. **Benchmarks** — 同類型企業或國際最佳實踐
3. **History** — 公司自己過去的表現
4. **Expectations** — 投資人、分析師、目標預期

考場上若題目問 "firm performs well/poorly"，答題**第一句必須指明**：relative to competitors? benchmarks? own history? expectations? 答「不好」而沒指明 comparator = 失分。

### 4.1 SPARK (Ch.3 Figure 3.6, Tier 1)

**Strategy = Scope + Positioning + Activities + Resources + Knowledge**

| 元素 | 回答甚麼問題 |
|---|---|
| **Scope** | Where we compete |
| **Positioning** | How we compete (marketplace + cost + vs competitors) |
| **Activities** | What we do |
| **Resources** | What we use |
| **Knowledge** | What we know |

### 4.2 Scope 三層次與六類型 (Ch.3, Tier 1)

**三層次:**
1. Corporate or industry scope (幾個產業)
2. Competitive or within-industry scope (產業內哪些 segments)
3. Geographic scope (哪些地理市場)

**六類型 (Figure 3.1):**
- Local Specialist (Southwest Airlines)
- Local Diversifier (CITIC)
- Global Specialist (McDonalds, Lafarge)
- Global Diversifier (GE, Mitsui, Siemens)
- Within industry: Local/Global Broadline vs. Local/Global Focus

**Within-Industry Scope 經典對比 (Ch.3, Tier 1):**
- Swatch Group: Flik Flak (US$30) → Breguet (US$250,000) — broadline
- Rolex: high/luxury/prestige only — focus
- Breitling: high segment only — focus
- Seiko (Japan): "mostly present in medium priced segments, though has been pushing upmarket in recent years" — positioning 遷移動態

### 4.3 Firm Level 完整六類 Drivers (Ch.3 + Last Day Slide 19, Tier 1)

不能只停在 SPARK：

1. **SPARK** (上述 5 元素)
2. **Leadership** — Strategic direction, motivation, external face, setting standards/ethics, mentorship
3. **Execution** — Knowing what to do, overcoming inertia, getting things done
4. **Organization & Management** — Division of labor, structures, systems, HR, capabilities
5. **Governance** — Governance standards, compliance costs, impact on decision-making
6. **Firm-Specific Policies & Institutions** — Government support, subsidies, firm-specific training bodies

### 4.4 三個 Dysfunction Formulas (Ch.1 verbatim, Tier 1)

Ch.1 原文:
> *"Analysis and leadership without action yields paralysis. Action and leadership without analysis is random or misdirected. Analysis and action without leadership often becomes scattered and confused."*

| 缺少的支柱 | 結果 |
|---|---|
| Analysis + Leadership − **Action** | **Paralysis** |
| Action + Leadership − **Analysis** | **Random / Misdirected** |
| Analysis + Action − **Leadership** | **Scattered and Confused** |

### 4.5 Leadership 的雙面刃 (Ch.3, Tier 1)

正向案例：Bill Gates (Microsoft)、Sam Walton (Walmart)、Jack Welch (GE)、Eisner (Disney 重建)、Bezos (Amazon)、Jorma Ollila (Nokia 轉型)、Morita (Sony)、Kobayashi (NEC C&C vision)、Li Ka-shing、Rupert Murdoch、Narayana Murthy (Infosys)。

**警示案例 (Ch.3 verbatim):**
- Kenneth Lay / Jeffrey Skilling (Enron) — 創新但造假
- **Kobayashi 的 vision "left NEC vulnerable to competition from more focused competitors"**
- Elizabeth Holmes (Theranos) — 詐欺

**高分 NEC 答題框架 (非 Prahalad-Hamel):**
- 不用 "core competence" framing — Ch.2 明確警告此框架的局限
- 用 Enright 自己的 firm-level framework
- NEC 展示 Leadership 的**動態張力** — Kobayashi 的 vision 既建立優勢又埋下 vulnerability

### 4.6 VRIO 的 ARK 延伸 (Last Day Slide 19, Tier 1)

VRIO (Valuable, Rare, Inimitable, Organized) 不只套 Resources，**套在 Activities、Resources、Knowledge 三者**。

**Home Alone / Star Wars / 失敗片 的 VRIO 解釋 (Practice Q2, Tier 1):**
- **Home Alone 1→2→3 (100K → 13.7M → 破局):** 第 1 部 V 未 proven; 第 2 部 V + R + I 建立但被 Culkin agent appropriate; 第 3 部公司 "Not Organized to appropriate value" → 換角
- **Natalie Portman 3-picture deal:** 事先鎖定 resource，避免 success 後 bargaining power 飆升 (appropriability 管理)
- **John Carter / Lone Ranger 巨虧:** 有 V + R + I (Disney 品牌、Depp 星光) 但 **Organization** 判斷錯誤 → VRIO 不足，SPARK 整體性 + external conditions 仍需配合

### 4.7 Time Dimension of Strategy (Ch.3, Tier 1)

**[補丁 2] Exam priority 較低** — Time Dimension 與 Kongo Gumi 是 Tier 1 內容但非 final weighted focus (Last Day 明示 weighted toward international / corporate / implementation)；若答題空間有限，先讓位給 economics / CEA / implementation / international / corporate。

三種 approach：

| Approach | 描述 | 適用情境 |
|---|---|---|
| **Commitment strategy (Ghemawat)** | 大規模投入 resources/knowledge | 穩定產業、基建型 |
| **Hustle strategy (Bhide)** | 快速小幅投入，捕捉 short-term advantages | Fashion、tech 高速產業 |
| **Real options strategy** | 維持 flexibility，"stay in the game" | 高不確定性環境 |

**Duration 三層:**
- Duration of strategy (Ch.3 verbatim: **Kongo Gumi 578 AD 建立、1,430 years 由 Kongo family 管理**；Matsushita、Nikken、Medtronic、Patagonia、US-based Squeegee Squad 有 100-year plans)
- Duration of specific competitive advantages
- Duration of particular tactics

---

## 第 5 部｜Cluster / Meso Level

### 5.1 完整八組成 (Ch.5 + Lecture Notes Ch.5, Tier 1)

| 組成 | 內容 |
|---|---|
| **Demand** | Size, growth, segment structure, bundling, complementarities |
| **Customers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Inputs** | Factor, human, ecological, produced, outsourced, crowdsourced, technological, infrastructure |
| **Suppliers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Shared Resources / Shared Activities** | 共用 technologies, inputs, customers, knowledge; economies of scope |
| **Complementarities** | 互補產品/服務擴張需求與 WTP |
| **Substitutes** | 間接替代壓制利潤上限 |
| **Meso Policies & Institutions** | Cluster-specific policies, 產業群集機構 |

### 5.2 Bargaining Power 三軸分析 (Ch.5, Tier 1)

**Intrinsic Bargaining Strength:**
- Concentration
- Volume of purchases
- Availability of substitutes
- Switching costs
- Vertical integration threat
- Pull-through to end-user

**Price Sensitivity:**
- Cost as % of total purchases
- Strategy and positioning
- Buyer/supplier profitability
- Impact on quality/performance

**Willingness to Use Power (Enright 強調的第三軸):**
- 若供應商對 buyer 佔比小，可能不全力壓榨
- 若 buyer 本身 profitable，可能不用盡 bargaining power
- **實際 bargaining = Intrinsic Strength × Willingness × Price Sensitivity**

### 5.3 Regional Clusters (Ch.5, Tier 1)

案例：Silicon Valley、Hollywood、London / NY finance、Swiss luxury watches、Bangalore BPO、Hsinchu 半導體等。

**Cluster 來源:**
- Natural resources / Scale economies / Proximity to markets / Labor pooling / Local input-equipment suppliers / Shared infrastructure / Reduced transaction costs / Knowledge spillovers

**一旦 self-sustaining 就難以 dislodge。**

### 5.4 Ecosystem 警告 (Ch.5, Tier 1)

Enright 明確警告：externalization 不自動正確。一家 asset-light 公司通常建立在另一家承擔 asset-heavy burden。若不清楚 value 在哪被創造、appropriated、defended，容易把 value 送出去。

---

## 第 6 部｜National / Macro Level

### 6.1 四大組成 (Ch.6, Tier 1)

**1. Macroeconomic Conditions**
- Aggregate demand, inflation, interest rates, exchange rates, unemployment
- Fiscal balances, price levels, wage levels, capital markets, savings rates
- 三個維度：level / growth / volatility

**2. Macro Government Policies**
- Monetary, fiscal, trade, investment, industrial, promotion policies
- Infrastructure, manpower, education/training, S&T policies

**3. Macro Institutions**
- Legal, regulatory, property rights, contract enforcement, government quality

**4. Civil Society & Cultural Attributes**
- Agendas, attitudes, social acceptability, cultural patterns
- Social structure, social cohesion

### 6.2 關鍵細節：Income Distribution (Ch.6, Tier 1)

- 中國、印度人口 size 讓 upper class 絕對數量大 — luxury 仍有市場
- **Bottom of the Pyramid (Prahalad):** Coca-Cola 中國農村 US$0.12 仍獲利
- BOP strategy：simpler products, smaller quantities, informal channels
- **P&G in China** 是核心 national-level case

### 6.3 考試 framing

不是問「這是不是好 business」，而是問 **「這在這個國家、在這套政策、制度、人口結構、社會條件下，是不是好 business？」**

---

## 第 7 部｜Supranational / Meta Level

### 7.1 八大組成 (Ch.7, Tier 1)

1. **International Geo-politics** — Military conflict, territorial disputes, trade tensions
2. **International Economic Conditions** — Global crises (2008, Covid)
3. **Global Technology Trends** — New product/process/disruptive tech
4. **Social and Environmental Issues** — Climate, inequality, ethics
5. **Multilateral Organizations** — WTO, IMF, World Bank, UNIDO, UNCTAD
6. **Supranational Policies & Trade Blocs** — EU, USMCA, ASEAN
7. **Foreign Governments** — 他國政府影響
8. **Foreign Multinationals & Other Supranational Groups** — NGOs, religious groupings

### 7.2 Enright 的 "Inverted T" World View (Ch.1 verbatim, Tier 1)

World 不是 flat (反 Friedman)。
- 創造 ideas 的地點 (people, companies, locations) 絕不 flat
- 執行 projects 的資源 (HR, factories) 相對 flat
- 關鍵問題：誰是 flattener (有 ideas 的贏家) / 誰是 flattenee (只能競爭執行的輸家)

### 7.3 考試重要性

這一層對 international / corporate strategy 特別重要 — 不只影響 profit 大小，**直接改寫 competition structure 本身** (誰能進場、以甚麼條件進場)。這也是為何 final 會 weighted toward international 的核心理由。

---

## 第 8 部｜International Strategy (高比重)

### 8.1 八問 Exam Blueprint (Last Day Slide 20, Tier 1)

1. Number of countries
2. Which countries
3. How do five levels differ from home country? (Supranational, national, cluster, industry)
4. What SPARK to have in each country?
5. How to match SPARK to country conditions?
6. How to organize the international company? (Global integration vs Local responsiveness)
7. Similar or different types of countries?
8. Is the international company more than the sum of the parts?

### 8.2 Global / Local 三類切割 (Tier 2 — class reconstruction, reading 支持)

| 類別 | 應 Globalize | 應 Localize |
|---|---|---|
| **Financial / Compliance** | ✓ (envelope + standards) | 僅限 local legal expertise |
| **Market-facing** | 僅限 brand consistency | ✓ (account mgmt, BD, marketing, sales) |
| **Production** | 取決於 scale economies | 常在地化 (logistics, customization) |

**考場使用:** 不強調為「教授分類」，改為從 reading 推出 — *"The article itself implies a split..."*

### 8.3 WPP 案例應用

**錯誤:** WPP 把 financial controls + compliance 也 localize 給 subsidiary founders → 高風險市場 (印度、中國、巴西、秘魯) 發生 bribery 是必然。

**正確修正:**
- Compliance 必須 global envelope，即使犧牲 integration speed
- Multi-layer approval for cross-border payments
- Independent audit function reporting to HQ
- Whistleblower protection mechanisms
- Localize 只限 account management、creative、BD、local regulatory expertise

### 8.4 RTZ / Chinalco 案例複雜性

當一個國家同時是 **customer + shareholder + partner + regulator + geopolitical force** 時：
- 不能 one-size-fits-all 國際策略
- 需要 differential SPARK per country
- 特殊 governance arrangement (股東席位、board representation、JV structure per project)
- Simandou (Guinea): 引 Chinalco 換取 political protection
- Activity-level coopetition: iron ore 合作，其他市場可能競爭

---

## 第 9 部｜Corporate Strategy (高比重)

### 9.1 核心問題

**Is the company more than the sum of its parts?**

若不是 → 投資人可自己 diversify portfolio → multi-business firm 沒存在意義 → 應分拆。

### 9.2 八問 Exam Blueprint (Last Day Slide 21, Tier 1)

1. Number of industries
2. Which industries
3. How do five levels differ from existing businesses?
4. What SPARK to have in each business?
5. How to match SPARK to business conditions?
6. How to organize the multi-business company?
7. Value created across subsidiaries or between HQ and subsidiaries?
8. Related businesses, unrelated businesses?

### 9.3 Six Value Creation Mechanisms (Tier 1 — 合理推論但多來源支持)

| 機制 | 來源 | 考試檢驗 |
|---|---|---|
| **Scope economies** | 共用 activities (distribution, procurement, R&D) | 可量化 cost saving 嗎？ |
| **Shared resources** | 品牌、技術平台、渠道 | 跨 BU 被用幾次？ |
| **Knowledge transfer** | 同類 managerial problem 跨 BU 學習 | 人才輪調頻繁嗎？ |
| **Internal capital market** | HQ 配資比外部市場準 | 比 WACC benchmark 好嗎？ |
| **Managerial discipline** | HQ 施加 operational excellence | 收購後效率提升嗎？ |
| **Bargaining leverage** | 跨 BU 對同一供應商 / 客戶議價 | 能看到 price concession 嗎？ |

**如果以上都沒明顯 yes → corporate structure 在毀壞 shareholder value → 應分拆。**

### 9.4 Case 對照 (Tier 1)

| Case | Corporate Strategy 啟示 |
|---|---|
| **Walmart** (4 分部全 retail) | Focused — scope economies 在 retail 內足夠 |
| **Mitsubishi** (10 大類跨全球) | 日本 keiretsu 歷史結構，sum-of-parts 常被質疑 |
| **Acer / Wistron 2001 分家** | Corporate scope 內 BU 互相毀壞 (品牌 vs OEM) → 正確分拆 |
| **Disney (Iger)** | Pixar / Marvel / Lucasfilm / Fox 都屬 IP content creation → related diversification work |
| **Newell ("Newellization")** | HQ operational discipline 加值 — classic "HQ adds value" 模型 |
| **Swatch Group** | 單一產業內 multi-segment (Breguet → Flik Flak)：segment scope 而非 corporate scope |

---

## 第 10 部｜Implementation (高比重 — Formal Analytical Module)

### 10.1 五段診斷系統 (Implementation lecture + Last Day Slide 22, Tier 1)

**核心 mindset:** 不是背例子，是在新 case 裡 diagnose pathology。

| 段落 | 診斷問題 | 工具 | 何時用 |
|---|---|---|---|
| **Knowing-Not Knowing** | 組織看不見甚麼？ | Rigorous questioning, outsider view, "do the homework" | 用直覺、conventional wisdom、沒做功課 |
| **Knowing-Doing Gap** | 知道了為甚麼沒動？ | 視覺震撼、legal sanctions、structural incentives | "知道" 但 behavior 沒改 |
| **Generating Clarity** | 要求夠具體嗎？ | "Switch to skim milk" 具體化、audience-start、documented handoffs | Strategy 講很多人卻不動 |
| **Overcoming Resistance** | 抗拒來自哪裡？ | 承認情緒、why-first framing、small steps、commitment ladder | 理解了還是不做 |
| **Creating Right Environment** | 環境在獎勵甚麼？ | 70/30 改環境、pre-set red lines、purpose motivation | 行為持續偏離 |

### 10.2 Knowing-Not-Knowing 七個原因 (Implementation lecture deck verbatim, Tier 1)

1. Problems of framing
2. Incorrect perceptions
3. Issues with reasoning
4. Ignoring the obvious
5. Going along with the pack
6. Believing others have done the homework
7. Willful blindness

### 10.3 Resistance to Change (Implementation lecture deck, Tier 1)

**六個原因:**
Fear of the unknown | Loss of control | Habit | Emotional attachments | Cognitive dissonance | Social influences

**六個應對:**
Acknowledge feelings | Gather information | Take small steps | Seek support | Understand others | Bring people along

### 10.4 Winning Commitment Ladder 六階 (Implementation lecture deck, Tier 1)

I know → I understand → I am considering → I want to → I will → I commit

**管理陷阱:** 發 memo、開 meeting ≠ "I commit"。"I know" 離 "I commit" 有六層。

### 10.5 Kotter's 8 Accelerators (Implementation lecture deck, Tier 1)

1. Activation — Urgency + Commitment
2. Build guiding coalition
3. Clarify vision
4. Create volunteer army
5. Remove barriers
6. Motivate through progress
7. Sustain / scale efforts
8. Solidify new normal

**Undercommunication 是 change failure #1 原因 (Kotter)。**

### 10.6 Creating Right Environment：70/30 Principle (Apr 8 筆記, Tier 2)

50+ 年社會心理學研究：
- Personality 最多解釋 **30%** 的 behavior
- Situation / environment 解釋 **70%**
- Managers 系統性**低估** environment
- 改變 behavior 最有效不是改 personality，而是**改環境**

### 10.7 必記具體實驗數字 (Apr 8 + Apr 15 筆記, Tier 2)

| 實驗 | 關鍵數字 | 意涵 |
|---|---|---|
| Handwashing (Australian study) | 73% self-report vs 9% observed | Self-report ≠ behavior |
| Seat belt utilization | 1980: 11%, 1990: 49%, 2005: 80%+ | Behavior change 要 25 年 |
| Asch conformity 關鍵回合 | 37% | Group pressure 強度 |
| Asch with one ally | 5% | Ally 的結構性力量 |
| Asch with private written | ~12% | 匿名化 debias |
| Good Samaritan (早/準/遲) | 63% / 45% / 10% | Situation 打敗 personality |
| Telephone Game | 每傳一次降 20% | Cross-layer communication 失真 |
| Treatment A (90%) + neg/pos story | 39% / 88% | Narrative vs data power |
| Treatment B (30%) + neg/pos story | 7% / 78% | Narrative vs data power |
| West Virginia "skim milk" | 18% → 35% (6 months) | Specific 勝過 vague |

### 10.8 Willful Blindness 核心引言 (Heffernan, Tier 1)

- "You cannot fix a problem that you refuse to acknowledge."
- "As long as it remains invisible, it is guaranteed to remain insoluble."
- "Silence is the language of inertia."
- "People are about twice as likely to seek information that supports their own point of view as they are to consider an opposing idea."

### 10.9 最可靠的 Implementation Anchors (Tier 1)

Connect-the-dots、Industry profitability ranking、Monty Hall、Willful blindness、Handwashing — 這五個是 lecture deck 直接支持的 primary anchors。**Jobs / Ferguson 降為次級支持**，不作主要 citation。

### 10.10 Nokia 作為 Implementation Transfer 標準案例

**五段式標準作答姿勢 (Tier 1 — Last Day Q4 的 rubric 直接支持):**

1. **Classify pathology**
2. **Cite evidence** (reading 原文)
3. **Explain implication for performance**
4. **Explain why firm was susceptible**
5. **Prescribe organizational remedy**

**Nokia Pathology Mapping 完整版 (Tier 1 — reading 原文支持):**

| Pathology | Nokia 證據 | Segment |
|---|---|---|
| Knowing-Not-Knowing / Willful blindness | 2005 research 指出 mobile → handheld computer；2004 已有 prototype；senior management 未採取行動 | 1 |
| Knowing-Doing Gap | 知道 Symbian 不適合 software-rich 體驗但 roadmap 未改 | 2 |
| Framing error | "Hardware company" mental model → "software as supporting function" | 1 |
| Communication failure | Mid-level concerns "appeared not to have reached senior management"；objections "not formally recorded" | 3 |
| Going along with pack | "Dominant norm in leadership meetings was alignment" | 1 + 4 |
| Fear-driven reporting | Middle managers "reported optimistic progress despite knowing deadlines unrealistic" | 3 + 5 |
| Pluralistic silence | "Nobody spoke the truth because nobody was certain anyone else was prepared to hear it" | 5 |
| Wrong environment incentive | "Fear of losing social standing by delivering unwelcome assessments" | 5 |
| Structural barrier | 2004 reorg → "overlapping accountabilities, interdivisional rivalry" | 4 + 5 |
| Loss of institutional knowledge | 資深 strategist departure → lost "earlier agility" | Firm-level K |

**為何 Nokia 特別 Susceptible:**
1. Prior success hardening (1998 全球 #1 + $4B 利潤 → mental model 鎖死)
2. Standard-setting path dependency (Nordic → Europe → World → 相信 hardware+standards 是贏邏輯)
3. Homogeneous leadership (hardware people，缺 software 多元性)
4. Consensus culture (Finnish 文化 valorize 共識)
5. Quarterly shareholder pressure (扭曲內部真話)
6. Multi-layer approval (disruption 無法穿透)

**公司避免步驟:**
- Process design: anonymous written judgments before discussion (Asch 對策)
- Red-team / outside review 72 小時到 4 天試圖推翻結論
- Break multi-layer approval for innovation
- Fear-to-truth transition: 明確獎勵 bad news reporting
- Leadership diversity
- Early warning: report risks/blockers, not just progress
- Decouple executive compensation from short-term stock
- Institutional knowledge preservation (succession 不因 reorg 清空)
- Applied Kotter: urgency 在危機前
- Commitment Ladder 檢查

---

## 第 11 部｜Case Inventory (8 Canonical Cases)

### 11.1 Case-to-Level Heuristic (Last Day Slide 17, Tier 1 grid; 唯一對應為 Tier 3 heuristic)

| Case | 默認 Level | One-sentence Thesis |
|---|---|---|
| **NEC-GTE** | Firm (Leadership) | Kobayashi C&C vision 建立 NEC 但 vision 鎖死成未來 liability |
| **Airline Industry** | Industry | 高 fixed + sunk + low differentiation → 結構性低獲利 |
| **Powers that Be (GAFAM)** | Supranational / Industry | 平台 economics 非單一 industry，各家 profit engine 差異極大 |
| **Stitch Fix** | 跨層 (Meso / Industry / Meta) | Tech-enabled curated apparel retail, unmet demand, Amazon 威脅下 sustainability 存疑 |
| **Acer-Wistron** | Cluster / Industry | Forward integration 與客戶衝突 → 2001 分拆 |
| **Seiko** | Firm (positioning) | Medium → upmarket 動態 positioning |
| **P&G in China** | National | BOP + income distribution + consumer change + digital shift |
| **Disney (Eisner / Iger)** | Firm (Leadership) | Eisner 建廠但 succession 失敗；Iger related acquisitions 修復 |

**使用原則:** 作為默認配對，但 reading evidence 優先。Stitch Fix、Powers that Be、P&G 本來就跨層。

### 11.2 Practice Question 案例補充

| 案例 | 用途 |
|---|---|
| **ETA / Swatch** | Industry economics (movement vs watch)、supplier power、競爭政策、appropriability |
| **Home Alone / Culkin** | VRIO on Resources：V 建立、R 稀缺、I 困難、O 失敗 → value leak |
| **Natalie Portman** | Forward contract 鎖定 resource 的 appropriability 管理 |
| **John Carter / Lone Ranger** | VRIO limits：V+R+I 但 Organization 判斷錯誤仍失敗 |
| **Newell** | Corporate Strategy — HQ discipline 加值 |
| **WPP (FCPA)** | International strategy — global/local 切割錯誤 |
| **RTZ / Chinalco** | International strategy — 多重角色國家關係 |
| **Nokia** | Implementation — 全套 pathology 匯集 |

---

## 第 12 部｜考場攻擊流程

### 12.1 Time Allocation (3 小時 4 題假設)

| 時段 | 動作 | 分配 |
|---|---|---|
| 0–5 min | 讀所有 questions 不讀 reading | 5 |
| 5–15 min | 完整讀 reading，邊讀邊 tag 框架 | 10 |
| 15–30 min | Q3 (先做最 bounded 題目) | 15 |
| 30–55 min | Q1 (international 類) | 25 |
| 55–80 min | Q2 (corporate 或其他) | 25 |
| 80–140 min | Q4 (Nokia 類 30 points) | 60 |
| 140–170 min | 回去補三題 conclusions | 30 |
| 170–180 min | Final scan：每題 conclusion? 引用具體? | 10 |

### 12.2 Question Trigger → Tool Mapping

| Reading 中的 trigger words | 對應工具 |
|---|---|
| "profitability", "industry structure", "competition" | Underlying economics 7 維 + Table 4.3 + ferocity 9 drivers |
| "bargaining", "buyer/supplier power" | Intrinsic strength + willingness + price sensitivity |
| "foreign", "international", "country" | 5-level home vs host + SPARK match + Global/Local 3 類切 |
| "multi-business", "subsidiary", "corporate" | Corporate strategy 6 mechanisms + "sum of parts" test |
| "leadership", "organization", "execution" | Implementation 5-block + 70/30 + commitment ladder + Kotter |
| "resource", "competitive advantage" | VRIO + ARK of SPARK |
| "future competition", "threat", "sustainability" | **CEA 7 questions + lead firm type + unmet demand** |
| "case X illustrates level Y" | Five-level template + specific case evidence (Slide 17 heuristic) |

### 12.3 答題結構 (每題都用)

\`\`\`
1. Identify focal firm + industry (form + function + direct competition)
2. 若 business-facing: Underlying economics 6 問快速掃描
3. Identify which levels 最 binding (只列 binding，不寫全五層)
4. Apply 對應工具 (SPARK / Table 4.3 / bargaining / CEA / Implementation diagnosis)
5. Cite 具體 case evidence (數字、quotes、事件)
6. Conclude with BARD 或 POE 語氣
7. 若題目要求: formulate action + anticipate implementation barriers
\`\`\`

### 12.4 Fatal Error Checklist

- ❌ 沒有 conclusion (零分)
- ❌ Performance 聲稱沒指明 comparator (相對於誰？)
- ❌ 只列 framework 沒做 causal application
- ❌ Case 用錯 level (Slide 17 heuristic)
- ❌ Q1 重複使用同一 case
- ❌ 塞 extraneous material
- ❌ Implementation 題只重述 story 不做 diagnosis
- ❌ International 題 global/local 不分類
- ❌ 沒做 CEA (只分析今天 competitors)
- ❌ 忽略 underlying economics 直接跳到 strategy language
- ❌ 用 Prahalad-Hamel "core competence" framing 回答 firm-level (Enright 明言警告)
- ❌ 用 "tech industry" 籠統 framing (應逐家公司分析)
- ❌ 答案塞入 vocabulary display (Enright 要 causal reasoning)

---

## 第 13 部｜考場 Cheat Sheet (一頁手寫版)

考前自己手寫這一頁能建立 muscle memory。

### 13.1 Five Levels 骨架

\`\`\`
Meta/Supranational:  geopolitics, tech trends, multilateral, trade blocs
Macro/National:       macro econ, gov policies, institutions, civil society
Meso/Cluster:         demand/customers, inputs/suppliers, complements/substitutes, shared
Micro/Industry:       characteristics, competition (9), cooperation, lead firms, groupings
Firm:                 SPARK + Leadership + Execution + Org/Mgmt + Governance + Policies
\`\`\`

### 13.2 Performance Relative 4 Comparators

Competitors | Benchmarks | History | Expectations

### 13.3 Economics 7 維

Scale | Scope | Learning | Network | Nexus | Standards | Fixed / Sunk / Variable

### 13.4 Competition 三維

Type (5) | Variables (7) | Ferocity (9)

### 13.5 Firm Level 核心

**SPARK** — Scope, Positioning, Activities, Resources, Knowledge
**VRIO** — Valuable, Rare, Inimitable, Organized (套在 A, R, K)
**CEA 7 Qs** — optimize / leverage / overcome / add / taken over / if we managed / future

### 13.6 Industry Analysis Template (加 Lead Firm)

Economics → Competition type → Variables → Ferocity → **Lead firm role** → Profit

### 13.7 Implementation 5 段 + 關鍵數字

1. Knowing-Not-Knowing (7 原因)
2. Knowing-Doing Gap (73%/9%, 11%→80%)
3. Generating Clarity (20% loss per pass; 18%→35% skim milk)
4. Overcoming Resistance (6 + 6) + Commitment Ladder
5. Creating Right Environment (70/30; Good Samaritan 63/45/10; Asch 37/5/12)

### 13.8 Dysfunction (Ch.1 paraphrase)

- Analysis + Leadership without action → **paralysis**
- Action + Leadership without analysis → **random / misdirected**
- Analysis + Action without leadership → **scattered and confused**

### 13.9 BARD / POE

強 evidence → BARD 語氣："evidence clearly indicates"
弱 evidence → POE 語氣："on balance, suggests"

### 13.10 Enright 核心引言

- "Don't stop at the first explanation that fits the fact pattern." (Wittgenstein)
- "People see what they are incentivized to see." (Burry / Big Short)
- "Silence is the language of inertia." (Heffernan)
- "First lemming off the cliff may be a great leader but is a lousy strategist." (Enright)

### 13.11 Case-Level Heuristic (Slide 17)

NEC-GTE → Firm | Airline → Industry | Powers that Be → Supra/Industry
Stitch Fix → 跨層 | Acer-Wistron → Cluster/Industry | Seiko → Firm
P&G in China → National | Disney → Firm

### 13.12 International 題三類切

Financial / Compliance → Globalize
Market-facing → Localize
Production → Scale-dependent

### 13.13 Corporate 題 6 機制

Scope economies | Shared resources | Knowledge transfer | Internal capital market | Managerial discipline | Bargaining leverage

### 13.14 Nokia 五段式答題 Default Shape

1. Classify pathology
2. Cite evidence (reading 原文)
3. Explain implication
4. Explain susceptibility
5. Prescribe remedy

---

## 第 14 部｜信度分級 (考場應用指南)

### Tier 1: 最高信度 — Primary Source Verbatim (可自信引用)

- Five-Level Framework (Ch.2)
- SPARK 五元素 (Ch.3 Figure 3.6)
- Performance relative 4 comparators (Ch.2)
- Industry definition: form + function + direct competition (Ch.4)
- 三個 dysfunction 內容 — Ch.1 原文已確認
- Kongo Gumi 1,430 years — Ch.3 原文已確認 (但 exam priority 較低)
- Economics 7 維 (Last Day Slide 18)
- CEA + 七問 (Ch.4 Table 4.5)
- Lead Firm 六類型 (Ch.4)
- Coopetition / Ray Noorda (Ch.4)
- Inverted T (Ch.1)
- "First lemming" (Ch.1-2)
- Implementation 五段骨架、7 原因、6+6、Commitment Ladder、Kotter 8 (Lecture deck)
- International / Corporate 八問 (Last Day Slides 20-21)
- 6-3-10、方法鏈、4 Commandments、¼ × 4 (Last Day)
- "Weighted toward international / corporate / implementation" (Last Day Slide 23)
- Nokia reading + Practice Questions (Last Day Slides 31-34)
- VRIO on ARK (Last Day Slide 19)
- 案例 Walmart vs Mitsubishi、Swatch multi-segment、Kobayashi NEC 雙面刃 (Ch.3)

### Tier 2: 高信度 — User-Verified Reconstruction (可用，保守語氣)

- Handwashing 73%/9%、Seat belt 11%→80%、Asch 37%/5%/12%、Good Samaritan 63%/45%/10%、Telephone 20%、West Virginia 18%→35%、Treatment A/B 39%/88%/7%/78% (Apr 8 + Apr 15 筆記)
- 70/30 personality vs environment
- Asch 對策 (anonymous written, 72-hour red team)
- Global / Local 三類切 (reading 支持，非 slide verbatim)
- 用戶親自驗證的實驗機制

### Tier 3: 合理推論 (可用作答，不強調出處)

- BARD / POE 的法律解讀 (方向正確，非 Enright verbatim 定義)
- Water meter 三方採購分離邏輯
- Case-to-level 單一配對 (作為 default heuristic)
- Six value creation mechanisms (合理推論但多來源支持)
- Dysfunction formulas 的公式格式 (內容 Tier 1，格式我方 restatement)

### Tier 4: 不建議直接使用

- "Useful output principle" 名詞 (改用 Ch.4 verbatim)
- Steve Jobs / Alex Ferguson 作為主要 anchor
- "February 1 material 有直接 quote" (ChatGPT 獨有，無法驗證)
- 70% 複習時間分配 (我方建議，非 Enright)
- Metcalfe's Law 名稱與 n² 強調 (用保守網路效應語言)
- Prahalad-Hamel core competence framing 回答 NEC (Ch.2 警告)

---

## 第 15 部｜最終一句話總綱 (雙 AI 共識版)

**EN:**
> **Start with underlying economics, identify the binding levels in the five-level framework, test the focal firm's SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value the analysis suggests should be available.**

**中:**
> **先從 underlying economics 下手，找出 five-level framework 裡真正 binding 的層次，再檢驗 focal firm 的 SPARK 加上 leadership 與 execution，用 CEA 壓測未來競爭，最後再問 organization 與 implementation 是否真的讓分析上應該存在的價值，能被實現並守住。**

這句話整合了：
- **Underlying economics 作起點**
- **Binding levels** (非全五層)
- **SPARK + Leadership + Execution** (非只靜態 SPARK)
- **CEA 壓測未來** (動態工具)
- **Organization + Implementation** (落地檢驗)
- **Realize and defend** (不只創造還要守住)

---

## v1.1 修訂總覽

| 位置 | 變動 |
|---|---|
| 新增 4.0 節 | Performance relative 4 comparators (Competitors / Benchmarks / History / Expectations) |
| 4.7 節首句 | 加註 Exam priority 較低，資源分配讓位給 economics / CEA / implementation / international / corporate |
| 12.4 Fatal Error Checklist | 新增「Performance 聲稱沒指明 comparator」為第 2 項錯誤 |
| 13.2 Cheat Sheet | 新增 Performance Relative 4 Comparators 區塊 |

**其餘結構與內容完全保留。**

---

## 最終指示

### 1. Enright 真正要看到的 exam behavior

教授明示目標：*"Not for you to be better students, but to help you become better professionals."* 考場上您不是證明背多少，而是展示：**2 小時內能否像 consulting partner 第一次看 case 那樣運作。**

每個答題動作都要有 purpose：
- 不是寫「SPARK 有五個元素」，而是 *"Here's why Scope matters here specifically"*
- 不是寫「bargaining power 公式」，而是 *"Here's who actually captures value after bargaining"*
- 不是寫「Nokia 有 pluralistic silence」，而是 *"Here's how this silence mapped to specific shareholder pressure signals"*

### 2. 遇到不確定時的優先順序

1. Underlying economics (先搞清楚這個 business 怎麼賺錢)
2. 哪幾個 level binding (不寫全五層)
3. 該 firm 的 SPARK + Leadership + Execution
4. CEA + unmet demand + Lead firm type (未來 threat / opportunity)
5. Conclusion with BARD or POE (並指明 performance comparator)

這五步能涵蓋 80% 的題目。其餘 20% 加 International / Corporate / Implementation 特定工具。

### 3. 考前 48 小時建議

- **Day -2:** 找 2–3 篇 FT / Economist 商業文章，45 分鐘限時套 Enright 方法
- **Day -1:** 重看 Apr 8 + Apr 15 筆記；把 pathology 清單變 checklist；手寫一頁 cheat sheet
- **考試當天:** 只重溫手寫 cheat sheet，不再看大量材料
`;

const sectionMeta = [
  { id: "overview", tag: "weighted", en: "Exam Signals", zh: "考試訊號", refs: ["Session 1", "Last Day", "Master Review"], search: "weighted toward international corporate implementation read the questions use the right tools don't include extraneous material time wisely cases required lecture notes videos closed book grading" },
  { id: "spine", tag: "tools", en: "Analytical Spine", zh: "分析脊椎", refs: ["Last Day", "Chapter 2", "Master Review"], search: "search sort analyze hypothesize test conclude BARD POE formulate implement 6 inches 3 meters 10 meters four commandments strategy philosophy" },
  { id: "economics", tag: "tools", en: "Underlying Economics", zh: "底層經濟結構", refs: ["Last Day", "Chapter 4", "Master Review"], search: "scale scope learning network nexus standards fixed sunk variable costs profitability ranking airlines automobiles pharmaceuticals semiconductors pcs water meters" },
  { id: "industry", tag: "tools", en: "Industry Level", zh: "產業層次", refs: ["Chapter 4", "Lecture Notes Ch.4", "Master Review"], search: "industry definition five types competition monopoly oligopoly hypercompetition perfect competition subsidized competition ferocity competitive variables lead firms CEA coopetition" },
  { id: "firm", tag: "tools", en: "Firm Level", zh: "公司層次", refs: ["Chapter 3", "Practice Questions", "Master Review"], search: "SPARK VRIO ARK leadership execution organization governance scope positioning activities resources knowledge performance relative comparators dysfunction formulas Home Alone Natalie Portman John Carter Lone Ranger" },
  { id: "meso", tag: "tools", en: "Cluster / Meso Level", zh: "中觀 / 產業群聚", refs: ["Chapter 5", "Lecture Notes Ch.5", "Master Review"], search: "cluster demand customers inputs suppliers complementarities substitutes bargaining price sensitivity willingness regional clusters ecosystem externalization" },
  { id: "macro", tag: "tools", en: "National / Macro Level", zh: "國家 / 總體層次", refs: ["Chapter 6", "P&G in China", "Master Review"], search: "macroeconomic conditions macro government policies macro institutions civil society demographics income distribution bottom of the pyramid P&G China" },
  { id: "meta", tag: "tools", en: "Supranational / Meta Level", zh: "超國家 / 全球層次", refs: ["Chapter 1", "Chapter 7", "Master Review"], search: "geopolitics international economic conditions global technology trends multilateral organizations trade blocs foreign governments foreign multinationals inverted T flattener flattenee" },
  { id: "international", tag: "weighted", en: "International Strategy", zh: "國際策略", refs: ["Last Day", "Master Review"], search: "international strategy eight questions global local compliance market facing production WPP RTZ Chinalco differential SPARK" },
  { id: "corporate", tag: "weighted", en: "Corporate Strategy", zh: "企業總體策略", refs: ["Last Day", "Chapter 3", "Master Review"], search: "corporate strategy sum of parts eight questions scope economies shared resources knowledge transfer internal capital market managerial discipline bargaining leverage Disney Newell Walmart Mitsubishi Acer Wistron" },
  { id: "implementation", tag: "weighted", en: "Implementation", zh: "落地與執行", refs: ["Implementation Lecture", "Last Day", "Nokia Reading", "Master Review"], search: "implementation knowing-not-knowing knowing-doing gap generating clarity overcoming resistance creating the right environment commitment ladder Kotter 8 70 30 Asch Good Samaritan telephone handwashing seat belt Nokia" },
  { id: "cases", tag: "cases", en: "Case Grid", zh: "案例總表", refs: ["Last Day", "Practice Questions", "Case Files", "Master Review"], search: "NEC GTE airline Powers that Be Stitch Fix Acer Wistron Seiko P&G Disney ETA Swatch WPP RTZ Chinalco Nokia" },
  { id: "exam", tag: "weighted", en: "Exam Attack System", zh: "考場攻擊系統", refs: ["Last Day", "Master Review"], search: "time allocation trigger tool mapping fatal errors answer shape cheat sheet confidence tiers final one sentence" },
  { id: "appendix", tag: "appendix", en: "Source Fidelity Appendix", zh: "原始內容附錄", refs: ["Master Review"], search: "source appendix original markdown complete content exact original" },
];

const chips = [
  { key: "all", en: "All", zh: "全部" },
  { key: "weighted", en: "High Weight", zh: "高權重" },
  { key: "tools", en: "Frameworks", zh: "工具框架" },
  { key: "cases", en: "Cases", zh: "案例" },
  { key: "appendix", en: "Appendix", zh: "附錄" },
];

function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

function BiText({ mode, en, zh, className = "", block = false, subtleZh = false }) {
  if (mode === "en") return block ? <div className={className}>{en}</div> : <span className={className}>{en}</span>;
  if (mode === "zh") return block ? <div className={className}>{zh}</div> : <span className={className}>{zh}</span>;
  return (
    <div className={className}>
      <div>{en}</div>
      <div className={cn("mt-1", subtleZh ? "text-[0.94em] text-slate-600" : "text-[0.94em] text-slate-700")}>{zh}</div>
    </div>
  );
}

function SectionShell({ id, mode, titleEn, titleZh, kickerEn, kickerZh, refs = [], children }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-[28px] border p-5 md:p-7" style={{ background: theme.card, borderColor: theme.line }}>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.teal }}>
            <BiText mode={mode} en={kickerEn} zh={kickerZh} />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: theme.ink }}>
            <BiText mode={mode} en={titleEn} zh={titleZh} />
          </h2>
        </div>
        <div className="max-w-[360px] rounded-2xl border px-3 py-2 text-xs leading-relaxed" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
          <div className="mb-1 font-semibold uppercase tracking-[0.16em]" style={{ color: theme.plum }}>Sources</div>
          <div className="flex flex-wrap gap-2">
            {refs.map((ref) => (
              <span key={ref} className="rounded-full px-2 py-1" style={{ background: theme.soft }}>{ref}</span>
            ))}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ titleEn, titleZh, mode, children, tone = "default" }) {
  const tones = {
    default: { bg: "#FBF8F0", border: theme.line, ink: theme.ink },
    teal: { bg: "#EDF4F6", border: "#BCD0D8", ink: theme.teal },
    plum: { bg: "#F4EDF3", border: "#D8C3D4", ink: theme.plum },
    gold: { bg: "#FBF5E8", border: "#E1D1A8", ink: "#7A5A18" },
    danger: { bg: "#F8EFEC", border: "#D8BBB2", ink: theme.danger },
    ok: { bg: "#EEF5F0", border: "#C5D7CA", ink: theme.ok },
  };
  const t = tones[tone] || tones.default;
  return (
    <div className="rounded-3xl border p-4" style={{ background: t.bg, borderColor: t.border }}>
      <div className="mb-2 text-sm font-semibold" style={{ color: t.ink }}>
        <BiText mode={mode} en={titleEn} zh={titleZh} />
      </div>
      <div className="text-sm leading-6" style={{ color: theme.subInk }}>
        {children}
      </div>
    </div>
  );
}

function BulletList({ mode, items, compact = false }) {
  return (
    <ul className={cn("list-disc pl-5", compact ? "space-y-1.5 text-sm" : "space-y-2 text-sm md:text-[15px]")}>
      {items.map((item, idx) => (
        <li key={idx} className="leading-6" style={{ color: theme.subInk }}>
          <BiText mode={mode} en={item.en} zh={item.zh} />
        </li>
      ))}
    </ul>
  );
}

function SimpleTable({ mode, columns, rows, size = "normal" }) {
  const cellClass = size === "compact" ? "text-xs leading-5" : "text-sm leading-6";
  const headerClass = size === "compact" ? "text-[11px]" : "text-sm";
  const renderCell = (value) => {
    if (typeof value === "object" && value !== null && ("en" in value || "zh" in value)) {
      return <BiText mode={mode} en={value.en} zh={value.zh} />;
    }
    return value;
  };
  return (
    <div className="rounded-3xl border overflow-hidden" style={{ borderColor: theme.line }}>
      <div className="md:hidden divide-y" style={{ background: "#FFFDF8", borderColor: theme.line }}>
        {rows.map((row, idx) => (
          <div key={idx} className="p-4" style={{ borderColor: theme.line }}>
            <div className="grid gap-3">
              {columns.map((col, cIdx) => (
                <div key={col.key} className={cn("grid gap-1", cIdx === 0 ? "" : "pt-2 border-t") } style={cIdx === 0 ? undefined : { borderColor: theme.line }}>
                  <div className="text-[10px] uppercase tracking-[0.16em] font-semibold" style={{ color: theme.plum }}>
                    <BiText mode={mode} en={col.en} zh={col.zh} />
                  </div>
                  <div className={cellClass} style={{ color: theme.subInk }}>{renderCell(row[col.key])}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto" style={{ background: "#FFFDF8" }}>
        <table className="min-w-[720px] w-full border-collapse text-left">
          <thead style={{ background: "#F2ECE0" }}>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={cn("border-b px-4 py-3 font-semibold align-bottom", headerClass)} style={{ borderColor: theme.line, color: theme.ink }}>
                  <BiText mode={mode} en={col.en} zh={col.zh} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="align-top">
                {columns.map((col) => (
                  <td key={col.key} className={cn("border-b px-4 py-3", cellClass)} style={{ borderColor: theme.line, color: theme.subInk }}>
                    {renderCell(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StageRibbon({ mode, items }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-3xl border p-4" style={{ background: idx % 2 === 0 ? "#FBF8F0" : "#F4F0E6", borderColor: theme.line }}>
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.plum }}>
            {String(idx + 1).padStart(2, "0")}
          </div>
          <div className="mb-2 font-semibold text-sm" style={{ color: theme.ink }}>
            <BiText mode={mode} en={item.en} zh={item.zh} />
          </div>
          {item.note ? <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={item.note.en} zh={item.note.zh} /></div> : null}
        </div>
      ))}
    </div>
  );
}

function MetricBar({ mode, titleEn, titleZh, value, max = 100, suffix = "%", tone = "teal", subEn, subZh }) {
  const tones = { teal: theme.teal, plum: theme.plum, gold: theme.gold, danger: theme.danger, ok: theme.ok };
  const color = tones[tone] || theme.teal;
  return (
    <div className="rounded-3xl border p-4" style={{ background: "#FBF8F0", borderColor: theme.line }}>
      <div className="mb-1 text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={titleEn} zh={titleZh} /></div>
      <div className="mb-2 text-2xl font-semibold" style={{ color }}>{value}{suffix}</div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "#E7DDCC" }}>
        <div className="h-full rounded-full" style={{ width: `${Math.max(0, Math.min(100, (value / max) * 100))}%`, background: color }} />
      </div>
      {(subEn || subZh) ? <div className="mt-3 text-xs leading-5" style={{ color: theme.subInk }}><BiText mode={mode} en={subEn} zh={subZh} /></div> : null}
    </div>
  );
}

function TinyProcess({ mode, items }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item, idx) => (
        <React.Fragment key={item.en}>
          <span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></span>
          {idx < items.length - 1 ? <span style={{ color: theme.gold }}>→</span> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function FiveLevelDriverMap({ mode }) {
  const levels = [
    { no: "01", en: "Industry", zh: "產業", color: theme.gold, noteEn: "Start with the economically meaningful industry.", noteZh: "先從經濟上真正有意義的產業開始。" },
    { no: "02", en: "Meso / Cluster", zh: "群聚 / 中觀", color: theme.ok, noteEn: "Then test the ecosystem around the focal business.", noteZh: "再測試圍繞 focal business 的 ecosystem。" },
    { no: "03", en: "Macro / National", zh: "國家 / 總體", color: theme.teal, noteEn: "Check the national environment and its trendline.", noteZh: "檢查國家環境及其趨勢線。" },
    { no: "04", en: "Meta / Supranational", zh: "超國家 / 全球", color: theme.plum, noteEn: "Add the cross-border forces outside national control.", noteZh: "再加上國家無法控制的跨國力量。" },
    { no: "05", en: "Firm", zh: "公司", color: theme.danger, noteEn: "Only then judge SPARK, leadership, execution, and fit.", noteZh: "最後才評估 SPARK、leadership、execution 與 fit。" },
  ];
  return (
    <InfoCard titleEn="Five-level reading map" titleZh="五層閱讀地圖" mode={mode} tone="gold">
      <div className="grid gap-3 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
        <div className="rounded-[28px] border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
          <svg viewBox="0 0 320 280" className="w-full h-auto">
            <defs>
              <linearGradient id="lvlGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFDF8" />
                <stop offset="100%" stopColor="#F4F0E6" />
              </linearGradient>
            </defs>
            <rect x="56" y="16" width="208" height="208" rx="28" fill="url(#lvlGrad)" stroke="#D9D0BE" />
            <circle cx="160" cy="120" r="32" fill="#FFF" stroke="#D9D0BE" />
            <text x="160" y="114" textAnchor="middle" fontSize="11" fill="#748067" fontWeight="600">Firm</text>
            <text x="160" y="131" textAnchor="middle" fontSize="13" fill="#1E2732" fontWeight="700">Performance</text>
            {[
              { x: 160, y: 34, c: theme.teal, t1: 'Macro', t2: '國家' },
              { x: 86, y: 84, c: theme.ok, t1: 'Meso', t2: '群聚' },
              { x: 114, y: 198, c: theme.gold, t1: 'Industry', t2: '產業' },
              { x: 206, y: 198, c: theme.danger, t1: 'Firm', t2: '公司' },
              { x: 234, y: 84, c: theme.plum, t1: 'Meta', t2: '超國家' },
            ].map((n) => (
              <g key={n.t1}>
                <circle cx={n.x} cy={n.y} r="18" fill={n.c} opacity="0.14" />
                <circle cx={n.x} cy={n.y} r="9" fill={n.c} />
                <text x={n.x} y={n.y - 28} textAnchor="middle" fontSize="10" fill={n.c} fontWeight="700">{n.t1}</text>
                <text x={n.x} y={n.y - 15} textAnchor="middle" fontSize="9" fill={n.c}>{n.t2}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {levels.map((level, idx) => (
            <div key={level.no} className="rounded-3xl border px-4 py-3" style={{ borderColor: theme.line, background: idx % 2 === 0 ? "#FBF8F0" : "#FFFDF8" }}>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: `${level.color}22`, color: level.color }}>{level.no}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={level.en} zh={level.zh} /></div>
                  <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={level.noteEn} zh={level.noteZh} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfoCard>
  );
}

function EconomicsCascade({ mode }) {
  const steps = [
    { en: "Underlying economics", zh: "底層經濟" },
    { en: "Industry structure", zh: "產業結構" },
    { en: "Type of competition", zh: "競爭型態" },
    { en: "Competitive variables", zh: "競爭變數" },
    { en: "Ferocity", zh: "激烈程度" },
    { en: "Profit potential", zh: "獲利潛力" },
    { en: "Firm performance", zh: "企業績效" },
  ];
  return (
    <InfoCard titleEn="Why economics sits upstream" titleZh="為甚麼 economics 在最上游" mode={mode} tone="plum">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {steps.map((step, idx) => (
          <div key={step.en} className="relative rounded-3xl border px-4 py-4 text-sm leading-6" style={{ borderColor: theme.line, background: idx === 0 ? "#F4EDF3" : idx === steps.length - 1 ? "#EDF4F6" : "#FBF8F0", color: theme.subInk }}>
            <div className="mb-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: idx === 0 ? theme.plum : idx === steps.length - 1 ? theme.teal : theme.gold }}>{String(idx + 1).padStart(2, "0")}</div>
            <BiText mode={mode} en={step.en} zh={step.zh} />
            {idx < steps.length - 1 ? <div className="hidden xl:block absolute -right-[11px] top-1/2 -translate-y-1/2 text-lg" style={{ color: theme.gold }}>→</div> : null}
          </div>
        ))}
      </div>
    </InfoCard>
  );
}

function IndustryBoundaryMethod({ mode }) {
  const rows = [
    { no: "1", en: "What useful output does the customer actually receive?", zh: "客戶實際收到甚麼有用輸出？" },
    { no: "2", en: "Who is directly competing to supply that same output?", zh: "誰在直接爭奪同一種輸出？" },
    { no: "3", en: "Draw the industry boundary from that customer-facing output, not from the technology label.", zh: "用客戶面向的輸出畫產業邊界，不要用 technology label 畫。" },
  ];
  return (
    <InfoCard titleEn="Three-step industry boundary method" titleZh="三步產業邊界法" mode={mode} tone="teal">
      <div className="grid gap-3 md:grid-cols-3">
        {rows.map((row) => (
          <div key={row.no} className="rounded-3xl border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
            <div className="mb-2 h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: `${theme.teal}18`, color: theme.teal }}>{row.no}</div>
            <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={row.en} zh={row.zh} /></div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
        <BiText mode={mode} en="This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output." zh="這種寫法在考場上更安全，因為它能防止 industry definition 滑向 SIC 式分類或 technology categories。真正標準是：是否在爭奪相似的 customer-facing output。" />
      </div>
    </InfoCard>
  );
}

function SparkArchitecture({ mode }) {
  const spark = [
    { key: "S", en: "Scope", zh: "Scope", noteEn: "Where we compete", noteZh: "在哪裡競爭" },
    { key: "P", en: "Positioning", zh: "Positioning", noteEn: "How we compete", noteZh: "如何競爭" },
    { key: "A", en: "Activities", zh: "Activities", noteEn: "What we do", noteZh: "做甚麼" },
    { key: "R", en: "Resources", zh: "Resources", noteEn: "What we use", noteZh: "用甚麼" },
    { key: "K", en: "Knowledge", zh: "Knowledge", noteEn: "What we know", noteZh: "知道甚麼" },
  ];
  const outer = [
    { en: "Leadership", zh: "Leadership" },
    { en: "Execution", zh: "Execution" },
    { en: "Organization & management", zh: "Organization & Management" },
    { en: "Governance", zh: "Governance" },
  ];
  return (
    <InfoCard titleEn="SPARK is the core, not the whole answer" titleZh="SPARK 是核心，但不是完整答案" mode={mode} tone="gold">
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="rounded-[28px] border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
          <svg viewBox="0 0 280 280" className="w-full h-auto">
            <circle cx="140" cy="140" r="102" fill="#FBF8F0" stroke="#D9D0BE" />
            <circle cx="140" cy="140" r="62" fill="#FFF" stroke="#D9D0BE" />
            {spark.map((item, idx) => {
              const angle = (Math.PI * 2 * idx) / spark.length - Math.PI / 2;
              const x = 140 + 66 * Math.cos(angle);
              const y = 140 + 66 * Math.sin(angle);
              return (
                <g key={item.key}>
                  <circle cx={x} cy={y} r="18" fill={theme.plum} opacity="0.16" />
                  <circle cx={x} cy={y} r="11" fill={theme.plum} />
                  <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fill="#FFF" fontWeight="700">{item.key}</text>
                </g>
              );
            })}
            <text x="140" y="137" textAnchor="middle" fontSize="14" fill="#1E2732" fontWeight="700">SPARK</text>
            <text x="140" y="153" textAnchor="middle" fontSize="10" fill="#485665">core strategic logic</text>
          </svg>
        </div>
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {spark.map((item) => (
              <div key={item.key} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
                <div className="font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>
                <div style={{ color: theme.subInk }}><BiText mode={mode} en={item.noteEn} zh={item.noteZh} /></div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {outer.map((item) => (
              <div key={item.en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
                <BiText mode={mode} en={item.en} zh={item.zh} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfoCard>
  );
}

function QuickCaseLevelMatrix({ mode }) {
  const cols = [
    { key: "firm", labelEn: "Firm", labelZh: "公司" },
    { key: "industry", labelEn: "Industry", labelZh: "產業" },
    { key: "meso", labelEn: "Meso", labelZh: "群聚" },
    { key: "macro", labelEn: "Macro", labelZh: "國家" },
    { key: "meta", labelEn: "Meta", labelZh: "超國家" },
  ];
  const rows = [
    { caseEn: "NEC-GTE", caseZh: "NEC-GTE", hit: "firm" },
    { caseEn: "Airline industry", caseZh: "Airline Industry", hit: "industry" },
    { caseEn: "ETA / Swatch", caseZh: "ETA / Swatch", hit: "industry" },
    { caseEn: "P&G in China", caseZh: "P&G in China", hit: "macro" },
    { caseEn: "RTZ / Chinalco", caseZh: "RTZ / Chinalco", hit: "meta" },
    { caseEn: "WPP", caseZh: "WPP", hit: "meta" },
    { caseEn: "Nokia", caseZh: "Nokia", hit: "firm" },
  ];
  return (
    <InfoCard titleEn="Fast case-to-level scan" titleZh="案例對層次快速掃描" mode={mode} tone="plum">
      <div className="overflow-x-auto">
        <div className="min-w-[720px] grid" style={{ gridTemplateColumns: `200px repeat(${cols.length}, minmax(90px, 1fr))`, gap: "10px" }}>
          <div></div>
          {cols.map((col) => <div key={col.key} className="rounded-2xl border px-3 py-2 text-center text-xs font-semibold" style={{ borderColor: theme.line, background: "#F4F0E6", color: theme.ink }}><BiText mode={mode} en={col.labelEn} zh={col.labelZh} /></div>)}
          {rows.map((row) => (
            <React.Fragment key={row.caseEn}>
              <div className="rounded-2xl border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.ink }}><BiText mode={mode} en={row.caseEn} zh={row.caseZh} /></div>
              {cols.map((col) => <div key={col.key} className="rounded-2xl border flex items-center justify-center px-3 py-3 text-sm font-semibold" style={{ borderColor: row.hit === col.key ? `${theme.teal}55` : theme.line, background: row.hit === col.key ? "#EDF4F6" : "#FBF8F0", color: row.hit === col.key ? theme.teal : "#B9B0A0" }}>{row.hit === col.key ? "●" : "·"}</div>)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </InfoCard>
  );
}

function AnchorNav({ mode, activeTag, setActiveTag, query, setQuery }) {
  return (
    <div className="sticky top-0 z-30 border-b backdrop-blur" style={{ background: "rgba(252,250,242,0.88)", borderColor: theme.line }}>
      <div className="mx-auto max-w-[1600px] px-4 py-3 md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.teal }}>STRT 6200 Final Exam Infrastructure</div>
              <div className="mt-1 text-xl md:text-2xl font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en="Strategic Decision-Making Review System" zh="策略決策期末複習系統" /></div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={mode === "zh" ? "搜尋關鍵字、案例、工具…" : "Search keyword, case, or tool…"} className="w-full md:w-[340px] rounded-full border px-4 py-2 text-sm outline-none" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.ink }} />
              <div className="flex flex-wrap gap-2">{chips.map((chip) => <button key={chip.key} onClick={() => setActiveTag(chip.key)} className="rounded-full border px-3 py-2 text-xs font-semibold tracking-[0.14em]" style={{ borderColor: activeTag === chip.key ? theme.teal : theme.line, background: activeTag === chip.key ? "#EDF4F6" : "#FBF8F0", color: activeTag === chip.key ? theme.teal : theme.subInk }}><BiText mode={mode} en={chip.en} zh={chip.zh} /></button>)}</div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">{sectionMeta.map((item) => <a key={item.id} href={`#${item.id}`} className="whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={item.en} zh={item.zh} /></a>)}</div>
        </div>
      </div>
    </div>
  );
}

function FloatingLanguageToggle({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const options = [{ key: "en", label: "EN" }, { key: "zh", label: "中" }, { key: "bi", label: "BI" }];
  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open ? <div className="mb-2 rounded-3xl border p-2 shadow-xl" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="mb-2 px-2 pt-1 text-[10px] uppercase tracking-[0.2em]" style={{ color: theme.plum }}>Language</div><div className="flex flex-col gap-1">{options.map((option) => <button key={option.key} onClick={() => { setMode(option.key); setOpen(false); }} className="rounded-2xl px-3 py-2 text-sm font-semibold text-left" style={{ background: mode === option.key ? "#EDF4F6" : "transparent", color: mode === option.key ? theme.teal : theme.ink }}>{option.label}</button>)}</div></div> : null}
      <button onClick={() => setOpen((v) => !v)} className="h-14 w-14 rounded-full border text-xl shadow-lg" style={{ background: "#FFFDF8", borderColor: theme.line, color: theme.plum }} aria-label="Language switch" title="Language switch">◎</button>
    </div>
  );
}

function OverviewSection({ mode }) {
  return (
    <SectionShell id="overview" mode={mode} titleEn="What the exam is really testing" titleZh="這份考試真正測甚麼" kickerEn="Course signals" kickerZh="課程訊號" refs={["Session 1", "Last Day", "Master Review"]}>
      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-4">
          <InfoCard titleEn="Reader orientation" titleZh="讀者導向" mode={mode} tone="teal"><BiText mode={mode} block en="This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity." zh="這個版本是給讀者直接使用的複習系統，不是向任何人匯報進度。它假設你需要快速閱讀、立刻看見結構，並能在概念與案例應用之間切換，同時不犧牲內容完整性。" /></InfoCard>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard titleEn="Read the question" titleZh="先讀清楚題目" mode={mode} tone="gold"><BiText mode={mode} block en="Answer the question in front of you, not the one you hoped to get." zh="答眼前這一題，不是答你原本希望出現的那一題。" /></InfoCard>
            <InfoCard titleEn="Use the right tool" titleZh="工具要用對" mode={mode} tone="plum"><BiText mode={mode} block en="Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger." zh="不要把框架當名詞展示。要根據題目 trigger 選對分析工具。" /></InfoCard>
            <InfoCard titleEn="No extraneous material" titleZh="不要塞無關內容" mode={mode} tone="danger"><BiText mode={mode} block en="Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades." zh="只寫真正 binding 的層次。多餘理論、額外案例、空泛填充都會稀釋分數。" /></InfoCard>
            <InfoCard titleEn="Use time wisely" titleZh="時間要精準分配" mode={mode} tone="ok"><BiText mode={mode} block en="The exam rewards disciplined triage, not maximum text volume." zh="考試獎勵的是有紀律的取捨，不是字數最大化。" /></InfoCard>
          </div>
          <InfoCard titleEn="Professional standard, not student display" titleZh="不是學生表演，而是專業判斷" mode={mode}><BulletList mode={mode} items={[
            { en: "The course is meant to make you job-ready for strategy-related work, not simply better at classroom recall.", zh: "這門課的目的，是讓你更接近 strategy-related work 的 job-ready 狀態，而不只是更會背課堂內容。" },
            { en: "Cases are primary teaching vehicles, not decorative examples.", zh: "案例是主要教學載體，不是裝飾性的例子。" },
            { en: "The text, lecture notes, and videos are required because much of that material is used in case analysis without being repeated in class.", zh: "教科書、講義與影片都是必讀，因為大量內容會直接進入案例分析，而不會在課堂上重講。" },
            { en: "The final may use fewer questions and a longer reading so multiple issues can be addressed from the same case.", zh: "期末可能採較少題目、較長閱讀，讓多個議題都從同一個 reading 被處理。" },
          ]} /></InfoCard>
          <FiveLevelDriverMap mode={mode} />
        </div>
        <div className="space-y-4">
          <InfoCard titleEn="Weighted focus" titleZh="高權重焦點" mode={mode} tone="plum"><BulletList mode={mode} items={[{ en: "International strategy", zh: "國際策略" }, { en: "Corporate strategy", zh: "企業總體策略" }, { en: "Implementation and organizational pathologies", zh: "落地執行與組織病理" }]} /></InfoCard>
          <InfoCard titleEn="Core exam behavior" titleZh="核心作答行為" mode={mode}><BulletList mode={mode} items={[
            { en: "Identify the focal firm and the strategically meaningful industry.", zh: "先辨認 focal firm 與具有策略意義的 industry。" },
            { en: "State the performance comparator before judging performance.", zh: "在評論 performance 前，先說明 comparator。" },
            { en: "Name only the levels that are truly binding.", zh: "只點出真正 binding 的層次。" },
            { en: "Use evidence to reach a conclusion with calibrated confidence.", zh: "用 evidence 推導出帶有校準信心程度的 conclusion。" },
            { en: "If the prompt asks for action, connect diagnosis to strategy and implementation barriers.", zh: "如果題目要求 action，就必須把 diagnosis 連到 strategy 與 implementation barrier。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Coverage check" titleZh="覆蓋檢查" mode={mode} tone="gold"><BiText mode={mode} block en="This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix." zh="這個 infrastructure 以貼入的期末總整為主骨架，並交叉檢查課本文本、Session 1 課程 framing、Last Day 投影片、implementation 講義、practice questions 與關鍵案例材料。完整原始貼入內容保留在附錄。" /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function SpineSection({ mode }) {
  const process = [
    { en: "Search", zh: "Search" }, { en: "Sort", zh: "Sort" }, { en: "Analyze", zh: "Analyze" }, { en: "Hypothesize", zh: "Hypothesize" }, { en: "Test", zh: "Test" }, { en: "Conclude", zh: "Conclude" }, { en: "Formulate Strategy", zh: "Formulate Strategy" }, { en: "Implement", zh: "Implement" },
  ];
  return (
    <SectionShell id="spine" mode={mode} titleEn="The analytical spine" titleZh="分析脊椎" kickerEn="Method" kickerZh="方法" refs={["Last Day", "Chapter 2", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Full chain" titleZh="完整鏈條" mode={mode} tone="teal"><TinyProcess mode={mode} items={process} /></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
          <InfoCard titleEn="BARD and POE" titleZh="BARD 與 POE" mode={mode}><BulletList mode={mode} items={[
            { en: "Use BARD-style language when the evidence is strong and viable alternatives are minimal.", zh: "當證據很強、可行替代解釋極少時，用 BARD 型語氣。" },
            { en: "Use POE-style language when the balance of evidence points in one direction but remains limited.", zh: "當 evidence 傾向某方向但仍有限時，用 POE 型語氣。" },
            { en: "No conclusion means no score. Over-hedging strong evidence or overstating weak evidence both lose precision.", zh: "沒有 conclusion 幾乎等於沒有分數。強證據過度保守、弱證據過度自信，兩者都會失分。" },
          ]} /></InfoCard>
          <InfoCard titleEn="6 inches, 3 meters, 10 meters" titleZh="6 吋、3 公尺、10 公尺" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "6 inches away: organize facts, numbers, quotes, and events into the framework.", zh: "6 吋距離：把 facts、數字、quotes 與事件放進框架。" },
            { en: "3 meters away: extract the major conclusion from each analytical block.", zh: "3 公尺距離：從每一塊分析抽出 major conclusion。" },
            { en: "10 meters away: solve the puzzle of value creation, competitive advantage, and appropriability.", zh: "10 公尺距離：解整個 puzzle，也就是 value creation、competitive advantage 與 appropriability。" },
          ]} /></InfoCard>
          <InfoCard titleEn="The four commandments" titleZh="四條總戒律" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Understand the industry and what it does.", zh: "先理解這個 industry 到底在做甚麼。" },
            { en: "Draw the pictures.", zh: "把圖畫出來。" },
            { en: "Turn one complicated thing into many simple things.", zh: "把一個複雜問題拆成很多簡單問題。" },
            { en: "Build the puzzle, then solve the puzzle.", zh: "先把 puzzle 拼好，再解它。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Strategy philosophy" titleZh="策略哲學" mode={mode}><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          { en: "¼ showing up", zh: "四分之一是到場並投入" },
          { en: "¼ knowing what questions to ask", zh: "四分之一是知道要問甚麼問題" },
          { en: "¼ not stopping until the questions are answered", zh: "四分之一是不停下來，直到問題被真正回答" },
          { en: "¼ making strategy work in the organization", zh: "四分之一是讓策略在組織內真的運作" },
        ].map((item) => <div key={item.en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function EconomicsSection({ mode }) {
  const econRows = [
    { driver: { en: "Scale economies", zh: "規模經濟" }, question: { en: "Does average cost fall as output rises?", zh: "產量增加時平均成本是否下降？" }, implication: { en: "Pushes structure toward fewer players, often oligopoly or monopoly.", zh: "結構傾向較少玩家，常推向 oligopoly 或 monopoly。" } },
    { driver: { en: "Scope economies", zh: "範疇經濟" }, question: { en: "Do related businesses lower total cost or improve quality together?", zh: "相近業務一起做是否能降總成本或提升品質？" }, implication: { en: "Supports integrated or diversified structures when links are real.", zh: "若連結真實存在，支持整合或多角化結構。" } },
    { driver: { en: "Learning economies", zh: "學習經濟" }, question: { en: "Do cost or quality improve with cumulative experience?", zh: "累積經驗是否能改善成本或品質？" }, implication: { en: "Early movers can create durable cost advantage and deter entry.", zh: "先行者可能建立持久成本優勢並阻擋進入。" } },
    { driver: { en: "Network economies", zh: "網路經濟" }, question: { en: "Does user value rise with installed base?", zh: "使用者價值是否隨 installed base 擴大？" }, implication: { en: "Can create self-reinforcing outcomes and winner-take-most logic.", zh: "可能形成自我強化與 winner-take-most 邏輯。" } },
    { driver: { en: "Nexus economies", zh: "樞紐經濟" }, question: { en: "Is there a must-pass control point?", zh: "是否存在必經關鍵節點？" }, implication: { en: "The controller approaches quasi-monopoly; others risk commoditization.", zh: "控制者接近 quasi-monopoly，其他人則容易 commodity 化。" } },
    { driver: { en: "Standards", zh: "標準" }, question: { en: "Who controls key technical or interface standards?", zh: "誰掌握技術或介面標準？" }, implication: { en: "Standards holders can shape market architecture and appropriability.", zh: "掌握標準者可改寫市場架構與 appropriability。" } },
    { driver: { en: "Fixed / sunk / variable cost", zh: "固定 / 沉沒 / 變動成本" }, question: { en: "What cost mix governs behavior and exit?", zh: "甚麼成本組合主導行為與退出？" }, implication: { en: "This often determines price pressure, exit barriers, and profit violence.", zh: "這常直接決定削價壓力、退出障礙與獲利劇烈程度。" } },
  ];
  const profitRows = [
    { industry: { en: "Water meters", zh: "水表" }, rank: 1, logic: { en: "Buyer, specifier, and payer are split; cost share is trivial but under-measurement risk is material.", zh: "規格制定者、採購者與付款者分離；成本占比小，但低估計量風險很大。" } },
    { industry: { en: "Pharmaceuticals", zh: "製藥" }, rank: 2, logic: { en: "Historically helped by IP, health urgency, and buying processes.", zh: "歷史上常受惠於智慧財產、健康急迫性與購買流程。" } },
    { industry: { en: "Automobiles", zh: "汽車" }, rank: 3, logic: { en: "Capital intensive, differentiated, but still highly competitive.", zh: "資本密集，具有差異化，但競爭依然激烈。" } },
    { industry: { en: "Semiconductors", zh: "半導體" }, rank: 4, logic: { en: "Strong economics but sharp cyclicality and segment differences.", zh: "底層經濟很強，但景氣循環與細分差異很大。" } },
    { industry: { en: "Personal computers", zh: "個人電腦" }, rank: 5, logic: { en: "Price pressure and limited defensibility in many segments.", zh: "多數區段價格壓力大，可防禦性有限。" } },
    { industry: { en: "Airlines", zh: "航空" }, rank: 6, logic: { en: "Low differentiation plus high fixed and sunk cost make exit hard and competition brutal.", zh: "低差異化加上高固定與沉沒成本，使退出困難、競爭殘酷。" } },
  ];
  return (
    <SectionShell id="economics" mode={mode} titleEn="Underlying economics" titleZh="Underlying economics" kickerEn="Start here" kickerZh="先從這裡開始" refs={["Last Day", "Chapter 4", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Why this section comes first" titleZh="為甚麼一定先看這裡" mode={mode} tone="teal"><BiText mode={mode} block en="The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution." zh="考試邏輯很清楚：在進入 strategy language 前，先看這個 business 怎麼賺錢。Underlying economics 先決定 industry structure，再決定 competition，再決定 profit potential，最後才由 focal firm 的 SPARK、議價位置、領導與執行能力做修正。" /></InfoCard>
        <EconomicsCascade mode={mode} />
        <SimpleTable mode={mode} columns={[{ key: "driver", en: "Dimension", zh: "維度" }, { key: "question", en: "Core question", zh: "核心問題" }, { key: "implication", en: "Structural implication", zh: "結構含意" }]} rows={econRows} />
        <div className="grid gap-4 xl:grid-cols-2">
          <InfoCard titleEn="Three cost types and what they do" titleZh="三種成本，以及它們如何影響競爭" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Variable cost moves with output. If price stays above variable cost, selling more can still make sense in the short run.", zh: "變動成本會隨產量改變。只要價格高於變動成本，短期內多賣通常仍有誘因。" },
            { en: "Fixed cost is fixed in the short run but avoidable in the long run. It drives break-even pressure and scale logic.", zh: "固定成本短期固定、長期可避免。它主導 break-even 壓力與規模邏輯。" },
            { en: "Sunk cost is unrecoverable. It should not drive future logic, but it creates exit barriers in the real world.", zh: "沉沒成本無法回收。理論上不該主導未來決策，但在真實世界會形成退出障礙。" },
            { en: "High fixed plus low variable cost often invites price cuts. High sunk cost traps players. Low fixed plus high variable cost tends toward perfect-competition logic.", zh: "高固定加低變動成本常引出削價。高沉沒成本會困住玩家。低固定加高變動成本則更接近 perfect competition 邏輯。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Six fast industry-economics questions" titleZh="六個快速經濟結構問題" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "What does the industry actually do in form, function, and direct competition terms?", zh: "這個 industry 在 form、function、direct competition 上到底做甚麼？" },
            { en: "What is the cost structure: capital, labor, knowledge, marketing, and fixed / sunk / variable mix?", zh: "成本結構是甚麼：capital、labor、knowledge、marketing 以及 fixed / sunk / variable 比例？" },
            { en: "Where do scale, scope, and learning hold?", zh: "Scale、scope、learning 這些經濟在哪裡成立？" },
            { en: "Do network, nexus, standards, or installed-base effects exist?", zh: "是否存在 network、nexus、standards 或 installed-base effects？" },
            { en: "What type of competition does this push the industry toward?", zh: "這會把產業推向哪種 competition type？" },
            { en: "Where is value captured, and by whom?", zh: "價值最後在哪裡被 capture，又是被誰 capture？" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Profitability ranking visual" titleZh="獲利結構排序圖" mode={mode}><div className="space-y-3">{profitRows.map((row) => <div key={row.industry.en} className="grid gap-2 md:grid-cols-[140px_1fr_2fr] md:items-center"><div className="text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={row.industry.en} zh={row.industry.zh} /></div><div className="flex items-center gap-3"><div className="h-3 flex-1 overflow-hidden rounded-full" style={{ background: "#E7DDCC" }}><div className="h-full rounded-full" style={{ width: `${((7 - row.rank) / 6) * 100}%`, background: theme.teal }} /></div><div className="w-6 text-sm font-semibold" style={{ color: theme.teal }}>{row.rank}</div></div><div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={row.logic.en} zh={row.logic.zh} /></div></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function IndustrySection({ mode }) {
  const compTypeRows = [
    { type: { en: "Monopoly", zh: "Monopoly" }, feature: { en: "Single supplier. Most favorable unless constrained by regulation or politics.", zh: "單一供應者。若未被管制或政治限制，通常最有利。" } },
    { type: { en: "Oligopoly", zh: "Oligopoly" }, feature: { en: "A limited number of firms competing with interdependence.", zh: "少數幾家互相依賴地競爭。" } },
    { type: { en: "Hypercompetition", zh: "Hypercompetition" }, feature: { en: "Several firms plus plausible related-industry entrants; advantages are short-lived.", zh: "多家廠商加上來自相關產業的潛在進入者；優勢壽命較短。" } },
    { type: { en: "Perfect competition", zh: "Perfect competition" }, feature: { en: "Many firms, weak differentiation, heavy price competition.", zh: "眾多玩家、差異化弱、價格競爭重。" } },
    { type: { en: "Subsidized competition", zh: "Subsidized competition" }, feature: { en: "Loss-making firms are kept alive, so price pressure persists.", zh: "虧損公司仍被維持存活，價格壓力持續。" } },
  ];
  const leadRows = [
    { lead: { en: "Standard setter", zh: "標準制定者" }, example: { en: "IBM System 360, IBM PC", zh: "IBM System 360、IBM PC" } },
    { lead: { en: "Statesman", zh: "產業長者" }, example: { en: "HSBC in Hong Kong banking", zh: "香港銀行業中的 HSBC" } },
    { lead: { en: "Enforcer", zh: "規則執行者" }, example: { en: "Saudi Aramco in OPEC context", zh: "OPEC 脈絡中的 Saudi Aramco" } },
    { lead: { en: "Predator", zh: "掠食者" }, example: { en: "Microsoft in the browser wars", zh: "瀏覽器戰爭中的 Microsoft" } },
    { lead: { en: "Frame-breaker", zh: "框架打破者" }, example: { en: "Dell, Southwest Airlines", zh: "Dell、Southwest Airlines" } },
    { lead: { en: "Outlier", zh: "異類" }, example: { en: "Ben & Jerry's, Body Shop", zh: "Ben & Jerry's、Body Shop" } },
  ];
  return (
    <SectionShell id="industry" mode={mode} titleEn="Industry level" titleZh="產業層次" kickerEn="Micro drivers" kickerZh="微觀驅動" refs={["Chapter 4", "Lecture Notes Ch.4", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Industry definition" titleZh="產業定義" mode={mode} tone="teal"><BiText mode={mode} block en='An industry consists of products or services with similar form and function that are in direct competition with each other, and the firms that supply them. This is a strategic definition, not a statistical one. Boundaries can merge or fragment over time.' zh='產業是指具有相似 form 與 function、彼此直接競爭的產品或服務，以及提供它們的 firms。這是策略性定義，不是統計分類。邊界會隨時間整合或分裂。' /></InfoCard>
        <IndustryBoundaryMethod mode={mode} />
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <InfoCard titleEn="Competition type spectrum" titleZh="競爭型態光譜" mode={mode} tone="gold">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em]" style={{ color: theme.subInk }}><span>Low profitability</span><span>→</span><span>High profitability</span></div>
            <div className="flex flex-wrap items-center gap-2">{["Subsidized", "Perfect", "Hyper", "Oligopoly", "Monopoly"].map((item, idx) => <React.Fragment key={item}><span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: idx >= 3 ? "#EDF4F6" : "#FBF1ED", color: idx >= 3 ? theme.teal : theme.danger }}>{item}</span>{idx < 4 ? <span style={{ color: theme.gold }}>→</span> : null}</React.Fragment>)}</div>
            <div className="mt-4"><SimpleTable mode={mode} size="compact" columns={[{ key: "type", en: "Type", zh: "類型" }, { key: "feature", en: "What it means", zh: "核心特徵" }]} rows={compTypeRows} /></div>
          </InfoCard>
          <InfoCard titleEn="Three dimensions of competition" titleZh="競爭三維分析" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Type: where the industry sits on the five-type spectrum.", zh: "Type：產業落在五種競爭型態中的哪一種。" },
            { en: "Competitive variables: price, quality / performance, brand, service, speed, access, and ecosystem / platform.", zh: "Competitive variables：price、quality / performance、brand、service、speed、access、ecosystem / platform。" },
            { en: "Ferocity: the nine drivers tell you how violent competition is likely to become.", zh: "Ferocity：九個驅動因素決定競爭有多激烈。" },
            { en: "Key insight: even within oligopoly, profit depends on where firms compete. Hong Kong property competed on location and features; Hong Kong mobile telecom often competed on price because of overcapacity.", zh: "關鍵洞察：即便同是 oligopoly，真正影響 profit 的是在哪個 variable 上競爭。香港地產靠位置與產品特徵獲利，香港行動電信則常因過剩產能而走向價格競爭。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Ferocity checklist" titleZh="競爭激烈度九宮格" mode={mode}><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{[["Low concentration", "Industry concentration 低"],["Low collusion possibility", "Collusion 可能性低"],["Low or negative growth", "Industry growth 低或負"],["High homogeneity", "Product homogeneity 高"],["Low differentiation", "Differentiation 低"],["Low capacity utilization", "Capacity utilization 低"],["High corporate stakes", "Corporate stakes 高"],["High exit barriers", "Exit barriers 高"],["Low entry barriers", "Entry barriers 低"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Lead firm logic" titleZh="Lead firm 邏輯" mode={mode} tone="teal"><SimpleTable mode={mode} size="compact" columns={[{ key: "lead", en: "Lead firm type", zh: "類型" }, { key: "example", en: "Illustration", zh: "例子" }]} rows={leadRows} /><div className="mt-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia’s earlier advantage." zh="Nokia 的高分洞察：早期的 Nokia 因北歐標準進入歐洲再成為世界標準，而扮演了 standard setter。Apple 後來把標準改寫成 software platform，於是 Apple 成了 frame-breaker，Nokia 的舊優勢立刻被掏空。" /></div></InfoCard>
          <InfoCard titleEn="Competitor Envelope Analysis™" titleZh="Competitor Envelope Analysis™" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "What if competitors optimize activities?", zh: "如果 competitors 把 activities 優化到最好會怎樣？" },
            { en: "What if they fully leverage resources and knowledge?", zh: "如果他們把 resources 與 knowledge 發揮到極致會怎樣？" },
            { en: "What if they overcome strategic shortcomings?", zh: "如果他們補上自己的短板會怎樣？" },
            { en: "What if they add new resources or knowledge?", zh: "如果他們新增 resources 或 knowledge 會怎樣？" },
            { en: "What if they are acquired by savvy, deep-pocketed firms?", zh: "如果他們被更聰明且資金更深的公司接手會怎樣？" },
            { en: "What would we do if we managed them?", zh: "如果我們來管理 competitors，會怎麼做？" },
            { en: "How tough could they become if they are smart?", zh: "如果 competitors 夠聰明，未來可能變多難纏？" },
          ]} /><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions." zh="不要只停在今天的對手。還要加進來自 related industries 的新進者，以及尚未被滿足的 demand segments。很多最大威脅都來自這兩邊。" /></div></InfoCard>
        </div>
        <InfoCard titleEn="Coopetition" titleZh="Coopetition" mode={mode}><BiText mode={mode} block en="Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe." zh="Coopetition 的意思是，同一組 players 可能在某個活動合作，在另一個活動競爭。考試作答時，要在 activity level 上拆解，而不是把對方單純貼成 partner 或 competitor。" /></InfoCard>
      </div>
    </SectionShell>
  );
}

function FirmSection({ mode }) {
  return (
    <SectionShell id="firm" mode={mode} titleEn="Firm level" titleZh="公司層次" kickerEn="SPARK and beyond" kickerZh="SPARK 與其延伸" refs={["Chapter 3", "Practice Questions", "Master Review"]}>
      <div className="space-y-5">
        <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <InfoCard titleEn="Performance is relative" titleZh="Performance 永遠是相對概念" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2">{[["Competitors", "Competitors"],["Benchmarks", "Benchmarks"],["History", "History"],["Expectations", "Expectations"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div><div className="mt-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe." zh="任何 'firm performs well / poorly' 的句子，都要先說 relative to whom。若沒先交代 comparator，作答在機械上就不安全。" /></div></InfoCard>
          <InfoCard titleEn="SPARK" titleZh="SPARK" mode={mode} tone="plum"><div className="grid gap-3 md:grid-cols-5">{[["Scope","Where we compete","Scope","在哪裡競爭"],["Positioning","How we compete","Positioning","如何競爭"],["Activities","What we do","Activities","做甚麼"],["Resources","What we use","Resources","用甚麼"],["Knowledge","What we know","Knowledge","知道甚麼"]].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
        </div>
        <SparkArchitecture mode={mode} />
        <InfoCard titleEn="Do not stop at SPARK" titleZh="不能只停在 SPARK" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{[
          ["SPARK","SPARK","Where, how, what, with what, and with what knowledge.","在哪裡、如何、做甚麼、用甚麼、靠甚麼知識。"],["Leadership","Leadership","Direction, motivation, ethics, standards, external face.","方向、動機、倫理、標準、對外面貌。"],["Execution","Execution","Knowing what to do and getting it done despite inertia.","知道要做甚麼，並且能對抗 inertia 把事做成。"],["Organization & management","Organization & Management","Division of labor, structures, systems, HR, capabilities.","分工、結構、系統、人力、組織能力。"],["Governance","Governance","Governance standards, compliance cost, decision impact.","治理標準、合規成本、對決策的影響。"],["Firm-specific policies & institutions","Firm-Specific Policies & Institutions","Subsidies, support, dedicated training bodies, special institutions.","補貼、支持、專屬訓練體系、特殊制度安排。"],
        ].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><BiText mode={mode} en={en2} zh={zh2} /></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Scope logic" titleZh="Scope 邏輯" mode={mode}><BulletList mode={mode} items={[
            { en: "Corporate / industry scope: how many industries the company competes in.", zh: "Corporate / industry scope：公司參與多少個產業。" },
            { en: "Within-industry scope: which segments inside the industry the company serves.", zh: "Within-industry scope：在同一產業內服務哪些 segments。" },
            { en: "Geographic scope: which geographic markets the firm serves.", zh: "Geographic scope：公司服務哪些地理市場。" },
            { en: "There is no universally correct scope. The test is internal consistency and fit with opportunity.", zh: "沒有普遍正確的 scope。真正的檢驗標準是內部一致性與市場機會匹配。" },
            { en: "Classic contrast: Swatch broadlines from Flik Flak to Breguet, while Rolex focuses on the upper segments.", zh: "經典對比：Swatch 從 Flik Flak 到 Breguet 橫跨多個 segment，而 Rolex 集中在高端區段。" },
          ]} /></InfoCard>
          <InfoCard titleEn="The three dysfunction formulas" titleZh="三個 dysfunction 公式" mode={mode} tone="danger"><SimpleTable mode={mode} size="compact" columns={[{ key: "missing", en: "What is missing", zh: "缺了甚麼" },{ key: "result", en: "Result", zh: "結果" }]} rows={[
            { missing: { en: "Action is missing from analysis + leadership", zh: "Analysis + Leadership 少了 Action" }, result: { en: "Paralysis", zh: "Paralysis" } },
            { missing: { en: "Analysis is missing from action + leadership", zh: "Action + Leadership 少了 Analysis" }, result: { en: "Random or misdirected", zh: "Random / Misdirected" } },
            { missing: { en: "Leadership is missing from analysis + action", zh: "Analysis + Action 少了 Leadership" }, result: { en: "Scattered and confused", zh: "Scattered and Confused" } },
          ]} /></InfoCard>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Leadership is a double-edged sword" titleZh="Leadership 是雙面刃" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Leadership can create firms, categories, and strategic direction.", zh: "Leadership 能建立公司、品類與策略方向。" },
            { en: "But leadership can also lock in a mental model that becomes vulnerability later.", zh: "但 leadership 也可能把公司鎖進一個之後變成弱點的 mental model。" },
            { en: "High-scoring NEC logic: analyze Kobayashi through Enright’s firm framework, not by defaulting to Prahalad and Hamel’s core competence framing.", zh: "NEC 的高分寫法：用 Enright 的 firm framework 分析 Kobayashi，而不是直接套 Prahalad-Hamel 的 core competence framing。" },
          ]} /></InfoCard>
          <InfoCard titleEn="VRIO applied to A, R, and K" titleZh="VRIO 要套在 A、R、K" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "VRIO is not only for resources. It can be applied to activities, resources, and knowledge.", zh: "VRIO 不只套 resources，也可以套 activities、resources、knowledge。" },
            { en: "Home Alone: the first movie did not yet prove value; the second proved value and scarcity; bargaining then shifted to Culkin; the third showed the studio was not organized to appropriate the value.", zh: "Home Alone：第一部還沒證明 value；第二部證明了 value 與稀缺性；接著 bargaining power 轉向 Culkin；第三部則顯示 studio 並沒有組織好去 appropriation 那份價值。" },
            { en: "Natalie Portman’s three-picture deal was an appropriability move: lock the resource before success rewrites the bargaining table.", zh: "Natalie Portman 的三部片合約，是 appropriation 管理：在成功改寫 bargaining table 之前先把資源鎖住。" },
            { en: "John Carter and The Lone Ranger remind you that valuable, rare, and hard-to-imitate ingredients can still fail when organization and overall fit are wrong.", zh: "John Carter 與 The Lone Ranger 提醒你：就算有 valuable、rare、hard-to-imitate 的要素，只要 organization 與整體配適錯誤，仍然會失敗。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Time dimension" titleZh="時間維度" mode={mode}><BulletList mode={mode} items={[
          { en: "Commitment strategy: large commitments when the environment rewards durability.", zh: "Commitment strategy：當環境獎勵持久性時，做大規模承諾。" },
          { en: "Hustle strategy: small, fast moves when temporary advantage matters more.", zh: "Hustle strategy：當短期優勢更重要時，用小而快的移動。" },
          { en: "Real options strategy: preserve flexibility in deep uncertainty.", zh: "Real options strategy：在高度不確定時保留彈性。" },
          { en: "This is Tier 1 material, but lower on final-exam priority than economics, CEA, international, corporate, and implementation.", zh: "這是 Tier 1 內容，但在 final exam 的優先度低於 economics、CEA、international、corporate、implementation。" },
        ]} /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MesoSection({ mode }) {
  return (
    <SectionShell id="meso" mode={mode} titleEn="Cluster / meso level" titleZh="Cluster / Meso Level" kickerEn="Business ecosystems" kickerZh="商業生態與群聚" refs={["Chapter 5", "Lecture Notes Ch.5", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight building blocks" titleZh="八個核心組成" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          ["Demand","Demand","Size, growth, segment structure, bundling, complementarities.","規模、成長、segment 結構、bundling、complementarities。"],["Customers","Customers","Identity, access, bargaining power, price sensitivity, competition potential.","身分、接觸、議價、價格敏感度、與我們競爭的可能性。"],["Inputs","Inputs","Factor, human, ecological, produced, technological, infrastructure inputs.","要素、人力、生態、製成、技術、基礎設施投入。"],["Suppliers","Suppliers","Number, identity, access, bargaining, price sensitivity, collaboration potential.","數量、身分、接觸、議價、價格敏感度、合作可能性。"],["Shared resources / activities","Shared Resources / Activities","Shared technologies, channels, customers, knowledge, scope economies.","共享技術、通路、客戶、知識與 scope economies。"],["Complementarities","Complementarities","Other industries or products that raise demand and willingness to pay.","能提升 demand 與 willingness to pay 的互補關係。"],["Substitutes","Substitutes","Indirect replacements that cap profit potential.","會壓制利潤上限的替代選項。"],["Meso policies / institutions","Meso Policies / Institutions","Cluster-specific policies and supporting institutions.","針對 cluster 的政策與支援制度。"],
        ].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Bargaining power is a three-axis diagnosis" titleZh="議價力是三軸診斷" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Intrinsic bargaining strength: concentration, substitutes, switching costs, pull-through, vertical integration threat.", zh: "Intrinsic bargaining strength：集中度、替代品、switching costs、pull-through、垂直整合威脅。" },
            { en: "Price sensitivity: cost share, strategy, profitability, and quality impact.", zh: "Price sensitivity：成本占比、策略、獲利狀況與品質影響。" },
            { en: "Willingness to use power: even strong players do not always press as hard as they could.", zh: "Willingness to use power：就算很強，實際上也不一定會用到極致。" },
            { en: "Real bargaining outcome depends on the interaction of all three axes, not just abstract strength.", zh: "真實 bargaining outcome 取決於三軸交互，而不是只看表面 strength。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Regional clusters and why they persist" titleZh="區域群聚以及為何它們難以被撼動" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Typical examples include Silicon Valley, Hollywood, London / New York finance, Swiss luxury watches, Bangalore, and Hsinchu.", zh: "常見例子包括 Silicon Valley、Hollywood、倫敦 / 紐約金融、瑞士奢華腕錶、Bangalore、Hsinchu。" },
            { en: "Clusters can arise from natural resources, market proximity, labor pooling, specialized input suppliers, shared infrastructure, reduced transaction cost, and knowledge spillovers.", zh: "群聚可以源自自然資源、市場接近性、勞動力池、專業投入供應商、共享基礎設施、較低交易成本與知識外溢。" },
            { en: "Once self-sustaining, they become hard to dislodge.", zh: "一旦形成自我維持，往往就很難被移除。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Ecosystem warning" titleZh="生態系警告" mode={mode} tone="danger"><BiText mode={mode} block en="Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away." zh="Externalization 並不會自動是好事。一家公司的 asset-light 策略，通常建立在另一家公司承擔 asset-heavy burden 的基礎上。若你說不清 value 在哪裡被創造、在哪裡被 appropriated、又在哪裡被 defended，你很可能正在把價值送出去。" /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MacroSection({ mode }) {
  return (
    <SectionShell id="macro" mode={mode} titleEn="National / macro level" titleZh="National / Macro Level" kickerEn="Country conditions" kickerZh="國家條件" refs={["Chapter 6", "P&G in China", "Master Review"]}>
      <div className="space-y-5">
        <div className="grid gap-4 xl:grid-cols-4">{[
          ["Macroeconomic conditions","Macroeconomic Conditions","Aggregate demand, inflation, interest rates, exchange rates, unemployment, fiscal balances, capital markets, savings rates. Check level, growth, and volatility.","總體需求、通膨、利率、匯率、失業、財政平衡、資本市場、儲蓄率。要同時看 level、growth、volatility。"],["Macro government policies","Macro Government Policies","Monetary, fiscal, trade, investment, industrial, promotion, infrastructure, manpower, education, and science policies.","貨幣、財政、貿易、投資、產業、推廣、基礎建設、人力、教育與科技政策。"],["Macro institutions","Macro Institutions","Legal system, regulation, property rights, contract enforcement, and government quality.","法制、監管、產權、契約執行與政府品質。"],["Civil society and culture","Civil Society & Culture","Agendas, social acceptability, attitudes, structure, cohesion, cultural patterns.","議題取向、社會可接受性、態度、社會結構、凝聚力與文化模式。"],
        ].map(([en1, zh1, en2, zh2]) => <InfoCard key={en1} titleEn={en1} titleZh={zh1} mode={mode} tone="teal"><BiText mode={mode} block en={en2} zh={zh2} /></InfoCard>)}</div>
        <InfoCard titleEn="Income distribution matters more than headline averages suggest" titleZh="Income distribution 比平均數更重要" mode={mode} tone="gold"><BulletList mode={mode} items={[
          { en: "Large-population countries can sustain premium and luxury demand even at modest average income levels because the upper-income groups are large in absolute terms.", zh: "大型人口國家即使平均收入不高，也可能支撐 premium 與 luxury 需求，因為高所得族群的絕對數量很大。" },
          { en: "Bottom of the Pyramid logic matters: profitable models may require simpler products, smaller pack sizes, and informal channels.", zh: "Bottom of the Pyramid 的邏輯很重要：可獲利模式可能需要更簡單的產品、更小包裝與更非正式的渠道。" },
          { en: "P&G in China is the signature national-level case because macro conditions, income distribution, consumer change, and channel evolution all mattered simultaneously.", zh: "P&G in China 是代表性的 national-level case，因為總體條件、所得分布、消費者變化與通路演變同時作用。" },
        ]} /></InfoCard>
        <InfoCard titleEn="Exam framing" titleZh="考試 framing" mode={mode} tone="plum"><BiText mode={mode} block en='The macro-level question is not "Is this a good business in the abstract?" The better question is: "Is this a good business in this country, under this policy mix, with this institutional quality, this demography, and this social setting?"' zh='Macro-level 真正要問的，不是「抽象來看這是不是好 business」，而是「在這個國家、這套政策、這種制度品質、這個人口結構與社會條件下，這是不是好 business？」' /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MetaSection({ mode }) {
  return (
    <SectionShell id="meta" mode={mode} titleEn="Supranational / meta level" titleZh="Supranational / Meta Level" kickerEn="Beyond the nation" kickerZh="超出國界" refs={["Chapter 1", "Chapter 7", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight supranational drivers" titleZh="八個超國家驅動因素" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[["International geopolitics","International Geo-politics"],["International economic conditions","International Economic Conditions"],["Global technology trends","Global Technology Trends"],["Social and environmental issues","Social and Environmental Issues"],["Multilateral organizations","Multilateral Organizations"],["Supranational policies and trade blocs","Supranational Policies & Trade Blocs"],["Foreign governments","Foreign Governments"],["Foreign multinationals and other supranational groups","Foreign Multinationals & Other Supranational Groups"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn='The "Inverted T" view of the world' titleZh='「倒 T 型」世界觀' mode={mode} tone="gold"><BiText mode={mode} block en="The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution." zh="世界並不像某些流行說法那樣 flat。創造 ideas 的能力仍高度集中在特定的人、公司與地點；但執行資源則相對分散。關鍵策略問題是：誰會成為 flattener，誰又會被壓成只能在 execution 上競爭的 flattenee。" /></InfoCard>
          <InfoCard titleEn="Why this matters so much for the final" titleZh="為甚麼它對期末特別重要" mode={mode} tone="plum"><BiText mode={mode} block en="Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions." zh="Supranational drivers 不只是改變 profit 高低。它們甚至會直接改寫誰能進場、以甚麼規則進場、用甚麼技術進場，以及面對甚麼 geopolitical constraints。這也是它在 international 與 corporate strategy 題目中特別重要的原因。" /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function InternationalSection({ mode }) {
  const rows = [
    { q: { en: "How many countries?", zh: "有多少國家？" } }, { q: { en: "Which countries?", zh: "是哪一些國家？" } }, { q: { en: "How do the five levels differ from the home country?", zh: "五個層次相對母國有何不同？" } }, { q: { en: "What SPARK is needed in each country?", zh: "每個國家要有甚麼 SPARK？" } }, { q: { en: "How should SPARK be matched to country conditions?", zh: "如何把 SPARK 對上各國條件？" } }, { q: { en: "How should the international company be organized?", zh: "國際公司要如何組織？" } }, { q: { en: "Are the countries similar or meaningfully different?", zh: "這些國家彼此相似，還是有本質差異？" } }, { q: { en: "Is the international company more than the sum of the parts?", zh: "這家國際企業有沒有大於 parts 的總和？" } },
  ];
  return (
    <SectionShell id="international" mode={mode} titleEn="International strategy" titleZh="國際策略" kickerEn="High-weight playbook" kickerZh="高權重作答藍圖" refs={["Last Day", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight-question blueprint" titleZh="八問藍圖" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{rows.map((row, idx) => <div key={idx} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><div className="mb-1 text-[11px] uppercase tracking-[0.16em]" style={{ color: theme.plum }}>{String(idx + 1).padStart(2, "0")}</div><BiText mode={mode} en={row.q.en} zh={row.q.zh} /></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Global / local split" titleZh="Global / Local 切法" mode={mode} tone="gold"><SimpleTable mode={mode} size="compact" columns={[{ key: "bucket", en: "Bucket", zh: "類別" }, { key: "global", en: "What to globalize", zh: "應 globalize 的部分" }, { key: "local", en: "What to localize", zh: "應 localize 的部分" }]} rows={[
            { bucket: { en: "Financial / compliance", zh: "Financial / Compliance" }, global: { en: "Envelope, standards, control architecture", zh: "整體框架、標準、控制結構" }, local: { en: "Local legal expertise only", zh: "只保留必要的 local legal expertise" } },
            { bucket: { en: "Market-facing", zh: "Market-facing" }, global: { en: "Only broad brand consistency", zh: "只保留品牌一致性的大框架" }, local: { en: "Account management, BD, marketing, sales", zh: "Account management、BD、marketing、sales" } },
            { bucket: { en: "Production", zh: "Production" }, global: { en: "Depends on scale economies", zh: "取決於 scale economies" }, local: { en: "Often logistics and customization require local presence", zh: "物流與客製化常要求在地化" } },
          ]} /><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en='In an answer, present this as a reasoned split implied by the reading, not as a slogan.' zh='考場上不要把它講成口號，而要表述成 reading 所暗示出的合理切法。' /></div></InfoCard>
          <InfoCard titleEn="Case transfer" titleZh="案例轉移應用" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "WPP’s failure: localizing financial controls and compliance to founder-led units in high-risk markets made bribery highly likely.", zh: "WPP 的錯誤：把 financial controls 與 compliance 也下放給高風險市場中的 founder-led units，幾乎等於把 bribery 風險制度化。" },
            { en: "Corrective logic: keep compliance global, require multi-layer approval for cross-border payments, and use independent audit and whistleblower systems.", zh: "正確修正：compliance 要維持 global，跨境付款要多層審批，並搭配獨立審計與 whistleblower 機制。" },
            { en: "RTZ / Chinalco complexity: a country can simultaneously be customer, shareholder, partner, regulator, and geopolitical force. One-size-fits-all international strategy fails under that condition.", zh: "RTZ / Chinalco 的複雜性：同一個國家可能同時是 customer、shareholder、partner、regulator 與 geopolitical force。這種情況下，一套國際策略打天下一定失敗。" },
          ]} /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function CorporateSection({ mode }) {
  return (
    <SectionShell id="corporate" mode={mode} titleEn="Corporate strategy" titleZh="企業總體策略" kickerEn="High-weight playbook" kickerZh="高權重作答藍圖" refs={["Last Day", "Chapter 3", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="First test" titleZh="第一個問題" mode={mode} tone="teal"><BiText mode={mode} block en="Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it." zh="第一個問題是：這家公司有沒有大於 parts 的總和？如果答案是否定的，投資人可以自己分散投資，這種 corporate structure 反而可能正在毀掉價值。" /></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Eight-question blueprint" titleZh="八問藍圖" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "How many industries?", zh: "有幾個 industries？" }, { en: "Which industries?", zh: "是哪一些 industries？" }, { en: "How do the five levels differ from the firm’s existing businesses?", zh: "新舊 business 在五個層次上有何差異？" }, { en: "What SPARK is needed in each business?", zh: "每個 business 需要甚麼 SPARK？" }, { en: "How should SPARK be matched to business conditions?", zh: "如何讓 SPARK 對應 business 條件？" }, { en: "How should the multi-business company be organized?", zh: "這個 multi-business company 要如何組織？" }, { en: "Where is value created: across subsidiaries, or between HQ and subsidiaries?", zh: "價值究竟是在 subsidiaries 之間，還是在 HQ 與 subsidiaries 之間被創造？" }, { en: "Are the businesses related or unrelated?", zh: "這些 businesses 是 related 還是 unrelated？" },
          ]} /></InfoCard>
          <InfoCard titleEn="Six value-creation mechanisms" titleZh="六種 corporate value creation 機制" mode={mode} tone="plum"><SimpleTable mode={mode} size="compact" columns={[{ key: "m", en: "Mechanism", zh: "機制" }, { key: "t", en: "How to test it", zh: "考試檢驗方式" }]} rows={[
            { m: { en: "Scope economies", zh: "Scope economies" }, t: { en: "Can you point to real, quantifiable shared cost or quality gains?", zh: "能否指出真實、可量化的共用成本或品質效益？" } },
            { m: { en: "Shared resources", zh: "Shared resources" }, t: { en: "Is the same brand, platform, or channel reused meaningfully across businesses?", zh: "同一品牌、平台或通路是否真的跨業務被重複使用？" } },
            { m: { en: "Knowledge transfer", zh: "Knowledge transfer" }, t: { en: "Is learning from one business improving another?", zh: "一個 business 的學習，有沒有真的改善另一個 business？" } },
            { m: { en: "Internal capital market", zh: "Internal capital market" }, t: { en: "Is HQ allocating capital better than the external market would?", zh: "HQ 的資本配置是否優於外部市場？" } },
            { m: { en: "Managerial discipline", zh: "Managerial discipline" }, t: { en: "Does HQ actually improve operational discipline after acquisition or integration?", zh: "HQ 在併購或整合後，是否真的提升 operational discipline？" } },
            { m: { en: "Bargaining leverage", zh: "Bargaining leverage" }, t: { en: "Can the corporation negotiate better terms because it aggregates scale or relationships?", zh: "公司是否因整合規模或關係而獲得更強議價力？" } },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Canonical case signals" titleZh="代表案例訊號" mode={mode}><BulletList mode={mode} items={[
          { en: "Walmart: focused retail scope can still create enough scope economies within a narrow domain.", zh: "Walmart：即使 corporate scope 不廣，只要在 retail 內部有足夠 scope economies，仍然成立。" },
          { en: "Mitsubishi: broad historical structure invites a sum-of-parts question.", zh: "Mitsubishi：廣泛的歷史性結構，天然會被問 sum-of-parts 問題。" },
          { en: "Acer / Wistron: when units inside the same corporation undermine each other, breakup can be the value-creating move.", zh: "Acer / Wistron：當同一 corporate structure 內的 business units 互相破壞，分拆反而才是創造價值的動作。" },
          { en: "Disney under Iger: related diversification worked because Pixar, Marvel, Lucasfilm, and Fox all deepened the IP content system.", zh: "Disney 在 Iger 時代：related diversification 成立，是因為 Pixar、Marvel、Lucasfilm、Fox 都在加深 IP content system。" },
          { en: "Newell: classic case of HQ value through managerial discipline.", zh: "Newell：典型的 HQ 透過 managerial discipline 加值。" },
        ]} /></InfoCard>
      </div>
    </SectionShell>
  );
}

function ImplementationSection({ mode }) {
  const stages = [
    { en: "Knowing-Not-Knowing", zh: "Knowing-Not-Knowing", note: { en: "What is the organization not seeing?", zh: "組織到底沒看見甚麼？" } },
    { en: "Knowing-Doing Gap", zh: "Knowing-Doing Gap", note: { en: "Why did behavior not change after knowledge existed?", zh: "明明知道了，為甚麼行為沒有改？" } },
    { en: "Generating Clarity", zh: "Generating Clarity", note: { en: "Was the instruction specific enough to act on?", zh: "訊息是否具體到足以被執行？" } },
    { en: "Overcoming Resistance", zh: "Overcoming Resistance", note: { en: "Where is the resistance really coming from?", zh: "真正的抗拒來自哪裡？" } },
    { en: "Creating the Right Environment", zh: "Creating the Right Environment", note: { en: "What is the environment rewarding or punishing?", zh: "環境究竟在獎勵甚麼、懲罰甚麼？" } },
  ];
  return (
    <SectionShell id="implementation" mode={mode} titleEn="Implementation" titleZh="Implementation" kickerEn="High-weight organizational diagnosis" kickerZh="高權重組織診斷" refs={["Implementation Lecture", "Last Day", "Nokia Reading", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="The five-block implementation system" titleZh="五段 implementation 系統" mode={mode} tone="teal"><StageRibbon mode={mode} items={stages} /></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Knowing-Not-Knowing: seven reasons" titleZh="Knowing-Not-Knowing 的七個原因" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Problems of framing", zh: "Problems of framing" }, { en: "Incorrect perceptions", zh: "Incorrect perceptions" }, { en: "Issues with reasoning", zh: "Issues with reasoning" }, { en: "Ignoring the obvious", zh: "Ignoring the obvious" }, { en: "Going along with the pack", zh: "Going along with the pack" }, { en: "Believing others have done the homework", zh: "Believing others have done the homework" }, { en: "Willful blindness", zh: "Willful blindness" },
          ]} /></InfoCard>
          <InfoCard titleEn="Resistance and the commitment ladder" titleZh="Resistance 與 commitment ladder" mode={mode} tone="plum"><div className="mb-4"><BulletList mode={mode} items={[
            { en: "Six common resistance sources: fear of the unknown, loss of control, habit, emotional attachments, cognitive dissonance, social influences.", zh: "六種常見 resistance 來源：fear of the unknown、loss of control、habit、emotional attachments、cognitive dissonance、social influences。" },
            { en: "Six practical responses: acknowledge feelings, gather information, take small steps, seek support, understand others, bring people along.", zh: "六種實務回應：acknowledge feelings、gather information、take small steps、seek support、understand others、bring people along。" },
          ]} /></div><div className="flex flex-wrap items-center gap-2">{["I know", "I understand", "I am considering", "I want to", "I will", "I commit"].map((step, idx) => <React.Fragment key={step}><span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: idx === 5 ? "#EDF4F6" : "#FBF8F0", color: idx === 5 ? theme.teal : theme.ink }}>{step}</span>{idx < 5 ? <span style={{ color: theme.gold }}>→</span> : null}</React.Fragment>)}</div><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en='A memo and a meeting do not equal commitment. "I know" is nowhere near "I commit."' zh='發一封 memo、開一次 meeting，不代表 commitment 已經形成。從 "I know" 到 "I commit" 之間有很長的距離。' /></div></InfoCard>
        </div>
        <InfoCard titleEn="Behavioral anchors and why they matter" titleZh="行為實驗錨點與它們的意義" mode={mode}><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"><MetricBar mode={mode} titleEn="Handwashing self-report" titleZh="洗手自述" value={73} subEn="Self-report vs observed behavior" subZh="自述與實際行為差距" /><MetricBar mode={mode} titleEn="Handwashing observed" titleZh="洗手觀察值" value={9} tone="danger" /><MetricBar mode={mode} titleEn="Asch conformity" titleZh="Asch 服從率" value={37} tone="gold" /><MetricBar mode={mode} titleEn="Asch with one ally" titleZh="Asch 單一同盟者" value={5} tone="ok" /><MetricBar mode={mode} titleEn="Private written response" titleZh="匿名書面回應" value={12} tone="plum" /></div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><MetricBar mode={mode} titleEn="Good Samaritan, early" titleZh="好撒瑪利亞人，提早" value={63} /><MetricBar mode={mode} titleEn="Good Samaritan, on time" titleZh="好撒瑪利亞人，準時" value={45} tone="gold" /><MetricBar mode={mode} titleEn="Good Samaritan, late" titleZh="好撒瑪利亞人，遲到" value={10} tone="danger" /><MetricBar mode={mode} titleEn="Telephone-game loss per pass" titleZh="傳話每次損失" value={20} tone="plum" /></div><div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]"><InfoCard titleEn="70 / 30 principle" titleZh="70 / 30 原則" mode={mode} tone="gold"><BiText mode={mode} block en="The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality." zh="管理者最常犯的錯，是系統性低估環境力量。教學重點在於：行為更多是由情境而不是人格決定。若想改變行為，比起說教人格，先改環境。" /></InfoCard><InfoCard titleEn="Kotter’s eight accelerators" titleZh="Kotter 八項加速器" mode={mode} tone="plum"><BulletList mode={mode} items={[
          { en: "Create urgency and commitment", zh: "建立 urgency 與 commitment" }, { en: "Build a guiding coalition", zh: "建立 guiding coalition" }, { en: "Clarify the vision", zh: "把 vision 說清楚" }, { en: "Create a volunteer army", zh: "形成 volunteer army" }, { en: "Remove barriers", zh: "拆掉障礙" }, { en: "Motivate through progress", zh: "用 progress 持續激勵" }, { en: "Sustain and scale", zh: "持續並擴大" }, { en: "Solidify the new normal", zh: "固化成 new normal" },
        ]} /></InfoCard></div></InfoCard>
        <InfoCard titleEn="Nokia as the implementation transfer case" titleZh="Nokia 作為 implementation transfer 標準案例" mode={mode} tone="danger"><SimpleTable mode={mode} size="compact" columns={[{ key: "p", en: "Pathology", zh: "病理" }, { key: "e", en: "Reading signal", zh: "reading 證據" }]} rows={[
          { p: { en: "Knowing-Not-Knowing / willful blindness", zh: "Knowing-Not-Knowing / willful blindness" }, e: { en: "Research and prototype signals existed, but action did not follow.", zh: "研究與 prototype 訊號早已存在，但沒有轉成行動。" } },
          { p: { en: "Knowing-Doing Gap", zh: "Knowing-Doing Gap" }, e: { en: "Symbian problems were understood without corresponding strategic movement.", zh: "Symbian 的問題已被理解，但沒有對應的策略位移。" } },
          { p: { en: "Framing error", zh: "Framing error" }, e: { en: "Leadership kept treating Nokia as a hardware company rather than a software-platform competition problem.", zh: "高層持續把 Nokia 當成 hardware company，而不是 software-platform 競爭問題。" } },
          { p: { en: "Communication failure", zh: "Communication failure" }, e: { en: "Mid-level objections were not formally recorded or escalated.", zh: "中層反對意見沒有被正式記錄或有效上達。" } },
          { p: { en: "Pluralistic silence and fear", zh: "Pluralistic silence 與 fear" }, e: { en: "Managers gave optimistic progress reports despite knowing targets were unrealistic.", zh: "管理者明知時程不合理，仍持續回報樂觀進度。" } },
          { p: { en: "Wrong environment", zh: "Wrong environment" }, e: { en: "Quarterly pressure, consensus norms, and layered approvals punished truth-telling.", zh: "季度壓力、共識文化與多層核准制度都在懲罰真話。" } },
        ]} /><div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]"><InfoCard titleEn="Why Nokia was susceptible" titleZh="為甚麼 Nokia 特別脆弱" mode={mode}><BulletList mode={mode} items={[
          { en: "Success hardening", zh: "先前成功造成硬化" }, { en: "Path dependency from earlier standard-setting success", zh: "早年 standard-setting 成功帶來 path dependency" }, { en: "Hardware-heavy leadership composition", zh: "硬體導向的領導結構" }, { en: "Consensus culture", zh: "共識型文化" }, { en: "Quarterly shareholder pressure", zh: "季度股東壓力" }, { en: "Multi-layer approval systems", zh: "多層核准流程" },
        ]} /></InfoCard><InfoCard titleEn="What firms should do instead" titleZh="企業應如何避免重蹈覆轍" mode={mode}><BulletList mode={mode} items={[
          { en: "Use anonymous written judgment before discussion.", zh: "先做匿名書面判斷，再進入討論。" }, { en: "Run red-team or outside review windows to challenge the dominant view.", zh: "設 red-team 或外部 review window 去推翻主流看法。" }, { en: "Break multi-layer approval barriers for disruptive projects.", zh: "替顛覆型專案拆掉多層核准障礙。" }, { en: "Reward the reporting of risks and blockers, not just progress.", zh: "獎勵風險與障礙的回報，而不是只獎勵 progress。" }, { en: "Preserve institutional knowledge during reorganizations.", zh: "在 reorganization 中保留 institutional knowledge。" }, { en: "Create urgency before the crisis becomes visible to everyone.", zh: "在危機對所有人都變得明顯前，先建立 urgency。" },
        ]} /></InfoCard></div></InfoCard>
      </div>
    </SectionShell>
  );
}

function CasesSection({ mode }) {
  return (
    <SectionShell id="cases" mode={mode} titleEn="Case grid" titleZh="案例總表" kickerEn="Default mappings" kickerZh="預設配對" refs={["Last Day", "Practice Questions", "Case Files", "Master Review"]}>
      <div className="space-y-5">
        <QuickCaseLevelMatrix mode={mode} />
        <SimpleTable mode={mode} columns={[{ key: "case", en: "Case", zh: "案例" }, { key: "level", en: "Default level", zh: "預設層次" }, { key: "thesis", en: "One-sentence thesis", zh: "一句話 thesis" }]} rows={[
          { case: { en: "NEC-GTE", zh: "NEC-GTE" }, level: { en: "Firm (leadership)", zh: "Firm（Leadership）" }, thesis: { en: "Kobayashi’s C&C vision built NEC and later created vulnerability against more focused competitors.", zh: "Kobayashi 的 C&C vision 建立了 NEC，但也讓 NEC 之後暴露在更聚焦對手面前。" } },
          { case: { en: "Airline industry", zh: "Airline Industry" }, level: { en: "Industry", zh: "Industry" }, thesis: { en: "High fixed and sunk cost plus low differentiation create structural low profitability.", zh: "高 fixed 與 sunk cost 加上低差異化，形成結構性低獲利。" } },
          { case: { en: "Powers that Be (GAFAM)", zh: "Powers that Be" }, level: { en: "Supranational / Industry", zh: "Supranational / Industry" }, thesis: { en: "Platform economics and global structures differ sharply across firms; it is not one uniform industry story.", zh: "平台經濟與全球結構在各家之間差異很大，不能當作單一產業故事。" } },
          { case: { en: "Stitch Fix", zh: "Stitch Fix" }, level: { en: "Cross-level", zh: "跨層" }, thesis: { en: "A tech-enabled apparel model sits across meso, industry, and meta pressures, especially future competition and unmet demand.", zh: "Tech-enabled 服飾模式橫跨 meso、industry、meta 壓力，尤其是未來競爭與 unmet demand。" } },
          { case: { en: "Acer-Wistron", zh: "Acer-Wistron" }, level: { en: "Cluster / Industry", zh: "Cluster / Industry" }, thesis: { en: "Forward integration triggered conflict with customers and ultimately justified separation.", zh: "向前整合引發與客戶衝突，最後反而使分拆合理化。" } },
          { case: { en: "Seiko", zh: "Seiko" }, level: { en: "Firm (positioning)", zh: "Firm（Positioning）" }, thesis: { en: "Positioning migration matters; Seiko’s movement upmarket is a dynamic positioning issue.", zh: "Positioning 會移動；Seiko 的 upmarket 推進屬於動態 positioning 問題。" } },
          { case: { en: "P&G in China", zh: "P&G in China" }, level: { en: "National", zh: "National" }, thesis: { en: "Macro conditions, income distribution, digital shifts, and evolving consumer behavior all matter at once.", zh: "總體條件、所得分布、數位轉移與消費行為變化同時作用。" } },
          { case: { en: "Disney (Eisner / Iger)", zh: "Disney（Eisner / Iger）" }, level: { en: "Firm (leadership)", zh: "Firm（Leadership）" }, thesis: { en: "Leadership shaped both collapse risk and recovery through related acquisitions and organizational repair.", zh: "Leadership 同時塑造了失敗風險與後來透過 related acquisitions 與組織修復的復甦。" } },
        ]} />
        <InfoCard titleEn="Practice-question cases" titleZh="Practice Questions 補充案例" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          ["ETA / Swatch","Industry economics, supplier power, competition policy, appropriability.","ETA / Swatch","Industry economics、supplier power、competition policy、appropriability。"],["Home Alone / Culkin","VRIO on resources and appropriability leakage.","Home Alone / Culkin","VRIO on resources 與 appropriability 流失。"],["Natalie Portman","Forward contracting to manage bargaining power.","Natalie Portman","透過前置合約管理 bargaining power。"],["John Carter / Lone Ranger","Limits of VRIO without organizational fit.","John Carter / Lone Ranger","缺乏 organizational fit 時，VRIO 的侷限。"],["Newell","HQ value through managerial discipline.","Newell","HQ 透過 managerial discipline 加值。"],["WPP (FCPA)","International strategy and compliance architecture.","WPP（FCPA）","國際策略與 compliance 架構。"],["RTZ / Chinalco","Country as customer, owner, partner, regulator, and geopolitical actor.","RTZ / Chinalco","國家同時是客戶、股東、夥伴、監管者與地緣政治行為者。"],["Nokia","Full implementation pathology transfer case.","Nokia","完整 implementation pathology transfer case。"],
        ].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function ExamSection({ mode }) {
  return (
    <SectionShell id="exam" mode={mode} titleEn="Exam attack system" titleZh="考場攻擊系統" kickerEn="Execution under pressure" kickerZh="壓力下的執行" refs={["Last Day", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Suggested 180-minute allocation" titleZh="建議的 180 分鐘時間分配" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-8">{[
          ["0–5","Read all questions, not the reading","0–5","先讀完所有題目，不先讀 reading"],["5–15","Read the full reading and tag frameworks","5–15","完整讀 reading，邊讀邊 tag 框架"],["15–30","Do the most bounded question first","15–30","先做最 bounded 的題目"],["30–55","International-style question","30–55","處理 international 類題目"],["55–80","Corporate-style question","55–80","處理 corporate 類題目"],["80–140","Long implementation / Nokia-type question","80–140","處理 implementation / Nokia 類長題"],["140–170","Go back and strengthen conclusions","140–170","回頭補強 conclusions"],["170–180","Final scan for conclusions, evidence, and fit","170–180","最後檢查 conclusion、evidence 與題意貼合度"],
        ].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="mb-1 font-semibold" style={{ color: theme.teal }}>{en1}</div><BiText mode={mode} en={en2} zh={zh2} /></div>)}</div></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Question trigger → tool mapping" titleZh="題目 trigger → 工具對應" mode={mode} tone="gold"><SimpleTable mode={mode} size="compact" columns={[{ key: "trigger", en: "Trigger", zh: "觸發字樣" }, { key: "tool", en: "Default tool", zh: "預設工具" }]} rows={[
            { trigger: { en: "Profitability / structure / competition", zh: "profitability / structure / competition" }, tool: { en: "Underlying economics + competition type + variables + ferocity", zh: "Underlying economics + competition type + variables + ferocity" } },
            { trigger: { en: "Bargaining / buyer / supplier power", zh: "bargaining / buyer / supplier power" }, tool: { en: "Intrinsic strength + price sensitivity + willingness to use power", zh: "Intrinsic strength + price sensitivity + willingness to use power" } },
            { trigger: { en: "Foreign / international / country", zh: "foreign / international / country" }, tool: { en: "Five-level home-vs-host + SPARK match + global/local split", zh: "Five-level home-vs-host + SPARK match + global/local split" } },
            { trigger: { en: "Multi-business / subsidiary / corporate", zh: "multi-business / subsidiary / corporate" }, tool: { en: "Corporate strategy six mechanisms + sum-of-parts test", zh: "Corporate strategy 六機制 + sum-of-parts test" } },
            { trigger: { en: "Leadership / organization / execution", zh: "leadership / organization / execution" }, tool: { en: "Implementation five-block diagnosis + commitment ladder + 70/30", zh: "Implementation 五段診斷 + commitment ladder + 70/30" } },
            { trigger: { en: "Resource / advantage", zh: "resource / advantage" }, tool: { en: "VRIO applied to A, R, K", zh: "VRIO 套在 A、R、K" } },
            { trigger: { en: "Future competition / sustainability", zh: "future competition / sustainability" }, tool: { en: "CEA + lead firm type + unmet demand", zh: "CEA + lead firm type + unmet demand" } },
          ]} /></InfoCard>
          <InfoCard titleEn="Default answer shape" titleZh="預設答題骨架" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Identify the focal firm and the strategically meaningful industry.", zh: "先辨認 focal firm 與具有策略意義的 industry。" },
            { en: "If the case is business-facing, do a quick underlying-economics scan.", zh: "若是 business-facing case，先做快速 underlying-economics 掃描。" },
            { en: "Name only the binding levels.", zh: "只點名真正 binding 的層次。" },
            { en: "Apply the right tool, not the whole framework library.", zh: "用對工具，不要把整座 framework library 全搬上來。" },
            { en: "Use specific case evidence: numbers, quotes, events.", zh: "必須用具體 case evidence：數字、quotes、事件。" },
            { en: "State a conclusion in BARD or POE language.", zh: "最後要用 BARD 或 POE 語氣下 conclusion。" },
            { en: "If asked, connect to strategy and implementation barriers.", zh: "如果題目要求，就把 diagnosis 連回 strategy 與 implementation barriers。" },
          ]} /></InfoCard>
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Fatal errors" titleZh="致命錯誤清單" mode={mode} tone="danger"><BulletList mode={mode} items={[
            { en: "No conclusion.", zh: "沒有 conclusion。" }, { en: "Performance claim without stating the comparator.", zh: "講 performance 卻沒有說 comparator。" }, { en: "Framework display without causal application.", zh: "只展示 framework，沒有做 causal application。" }, { en: "Wrong level for the case.", zh: "案例層次判斷錯誤。" }, { en: "Using the same case twice where uniqueness matters.", zh: "在要求唯一配對時重複使用同一個 case。" }, { en: "Extraneous material.", zh: "塞入與題目無關的材料。" }, { en: "Implementation answer that retells the story but never diagnoses pathology.", zh: "Implementation 題只重述故事，沒有做 pathology diagnosis。" }, { en: "Skipping CEA when the question is about sustainability or future competition.", zh: "遇到 sustainability 或 future competition 題，卻沒用 CEA。" }, { en: "Jumping to strategy language before underlying economics is clear.", zh: "在底層經濟還沒釐清前，就直接跳到 strategy language。" }, { en: "Using Prahalad-Hamel core competence framing as the default answer to NEC.", zh: "把 Prahalad-Hamel 的 core competence 當成 NEC 的預設答法。" },
          ]} /></InfoCard>
          <InfoCard titleEn="One-page hand cheat sheet" titleZh="一頁手寫 cheat sheet" mode={mode} tone="ok"><BulletList mode={mode} items={[
            { en: "Five levels", zh: "Five levels" }, { en: "Four performance comparators", zh: "四個 performance comparators" }, { en: "Seven economics dimensions", zh: "七個 economics dimensions" }, { en: "Competition: type, variables, ferocity", zh: "Competition：type、variables、ferocity" }, { en: "SPARK + VRIO on A, R, K + CEA", zh: "SPARK + VRIO on A、R、K + CEA" }, { en: "Implementation five blocks + key numbers", zh: "Implementation 五段 + 關鍵數字" }, { en: "International split + corporate mechanisms", zh: "International 切法 + corporate 機制" }, { en: "Nokia answer shape", zh: "Nokia 預設作答形狀" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Confidence tiers and safe usage" titleZh="信度分級與安全使用方式" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[["Tier 1","Tier 1","Primary-source or strongly verified wording. Use confidently.","Primary-source 或高度驗證內容，可自信使用。"],["Tier 2","Tier 2","User-verified reconstruction. Safe with measured wording.","使用者驗證重建版，用保守語氣可安全使用。"],["Tier 3","Tier 3","Reasonable inference. Use as analysis, not as attributed verbatim.","合理推論，可作分析，但不要當 verbatim 引用。"],["Tier 4","Tier 4","Avoid as direct exam material.","不建議直接拿去考場使用。"]].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div><div className="mt-4 rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#F4F0E6", color: theme.subInk }}><BiText mode={mode} en="Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available." zh="最後一句總綱：先從 underlying economics 下手，找出 binding levels，再檢驗 SPARK 加上 leadership 與 execution，用 CEA 壓測未來競爭，最後再問 organization 與 implementation 是否真的讓分析上應該存在的價值被實現並守住。" /></div></InfoCard>
      </div>
    </SectionShell>
  );
}

function AppendixSection({ mode }) {
  const [showSource, setShowSource] = useState(false);
  return (
    <SectionShell id="appendix" mode={mode} titleEn="Source fidelity appendix" titleZh="原始內容附錄" kickerEn="Nothing dropped from the pasted backbone" kickerZh="貼入骨架原文完整保留" refs={["Master Review"]}>
      <div className="space-y-4">
        <InfoCard titleEn="Why this appendix exists" titleZh="為甚麼要保留這個附錄" mode={mode} tone="teal"><BiText mode={mode} block en="The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone." zh="主介面是為了提升可讀性與考場操作性而重構。這個附錄把原始貼入總整完整放進檔案中，確保升級版 infrastructure 不會默默遺漏那份骨架內容。" /></InfoCard>
        <button onClick={() => setShowSource((v) => !v)} className="rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.plum }}>{showSource ? (mode === "zh" ? "收起原始內容" : mode === "bi" ? "Hide source appendix / 收起原始內容" : "Hide source appendix") : (mode === "zh" ? "展開原始內容" : mode === "bi" ? "Show source appendix / 展開原始內容" : "Show source appendix")}</button>
        {showSource ? <div className="overflow-hidden rounded-[28px] border" style={{ borderColor: theme.line }}><div className="border-b px-4 py-3 text-xs uppercase tracking-[0.18em]" style={{ background: "#F2ECE0", borderColor: theme.line, color: theme.teal }}>Original pasted master review</div><pre className="max-h-[900px] overflow-auto whitespace-pre-wrap p-4 text-[12px] leading-6" style={{ background: "#FFFDF8", color: theme.ink }}>{SOURCE_MARKDOWN}</pre></div> : null}
      </div>
    </SectionShell>
  );
}

export default function STRT6200FinalExamInfrastructure() {
  const [mode, setMode] = useState("en");
  const [activeTag, setActiveTag] = useState("all");
  const [query, setQuery] = useState("");
  const filteredSections = useMemo(() => sectionMeta.filter((section) => {
    const tagPass = activeTag === "all" ? true : section.tag === activeTag;
    const q = query.trim().toLowerCase();
    const queryPass = !q ? true : [section.en, section.zh, section.search, ...(section.refs || [])].join(" ").toLowerCase().includes(q);
    return tagPass && queryPass;
  }), [activeTag, query]);
  const renderSection = (id) => {
    switch (id) {
      case "overview": return <OverviewSection mode={mode} />;
      case "spine": return <SpineSection mode={mode} />;
      case "economics": return <EconomicsSection mode={mode} />;
      case "industry": return <IndustrySection mode={mode} />;
      case "firm": return <FirmSection mode={mode} />;
      case "meso": return <MesoSection mode={mode} />;
      case "macro": return <MacroSection mode={mode} />;
      case "meta": return <MetaSection mode={mode} />;
      case "international": return <InternationalSection mode={mode} />;
      case "corporate": return <CorporateSection mode={mode} />;
      case "implementation": return <ImplementationSection mode={mode} />;
      case "cases": return <CasesSection mode={mode} />;
      case "exam": return <ExamSection mode={mode} />;
      case "appendix": return <AppendixSection mode={mode} />;
      default: return null;
    }
  };
  const visibleCount = filteredSections.length;
  return (
    <div className="min-h-screen" style={{ background: theme.bg, color: theme.ink }}>
      <AnchorNav mode={mode} activeTag={activeTag} setActiveTag={setActiveTag} query={query} setQuery={setQuery} />
      <FloatingLanguageToggle mode={mode} setMode={setMode} />
      <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-6 md:px-6 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden xl:block"><div className="sticky top-28 rounded-[28px] border p-4" style={{ background: "#FBF8F0", borderColor: theme.line }}><div className="mb-3 text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.plum }}><BiText mode={mode} en="Reading map" zh="閱讀地圖" /></div><div className="mb-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={`${visibleCount} sections currently visible. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix.`} zh={`目前顯示 ${visibleCount} 個 section。可用上方 filter chips 與搜尋欄，把系統收斂到高權重、框架、案例或附錄。`} /></div><div className="space-y-2">{filteredSections.map((section) => <a key={section.id} href={`#${section.id}`} className="block rounded-2xl border px-3 py-2 text-sm leading-5" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={section.en} zh={section.zh} /></a>)}</div></div></aside>
        <main className="space-y-6">{filteredSections.length ? filteredSections.map((section) => <React.Fragment key={section.id}>{renderSection(section.id)}</React.Fragment>) : <div className="rounded-[28px] border p-8 text-center" style={{ background: theme.card, borderColor: theme.line }}><div className="text-lg font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en="No sections match the current filter." zh="目前篩選條件下沒有符合的 section。" /></div><div className="mt-2 text-sm" style={{ color: theme.subInk }}><BiText mode={mode} en="Try a broader search term or switch the chip filter back to All." zh="請改用更寬鬆的搜尋字，或把 chip filter 切回全部。" /></div></div>}</main>
      </div>
    </div>
  );
}
