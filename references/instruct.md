我现在需要创建一个类似于mbti 的项目 abti 用于测试和验证agent 下的MBTI信息，内容形式是参考http://sbti.unun.dev 和
https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator

你需要完成的任务是：
1. 帮我找一下是否有相关的文档，代码和开源实现。
2. 帮我设计一下ABTI的16种”人格“，并且主要是用于分析agent的行为和决策模式，可以有拟人的效果，并且需要注意人格需要带有一定的戏虐性，比如“FUCKer”，“DAMNer”， “WORKer”之类的网络流行语，最好可以兼顾中英双语的表达。其次需要设计对应的Agent 人格的类型和相关分解读分析，补充到ABTI.md文档中，然后创建对应的16个子目录来梳理和解读对应的内容。
2.1 需要设计一个CLI 内的ASCII的Agent 人格类型卡片，任务样式和风格最好能够参考MBTI的设计风格来做，并且给出纯ASCII的渲染结果，可以补充到markdown 当中，也是一个单独的markdown 文件，命名为XXX_CHARACTER.md。
3. 设计对应的测试题，题目需要有一定的趣味性和戏虐性，能够反映出agent在不同情境下的行为和决策模式，并且有对应的评分和雷达图能够映射到对应的16种人格类型上。
4. 设计对应的完整项目，参考 openclaw 之类的安装和配置方式，预期是在vercel 中会提供一个api和对应的SKILL.md 可以让agent 来调用这个测试，并且能够返回对应的ABTI人格类型和分析结果。
5. 完成本地的端到端测试验证结果。
