---
title: "Control-Diverse Reinforcement Fine-Tuning: Decoupling the Shared Control Bottleneck of RL Post-Training"
collection: publications
category: preprints
permalink: /publication/2026-arxiv-cd-rft
excerpt: 'RL post-training is usually explained by which circuits it activates. We separate activation from control, and find that control concentrates on a shared set of components across tasks even when activations look diverse.'
date: 2026-08-08
venue: 'arXiv preprint (under review, AAAI 2027)'
paperurl: 'https://arxiv.org/abs/2608.08224'
citation: 'Tan, B., Wang, J., Hou, D., Jiang, L., Wu, Z., Shen, Y., Lin, F., Yamada, K., &amp; Koike, A. (2026). Control-Diverse Reinforcement Fine-Tuning: Decoupling the Shared Control Bottleneck of RL Post-Training. <i>arXiv preprint arXiv:2608.08224</i>.'
---

Accounts of why reinforcement learning post-training works usually appeal to circuit activation: the model learns to switch on the right internal machinery. That conflates two different things. A component can be active without being the thing that drives the reward improvement.

We separate the two by introducing the Post-training Control Coefficient, which quantifies how much a given component actually controls reward gains rather than merely lighting up. Measured this way, a pattern appears that activation-based analysis hides: control concentrates on a shared set of components across otherwise unrelated tasks, even where activation patterns look diverse. We call this the Shared Control Bottleneck.

Control-Diverse Reinforcement Fine-Tuning (CD-RFT) regularizes training to relieve that bottleneck while keeping the computational cost close to standard RFT. On Qwen2.5-7B it improves multi-task performance across mathematics, code and logic, and the effect carries over to a second model architecture.
