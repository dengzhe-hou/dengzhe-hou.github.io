---
permalink: /
title: 'Dengzhe Hou (<span lang="zh">侯登哲</span>)'
author_profile: true
classes: home
redirect_from:
  - /about/
  - /about.html

# Cards under "Selected Research". `thumb` is a 4:3 crop of the figure for the
# card; `image_path` is the full paper figure, linked as "Full figure".
selected_research:
  - title: "Same Brain, Different Prediction"
    url: "/publication/2026-arxiv-same-brain"
    theme: AI4Brain
    venue: arXiv
    thumb: research-same-brain-card.jpg
    thumb_width: 436
    thumb_height: 327
    image_path: research-same-brain.jpg
    alt: "The preprocessing multiverse: one EEG trial expanded into 128 pipeline variants whose decoders disagree on the predicted class"
    excerpt: "Changing only the preprocessing pipeline can flip up to 42% of EEG predictions. We measure this instability and introduce a method to reduce it."
  - title: "Probing Working Memory in LLMs"
    url: "/publication/2026-arxiv-wmf-am"
    theme: Brain4AI
    venue: arXiv
    thumb: research-wmf-am-card.jpg
    thumb_width: 341
    thumb_height: 256
    image_path: research-wmf-am.jpg
    alt: "The WMF-AM probe: an LLM receives an initial state and a sequence of updates and must answer with the final state only, without a scratchpad"
    excerpt: "WMF-AM tests whether language models can maintain and update intermediate results without a scratchpad. The probe spans 28 models from 12 families."
  - title: "Frontal-Midline Theta Ramping"
    url: "/publication/2025-frontiers-hum-neuro"
    theme: AI4Brain
    venue: Front. Hum. Neurosci.   # card only; the paper keeps the full journal name
    thumb: research-fmt-theta-card.jpg
    thumb_width: 576
    thumb_height: 432
    image_path: research-fmt-theta.jpg
    alt: "Frontal-midline theta power ramping up in the two seconds before a self-initiated attention shift, separated by shift type"
    excerpt: "EEG and eye tracking reveal frontal-midline theta ramping before self-initiated attention shifts, providing a neural marker of voluntary attentional preparation."

# Peer-reviewed papers under "Selected Publications", by permalink, in order.
selected_publications:
  - /publication/2026-tmlr-timepre
  - /publication/2026-scirep-kanmixer
  - /publication/2026-arxiv-subject-specific
  - /publication/2025-frontiers-hum-neuro
---

<div class="profile-intro" markdown="1">

