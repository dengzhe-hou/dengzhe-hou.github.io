---
title: "WMF-AM: Probing LLM Working Memory via Depth-Parameterized Cumulative State Tracking"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-wmf-am
excerpt: 'We introduce Working Memory Fidelity-Active Manipulation (WMF-AM), a probe of cumulative state tracking that isolates within-pass cumulative load by parameterizing depth K. Testing 20 open-weight models (0.5B–35B) across 13 families, our probe predicts agent performance with r = 0.612 (p < 0.001).'
date: 2026-03-28
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2603.27343'
citation: 'Hou, D., Jiang, L., Li, D., Li, Z., Lin, F., &amp; Yamada, K. D. (2026). WMF-AM: Probing LLM Working Memory via Depth-Parameterized Cumulative State Tracking. <i>arXiv preprint arXiv:2603.27343</i>.'
---

Existing evaluations of large language models (LLMs) use fixed-difficulty benchmarks that cannot adapt as models improve, and rarely isolate specific cognitive processes. We introduce Working Memory Fidelity-Active Manipulation (WMF-AM), a probe of cumulative state tracking — the ability to maintain and update intermediate results across K sequential operations within a single query, without a scratchpad. Unlike multi-step agent benchmarks that stress task orchestration, WMF-AM isolates within-pass cumulative load by parameterizing depth K.

Testing 20 open-weight models ranging from 0.5B to 35B parameters across 13 families, our probe predicts agent performance with a correlation of 0.612 (p < 0.001). Our findings suggest that cumulative state tracking under load, rather than single-step arithmetic or entity tracking alone, is the primary difficulty source. Ablation experiments validate this interpretation, and our calibration approach maintains discriminative power where prior benchmarks plateau.

**Code:** [github.com/dengzhe-hou/WMF-AM](https://github.com/dengzhe-hou/WMF-AM)
