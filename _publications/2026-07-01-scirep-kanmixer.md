---
title: "A Compact Kolmogorov–Arnold Network Mixer for Long-Term Time Series Forecasting"
collection: publications
category: manuscripts
permalink: /publication/2026-scirep-kanmixer
excerpt: 'Can a Kolmogorov–Arnold Network serve as the modeling core for forecasting, rather than a decoration on an existing backbone? KANMixer is a deliberately compact architecture built to answer that, and the answer turns out to be conditional.'
date: 2026-07-01
venue: 'Scientific Reports'
paperurl: 'https://www.nature.com/articles/s41598-026-59667-5'
citation: 'Jiang, L., Hou, D., Wang, Y., Su, Y., Xing, S., Chen, W., Zhang, X., Tu, Z., Zhang, Z., Lin, F., Zielewski, M., &amp; Yamada, K. (2026). A compact Kolmogorov–Arnold network mixer for long-term time series forecasting. <i>Scientific Reports</i>. https://doi.org/10.1038/s41598-026-59667-5'
---

Kolmogorov–Arnold Networks are usually bolted onto an existing forecasting backbone, which makes it hard to tell what the KAN itself contributes. KANMixer is built the other way round: a compact, KAN-centered architecture — multi-scale pooling frontend, KAN-based temporal mixing blocks, KAN-based prediction heads — deliberately stripped of auxiliary machinery so the KAN components can be examined on their own terms.

Under a unified five-run reproduction protocol on seven standard benchmarks, KANMixer is competitive with representative LTSF baselines, particularly on ETT-style datasets, while showing dataset-dependent limitations. Statistical tests, ablations, efficiency profiling, Gaussian-noise evaluation and hyperparameter sensitivity analysis all point the same way: the practical value of a KAN depends on basis-function choice, on where in the architecture it sits, and on the compute budget you are willing to spend.

The conclusion is deliberately unglamorous. KANs are promising but not plug-and-play components for long-term forecasting, and their benefits are only meaningful when weighed against robustness and efficiency trade-offs.

**Preprint version** (earlier, differently titled): [KANMixer: a minimal KAN-centered mixer for long-term time series forecasting](https://arxiv.org/abs/2508.01575), arXiv:2508.01575
