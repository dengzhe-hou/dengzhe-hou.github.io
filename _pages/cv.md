---
layout: cv-layout
title: "CV"
heading: Curriculum vitae   # the h1; `title` stays "CV" for the browser tab, search results and the nav
permalink: /cv/
body_class: cv-page
redirect_from:
  - /resume

# ---------------------------------------------------------------------------
# The CV is data: _layouts/cv-layout.html renders the sections below, in
# this order, each numbered automatically ("01 / 11") and listed in the
# section index under the title.
#
# A section has `id` (its #anchor, kept from the old Markdown CV), `title`,
# and one of:
#   rows:        entries (see below)
#   collection:  publications | talks | teaching (rows come from the
#                collection, newest first; `link_url`/`link_text` add a head link)
#
# A row has a left column (the rail) and a main column. Every text field is
# Markdown, so links, *italics* and <span lang="ja">…</span> work.
#   rail:  when     date or period, e.g. "Apr 2026 – present"
#          note     a word under the date, e.g. "completed"
#          label    a small uppercase label instead of / above the date
#          theme    a research theme from _data/themes.yml (marker + label)
#   main:  title    the entry's first line (bold in the old CV)
#          text     the line(s) under the title
#          details  a list of short lines under that
#          items    a list shown as hairline-separated items
#          statement  one sentence in larger type
#   acts:  links    [{text, url}] small links at the right ("Certificate ↗")
#   id:    an #anchor on the row
#
# Optional: `pdf: /files/cv.pdf` adds a "PDF ↗" link to the page head.
# ---------------------------------------------------------------------------

