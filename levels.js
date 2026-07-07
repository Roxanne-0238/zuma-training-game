// ============================================================================
// 祖玛训练 · 关卡数据
// ============================================================================
// 格式说明:
//   id            - 关卡编号 (1-24)
//   name          - 关卡名称
//   skill_focus   - 本关教学的技能标签
//   difficulty    - 难度 1-5
//   par           - 理论最优步数 (≤par可获3星)
//   chain_spec    - 初始球链颜色数组 (不含预置3连)
//   queue_spec    - 玩家可用的球序列 (按顺序给出)
//   tutorial_hint - 关卡提示文字
// ============================================================================

const ZUMA_LEVELS = [
  // ---- Level 1: 初次接触 (par 2) ----
  {
    id: 1,
    name: '初次接触',
    skill_focus: ['基础瞄准', '三消入门'],
    difficulty: 1,
    par: 2,
    chain_spec: ['red', 'red', 'green', 'green'],
    queue_spec: ['red', 'green'],
    tutorial_hint: '先插红球凑3红，再插绿球凑3绿，全部清空！'
  },

  // ---- Level 2: 连锁反应 (par 1) ----
  // 插入绿球后: [r,r,g,g,g,r,r] → 3绿消除 → [r,r,r,r] → 4红连锁消除 → []
  {
    id: 2,
    name: '连锁反应',
    skill_focus: ['连锁消除', '一石二鸟'],
    difficulty: 1,
    par: 1,
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red'],
    queue_spec: ['green'],
    tutorial_hint: '把绿球插入两个绿球之间，触发连锁反应，一步清空全部！'
  },

  // ---- Level 3: 三步规划 (par 3) ----
  {
    id: 3,
    name: '三步规划',
    skill_focus: ['多步规划', '顺序思维'],
    difficulty: 2,
    par: 3,
    chain_spec: ['red', 'red', 'blue', 'blue', 'green', 'green'],
    queue_spec: ['red', 'blue', 'green'],
    tutorial_hint: '按顺序使用红→蓝→绿，每步消除一对，三步清空！'
  },

  // ---- Level 4: 多米诺入门 (par 2) ----
  {
    id: 4,
    name: '多米诺入门',
    skill_focus: ['连锁反应', '多米诺消除'],
    difficulty: 2,
    par: 2,
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red', 'blue', 'blue'],
    queue_spec: ['green', 'blue'],
    tutorial_hint: '绿球插入绿绿之间→连锁消4红→蓝蓝收尾。两步清空！'
  },

  // ---- Level 5: 多米诺进阶 (par 3) ----
  {
    id: 5,
    name: '多米诺进阶',
    skill_focus: ['连锁反应', '多米诺消除', '顺序规划'],
    difficulty: 3,
    par: 3,
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red', 'blue', 'blue', 'yellow', 'yellow'],
    queue_spec: ['green', 'blue', 'yellow'],
    tutorial_hint: '绿→连锁消红→蓝→连锁→黄收尾。三步清空10球！'
  },

  // ---- Level 6: 多米诺大师 (par 5) ----
  {
    id: 6,
    name: '多米诺大师',
    skill_focus: ['核心穿插法', '延迟引爆', '多米诺消除'],
    difficulty: 4,
    par: 5,
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red', 'blue', 'blue', 'yellow', 'yellow'],
    queue_spec: ['yellow', 'red', 'green', 'blue', 'red'],
    tutorial_hint: '核心穿插法：前4步异色布局不触发消除，第5步红球引爆！多米诺清场！'
  },

  // ---- Level 7: 多米诺阵列 (par 3) ----
  {
    id: 7,
    name: '多米诺阵列',
    skill_focus: ['多米诺消除', '分隔符战术', '大规模连锁'],
    difficulty: 4,
    par: 3,
    // 红红为核心，绿蓝为分隔符，消除分隔符让红红对接连锁
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red', 'blue', 'blue', 'red', 'red'],
    queue_spec: ['green', 'blue', 'red'],
    tutorial_hint: '多米诺阵列：绿蓝是分隔符→消除它们让红红汇聚→连锁崩塌！最后红球收尾。'
  },

  // ---- Level 8: 潜伏对 (par 3) ----
  {
    id: 8,
    name: '潜伏对',
    skill_focus: ['多米诺消除', '潜伏对', '分隔符战术'],
    difficulty: 5,
    par: 3,
    // 8对红球 + 3对分隔符(绿蓝黄)，3步清16球
    chain_spec: ['red', 'red', 'green', 'green', 'red', 'red', 'blue', 'blue', 'red', 'red', 'yellow', 'yellow', 'red', 'red'],
    queue_spec: ['green', 'blue', 'yellow'],
    tutorial_hint: '16球潜伏对：绿蓝黄三色是分隔符→逐个击破→红红全部对接→多米诺全灭！'
  },

  // ---- Level 9: 六级多米诺 (par 6) ----
  {
    id: 9,
    name: '六级多米诺',
    skill_focus: ['核心穿插法', '六级连锁', '延迟引爆'],
    difficulty: 5,
    par: 6,
    // 用户经典设计：12球→18球，6步布局→6级连锁
    chain_spec: ['red', 'green', 'green', 'yellow', 'red', 'red', 'blue', 'green', 'yellow', 'yellow', 'red', 'red'],
    queue_spec: ['green', 'red', 'blue', 'blue', 'green', 'green'],
    tutorial_hint: '六级多米诺：前5步异色布局不消→第6步绿球引爆→3绿→3蓝→3红→3黄→3绿→3红！6级崩塌！'
  }
];
