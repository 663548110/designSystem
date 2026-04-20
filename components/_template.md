# Component Template

## Metadata

```yaml
component:
  component_id: REPLACE_ME
  semantic_name: REPLACE_ME
  status: draft
  owners: []
  consumers:
    - design_side
    - code_side
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
  design_side:
    preferred_variant: REPLACE_ME
    key_fields: []
    systems:
      - xia_design
      - figma_generation
  code_side:
    preferred_import: REPLACE_ME
    preferred_props: []
    expose_examples: true
    expose_variants: true
    systems:
      - component_library_mcp
      - documentation_site
      - code_tooling
    render_sections:
      - usage_scenarios
      - usage_way
      - variants
      - code_snippets
```

## Notes

- [待补充]