I am an **Assistant Professor** at [Tohoku University](https://www.tohoku.ac.jp/en/), Japan. My research connects AI and the brain in two directions that inform each other.

</div>

{% include research-themes.html %}

<details id="background" class="profile-background" markdown="1">
<summary>Background & affiliations</summary>

At the [Graduate School of Information Sciences (GSIS)](https://www.is.tohoku.ac.jp/en/), I am affiliated with the [Yamada Laboratory](https://yamada-lab.gr.jp/ja/index.html) and the [International Liaison Office (ILO)](https://www.is.tohoku.ac.jp/introduction/ilo/), with a concurrent appointment in the Social Integration Research Division of the [Unprecedented-scale Data Analytics Center (UDAC)](https://udac.tohoku.ac.jp/).

I received my Ph.D. under [Prof. Satoshi Shioiri](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=en) at the [Visual Cognition and Systems Laboratory](https://sites.google.com/view/shioiri-satoshi/), and was a Visiting PhD Scholar in the Sydney Cash Lab at **Harvard Medical School / Massachusetts General Hospital**.

Education, teaching, grants, and service are listed in my [CV](/cv/).

</details>

## Selected Research

{% include selected-research.html %}

## Selected Publications

{% include selected-publications.html %}

## News

<div class="news-list" markdown="1">

| | |
|---|---|
| Sep 2026 | **Invited talk** at [RSJ2026 Open Forum OF7](https://ac.rsj-web.org/2026/openforum/#of7), "<span lang="ja">テクノロジーの質的進化と組織統制</span>", 44th Annual Conference of the Robotics Society of Japan, Kanazawa. Speaking on neurotechnology with Michael Zielewski |
| Aug 2026 | Co-authored presentation accepted at the [Japan Institute of Marketing Science (JIMS) Research Conference](http://www.jims.gr.jp/%e7%a0%94%e7%a9%b6%e5%a4%a7%e4%bc%9a/), Waseda University, 14–15 Nov 2026: “<span lang="ja">生成AI活用事例における社会倫理的リスクと炎上要因の定量分析</span>” |
| Aug 2026 | Paper accepted at **IEEE SMC 2026** (Bellevue, USA), [Subject-Specific Analysis of Self-Initiated Attention Shifts from EEG](/publication/2026-arxiv-subject-specific) |
| Aug 2026 | [TimePre](/publication/2026-tmlr-timepre) accepted at **Transactions on Machine Learning Research (TMLR)** |
| Aug 2026 | Awarded a **research grant** (PI) from [GSIS](https://www.is.tohoku.ac.jp/en/), Tohoku University, under Interdisciplinary Research Project Development Support: <span lang="ja">認知科学実験パラダイムに基づくAIシステム認知能力評価プラットフォームの開拓</span> |
| Aug 2026 | New preprint on arXiv, [Control-Diverse Reinforcement Fine-Tuning](/publication/2026-arxiv-cd-rft). RL post-training concentrates *control* on a shared set of components across tasks, even where activations look diverse — and relieving that bottleneck improves multi-task performance |
| Aug 2026 | **Invited talk** at the [12th Annual CWRU-Tohoku Data Science in Engineering and Life Sciences Symposium](https://sites.google.com/case.edu/2026-cwru-tohoku-symposium/event-program), Cleveland, USA: "From Preprocessing Choices to LLM Agents: Automated and Verifiable Cognitive EEG Analysis" |
| Aug 2026 | Awarded [**KAKENHI Grant-in-Aid for Research Activity Start-up**](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K25566/) (PI, 26K25566): the representational format of attentional templates, probed with computational model hierarchies, EEG and eye tracking |

<details class="news-archive" markdown="1">
<summary>Earlier news</summary>

| | |
|---|---|
| Aug 2026 | [Kaggle](https://www.kaggle.com/monkeydz) **Silver Medal** in [ROGII - Wellbore Geology Prediction](https://www.kaggle.com/competitions/rogii-wellbore-geology-prediction) (89/6125) |
| Jul 2026 | [KANMixer](/publication/2026-scirep-kanmixer) published in ***Scientific Reports***: a compact KAN-centered mixer for long-term forecasting, and an honest account of when KANs actually help |
| Jul 2026 | Two new preprints on arXiv: [CogEEGAgent](/publication/2026-arxiv-cogeegagent) (autonomous cognitive EEG analysis) and [CogArena](/publication/2026-arxiv-cogarena) (cognitive ability structure in LLMs) |
| Jul 2026 | Awarded a **research grant** (PI) from the [Center for So-Go-Chi (Convergence Knowledge) Informatics](https://www.aisogochi.tohoku.ac.jp/), Tohoku University |
| Jul 2026 | Appointed to the **Editorial Board** of [*Interdisciplinary Information Sciences*](https://www.is.tohoku.ac.jp/en/iis/) (Tohoku University GSIS) |
| Jun 2026 | Joined the Tohoku University × **NTT DATA Group** joint research on technology governance ([TechGov](https://techgov.udac.tohoku.ac.jp/ja/index.html#home)) as a research member |
| Jun 2026 | PVIR [poster](/publication/2026-cvpr-pvir) presented at **CVPR 2026 Workshop VGBE**, Denver, Colorado |
| May 2026 | Joined the [TechGov](https://techgov.udac.tohoku.ac.jp/ja/index.html#home) initiative at UDAC, Tohoku University |
| May 2026 | New preprint on arXiv, [Subject-Specific Analysis of Self-Initiated Attention Shifts from EEG](https://arxiv.org/abs/2605.18251). SHAP-based within-subject decoding of self-initiated attention |
| May 2026 | New preprint on arXiv, [Same Brain, Different Prediction](https://arxiv.org/abs/2605.07212). Preprocessing pipelines flip up to 42% of EEG decoding predictions, and we introduce a diagnostic and a regularization fix |
| May 2026 | Updated preprint. [WMF-AM v2](https://arxiv.org/abs/2603.27343) reframes our LLM probe around working-memory depth and isolates cumulative state tracking as the dominant bottleneck |
| Apr 2026 | Collaborator on new preprint, [Vibe Medicine: Redefining Biomedical Research Through Human-AI Co-Work](https://arxiv.org/abs/2604.23674) |
| Apr 2026 | Started as **Assistant Professor** at GSIS, Tohoku University (Yamada Lab, ILO) with concurrent appointment at [UDAC](https://udac.tohoku.ac.jp/) Social Integration Research Division |
| Apr 2026 | Teaching [Machine Learning Basics](https://gp-ds.tohoku.ac.jp/ja/index.html) at GSIS, Tohoku University |
| Mar 2026 | Paper accepted at **CVPR 2026 Workshop VGBE**, Physics-Aware Video Instance Removal Benchmark |
| Mar 2026 | First version of the LLM working-memory probe on arXiv, then titled [Beyond Completion: Probing Cumulative State Tracking to Predict LLM Agent Performance](https://arxiv.org/abs/2603.27343) (later revised and retitled WMF-AM) |
| Feb 2026 | Participated in [**Qualia Structure** Grant Meeting](https://en.qualia-structure.jp/news/detail/7202) |
| Feb 2026 | Appeared in [Journal Club: *The Proliferation of Consciousness Theories: What can we do next?*](https://www.youtube.com/watch?v=QqUq6q1EMXI) (Neural basis of Consciousness & Qualia Structure) |
| Dec 2025 | Paper published in *Frontiers in Human Neuroscience*, [frontal-midline theta ramping indexes self-initiated attention shifts](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2025.1708257/full) |
| Apr 2025 | Awarded [JSPS DC2 Research Fellowship](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-25KJ0641) |
| Jan 2025 | Returned from visiting scholar position at Harvard Medical School / MGH (Sydney Cash Lab, supervised by [Dr. Jing (Jill) Cai](https://scholar.google.co.jp/citations?user=ggUF_nIAAAAJ&hl=ja)) |
| Dec 2024 | [Best Presentation Award, 32nd Doctoral Student Presentation, Tohoku University](https://www.is.tohoku.ac.jp/jp/activity/award/detail---id-1555.html) |
| Oct 2024 | Presented two posters at **Society for Neuroscience 2024** |
| Jul 2024 | Two presentations at **APCV 2024** (The 16th Asia Pacific Conference on Vision) |
| Aug 2023 | Oral presentation at **ECVP 2023**, Paphos, Cyprus; awarded ECVP Student Travel Award |

</details>
</div>
