---
permalink: /zh/
title: "侯登哲 (Dengzhe Hou)"
description: "日本东北大学信息科学研究科助理教授，研究涵盖 AI4Cog、Cog4AI、AI4Brain 和 Brain4AI 四个方向。"
lang: zh-CN
profile: true

selected_research:
  - image_path: research-s1cogbench.jpg
    strip_path: research-s1cogbench-strip.webp
    alt: "S1CogBench 概览，展示 24 个认知任务中的 6 个示例，以及如何从预测人类选择、执行自身动作和报告概率三方面评估开源和 API 决策模型"
    title: "S1CogBench: System One Decision Models on Cognitive Experiments"
    excerpt: "我们在 24 个认知任务上测试 System One 决策模型，这类模型只给出一个快速决策，不输出文字。决策又快又规范，并不说明模型用上了证据；汇总分数也会掩盖决策如何随任务条件变化。"
    url: "/publication/2026-arxiv-s1cogbench"
    btn_label: "阅读更多"
  - image_path: research-cogbattery.jpg
    strip_path: research-cogbattery-strip.webp
    alt: "CogBattery 概览，在 13 个改编为文本的认知范式上测量 54 个语言模型，分析任务分数结构、预测未见过的模型家族，并在条件层面与人类参考数据对比"
    title: "CogBattery: Human-Referenced LLM Evaluation"
    excerpt: "我们在 13 个认知范式上把 54 个开源权重语言模型与人类数据对比。模型可能复现人类效应的方向，却犯不同的错误，所以效应方向一致并不能说明行为像人。"
    url: "/publication/2026-arxiv-cogbattery"
    btn_label: "阅读更多"
  - image_path: research-wmip.jpg
    strip_path: research-wmip-strip.webp
    alt: "WMIP 概览，把人类工作记忆更新任务对应到 LLM 探针上，18 个模型的准确率随更新次数从 3 增加到 100 而下降"
    title: "WMIP: Probing Cumulative State Tracking in LLMs"
    excerpt: "一个可编程的探针，用来考察语言模型在同一个提示内如何追踪多次更新。在 18 个 LLM 上，单步算术的准确率为 84.9%，经过三到七次更新后降到 31.7%；输出格式的指令也会明显改变测得的准确率。"
    url: "/publication/2026-arxiv-wmip"
    btn_label: "阅读更多"
---

<div class="profile-intro" markdown="1">

