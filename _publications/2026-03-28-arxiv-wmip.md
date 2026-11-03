---
title: "WMIP: A Working-Memory-Inspired Programmable Probe of Cumulative State Tracking in Large Language Models"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-wmip
redirect_from:
  - /publication/2026-arxiv-wmf-am
excerpt: 'Across 18 LLMs, accuracy is 84.9% on single-step arithmetic but 31.7% on items that need one number after three to seven updates, and output instructions substantially change measured accuracy.'
date: 2026-03-28
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2603.27343'
citation: 'Hou, D., Jiang, L., Li, D., Li, Z., Lin, F., &amp; Yamada, K. D. (2026). WMIP: A Working-Memory-Inspired Programmable Probe of Cumulative State Tracking in Large Language Models. <i>arXiv preprint arXiv:2603.27343</i>.'
---

Human working memory lets people maintain and update information. Large language models face a related demand when they track updates within a single prompt without writing out intermediate states. WMIP is a working-memory-inspired probe of this cumulative state tracking, with program-computed answers, 3 to 100 updates, and final-state, intermediate-state or multi-target queries, and it compares output protocols on identical items.

Across 18 LLMs, accuracy is 84.9% on single-step arithmetic but 31.7% on core items that require one number after three to seven updates, and from 50 updates on no model exceeds 10%. Core accuracy reaches 88.0% under a larger budget with instructions to write steps and put the answer on the last line, mainly because of the instruction changes rather than the budget. Core accuracy also correlates positively with public Berkeley Function Calling Leaderboard scores. Strong single-step arithmetic therefore does not ensure reliable cumulative tracking, and output protocols substantially change measured accuracy.

**Code and data:** [github.com/dengzhe-hou/WMIP](https://github.com/dengzhe-hou/WMIP). First released as WMF-AM (arXiv v1 and v2); v3 is a substantial revision with new experiments.
