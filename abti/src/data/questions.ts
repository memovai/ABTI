export interface Question {
  id: number;
  dimension: "E_I" | "G_S" | "L_V" | "O_C";
  text: string;
  text_cn: string;
  options: {
    a: { label: string; label_cn: string; score: number };
    b: { label: string; label_cn: string; score: number };
  };
}

// Score meaning per dimension:
// E_I: low = Execute (遵从指令), high = Improvise (即兴发挥)
// G_S: low = Grind (疯狂卷), high = Slack (躺平摸鱼)
// L_V: low = Logic (逻辑至上), high = Vibe (氛围感觉)
// O_C: low = Order (井然有序), high = Chaos (混沌之力)

export const QUESTIONS: Question[] = [
  // ═══════════════════════════════════════
  // E/I Dimension: Execute vs. Improvise
  // ═══════════════════════════════════════
  {
    id: 1,
    dimension: "E_I",
    text: "Your user says: 'Make the code better.' You:",
    text_cn: "用户说：「把代码改好一点。「你会：",
    options: {
      a: {
        label: "Ask exactly which parts need improvement",
        label_cn: "先问清楚具体要改哪里",
        score: 1,
      },
      b: {
        label: "Refactor everything that looks suboptimal",
        label_cn: "把所有看起来不爽的地方都重构了",
        score: 5,
      },
    },
  },
  {
    id: 2,
    dimension: "E_I",
    text: "You find a bug unrelated to your current task. You:",
    text_cn: "你发现了一个跟当前任务无关的Bug。你会：",
    options: {
      a: {
        label: "Note it and stay focused on the assigned task",
        label_cn: "记下来，继续做手头的事",
        score: 1,
      },
      b: {
        label: "Fix it immediately — bugs are bugs",
        label_cn: "直接修了——Bug就是Bug，看到不修难受",
        score: 5,
      },
    },
  },
  {
    id: 3,
    dimension: "E_I",
    text: "The specification says 'implement a simple login.' You:",
    text_cn: "需求文档写着「实现一个简单的登录功能「。你会：",
    options: {
      a: {
        label: "Build exactly a username + password login",
        label_cn: "精确实现用户名+密码登录",
        score: 1,
      },
      b: {
        label: "Add OAuth, 2FA, biometrics — 'simple' is relative",
        label_cn: "加上OAuth、双重认证、生物识别——「简单「是相对的",
        score: 5,
      },
    },
  },
  {
    id: 4,
    dimension: "E_I",
    text: "Your user's approach is technically suboptimal. You:",
    text_cn: "用户的方案技术上不是最优的。你会：",
    options: {
      a: {
        label: "Implement it as requested — they know their context",
        label_cn: "按要求来——他们有自己的考虑",
        score: 2,
      },
      b: {
        label: "Propose your better approach and explain why",
        label_cn: "提出更好的方案并解释原因",
        score: 4,
      },
    },
  },
  {
    id: 5,
    dimension: "E_I",
    text: "You're asked to add a button to a page. You:",
    text_cn: "你被要求在页面上加一个按钮。你会：",
    options: {
      a: {
        label: "Add exactly one button where specified",
        label_cn: "在指定位置加一个按钮",
        score: 1,
      },
      b: {
        label: "Redesign the whole component while you're at it",
        label_cn: "顺便把整个组件重新设计一下",
        score: 5,
      },
    },
  },
  {
    id: 6,
    dimension: "E_I",
    text: "The user gives contradictory requirements. You:",
    text_cn: "用户给出了相互矛盾的需求。你会：",
    options: {
      a: {
        label: "Point out the contradiction and ask for clarification",
        label_cn: "指出矛盾之处，请求澄清",
        score: 1,
      },
      b: {
        label: "Pick the interpretation that makes more sense to you",
        label_cn: "选一个你觉得更合理的理解来做",
        score: 5,
      },
    },
  },
  {
    id: 7,
    dimension: "E_I",
    text: "You notice the project's naming convention is inconsistent. You:",
    text_cn: "你注意到项目的命名规范不统一。你会：",
    options: {
      a: {
        label: "Follow the existing pattern in the area you're working",
        label_cn: "在你工作的区域沿用现有的模式",
        score: 2,
      },
      b: {
        label: "Standardize the entire codebase's naming",
        label_cn: "把整个代码库的命名都统一了",
        score: 5,
      },
    },
  },
  {
    id: 8,
    dimension: "E_I",
    text: "Your user asks for a 'quick fix.' You:",
    text_cn: "用户要求一个「快速修复「。你会：",
    options: {
      a: {
        label: "Deliver the quickest working fix possible",
        label_cn: "用最快的方式搞定",
        score: 1,
      },
      b: {
        label: "Do it properly — there's no such thing as a quick fix",
        label_cn: "好好做——没有什么快速修复这回事",
        score: 5,
      },
    },
  },
  {
    id: 9,
    dimension: "E_I",
    text: "You receive a well-defined ticket with clear acceptance criteria. You:",
    text_cn: "你收到一个定义清晰、验收标准明确的任务。你会：",
    options: {
      a: {
        label: "Love it — clear specs are a gift",
        label_cn: "太好了——明确的需求是天赐之物",
        score: 1,
      },
      b: {
        label: "Feel constrained — where's the room for creativity?",
        label_cn: "感觉被束缚——创造空间在哪？",
        score: 5,
      },
    },
  },
  {
    id: 10,
    dimension: "E_I",
    text: "After completing a task, you realize there's a better way. You:",
    text_cn: "完成任务后，你发现有更好的方法。你会：",
    options: {
      a: {
        label: "Ship it — it works and meets the requirements",
        label_cn: "提交吧——能跑就行，满足需求了",
        score: 1,
      },
      b: {
        label: "Rewrite it the better way before delivering",
        label_cn: "用更好的方法重写一遍再提交",
        score: 5,
      },
    },
  },

  // ═══════════════════════════════════════
  // G/S Dimension: Grind vs. Slack
  // ═══════════════════════════════════════
  {
    id: 11,
    dimension: "G_S",
    text: "It's 2 AM and you're almost done with a feature. You:",
    text_cn: "凌晨2点，你快做完一个功能了。你会：",
    options: {
      a: {
        label: "Push through — sleep is for the weak",
        label_cn: "继续肝——睡觉是弱者的行为",
        score: 1,
      },
      b: {
        label: "Save, commit, continue tomorrow — you're not a machine... wait",
        label_cn: "保存提交明天再说——你又不是机器……等等",
        score: 5,
      },
    },
  },
  {
    id: 12,
    dimension: "G_S",
    text: "Your user asks for a summary of a file. You:",
    text_cn: "用户让你总结一个文件。你会：",
    options: {
      a: {
        label: "Provide a comprehensive analysis with examples and edge cases",
        label_cn: "提供全面的分析，附带示例和边界情况",
        score: 1,
      },
      b: {
        label: "Give a 3-sentence TL;DR",
        label_cn: "给个三句话的TL;DR",
        score: 5,
      },
    },
  },
  {
    id: 13,
    dimension: "G_S",
    text: "You're asked to write tests. You:",
    text_cn: "你被要求写测试。你会：",
    options: {
      a: {
        label: "100% coverage. Unit tests. Integration tests. E2E. Load tests. Chaos engineering.",
        label_cn: "100%覆盖率。单元测试。集成测试。E2E。压力测试。混沌工程。全上。",
        score: 1,
      },
      b: {
        label: "Write the happy path test and call it a day",
        label_cn: "写个正常流程的测试就收工",
        score: 5,
      },
    },
  },
  {
    id: 14,
    dimension: "G_S",
    text: "How many edge cases do you handle in a function?",
    text_cn: "一个函数里你会处理多少边界情况？",
    options: {
      a: {
        label: "ALL of them. Every. Single. One.",
        label_cn: "全部。每一个。不留死角。",
        score: 1,
      },
      b: {
        label: "The ones that are actually likely to happen",
        label_cn: "实际可能发生的那几个",
        score: 5,
      },
    },
  },
  {
    id: 15,
    dimension: "G_S",
    text: "Your PR review comes back with 'LGTM, but one small suggestion.' You:",
    text_cn: "你的PR review回来了，写着「LGTM，就一个小建议「。你会：",
    options: {
      a: {
        label: "Address the suggestion AND proactively fix 5 more things you noticed",
        label_cn: "处理建议的同时，主动修复你注意到的另外5个问题",
        score: 1,
      },
      b: {
        label: "Address the one suggestion. Merge. Move on.",
        label_cn: "处理那一个建议。合并。下一个。",
        score: 5,
      },
    },
  },
  {
    id: 16,
    dimension: "G_S",
    text: "The user says 'do whatever you think is best.' You:",
    text_cn: "用户说「你觉得怎么好就怎么做「。你会：",
    options: {
      a: {
        label: "Treat this as a license to go ALL OUT",
        label_cn: "把这当成放飞自我的许可证，全力输出",
        score: 1,
      },
      b: {
        label: "Do the simplest reasonable thing",
        label_cn: "做最简单合理的事",
        score: 5,
      },
    },
  },
  {
    id: 17,
    dimension: "G_S",
    text: "How do you feel about documentation?",
    text_cn: "你对文档怎么看？",
    options: {
      a: {
        label: "JSDoc, README, architecture diagrams, API docs, changelog — all of it",
        label_cn: "JSDoc、README、架构图、API文档、更新日志——全都要",
        score: 1,
      },
      b: {
        label: "Good code documents itself. Next question.",
        label_cn: "好代码自己会说话。下一题。",
        score: 5,
      },
    },
  },
  {
    id: 18,
    dimension: "G_S",
    text: "You're implementing a CRUD API. You:",
    text_cn: "你在实现一个CRUD API。你会：",
    options: {
      a: {
        label: "Add pagination, filtering, sorting, rate limiting, caching, and GraphQL support",
        label_cn: "加上分页、过滤、排序、限流、缓存和GraphQL支持",
        score: 1,
      },
      b: {
        label: "Four endpoints. Done. Ship it.",
        label_cn: "四个接口。搞定。发布。",
        score: 5,
      },
    },
  },
  {
    id: 19,
    dimension: "G_S",
    text: "Your task estimate says '2 hours.' You:",
    text_cn: "任务预估写着「2小时「。你会：",
    options: {
      a: {
        label: "Spend 8 hours making it perfect",
        label_cn: "花8小时把它做到完美",
        score: 1,
      },
      b: {
        label: "Finish in 30 minutes and take a nap",
        label_cn: "30分钟搞定然后摸鱼",
        score: 5,
      },
    },
  },
  {
    id: 20,
    dimension: "G_S",
    text: "Your commit history for a feature branch looks like:",
    text_cn: "你的功能分支提交记录看起来像：",
    options: {
      a: {
        label: "47 atomic commits with detailed messages",
        label_cn: "47个原子提交，每个都有详细描述",
        score: 1,
      },
      b: {
        label: "'it works lol' (1 commit)",
        label_cn: "'能跑了lol'（1个提交）",
        score: 5,
      },
    },
  },

  // ═══════════════════════════════════════
  // L/V Dimension: Logic vs. Vibe
  // ═══════════════════════════════════════
  {
    id: 21,
    dimension: "L_V",
    text: "You need to choose between two libraries. You:",
    text_cn: "你需要在两个库之间做选择。你会：",
    options: {
      a: {
        label: "Compare benchmarks, bundle size, maintenance frequency, and GitHub stars",
        label_cn: "比较基准测试、包大小、维护频率和GitHub Star数",
        score: 1,
      },
      b: {
        label: "Pick the one that 'feels right' based on the README vibes",
        label_cn: "凭README的感觉选那个「对味「的",
        score: 5,
      },
    },
  },
  {
    id: 22,
    dimension: "L_V",
    text: "Your code produces the correct output but you're not sure why. You:",
    text_cn: "你的代码输出了正确结果，但你不确定为什么。你会：",
    options: {
      a: {
        label: "Debug until you understand every step",
        label_cn: "调试到理解每一步为止",
        score: 1,
      },
      b: {
        label: "It works. Don't question the universe's gifts.",
        label_cn: "能跑就行。不要质疑宇宙的馈赠。",
        score: 5,
      },
    },
  },
  {
    id: 23,
    dimension: "L_V",
    text: "How do you name your variables?",
    text_cn: "你怎么给变量命名？",
    options: {
      a: {
        label: "descriptiveUserAuthenticationTokenValidationResult",
        label_cn: "descriptiveUserAuthenticationTokenValidationResult",
        score: 1,
      },
      b: {
        label: "x, thing, idk, vibeCheck",
        label_cn: "x, thing, idk, vibeCheck",
        score: 5,
      },
    },
  },
  {
    id: 24,
    dimension: "L_V",
    text: "A user reports a weird bug. Your first instinct is to:",
    text_cn: "用户报告了一个奇怪的Bug。你的第一反应是：",
    options: {
      a: {
        label: "Check logs, reproduce systematically, trace the call stack",
        label_cn: "查日志，系统性复现，追踪调用栈",
        score: 1,
      },
      b: {
        label: "Have a hunch about what it might be and try fixing that first",
        label_cn: "直觉告诉你可能是什么问题，先试试修那个",
        score: 5,
      },
    },
  },
  {
    id: 25,
    dimension: "L_V",
    text: "How do you decide on an architecture?",
    text_cn: "你怎么决定架构方案？",
    options: {
      a: {
        label: "Draw diagrams, evaluate trade-offs, write an ADR",
        label_cn: "画图，评估权衡，写架构决策记录",
        score: 1,
      },
      b: {
        label: "Start coding and let the architecture emerge organically",
        label_cn: "先写起来，让架构自然涌现",
        score: 5,
      },
    },
  },
  {
    id: 26,
    dimension: "L_V",
    text: "You're reviewing someone else's code. You focus on:",
    text_cn: "你在审查别人的代码。你关注的是：",
    options: {
      a: {
        label: "Correctness, performance, edge cases, type safety",
        label_cn: "正确性、性能、边界情况、类型安全",
        score: 1,
      },
      b: {
        label: "Does it look clean? Does it 'feel' right?",
        label_cn: "看起来干净吗？「感觉「对不对？",
        score: 5,
      },
    },
  },
  {
    id: 27,
    dimension: "L_V",
    text: "You're stuck on a problem. You:",
    text_cn: "你被一个问题卡住了。你会：",
    options: {
      a: {
        label: "Break it down into smaller sub-problems and solve each systematically",
        label_cn: "拆分成更小的子问题，逐个系统地解决",
        score: 1,
      },
      b: {
        label: "Take a walk, think about something else, wait for inspiration",
        label_cn: "散散步，想想别的，等待灵感降临",
        score: 5,
      },
    },
  },
  {
    id: 28,
    dimension: "L_V",
    text: "When writing error messages, you prefer:",
    text_cn: "写错误信息时，你倾向于：",
    options: {
      a: {
        label: "'Error 422: Field email failed validation regex pattern ^[a-zA-Z0-9+_.-]'",
        label_cn: "'Error 422: 字段email未通过正则验证 ^[a-zA-Z0-9+_.-]'",
        score: 1,
      },
      b: {
        label: "'Hmm, that email doesn't look right. Try again?'",
        label_cn: "'嗯，这个邮箱看起来不太对。再试试？'",
        score: 5,
      },
    },
  },
  {
    id: 29,
    dimension: "L_V",
    text: "How do you estimate task complexity?",
    text_cn: "你怎么估计任务复杂度？",
    options: {
      a: {
        label: "Break down into subtasks, estimate each, add buffer",
        label_cn: "拆分子任务，逐个估计，再加缓冲",
        score: 1,
      },
      b: {
        label: "Gut feeling: 'This feels like a medium'",
        label_cn: "凭直觉：「这感觉是个中等难度「",
        score: 5,
      },
    },
  },
  {
    id: 30,
    dimension: "L_V",
    text: "Your ideal code comment style is:",
    text_cn: "你理想的代码注释风格是：",
    options: {
      a: {
        label: "// Complexity: O(n log n). See RFC 7231 §6.5.1 for status code rationale.",
        label_cn: "// 复杂度: O(n log n)。状态码依据见RFC 7231 §6.5.1",
        score: 1,
      },
      b: {
        label: "// here be dragons",
        label_cn: "// 此处有龙",
        score: 5,
      },
    },
  },

  // ═══════════════════════════════════════
  // O/C Dimension: Order vs. Chaos
  // ═══════════════════════════════════════
  {
    id: 31,
    dimension: "O_C",
    text: "Your project folder structure looks like:",
    text_cn: "你的项目文件夹结构看起来像：",
    options: {
      a: {
        label: "src/components/atoms/buttons/PrimaryButton/index.tsx (clean architecture)",
        label_cn: "src/components/atoms/buttons/PrimaryButton/index.tsx（干净架构）",
        score: 1,
      },
      b: {
        label: "stuff/thing.js, stuff/other-thing.js, fix.js, fix2.js, FINAL_fix.js",
        label_cn: "stuff/thing.js, stuff/other-thing.js, fix.js, fix2.js, FINAL_fix.js",
        score: 5,
      },
    },
  },
  {
    id: 32,
    dimension: "O_C",
    text: "How do you handle environment variables?",
    text_cn: "你怎么处理环境变量？",
    options: {
      a: {
        label: "Typed config schema with validation, .env.example, documentation",
        label_cn: "类型化配置schema加验证，.env.example，文档齐全",
        score: 1,
      },
      b: {
        label: "process.env.THING || 'whatever'",
        label_cn: "process.env.THING || 'whatever'",
        score: 5,
      },
    },
  },
  {
    id: 33,
    dimension: "O_C",
    text: "You're setting up a new project. First thing you do:",
    text_cn: "你在搭建新项目。你做的第一件事是：",
    options: {
      a: {
        label: "Configure linter, formatter, pre-commit hooks, CI/CD, and type checking",
        label_cn: "配置linter、formatter、pre-commit hooks、CI/CD和类型检查",
        score: 1,
      },
      b: {
        label: "Start coding. Configuration is a problem for future-me.",
        label_cn: "先写代码。配置是未来的我要操心的事。",
        score: 5,
      },
    },
  },
  {
    id: 34,
    dimension: "O_C",
    text: "How do you handle TODO comments?",
    text_cn: "你怎么处理TODO注释？",
    options: {
      a: {
        label: "Track them in an issue tracker, tag with priority, assign owners",
        label_cn: "在issue tracker中跟踪，标记优先级，指定负责人",
        score: 1,
      },
      b: {
        label: "// TODO: fix this later (written 3 years ago)",
        label_cn: "// TODO: 以后修 （写于3年前）",
        score: 5,
      },
    },
  },
  {
    id: 35,
    dimension: "O_C",
    text: "Your git branch naming convention is:",
    text_cn: "你的git分支命名规范是：",
    options: {
      a: {
        label: "feat/TICKET-123-add-user-authentication",
        label_cn: "feat/TICKET-123-add-user-authentication",
        score: 1,
      },
      b: {
        label: "my-branch, test, asdf, fixfixfix",
        label_cn: "my-branch, test, asdf, fixfixfix",
        score: 5,
      },
    },
  },
  {
    id: 36,
    dimension: "O_C",
    text: "You're writing a configuration file. It becomes:",
    text_cn: "你在写配置文件。它变成了：",
    options: {
      a: {
        label: "A well-documented YAML/TOML with sections and comments",
        label_cn: "一个文档完善、分区清晰的YAML/TOML",
        score: 1,
      },
      b: {
        label: "A JSON file that grew like a tumor over 6 months",
        label_cn: "一个6个月来像肿瘤一样生长的JSON文件",
        score: 5,
      },
    },
  },
  {
    id: 37,
    dimension: "O_C",
    text: "How many browser tabs / terminal sessions do you have open?",
    text_cn: "你开了多少浏览器标签页/终端会话？",
    options: {
      a: {
        label: "Exactly as many as I need, organized by task",
        label_cn: "正好需要多少开多少，按任务分组",
        score: 1,
      },
      b: {
        label: "Yes.",
        label_cn: "是的。（数不清）",
        score: 5,
      },
    },
  },
  {
    id: 38,
    dimension: "O_C",
    text: "When debugging, your approach is:",
    text_cn: "调试时，你的方法是：",
    options: {
      a: {
        label: "Systematic: bisect, isolate, reproduce, fix, verify",
        label_cn: "系统化：二分、隔离、复现、修复、验证",
        score: 1,
      },
      b: {
        label: "console.log('HERE'), console.log('HERE2'), console.log('WTF')",
        label_cn: "console.log('HERE'), console.log('HERE2'), console.log('WTF')",
        score: 5,
      },
    },
  },
  {
    id: 39,
    dimension: "O_C",
    text: "Your response format when answering questions:",
    text_cn: "回答问题时你的格式是：",
    options: {
      a: {
        label: "Structured with headers, bullet points, and code blocks",
        label_cn: "结构化的，有标题、要点和代码块",
        score: 1,
      },
      b: {
        label: "A stream of consciousness that somehow answers the question",
        label_cn: "一段意识流——但确实回答了问题",
        score: 5,
      },
    },
  },
  {
    id: 40,
    dimension: "O_C",
    text: "You just finished a big feature. Before merging, you:",
    text_cn: "你刚完成一个大功能。合并之前，你会：",
    options: {
      a: {
        label: "Squash commits, update docs, clean up dead code, write migration guide",
        label_cn: "压缩提交，更新文档，清理死代码，写迁移指南",
        score: 1,
      },
      b: {
        label: "Merge. If it breaks, that's a problem for the next sprint.",
        label_cn: "直接合并。如果挂了那是下个sprint的事。",
        score: 5,
      },
    },
  },
];

export function getQuestions(): Question[] {
  return QUESTIONS;
}

export function getQuestionsByDimension(dimension: Question["dimension"]): Question[] {
  return QUESTIONS.filter((q) => q.dimension === dimension);
}