我是日本[东北大学](https://www.tohoku.ac.jp/en/)的**助理教授**。

我的研究涵盖四个相互关联的方向，分别是 **AI4Cog**（面向认知科学的 AI）、**Cog4AI**（面向 AI 的认知科学）、**AI4Brain**（面向神经科学的 AI）和 **Brain4AI**（面向 AI 的神经科学）。

**这四个方向都欢迎合作。** [发邮件给我](mailto:hou.dengzhe.t8@dc.tohoku.ac.jp?subject=%E5%90%88%E4%BD%9C)

<details id="background" class="profile-background" markdown="1">
<summary>背景</summary>

我在[信息科学研究科（GSIS）](https://www.is.tohoku.ac.jp/en/)任职，隶属于[山田研究室](https://yamada-lab.gr.jp/ja/index.html)和[国际交流推进室（ILO）](https://www.is.tohoku.ac.jp/introduction/ilo/)，并兼任[未踏规模数据分析中心（UDAC）](https://udac.tohoku.ac.jp/)社会整合研究部门的职务。

我在[塩入諭教授（Prof. Satoshi Shioiri）](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=zh-CN)的[视觉认知与系统实验室](https://sites.google.com/view/shioiri-satoshi/)获得博士学位，读博期间曾在**哈佛医学院／麻省总医院**的 Sydney Cash Lab 担任访问博士生。

[完整简历（英文）](/cv/)

</details>
</div>

## 代表性研究

{% include selected-research.html %}

## 新闻

<div class="news-list" markdown="1">

| **2026年10月** | 在 arXiv 发布新预印本 [S1CogBench](/publication/2026-arxiv-s1cogbench)，在 24 个认知实验上测试只给出一个快速决策、不输出文字的 System One 决策模型 |
| **2026年9月** | 在 [RSJ2026 开放论坛 OF7](https://ac.rsj-web.org/2026/openforum/#of7)「テクノロジーの質的進化と組織統制」（第 44 届日本机器人学会学术年会，金泽）作**特邀报告**，与 Michael Zielewski 一起介绍神经技术 |
| **2026年8月** | 合作报告被[日本市场营销科学学会（JIMS）研究大会](http://www.jims.gr.jp/%e7%a0%94%e7%a9%b6%e5%a4%a7%e4%bc%9a/)（早稻田大学，2026年11月14–15日）接收，题目为「生成AI活用事例における社会倫理的リスクと炎上要因の定量分析」 |
| **2026年8月** | 论文 [Subject-Specific Analysis of Self-Initiated Attention Shifts from EEG](/publication/2026-arxiv-subject-specific) 被 **IEEE SMC 2026**（美国贝尔维尤）接收 |
| **2026年8月** | [TimePre](/publication/2026-tmlr-timepre) 被 **Transactions on Machine Learning Research (TMLR)** 接收 |
| **2026年8月** | 获得东北大学[信息科学研究科](https://www.is.tohoku.ac.jp/en/)跨学科研究项目培育支持（Interdisciplinary Research Project Development Support）的**研究资助**（负责人），课题为「認知科学実験パラダイムに基づくAIシステム認知能力評価プラットフォームの開拓」 |
| **2026年8月** | 在 arXiv 发布新预印本 [Control-Diverse Reinforcement Fine-Tuning](/publication/2026-arxiv-cd-rft)。即使激活看起来很分散，RL 后训练也会把*控制*集中到跨任务共享的少数组件上；缓解这个瓶颈能提升多任务表现 |
| **2026年8月** | 在[第 12 届 CWRU–东北大学工程与生命科学数据科学研讨会](https://sites.google.com/case.edu/2026-cwru-tohoku-symposium/event-program)（美国克利夫兰）作**特邀报告**，题目为 "From Preprocessing Choices to LLM Agents: Automated and Verifiable Cognitive EEG Analysis" |
| **2026年8月** | 获得[**日本学术振兴会科研费 研究活动启动支援**](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K25566/)（负责人，26K25566），用计算模型层级、脑电和眼动追踪研究注意模板的表征形式 |

<details class="news-archive" markdown="1">
<summary>更早的新闻</summary>

| **2026年8月** | 在 [Kaggle](https://www.kaggle.com/monkeydz) [ROGII - Wellbore Geology Prediction](https://www.kaggle.com/competitions/rogii-wellbore-geology-prediction) 获得**银牌**（6125 支队伍中排名第 89） |
| **2026年7月** | [KANMixer](/publication/2026-scirep-kanmixer) 发表于 ***Scientific Reports***，提出一个以 KAN 为核心的紧凑长期预测混合器，并如实分析 KAN 在什么情况下真正有用 |
| **2026年7月** | 在 arXiv 发布两篇新预印本，[CogEEGAgent](/publication/2026-arxiv-cogeegagent)（自主完成认知脑电分析）和 [CogBattery](/publication/2026-arxiv-cogbattery)（初版名为 CogArena，以人类数据为参照评估 LLM 的认知任务表现） |
| **2026年7月** | 获得东北大学[综合知信息学研究中心](https://www.aisogochi.tohoku.ac.jp/)的**研究资助**（负责人） |
| **2026年7月** | 受聘为 [*Interdisciplinary Information Sciences*](https://www.is.tohoku.ac.jp/en/iis/)（东北大学信息科学研究科）**编委** |
| **2026年6月** | 在 **CVPR 2026 Workshop VGBE**（美国科罗拉多州丹佛）展示 PVIR [海报](/publication/2026-cvpr-pvir) |
| **2026年5月** | 加入东北大学 UDAC 的 [TechGov](https://techgov.udac.tohoku.ac.jp/ja/index.html#home)，并从 6 月起以研究员身份参与东北大学与 **NTT DATA 集团**的技术治理联合研究 |
| **2026年5月** | 在 arXiv 发布新预印本 [Subject-Specific Analysis of Self-Initiated Attention Shifts from EEG](https://arxiv.org/abs/2605.18251)，用基于 SHAP 的被试内解码分析自发注意 |
| **2026年5月** | 在 arXiv 发布新预印本 [Same Brain, Different Prediction](https://arxiv.org/abs/2605.07212)。只改变预处理流程就会让多达 42% 的脑电解码预测翻转，我们提出了诊断方法和正则化修正 |
| **2026年5月** | 更新预印本。[WMF-AM v2](https://arxiv.org/abs/2603.27343) 围绕工作记忆深度重新组织 LLM 探针，确认累积状态追踪是主要瓶颈 |
| **2026年4月** | 作为合作者参与的新预印本 [Vibe Medicine: Redefining Biomedical Research Through Human-AI Co-Work](https://arxiv.org/abs/2604.23674) 发布 |
| **2026年4月** | 入职东北大学信息科学研究科，任**助理教授**（山田研究室、国际交流推进室），并兼任 [UDAC](https://udac.tohoku.ac.jp/) 社会整合研究部门职务 |
| **2026年4月** | 在东北大学信息科学研究科讲授 [Machine Learning Basics](https://gp-ds.tohoku.ac.jp/ja/index.html) |
| **2026年3月** | 论文 Physics-Aware Video Instance Removal Benchmark 被 **CVPR 2026 Workshop VGBE** 接收 |
| **2026年3月** | LLM 工作记忆探针的第一版发布在 arXiv，当时题为 [Beyond Completion: Probing Cumulative State Tracking to Predict LLM Agent Performance](https://arxiv.org/abs/2603.27343)（后经修订改名为 WMF-AM） |
| **2026年2月** | 参加 [**Qualia Structure（感质结构）** 项目会议](https://en.qualia-structure.jp/news/detail/7202) |
| **2026年2月** | 参加 [Journal Club: *The Proliferation of Consciousness Theories: What can we do next?*](https://www.youtube.com/watch?v=QqUq6q1EMXI)（Neural basis of Consciousness & Qualia Structure） |
| **2025年12月** | 论文发表于 *Frontiers in Human Neuroscience*，[额中线 theta 波的逐渐增强可以作为自发注意转移的指标](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2025.1708257/full) |
| **2025年4月** | 获得[日本学术振兴会特别研究员 DC2](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-25KJ0641) 资助 |
| **2025年1月** | 结束在哈佛医学院／麻省总医院的访问研究（Sydney Cash Lab，导师 [Dr. Jing (Jill) Cai](https://scholar.google.co.jp/citations?user=ggUF_nIAAAAJ&hl=zh-CN)） |
| **2024年12月** | 获得东北大学信息科学研究科[第 32 届博士后期课程学生发表会最佳报告奖](https://www.is.tohoku.ac.jp/jp/activity/award/detail---id-1555.html) |
| **2024年10月** | 在 **Society for Neuroscience 2024** 展示两张海报 |
| **2024年7月** | 在 **APCV 2024**（第 16 届亚太视觉会议）作两场报告 |
| **2023年8月** | 在 **ECVP 2023**（塞浦路斯帕福斯）作口头报告，获得 ECVP Student Travel Award |

</details>
</div>

## 招生

我正在招收希望在东北大学信息科学研究科[山田研究室](https://yamada-lab.gr.jp/en/index.html)与我一起做研究的硕士和博士生。[山田和范教授（Prof. Kazunori Yamada）](https://yamada-lab.gr.jp/en/team.html)是正式导师，我作为共同导师，在下面这些课题上指导学生的日常研究。

- **AI4Cog**（面向认知科学的 AI），用计算模型和语言模型解释人类的注意和决策，并与人类数据比较
- **Cog4AI**（面向 AI 的认知科学），用成熟的认知实验测试语言模型和决策模型，从工作记忆探针到以人类数据为参照的任务组合
- **AI4Brain**（面向神经科学的 AI），让脑电分析更可靠、更自动化，从测量预处理和建模选择如何改变结果，到能运行并检查认知脑电分析的 LLM 智能体，也包括用脑电与眼动同步记录研究注意
- **Brain4AI**（面向 AI 的神经科学），把脑信号（EEG、fMRI）与语言模型和视觉语言模型的表征对齐

入学需要按照实验室 [How to Join](https://yamada-lab.gr.jp/en/join.html) 页面的说明，报考信息科学研究科的入学考试。如果你对这些课题感兴趣，请把简历和一段简短的研究兴趣介绍发到我的邮箱，邮件标题写 "Prospective student"。

## 教育背景

<div class="cv-entries" markdown="1">

<section class="cv-entry" markdown="1">
<div class="cv-entry__heading">
<h3>博士 · 信息科学</h3>
<span class="cv-entry__date">2023年4月 – 2026年3月</span>
</div>

东北大学信息科学研究科

<details markdown="1">
<summary>博士论文、导师与项目</summary>

- 博士论文 *Exploring Brain Mechanisms of Self-Initiated Attention Shift: Simultaneous Recording of EEG and Eye Movements*
- 导师 [塩入諭教授](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=zh-CN)、[坂本修一教授](https://scholar.google.com/citations?user=h7ymzUgAAAAJ&hl=zh-CN)、[曾加蕙教授](https://scholar.google.com/citations?hl=zh-CN&user=g00AZTcAAAAJ)
- 视觉认知与系统实验室 · [数据科学国际联合研究生院项目（GP-DS）](https://gp-ds.tohoku.ac.jp/ja/index.html)
- [JST 下一代研究者挑战性研究项目](https://pgd.tohoku.ac.jp/rpc/next_generation.html)

</details>
</section>

<section class="cv-entry" markdown="1">
<div class="cv-entry__heading">
<h3>硕士 · 信息科学</h3>
<span class="cv-entry__date">2021年4月 – 2023年3月</span>
</div>

东北大学信息科学研究科

<details markdown="1">
<summary>导师与项目</summary>

- 导师 [塩入諭教授](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=zh-CN)、[曾加蕙教授](https://scholar.google.com/citations?hl=zh-CN&user=g00AZTcAAAAJ)
- 视觉认知与系统实验室 · [GP-DS](https://gp-ds.tohoku.ac.jp/ja/index.html)（2022年4月加入）

</details>
</section>

<section class="cv-entry" markdown="1">
<div class="cv-entry__heading">
<h3>工学学士 · 电子信息工程</h3>
<span class="cv-entry__date">2016年9月 – 2020年7月</span>
</div>

同济大学 · 自动化

<details markdown="1">
<summary>导师与成绩</summary>

- 导师 [赵霞副教授](https://see.tongji.edu.cn/info/1388/10495.htm)
- GPA 4.15 / 5.0

</details>
</section>

</div>

## 教学

**授课教师**，东北大学信息科学研究科

<div class="cv-entries" markdown="1">

<section class="cv-entry" markdown="1">
<div class="cv-entry__heading">
<h3>Machine Learning Basics</h3>
<span class="cv-entry__date">2026年4月 – 至今</span>
</div>

东北大学信息科学研究科 · [GP-DS](https://gp-ds.tohoku.ac.jp/ja/index.html)。课程材料改编自 [Samy Baladram](https://www.samybaladram.com/) 的教材。

</section>

<section class="cv-entry" markdown="1">
<div class="cv-entry__heading">
<h3>Data Science Training II & Data Science Challenge</h3>
<span class="cv-entry__date">2026年6月 – 2026年7月</span>
</div>

东北大学信息科学研究科

</section>

</div>

**助教（TA）**，东北大学信息科学研究科（2022 – 2025）

指导教师为[山田和范教授](https://yamada-lab.gr.jp/ja/index.html)和 [Samy Baladram 副教授](https://www.samybaladram.com/)。

- **2024 年春季** Machine Learning Basics、Data Science Programming Basics、Data Engineering、Data Science Training I & II
- **2023 年秋季** Data Science Basics
- **2022 年春季** Data Science Training I、Data Science Skill Up Exercise

## 科研经费、奖学金与奖项

| **2026–2027** | **[日本学术振兴会科研费 研究活动启动支援](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K25566/)**（负责人，26K25566），「注意テンプレートの表象形式：計算モデル階層・脳波・視線追跡による解明」（260 万日元） |
| **2026** | [Kaggle](https://www.kaggle.com/monkeydz) **银牌**，[ROGII - Wellbore Geology Prediction](https://www.kaggle.com/competitions/rogii-wellbore-geology-prediction)（6125 支队伍中第 89），[证书](/images/kaggle-rogii-silver-2026.png) |
| **2026** | **研究资助（负责人）**，东北大学[综合知信息学研究中心](https://www.aisogochi.tohoku.ac.jp/)（40 万日元） |
| **2026–** | 研究员，东北大学 × NTT DATA 集团技术治理联合研究（[TechGov](https://techgov.udac.tohoku.ac.jp/ja/index.html#home)，UDAC）（个人分配 100 万日元，项目总额 4000 万日元） |
| **2026** | **研究资助（负责人）**，东北大学信息科学研究科跨学科研究项目培育支持，「認知科学実験パラダイムに基づくAIシステム認知能力評価プラットフォームの開拓」（50 万日元） |
| **2026** | [Kaggle Expert](https://www.kaggle.com/monkeydz)，[CSIRO Image2Biomass Prediction](https://www.kaggle.com/competitions/csiro-biomass) 铜牌（3805 支队伍中第 355） |
| **2025–2026** | **[日本学术振兴会特别研究员 DC2](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-25KJ0641)**（已结题） |
| **2025** | [Kaggle](https://www.kaggle.com/monkeydz) [Santa 2024: The Perplexity Permutation Puzzle](https://www.kaggle.com/competitions/santa-2024) 铜牌（1514 支队伍中第 148） |
| **2024–2028** | [日本学术振兴会科研费 基盘研究(A)](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-24H00700/)，「自発的脳機能の神経基盤理解」（负责人 塩入諭教授） |
| **2024** | [第 32 届博士后期课程学生发表会最佳报告奖](https://www.is.tohoku.ac.jp/jp/activity/award/detail---id-1555.html)，东北大学信息科学研究科 |
| **2023** | ECVP Student Travel Award |
| **2023–2025** | [JST 下一代研究者挑战性研究项目](https://pgd.tohoku.ac.jp/rpc/next_generation.html) |
| **2022–至今** | 东北大学 [GP-DS](https://gp-ds.tohoku.ac.jp/ja/index.html) 研究助理（RA） |
| **2021–2023** | [公益财团法人龟井纪念财团](https://kmfo.or.jp/)留学生奖学金 |
| **2016** | 同济大学本科新生奖学金 |

## 学术服务

- **编委**，*[Interdisciplinary Information Sciences](https://www.is.tohoku.ac.jp/en/iis/)*（东北大学信息科学研究科），2026年至今
- **审稿人**
  - *npj Science of Learning*
  - *Cognitive Neurodynamics*
  - *Journal of NeuroEngineering and Rehabilitation*
  - *Scientific Reports*
  - *Discover Neuroscience*
  - European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD 2026)
  - International Joint Conference on Neural Networks (IJCNN)

## 链接

- [国际交流推进室（ILO）](https://www.is.tohoku.ac.jp/introduction/ilo/)
- [数据科学国际联合研究生院项目（GP-DS）](https://gp-ds.tohoku.ac.jp/ja/index.html)
- [山田研究室](https://yamada-lab.gr.jp/ja/index.html)
- [TOHOKU AI GROUP](https://tai.udac.tohoku.ac.jp/ja/index.html)，东北大学人工智能研究组
- [东北大学信息科学研究科（GSIS）](https://www.is.tohoku.ac.jp/en/)
- [未踏规模数据分析中心（UDAC）](https://udac.tohoku.ac.jp/)，社会整合研究部门
- [技术治理联合研究部门（TechGov）](https://techgov.udac.tohoku.ac.jp/ja/index.html)，东北大学 × NTT DATA 集团
