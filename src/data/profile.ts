export type Lang = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface ProjectEntry {
  title: LocalizedText;
  tech: string;
  year: string;
  mainUrl?: string;
  extraLinks?: { label: LocalizedText; url: string }[];
  description: LocalizedText;
}

export const profileData = {
  name: {
    en: 'Zhaoyuan Wan',
    zh: '万钊源',
  },
  subName: {
    en: '万钊源',
    zh: 'Zhaoyuan Wan',
  },
  affiliation: {
    en: 'ACM Honors Class, Zhiyuan College, Shanghai Jiao Tong University',
    zh: '上海交通大学 致远学院 ACM 班',
  },
  email: 'multicolor@sjtu.edu.cn',
  github: 'https://github.com/wanoful',
  cvUrl: {
    en: '/cv.pdf',
    zh: '/cv-zh.pdf',
  },

  bio: {
    en: [
      'I am an undergraduate student in the <a href="https://acm.sjtu.edu.cn" target="_blank" rel="noopener">ACM Honors Class</a> at <a href="https://zhiyuan.sjtu.edu.cn" target="_blank" rel="noopener">Zhiyuan College, Shanghai Jiao Tong University</a>.',
      'I am currently a research intern at <a href="https://www.mvig.org/" target="_blank" rel="noopener">MVIG Lab</a> and Noematrix, advised by <a href="https://www.mvig.org/" target="_blank" rel="noopener">Prof. Cewu Lu</a>. My interests lie in embodied AI, 3D computer vision, and machine learning systems.',
    ],
    zh: [
      '我是<a href="https://zhiyuan.sjtu.edu.cn" target="_blank" rel="noopener">上海交通大学致远学院</a>计算机科学方向（<a href="https://acm.sjtu.edu.cn" target="_blank" rel="noopener">ACM 班</a>）的本科生。',
      '目前我在上海交通大学 <a href="https://www.mvig.org/" target="_blank" rel="noopener">MVIG 实验室</a>与穹彻智能（Noematrix）担任科研实习生，师从<a href="https://www.mvig.org/" target="_blank" rel="noopener">卢策吾教授</a>。我的研究兴趣集中在具身智能（Embodied AI）、三维视觉与底层系统优化。',
    ],
  },

  education: {
    school: {
      en: 'Shanghai Jiao Tong University',
      zh: '上海交通大学',
    },
    period: {
      en: '2023 – Present',
      zh: '2023 – 至今',
    },
    degree: {
      en: 'B.Eng. in Computer Science (ACM Honors Class), Zhiyuan College',
      zh: '计算机科学与技术（致远荣誉计划 ACM 班），致远学院',
    },
    prevTrack: {
      en: 'Rank: 2 / 26 · GPA: 4.12 / 4.30 (Score: 94.49 / 100)',
      zh: '专业排名：2 / 26 · 绩点：4.12 / 4.30（学积分：94.49 / 100）',
    },
    coursework: {
      en: 'Selected coursework: Computer Architecture (100), Compiler Design (100), Programming in C++ Honors (98), Discrete Mathematics Honors (98), Data Structures Honors (97), Mathematical Analysis Honors (97), Probability & Statistics Honors (97), Linear Algebra Honors (96).',
      zh: '核心课程成绩：计算机体系结构 (100)、编译器课程设计 (100)、C++ 程序设计荣誉 (98)、离散数学荣誉 (98)、数据结构荣誉 (97)、数学分析荣誉 (97)、概率统计荣誉 (97)、线性代数荣誉 (96)。',
    },
  },

  experience: [
    {
      org: {
        en: 'MVIG Lab, SJTU & Noematrix',
        zh: '上海交通大学 MVIG 实验室 / 穹彻智能',
      },
      orgUrl: 'https://www.mvig.org/',
      role: {
        en: 'Research Intern · Advised by Prof. Cewu Lu',
        zh: '科研实习生 · 导师：卢策吾教授',
      },
      period: {
        en: '2026 – Present',
        zh: '2026.07 – 至今',
      },
      description: {
        en: 'Researching pre-training and post-training of World Action Models (WAM) and Vision-Language-Action policies, with a focus on distilling 3D geometric transitions for generalizable robotic manipulation across simulation (LIBERO, RoboTwin 2.0) and real-world platforms.',
        zh: '从事具身智能世界动作模型（World Action Models）与 VLA 策略的预训练与后训练研究，探索面向机械臂操作的三维几何状态转移蒸馏与空间特征对齐。',
      },
    },
  ],

  projects: [
    {
      title: {
        en: 'STEVE',
        zh: 'STEVE',
      },
      tech: 'PyTorch, 3D Vision, VQ-VAE',
      year: '2026',
      mainUrl: '/papers/steve-paper.pdf',
      description: {
        en: 'Single-image 3D Minecraft architectural reconstruction pipeline combining a multi-view VQ-VAE block tokenizer, monocular depth/camera pose estimation, and a frustum-fused 3D CNN.',
        zh: '基于单张截图的 Minecraft 建筑三维体素重建管线：融合 VQ-VAE 区块视觉 Tokenizer、单目深度/位姿估计网络与反投影 3D CNN。',
      },
    },
    {
      title: {
        en: 'POLARIS',
        zh: 'POLARIS',
      },
      tech: 'Linux Kernel (C), Rust, CUDA VMM',
      year: '2026',
      mainUrl: 'https://github.com/wanoful/Polaris',
      description: {
        en: 'OS-level paged KV-cache layer for LLM inference. Pairs a Linux kernel module (polaris.ko) with a Rust userspace daemon (polarisd) to orchestrate demand paging, GPU↔CPU swapping, and copy-on-write via CUDA VMM.',
        zh: '面向大模型推理的操作系统级分页 KV Cache 管理层，通过 Linux 内核模块与 Rust 守护进程协同调度 CUDA VMM 缺页中断、CPU 异步换页与写时复制。',
      },
    },
    {
      title: {
        en: 'R10K-CPU',
        zh: 'R10K-CPU',
      },
      tech: 'SystemVerilog, Assassyn, RV32IM',
      year: '2026',
      mainUrl: 'https://github.com/wanoful/RV32I_CPU',
      description: {
        en: 'Out-of-order RV32IM processor modeled after the MIPS R10K microarchitecture, featuring a 64-entry physical register file, register renaming, active list, non-blocking LSQ, SRT divider, and branch prediction.',
        zh: '参考 MIPS R10K 微架构实现的 RV32IM 乱序执行处理器，包含 64 项物理寄存器堆、寄存器重命名、ROB、LSQ 访存队列、SRT 除法器与分支预测。',
      },
    },
    {
      title: {
        en: 'c0mpiler',
        zh: 'c0mpiler',
      },
      tech: 'Rust, LLVM IR, RV32IM',
      year: '2026',
      mainUrl: 'https://github.com/wanoful/c0mpiler',
      description: {
        en: 'End-to-end optimizing compiler from a Rust subset to LLVM IR and RV32IM assembly, implemented from scratch in Rust with SSA construction, dataflow optimizations, and graph-coloring register allocation.',
        zh: '使用 Rust 从零实现的 Rust 子集到 LLVM IR 与 RV32IM 汇编的端到端优化编译器，包含 SSA 构造、数据流分析与图着色寄存器分配。',
      },
    },
    {
      title: {
        en: 'Monte Carlo Ray Tracer',
        zh: '物理光线追踪渲染器 (RayTracer)',
      },
      tech: 'Rust, Computer Graphics',
      year: '2025',
      mainUrl: 'https://github.com/wanoful/Raytracer-2025',
      description: {
        en: 'Physically-based path tracer built from scratch in Rust with Probability Density Function (PDF) mixture importance sampling, Disney Principled BSDF, portal light transport, and BVH acceleration.',
        zh: '使用 Rust 从零构建的物理路径追踪渲染器，实现基于概率密度函数（PDF）的混合重要性采样、完整 Disney BSDF 材质与 BVH 并行加速。',
      },
    },
  ] as ProjectEntry[],

  teaching: [
    {
      course: {
        en: 'CS2967 Computer Architecture',
        zh: 'CS2967 计算机体系结构',
      },
      role: {
        en: 'Teaching Assistant · SJTU ACM Honors Class',
        zh: '课程助教 · 致远学院 ACM 班',
      },
      period: {
        en: 'Fall 2026',
        zh: '2026 秋',
      },
      detail: {
        en: 'Designed the Out-of-Order RV32IM CPU grading framework with C++ AXI4-Lite memory co-simulation, Verilator IPC benchmarking, and Yosys + ASAP7 7nm area synthesis.',
        zh: '负责乱序执行 RV32IM CPU 大作业评测框架建设，集成 AXI4-Lite 内存协同仿真、Verilator IPC 评测与 Yosys + ASAP7 面积综合流水线。',
      },
    },
    {
      course: {
        en: 'CS2966 Compiler Design',
        zh: 'CS2966 编译器课程设计',
      },
      role: {
        en: 'Teaching Assistant · SJTU ACM Honors Class',
        zh: '课程助教 · 致远学院 ACM 班',
      },
      period: {
        en: 'Fall 2026',
        zh: '2026 秋',
      },
      url: 'https://acmclasscourse-2025.github.io/rx-compiler-specification/',
      detail: {
        en: 'Authored the formal Rx Language Specification (defining the Rust-subset EBNF grammar, type system, and runtime semantics) and curated the compiler test suite.',
        zh: '主导编写教学语言 Rx 形式化语言规范（Rx Compiler Specification，定义 Rust 子集语法、类型系统与运行时语义）并建设评测用例集。',
      },
    },
  ],

  honors: [
    {
      year: '2024',
      title: {
        en: 'National Scholarship (国家奖学金)',
        zh: '本科生国家奖学金',
      },
      note: {
        en: 'Ministry of Education of China (Top 0.2%)',
        zh: '中华人民共和国教育部（前 0.2%）',
      },
    },
    {
      year: '2023',
      title: {
        en: 'Zhiyuan Honors Scholarship',
        zh: '上海交通大学致远荣誉奖学金',
      },
      note: {
        en: 'Shanghai Jiao Tong University',
        zh: '上海交通大学致远学院',
      },
    },
  ],
};
