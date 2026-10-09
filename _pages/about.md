---
layout: home
permalink: /
title: 'Dengzhe Hou (<span lang="zh">侯登哲</span>)'
redirect_from:
  - /about/
  - /about.html

# ---------------------------------------------------------------------------
# Home page content. The page body (below the closing ---) is the lead
# sentence next to the portrait. Research themes live in _data/themes.yml,
# news in _data/news.yml, profile links and email in _config.yml (author).
# ---------------------------------------------------------------------------

# Line above the name (left: unit + institution, right: place)
eyebrow:
  unit: Graduate School of Information Sciences
  institution: Tohoku University
  place: Sendai, Japan

# Chinese name, set after the name
name_zh: 侯登哲

# Portrait: the original photo, shown whole as a square (never cropped).
# `small` is a 640px copy of `src` for ordinary screens.
portrait:
  src: profile.jpg
  width: 800
  small: profile-640.jpg
  alt: "Dengzhe Hou, smiling, sitting on a lawn beside a deer"

# Tinted band under the research themes
current_work: >-
  Connecting these directions, my current work explores aligning brain signals (EEG, fMRI) with
  representations in large language and vision-language models.

# Cards under "Selected research". `thumb` is a 4:3 crop of the figure for the
# card and `thumb_2x` the same at twice the size; `image_path` is the full
# paper figure, linked as "Full figure". `theme` is a label from
# _data/themes.yml. `venue` and `year` default to the paper's.
selected_research:
  - title: "Same Brain, Different Prediction"
    url: "/publication/2026-arxiv-same-brain"
    theme: AI4Brain
    venue: arXiv
    thumb: research-same-brain-card.jpg
    thumb_2x: research-same-brain-card@2x.jpg
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
    thumb_2x: research-wmf-am-card@2x.jpg
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
    thumb_2x: research-fmt-theta-card@2x.jpg
    thumb_width: 576
    thumb_height: 432
    image_path: research-fmt-theta.jpg
    alt: "Frontal-midline theta power ramping up in the two seconds before a self-initiated attention shift, separated by shift type"
    excerpt: "EEG and eye tracking reveal frontal-midline theta ramping before self-initiated attention shifts, providing a neural marker of voluntary attentional preparation."

# Peer-reviewed papers under "Selected publications", by permalink, in order.
selected_publications:
  - /publication/2026-tmlr-timepre
  - /publication/2026-scirep-kanmixer
  - /publication/2026-arxiv-subject-specific
  - /publication/2025-frontiers-hum-neuro

# "Background & affiliations" rows: a short label and Markdown text.
background:
  - label: Affiliation
    text: >-
      At the [**Graduate School of Information Sciences (GSIS)**](https://www.is.tohoku.ac.jp/en/), Tohoku University:
      the [**Yamada Laboratory**](https://yamada-lab.gr.jp/ja/index.html) and the
      [**International Liaison Office (ILO)**](https://www.is.tohoku.ac.jp/introduction/ilo/).
  - label: Concurrent
    text: >-
      Social Integration Research Division,
      [**Unprecedented-scale Data Analytics Center (UDAC)**](https://udac.tohoku.ac.jp/).
  - label: Ph.D.
    text: >-
      Under [**Prof. Satoshi Shioiri**](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=en) at the
      [**Visual Cognition and Systems Laboratory**](https://sites.google.com/view/shioiri-satoshi/).
  - label: Visiting
    text: >-
      Visiting PhD Scholar in the Sydney Cash Lab, **Harvard Medical School / Massachusetts General Hospital**.
---

**Assistant Professor** at [Tohoku University](https://www.tohoku.ac.jp/en/). My research connects AI and the brain in two directions that inform each other.
