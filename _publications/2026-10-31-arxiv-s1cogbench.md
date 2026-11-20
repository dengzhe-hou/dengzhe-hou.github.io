---
title: "S1CogBench: What System One Decision Models Can and Cannot Do on Cognitive Experiments"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-s1cogbench
excerpt: 'A benchmark of System One decision models, which return one fast decision without text, on 24 established cognitive tasks.'
date: 2026-10-31
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2611.00911'
citation: 'Hou, D., &amp; Yamada, K. D. (2026). S1CogBench: What System One Decision Models Can and Cannot Do on Cognitive Experiments. <i>arXiv preprint arXiv:2611.00911</i>.'
---

Decision-making in humans and AI involves multiple cognitive abilities. System One decision models produce fast, structured choices. Their cognitive strengths and limitations, however, remain poorly understood. We introduce S1CogBench, a benchmark of 24 established cognitive tasks and 27 evaluation modes, evaluating seven open models and the API model Jev.

It combines human-response prediction, autonomous execution, and controlled task manipulations to reveal strengths and failures that aggregate scores miss. We find distinct behavioral profiles across the evaluated models. In these models, strong performance on some learning tasks coexists with failures to gather information or adapt to feedback, while high accuracy does not guarantee human-like responses to changing task demands. Shared readout controls show that model rankings depend partly on how choices are extracted. Separate latency comparisons with generative language models show that long responses are much slower than direct decisions, whereas matched one-token generation adds little overhead. To our knowledge, S1CogBench is the first benchmark of System One decision models on established cognitive experiments. It provides a common empirical basis for identifying their capabilities and limitations before integrating them into automated decision systems.

This summary follows the second arXiv version (v2, November 2026).

**Code:** [github.com/dengzhe-hou/S1CogBench](https://github.com/dengzhe-hou/S1CogBench) · **Project page:** [dengzhe-hou.github.io/S1CogBench](https://dengzhe-hou.github.io/S1CogBench/) · **Data:** [Hugging Face](https://huggingface.co/datasets/dengzhe-hou/S1CogBench)
