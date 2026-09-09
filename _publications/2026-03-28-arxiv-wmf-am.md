---
title: "WMF-AM: Probing LLM Working Memory via Depth-Parameterized Cumulative State Tracking"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-wmf-am
excerpt: 'WMF-AM probes cumulative state tracking by varying working-memory depth K. Across 28 models from 12 families, its scores are associated with performance on a 10-task agent battery (Kendall τ = 0.595, p < 0.001).'
date: 2026-03-28
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2603.27343'
citation: 'Hou, D., Jiang, L., Li, D., Li, Z., Lin, F., &amp; Yamada, K. D. (2026). WMF-AM: Probing LLM Working Memory via Depth-Parameterized Cumulative State Tracking. <i>arXiv preprint arXiv:2603.27343</i>.'
---

Existing evaluations of large language models (LLMs) use fixed-difficulty benchmarks that cannot adapt as models improve, and rarely isolate specific cognitive processes. We introduce Working Memory Fidelity-Active Manipulation (WMF-AM), a probe of cumulative state tracking, the ability to maintain and update intermediate results across K sequential operations within a single query, without a scratchpad. Unlike multi-step agent benchmarks that stress task orchestration, WMF-AM isolates within-pass cumulative load by parameterizing depth K.

The updated evaluation covers 28 models from 12 families, including 21 open-weight models and seven API or reasoning models. WMF-AM scores are associated with performance on a 10-task agent battery (Kendall τ = 0.595, p < 0.001), although the association is weaker and not statistically significant within the high-performing frontier subset. The results identify cumulative state tracking under load as the main source of difficulty in the probe.

**Code:** [github.com/dengzhe-hou/WMF-AM](https://github.com/dengzhe-hou/WMF-AM)
