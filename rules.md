# Shared Rules

## Rule Metadata

```yaml
rule_set:
  id: REPLACE_ME
  version: 0.1.0
  status: draft
  owners: []
  consumers:
    - figma
    - code
    - tooling
```

## Purpose

- [待补充]

## Authority Order

```yaml
authority_order:
  - shared_component_mapping
  - shared_token_truth
  - runtime_truth
  - file_local_usage
  - visual_guesswork
```

## Figma Rules

```yaml
figma_rules:
  workflow: []
  validation: []
  composition_policy: []
```

## Code Rules

```yaml
code_rules:
  component_reuse: []
  token_usage: []
  implementation_constraints: []
```

## Tooling Rules

```yaml
tooling_rules:
  parse_targets: []
  parser_policy: []
  output_requirements: []
```

