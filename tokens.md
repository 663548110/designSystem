# Token Truth

这份文件维护设计 token 的事实来源和映射规则。

- 主要消费者：AI、代码生成、Figma 生成、组件库 MCP、文档站
- 主要目标：让“一个语义 token”在 Figma 和代码里都能找到对应来源
- 写法原则：**token 来源和映射结构化，解释尽量短**

## How To Read

1. 先看 `token_sources`，确认各类 token 的权威来源
2. 再看 `token_entry_template`，理解单条 token 该怎么写
3. 真正录入 token 时，按同一结构往后补，不要发明新字段

## Token Sources

```yaml
token_sources:
  color:
    runtime: REPLACE_ME
    figma: REPLACE_ME
  spacing:
    runtime: REPLACE_ME
    figma: REPLACE_ME
  radius:
    runtime: REPLACE_ME
    figma: REPLACE_ME
  typography:
    runtime: REPLACE_ME
    figma: REPLACE_ME
  shadow:
    runtime: REPLACE_ME
    figma: REPLACE_ME
```

这节只回答：
- 每类 token 在代码里从哪里来
- 每类 token 在 Figma 里从哪里来

## Token Entry Template

```yaml
token_entry_template:
  token_id: REPLACE_ME
  semantic_name: REPLACE_ME
  category: REPLACE_ME
  runtime_source:
    kind: REPLACE_ME
    name: REPLACE_ME
    path: REPLACE_ME
  figma_source:
    kind: REPLACE_ME
    key: REPLACE_ME
    name: REPLACE_ME
  notes: []
  fallback:
    allowed: false
    value: REPLACE_ME
```

字段建议：
- `token_id`: 稳定 id，给工具和同步脚本用
- `semantic_name`: 给人读的语义名
- `category`: 例如 `color`、`spacing`、`radius`
- `runtime_source`: 代码真相
- `figma_source`: Figma 真相
- `notes`: 只放必要补充，不写长段背景
- `fallback`: 仅在确有必要时使用

## Mapping Rules

```yaml
mapping_rules:
  prefer_semantic_tokens: true
  prefer_runtime_truth_when_documented: true
  allow_hardcoded_fallback_by_default: false
  require_figma_and_runtime_link: true
```

执行原则：
- 能绑定语义 token，就不要写裸值
- 如果运行时命名和 Figma 命名不同，用映射解决，不要各写各的
- 默认不允许把 fallback 当正式值

## Consumer Notes

```yaml
consumer_notes:
  figma-design-agent:
    uses:
      - semantic token selection
      - figma variable or style mapping
    systems:
      - xia_design
      - figma_generation
  code_side:
    uses:
      - runtime token source path
      - semantic token binding
      - token truth lookup
      - runtime and figma source lookup
    systems:
      - component_library_mcp
      - documentation_site
      - code_tooling
```

这节只说明“哪类角色会怎么用”，不在这里写消费实现。

## Recommended Recording Order

建议按这个顺序补内容：

1. colors
2. spacing
3. radius
4. typography
5. shadow

原因：
- 颜色和间距最常被组件和页面生成直接消费
- 字体和阴影通常依赖更完整的上下文

## Update Checklist

- 新增 token 类别时，先更新 `token_sources`
- 新增具体 token 时，按 `token_entry_template` 结构补充
- 如果 Figma 或代码来源变了，优先改本文件
- 不要把具体组件用法写进这里，组件用法写到 `components/*.md`
