# Shared Rules

## Rule Metadata

```yaml
rule_set:
  id: shared-design-system-rules
  version: 0.1.0
  status: draft
  owners: []
  source_of_truth: true
  consumers:
    - figma_generation
    - code_implementation
    - component_library_mcp
    - documentation_site
    - internal_tooling
```

## Purpose

```yaml
purpose:
  primary_goal:
    - keep figma and code decisions aligned to one documented source
    - provide stable component and token semantics for downstream consumers
    - avoid duplicated documentation maintenance across codebase and docs systems
  non_goals:
    - do not store generated site output
    - do not store duplicated code API docs that can be derived elsewhere
```

## Single Source Policy

```yaml
single_source_policy:
  design_system_docs_repo_is_authoritative: true
  downstream_systems_must_consume_from_this_repo: true
  duplicate_manual_sources_for_components: false
  duplicate_manual_sources_for_tokens: false
```

## Authority Order

```yaml
authority_order:
  - component_entry_in_components_directory
  - token_truth_in_tokens_md
  - shared_rules_in_rules_md
  - runtime_truth_when_documented_as_override
  - file_local_usage
  - visual_guesswork
```

## Figma Rules

```yaml
figma_rules:
  workflow:
    - prefer documented component mapping before drawing custom primitives
    - prefer documented figma component keys and variant mapping
    - use documented token truth instead of guessed values
  validation:
    - validate against documented usage scenarios and variants
    - treat component entry as the source for figma-side usage semantics
  composition_policy:
    - compose screens from documented components when available
    - create custom nodes only when no component entry exists
```

## Code Rules

```yaml
code_rules:
  component_reuse:
    - prefer documented code binding before introducing new primitives
    - import from the documented package and export target
  token_usage:
    - prefer semantic tokens from tokens.md
    - do not hardcode values when documented token truth exists
  implementation_constraints:
    - keep usage examples and code snippets aligned with the documented binding
    - changes to component usage contract must update component docs first
```

## Consumer Integration Contract

```yaml
consumer_contract:
  component_library_mcp:
    read_from:
      - rules.md
      - tokens.md
      - components/*.md
    write_back: false
  documentation_site:
    read_from:
      - rules.md
      - tokens.md
      - components/*.md
    write_back: false
  figma_generation:
    read_from:
      - rules.md
      - tokens.md
      - components/*.md
    write_back: false
  code_implementation:
    read_from:
      - rules.md
      - tokens.md
      - components/*.md
    write_back: false
```

## Tooling Rules

```yaml
tooling_rules:
  parse_targets:
    - rules.md
    - tokens.md
    - components/*.md
  parser_policy:
    - yaml_blocks_are_primary_machine_readable_source
    - markdown_text_is_explanatory_support
    - do_not_require_parsers_to_scrape_navigation_lists_for_truth
  output_requirements:
    - preserve stable identifiers
    - preserve source file references
    - allow future generation of mcp datasets and docs pages
```
