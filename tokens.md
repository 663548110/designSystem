# Token Truth

## Token Sources

```yaml
token_sources:
  color: REPLACE_ME
  spacing: REPLACE_ME
  radius: REPLACE_ME
  typography: REPLACE_ME
  shadow: REPLACE_ME
```

## Token Mapping Template

```yaml
token_mapping:
  token_id: REPLACE_ME
  semantic_name: REPLACE_ME
  runtime_source:
    kind: REPLACE_ME
    name: REPLACE_ME
    path: REPLACE_ME
  figma_source:
    kind: REPLACE_ME
    key: REPLACE_ME
    name: REPLACE_ME
  fallback:
    allowed: false
    value: REPLACE_ME
```

## Consumer Notes

```yaml
consumer_notes:
  figma_generation:
    uses:
      - semantic token selection
      - figma variable or style mapping
  code_implementation:
    uses:
      - runtime token source path
      - semantic token binding
  component_library_mcp:
    uses:
      - token truth lookup
      - runtime and figma source lookup
  documentation_site:
    uses:
      - token tables
      - source references
```

## Notes

- [待补充]