sections:

  - id: appointments
    title: Appointments
    rows:
      - when: Apr 2026 – present
        title: Assistant Professor
        text: Graduate School of Information Sciences, Tohoku University, Japan
        details:
          - Yamada Laboratory · International Liaison Office (ILO)
      - when: Apr 2026 – present
        title: Assistant Professor (Concurrent)
        text: Unprecedented-scale Data Analytics Center (UDAC), Social Integration Research Division, Tohoku University
        details:
          - TechGov initiative (from May 2026); research member, Tohoku University × NTT DATA Group joint research on technology governance (from Jun 2026)

  - id: education
    title: Education
    rows:
      - when: Apr 2023 – Mar 2026
        title: Ph.D., Information Sciences (Cognitive Neuroscience / Vision Science)
        text: Graduate School of Information Sciences, Tohoku University, Japan
        details:
          - "Thesis: *Exploring Brain Mechanisms of Self-Initiated Attention Shift: Simultaneous Recording of EEG and Eye Movements*"
          - "Advisors: [Prof. Satoshi Shioiri](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=en), [Prof. Shuichi Sakamoto](https://scholar.google.com/citations?user=h7ymzUgAAAAJ&hl=en), [Prof. Chia-huei Tseng](https://scholar.google.com/citations?hl=en&user=g00AZTcAAAAJ)"
          - Visual Cognition and Systems Laboratory
          - "Programs: [Graduate Program in Data Science (GPDS)](https://gp-ds.tohoku.ac.jp/ja/index.html) · [JST Next Generation Researcher Challenging Research Program](https://pgd.tohoku.ac.jp/rpc/next_generation.html)"
      - when: Aug 2024 – Jan 2025
        title: Visiting PhD Scholar
        text: Harvard Medical School / Massachusetts General Hospital
        details:
          - Department of Neurology, MGH
          - Training in sEEG, hyperscanning, neural mechanisms of speech and interactive communication
          - "Advisors: Instructor Jing (Jill) Cai, Prof. Sydney S. Cash"
      - when: Apr 2021 – Mar 2023
        title: M.S., Information Sciences
        text: Graduate School of Information Sciences, Tohoku University, Japan
        details:
          - Visual Cognition and Systems Laboratory
          - "Advisors: [Prof. Satoshi Shioiri](https://scholar.google.com/citations?user=I9qDcUsAAAAJ&hl=en), [Prof. Chia-huei Tseng](https://scholar.google.com/citations?hl=en&user=g00AZTcAAAAJ)"
          - "Program: [GPDS](https://gp-ds.tohoku.ac.jp/ja/index.html) (joined Apr 2022)"
      - when: Sep 2016 – Jul 2020
        title: B.Eng., Electronic and Information Engineering (Automation)
        text: Tongji University, China
        details:
          - "Advisor: [Assoc. Prof. Xia Zhao](https://see.tongji.edu.cn/info/1388/10495.htm)"
          - "GPA: 4.15/5.0 (Top 30%)"

  - id: research-interests
    title: Research interests
    rows:
      - id: ai4brain
        theme: AI4Brain
        items:
          - Reliable decoding and automated analysis of EEG (preprocessing-induced instability, per-trial uncertainty, feature attribution)
          - Visual attention and self-initiated attentional control
          - Eye movement–EEG integration (gaze-contingent paradigms, saccades and microsaccades)
          - Decision-related neural dynamics and computational modeling (accumulation-to-bound, time–frequency analysis)
      - id: brain4ai
        theme: Brain4AI
        items:
          - Cognitive neuroscience as a framework for understanding, evaluating, and improving AI systems
          - Cognitive probes and evaluation protocols for LLMs (working memory, cumulative state tracking, cognitive ability structure)
      - label: Current work
        statement: Across these directions, my current work explores aligning brain signals (EEG, fMRI) with representations in large language and vision-language models.

  - id: publications
    title: Publications
    collection: publications
    link_url: /publications/
    link_text: All publications

  - id: talks--presentations
    title: Talks & presentations
    collection: talks
    link_url: /talks/
    link_text: All presentations

  - id: teaching
    title: Teaching
    collection: teaching

  - id: grants-fellowships--awards
    title: Grants, fellowships & awards
    rows:
      - when: Jul 2026 – Mar 2028
        title: "[KAKENHI Grant-in-Aid for Research Activity Start-up](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-26K25566/) (PI)"
        text: '<span lang="ja">注意テンプレートの表象形式：計算モデル階層・脳波・視線追跡による解明</span> (26K25566, ¥2,600,000)'
      - when: Aug 2026
        title: "[Kaggle](https://www.kaggle.com/monkeydz) Silver Medal"
        text: "[ROGII - Wellbore Geology Prediction](https://www.kaggle.com/competitions/rogii-wellbore-geology-prediction) (89/6125, top 1.5%)"
        links:
          - text: Certificate
            url: /images/kaggle-rogii-silver-2026.png
      - when: Aug 2026
        title: Research Grant (PI)
        text: 'Interdisciplinary Research Project Development Support, Graduate School of Information Sciences (GSIS), Tohoku University: <span lang="ja">認知科学実験パラダイムに基づくAIシステム認知能力評価プラットフォームの開拓</span> (¥500,000)'
      - when: Jul 2026
        title: Research Grant (PI)
        text: "[Center for So-Go-Chi (Convergence Knowledge) Informatics](https://www.aisogochi.tohoku.ac.jp/), Tohoku University (¥400,000)"
      - when: Jun 2026 – present
        title: Research Member
        text: "Tohoku University × NTT DATA Group Joint Research on Technology Governance ([TechGov](https://techgov.udac.tohoku.ac.jp/ja/index.html#home), UDAC) (¥1,000,000 individual allocation, of ¥40,000,000 total project)"
      - when: "2026"
        title: "[Kaggle Expert](https://www.kaggle.com/monkeydz)"
        text: "Bronze Medal, [CSIRO Image2Biomass Prediction](https://www.kaggle.com/competitions/csiro-biomass) (355/3805)"
      - when: 2025 – 2026
        note: completed
        title: "[JSPS DC2 Research Fellowship](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-25KJ0641)"
        text: Japan Society for the Promotion of Science
      - when: Feb 2025
        title: "[Kaggle](https://www.kaggle.com/monkeydz) Bronze Medal"
        text: "[Santa 2024: The Perplexity Permutation Puzzle](https://www.kaggle.com/competitions/santa-2024) (148/1514)"
      - when: 2024 – 2028
        title: "[KAKENHI Grant-in-Aid for Scientific Research (A)](https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-24H00700/)"
        text: '<span lang="ja">自発的脳機能の神経基盤理解</span> (PI: Prof. Satoshi Shioiri)'
      - when: Dec 2024
        title: '[Best Presentation Award](https://www.is.tohoku.ac.jp/jp/activity/award/detail---id-1555.html) (<span lang="ja">ベストプレゼンテーション賞</span>)'
        text: 32nd Doctoral Student Presentation, Tohoku University
      - when: Aug 2023
        title: ECVP Student Travel Award
        text: European Conference on Visual Perception
      - when: 2023 – 2025
        title: '[JST Next Generation Researcher Challenging Research Program](https://pgd.tohoku.ac.jp/rpc/next_generation.html) (<span lang="ja">挑戦的研究支援プロジェクト</span>)'
        text: Tohoku University
      - when: Apr 2022 – present
        title: "Tohoku University [GPDS](https://gp-ds.tohoku.ac.jp/ja/index.html) Research Assistant"
        text: '<span lang="ja">東北大学データ科学国際共同大学院プログラム生</span> & Research Assistant'
      - when: Apr 2021 – Mar 2023
        title: "[Kamei Memorial Foundation](https://kmfo.or.jp/) Scholarship for International Students"
        text: '<span lang="ja">公益財団法人亀井記念財団外国人留学生奨学生</span>'
      - when: Sep 2016
        title: Tongji University Undergraduate Entrance Scholarship

  - id: skills
    title: Skills
    rows:
      - label: Neuroimaging & Psychophysics
        text: EEG/ERP, Eye-tracking, sEEG, Gaze-contingent paradigms, Visual psychophysics
      - label: Computational Methods
        text: Time-frequency analysis, Neural decoding (MVPA), Accumulation-to-bound modeling, Machine learning
      - label: Programming
        text: Python, MATLAB, R, MNE-Python, EEGLAB

  - id: languages
    title: Languages
    rows:
      - label: Chinese (Mandarin)
        text: Native or bilingual proficiency
      - label: English
        text: Professional working proficiency (TOEIC 910/990, TOEFL 90/120)
      - label: Japanese
        text: Limited working proficiency (JLPT N2)

  - id: service
    title: Service
    rows:
      - id: editorial-board
        label: Editorial Board
        when: 2026 – present
        title: Editorial Board Member
        text: '*[Interdisciplinary Information Sciences](https://www.is.tohoku.ac.jp/en/iis/)* (ISSN <span class="nowrap">1347-6157</span> / <span class="nowrap">1340-9050</span>), Graduate School of Information Sciences, Tohoku University'
      - id: peer-reviewer
        label: Peer Reviewer
        items:
          - "*npj Science of Learning*"
          - "*Cognitive Neurodynamics*"
          - "*Journal of NeuroEngineering and Rehabilitation*"
          - "*Scientific Reports*"
          - "*Discover Neuroscience*"
          - European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD 2026)
          - International Joint Conference on Neural Networks (IJCNN)

  - id: affiliations--links
    title: Affiliations & links
    rows:
      - items:
          - "[Graduate School of Information Sciences (GSIS)](https://www.is.tohoku.ac.jp/en/), Tohoku University"
          - "[Yamada Laboratory](https://yamada-lab.gr.jp/ja/index.html)"
          - "[International Liaison Office (ILO)](https://www.is.tohoku.ac.jp/introduction/ilo/)"
          - "[Unprecedented-scale Data Analytics Center (UDAC)](https://udac.tohoku.ac.jp/), Social Integration Research Division"
          - "[Collaborative Research Laboratory for Technology Governance (TechGov)](https://techgov.udac.tohoku.ac.jp/ja/index.html), Tohoku University × NTT Data Group"
          - "[Graduate Program in Data Science (GPDS)](https://gp-ds.tohoku.ac.jp/ja/index.html)"
          - "[TOHOKU AI GROUP](https://tai.udac.tohoku.ac.jp/ja/index.html), Artificial Intelligence Research Group at Tohoku University"
---
