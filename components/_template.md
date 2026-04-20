# Component Template

## Metadata

```yaml
component:
  component_id: REPLACE_ME
  semantic_name: REPLACE_ME
  status: draft
  owners: []
  consumers:
    - 设计侧
    - 编码侧
```

## Figma Binding

```yaml
figma_binding:
  source: REPLACE_ME
  file_url: REPLACE_ME
  node_name: REPLACE_ME
  component_key: REPLACE_ME
  type: REPLACE_ME
  variants_source: REPLACE_ME
```

## Code Binding

```yaml
code_binding:
  package: REPLACE_ME
  import_path: REPLACE_ME
  export_name: REPLACE_ME
  source_path: REPLACE_ME
  usage_entry: REPLACE_ME
```

## Usage Scenarios

```yaml
usage_scenarios:
  - REPLACE_ME
```

## Usage Way

```yaml
usage_way:
  placement_rules: []
  composition_rules: []
  do:
    - REPLACE_ME
  do_not:
    - REPLACE_ME
```

## Variants

```yaml
variants:
  - variant_id: REPLACE_ME
    figma_variant: REPLACE_ME
    code_props: {}
    notes: []
```

## Text / Property Mapping

```yaml
properties:
  text: {}
  boolean: {}
  variant: {}
```

## Code Snippets

```dart
// minimal example
```

```dart
// composition example
```

## Consumer Hints

```yaml
consumer_hints:
  设计侧:
    preferred_variant: REPLACE_ME
    key_fields: []
    systems:
      - Figma设计智能体
  编码侧:
    preferred_import: REPLACE_ME
    preferred_props: []
    expose_examples: true
    expose_variants: true
    systems:
      - 组件库 MCP
      - 组件库文档站
      - 相关代码工具
    render_sections:
      - usage_scenarios
      - usage_way
      - variants
      - code_snippets
```

## Notes

- [待补充]
