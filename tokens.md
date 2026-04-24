# Token Truth

这份文件维护设计 token 的事实来源和映射规则。

- 主要消费者：AI、代码生成、Figma 生成、组件库 MCP、文档站
- 主要目标：让“一个语义 token”在 Figma 和代码里都能找到对应来源
- 写法原则：**token 来源和映射结构化，解释尽量短**

## How To Read

1. 先看 `token_sources`，确认各类 token 的权威来源
2. 再看 `token_entry_template`，理解单条 token 该怎么写
3. 真正录入 token 时，只在 `## Token Entries` 里追加，不要发明新字段

## Token Sources

```yaml
token_entries:
  - token_id: "color_color_rd_bg_color_brand_page"
    semantic_name: "color / rd/bg-color/brand-page"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorBrandPage"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "20fd8bc35f8f4298ead59ebbb70b62e47c01f2ea"
      name: "color / rd/bg-color/brand-page"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/3"
      Dark:
        value: "#00014D"
        flutter: "0xFF00014D"
        source: "rd/brand-color/1"
      "SL Light":
        value: "#7CE5D9"
        flutter: "0xFF7CE5D9"
        source: "rd/brand-color/3"
      "SL Dark":
        value: "#002E2E"
        flutter: "0xFF002E2E"
        source: "rd/brand-color/1"
      "SL Orange Light":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "rd/brand-color/3"
      "SL Orange Dark":
        value: "#4D2100"
        flutter: "0xFF4D2100"
        source: "rd/brand-color/1"
      "Mrj Light":
        value: "#D7C9FF"
        flutter: "0xFFD7C9FF"
        source: "rd/brand-color/3"
      "Mrj Dark":
        value: "#261D61"
        flutter: "0xFF261D61"
        source: "rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_color_rd_bg_color_component"
    semantic_name: "color / rd/bg-color/component"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorComponent"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "21f1a1225f2dabaeb151d0a922416e4868f6b85d"
      name: "color / rd/bg-color/component"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_bg_color_component_active"
    semantic_name: "color / rd/bg-color/component-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorComponentActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "747085c7794b1b6b63d5438e068173686e286c9e"
      name: "color / rd/bg-color/component-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      Dark:
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "rd/gray-color/10"
      "SL Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "rd/gray-color/10"
      "SL Orange Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Orange Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "rd/gray-color/10"
      "Mrj Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "Mrj Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "rd/gray-color/10"
    notes:
      []
    fallback:
      allowed: false
      value: "#A6A6A6"
  - token_id: "color_color_rd_bg_color_component_disabled"
    semantic_name: "color / rd/bg-color/component-disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorComponentDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a79b9bada0ba5660efb4fc9ff5051f9b60619a6d"
      name: "color / rd/bg-color/component-disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/gray-color/2"
      Dark:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/gray-color/2"
      "SL Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Orange Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/gray-color/2"
      "SL Orange Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "Mrj Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/gray-color/2"
      "Mrj Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_color_rd_bg_color_container"
    semantic_name: "color / rd/bg-color/container"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorContainer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "26f0ae08fdbd532398eef9e72d2369199bb24829"
      name: "color / rd/bg-color/container"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      Dark:
        value: "#242424"
        flutter: "0xFF242424"
        source: "rd/gray-color/13"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "SL Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "rd/gray-color/13"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "SL Orange Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "rd/gray-color/13"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "Mrj Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "rd/gray-color/13"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_bg_color_container_active"
    semantic_name: "color / rd/bg-color/container-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorContainerActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7be75d92f48949bd83d89b2e24ff4623bab1b4ec"
      name: "color / rd/bg-color/container-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      Dark:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Orange Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "Mrj Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_bg_color_ground_glass"
    semantic_name: "color / rd/bg-color/ground-glass"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorGroundGlass"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c63a2970e413d13c0d1479a4ff22a7a6f07b73f5"
      name: "color / rd/bg-color/ground-glass"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFFCC"
        flutter: "0xCCFFFFFF"
        source: "direct"
      Dark:
        value: "#242424CC"
        flutter: "0xCC242424"
        source: "direct"
      "SL Light":
        value: "#FFFFFFCC"
        flutter: "0xCCFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#242424CC"
        flutter: "0xCC242424"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFFCC"
        flutter: "0xCCFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#242424CC"
        flutter: "0xCC242424"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#242424CC"
        flutter: "0xCC242424"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFFCC"
  - token_id: "color_color_rd_bg_color_page"
    semantic_name: "color / rd/bg-color/page"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorPage"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c163aabad8909ec8019334654ed86475abc1bc68"
      name: "color / rd/bg-color/page"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      Dark:
        value: "#181818"
        flutter: "0xFF181818"
        source: "rd/gray-color/14"
      "SL Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "SL Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "rd/gray-color/14"
      "SL Orange Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "SL Orange Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "rd/gray-color/14"
      "Mrj Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "Mrj Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "rd/gray-color/14"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_color_rd_bg_color_secondarycomponent"
    semantic_name: "color / rd/bg-color/secondarycomponent"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorSecondarycomponent"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cdc3c80b8667a8f2c5ab84a720ceccdd5fa4529e"
      name: "color / rd/bg-color/secondarycomponent"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      Dark:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Orange Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Orange Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "Mrj Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "Mrj Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_color_rd_bg_color_secondarycomponent_active"
    semantic_name: "color / rd/bg-color/secondarycomponent-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorSecondarycomponentActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8dc0fc3e6c2b322ec11749ce10e5eaebee625ec7"
      name: "color / rd/bg-color/secondarycomponent-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      Dark:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Orange Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "SL Orange Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "Mrj Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
      "Mrj Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/gray-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#A6A6A6"
  - token_id: "color_color_rd_bg_color_secondarycontainer"
    semantic_name: "color / rd/bg-color/secondarycontainer"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorSecondarycontainer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "db6fbe20a53594f5e89e7278e2a0e58f0924b26b"
      name: "color / rd/bg-color/secondarycontainer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      Dark:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "SL Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "SL Orange Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "SL Orange Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
      "Mrj Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/gray-color/1"
      "Mrj Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "rd/gray-color/12"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_color_rd_bg_color_secondarycontainer_active"
    semantic_name: "color / rd/bg-color/secondarycontainer-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorSecondarycontainerActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "686b38519181fa1c18d47279cda47fd4935e69a9"
      name: "color / rd/bg-color/secondarycontainer-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Orange Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "Mrj Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_color_rd_bg_color_specialcomponent"
    semantic_name: "color / rd/bg-color/specialcomponent"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBgColorSpecialcomponent"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e1ed3aa662be2416da233c781622cb5664b75f8c"
      name: "color / rd/bg-color/specialcomponent"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      Dark:
        value: "#FFFFFF00"
        flutter: "0x00FFFFFF"
        source: "direct"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF00"
        flutter: "0x00FFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF00"
        flutter: "0x00FFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF00"
        flutter: "0x00FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_border_color"
    semantic_name: "color / rd/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c7891f90517e4b36d9bb974def2910efbe77e267"
      name: "color / rd/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_border_level_1_color"
    semantic_name: "color / rd/border-level/1-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBorderLevel1Color"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f5aa206c6220e93ce3ad7dfd0ea64f8329e681c9"
      name: "color / rd/border-level/1-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_border_level_2_color"
    semantic_name: "color / rd/border-level/2-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBorderLevel2Color"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "92a2748742eedb3678c914dffbfe07ca3626e221"
      name: "color / rd/border-level/2-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      Dark:
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "SL Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "SL Orange Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Orange Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "Mrj Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "Mrj Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_color_rd_brand_color"
    semantic_name: "color / rd/brand-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a7472ef25fefe58dc8b2da198116dc80f8c6dd04"
      name: "color / rd/brand-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color/6"
      Dark:
        value: "#6B5EF5"
        flutter: "0xFF6B5EF5"
        source: "rd/brand-color/6"
      "SL Light":
        value: "#0BC7B9"
        flutter: "0xFF0BC7B9"
        source: "rd/brand-color/6"
      "SL Dark":
        value: "#2FD4C6"
        flutter: "0xFF2FD4C6"
        source: "rd/brand-color/6"
      "SL Orange Light":
        value: "#E0A558"
        flutter: "0xFFE0A558"
        source: "rd/brand-color/6"
      "SL Orange Dark":
        value: "#E6B872"
        flutter: "0xFFE6B872"
        source: "rd/brand-color/6"
      "Mrj Light":
        value: "#8F73FB"
        flutter: "0xFF8F73FB"
        source: "rd/brand-color/6"
      "Mrj Dark":
        value: "#A991FF"
        flutter: "0xFFA991FF"
        source: "rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_color_rd_brand_color_1"
    semantic_name: "color / rd/brand-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e5b2b4e545afa0ab2f1fe66347374350de1daec5"
      name: "color / rd/brand-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "direct"
      Dark:
        value: "#00014D"
        flutter: "0xFF00014D"
        source: "direct"
      "SL Light":
        value: "#EDFCFA"
        flutter: "0xFFEDFCFA"
        source: "direct"
      "SL Dark":
        value: "#002E2E"
        flutter: "0xFF002E2E"
        source: "direct"
      "SL Orange Light":
        value: "#FFF9E8"
        flutter: "0xFFFFF9E8"
        source: "direct"
      "SL Orange Dark":
        value: "#4D2100"
        flutter: "0xFF4D2100"
        source: "direct"
      "Mrj Light":
        value: "#F3EFFE"
        flutter: "0xFFF3EFFE"
        source: "direct"
      "Mrj Dark":
        value: "#261D61"
        flutter: "0xFF261D61"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_color_rd_brand_color_10"
    semantic_name: "color / rd/brand-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9afeed5db1e57fe29a11bbaa0452ceecd9a8c723"
      name: "color / rd/brand-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#170068"
        flutter: "0xFF170068"
        source: "direct"
      Dark:
        value: "#F1F1FF"
        flutter: "0xFFF1F1FF"
        source: "direct"
      "SL Light":
        value: "#002E2E"
        flutter: "0xFF002E2E"
        source: "direct"
      "SL Dark":
        value: "#EDFCFA"
        flutter: "0xFFEDFCFA"
        source: "direct"
      "SL Orange Light":
        value: "#4D2100"
        flutter: "0xFF4D2100"
        source: "direct"
      "SL Orange Dark":
        value: "#FFF9E8"
        flutter: "0xFFFFF9E8"
        source: "direct"
      "Mrj Light":
        value: "#261D61"
        flutter: "0xFF261D61"
        source: "direct"
      "Mrj Dark":
        value: "#F3EFFE"
        flutter: "0xFFF3EFFE"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#170068"
  - token_id: "color_color_rd_brand_color_2"
    semantic_name: "color / rd/brand-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "50d45c0d542d4021c32f15247bc9f545c94cf378"
      name: "color / rd/brand-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "direct"
      Dark:
        value: "#0A0876"
        flutter: "0xFF0A0876"
        source: "direct"
      "SL Light":
        value: "#C2F2EC"
        flutter: "0xFFC2F2EC"
        source: "direct"
      "SL Dark":
        value: "#005453"
        flutter: "0xFF005453"
        source: "direct"
      "SL Orange Light":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "direct"
      "SL Orange Dark":
        value: "#713B0B"
        flutter: "0xFF713B0B"
        source: "direct"
      "Mrj Light":
        value: "#ECE5FF"
        flutter: "0xFFECE5FF"
        source: "direct"
      "Mrj Dark":
        value: "#382A87"
        flutter: "0xFF382A87"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_color_rd_brand_color_3"
    semantic_name: "color / rd/brand-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "efac85fbca168739993cfeb7734b31a75cfe936f"
      name: "color / rd/brand-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "direct"
      Dark:
        value: "#1E179F"
        flutter: "0xFF1E179F"
        source: "direct"
      "SL Light":
        value: "#7CE5D9"
        flutter: "0xFF7CE5D9"
        source: "direct"
      "SL Dark":
        value: "#007A76"
        flutter: "0xFF007A76"
        source: "direct"
      "SL Orange Light":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "direct"
      "SL Orange Dark":
        value: "#965A1E"
        flutter: "0xFF965A1E"
        source: "direct"
      "Mrj Light":
        value: "#D7C9FF"
        flutter: "0xFFD7C9FF"
        source: "direct"
      "Mrj Dark":
        value: "#513EAD"
        flutter: "0xFF513EAD"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_color_rd_brand_color_4"
    semantic_name: "color / rd/brand-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d7c7999220f5bb775248b2cf11632d5102c6f3fb"
      name: "color / rd/brand-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#AEBBFF"
        flutter: "0xFFAEBBFF"
        source: "direct"
      Dark:
        value: "#3A2DC9"
        flutter: "0xFF3A2DC9"
        source: "direct"
      "SL Light":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "direct"
      "SL Dark":
        value: "#02A199"
        flutter: "0xFF02A199"
        source: "direct"
      "SL Orange Light":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "direct"
      "SL Orange Dark":
        value: "#BB7E37"
        flutter: "0xFFBB7E37"
        source: "direct"
      "Mrj Light":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "direct"
      "Mrj Dark":
        value: "#6E57D4"
        flutter: "0xFF6E57D4"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#AEBBFF"
  - token_id: "color_color_rd_brand_color_5"
    semantic_name: "color / rd/brand-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "051981fb486920f20d46e0a2001e8375f6a7e5de"
      name: "color / rd/brand-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#8994FF"
        flutter: "0xFF8994FF"
        source: "direct"
      Dark:
        value: "#584AF2"
        flutter: "0xFF584AF2"
        source: "direct"
      "SL Light":
        value: "#2FD4C6"
        flutter: "0xFF2FD4C6"
        source: "direct"
      "SL Dark":
        value: "#0BC7B9"
        flutter: "0xFF0BC7B9"
        source: "direct"
      "SL Orange Light":
        value: "#E6B872"
        flutter: "0xFFE6B872"
        source: "direct"
      "SL Orange Dark":
        value: "#E0A558"
        flutter: "0xFFE0A558"
        source: "direct"
      "Mrj Light":
        value: "#A991FF"
        flutter: "0xFFA991FF"
        source: "direct"
      "Mrj Dark":
        value: "#8F73FB"
        flutter: "0xFF8F73FB"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#8994FF"
  - token_id: "color_color_rd_brand_color_6"
    semantic_name: "color / rd/brand-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f9e3a9603238aeaffc1ef27073b26b1819e2498c"
      name: "color / rd/brand-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "direct"
      Dark:
        value: "#6B5EF5"
        flutter: "0xFF6B5EF5"
        source: "direct"
      "SL Light":
        value: "#0BC7B9"
        flutter: "0xFF0BC7B9"
        source: "direct"
      "SL Dark":
        value: "#2FD4C6"
        flutter: "0xFF2FD4C6"
        source: "direct"
      "SL Orange Light":
        value: "#E0A558"
        flutter: "0xFFE0A558"
        source: "direct"
      "SL Orange Dark":
        value: "#E6B872"
        flutter: "0xFFE6B872"
        source: "direct"
      "Mrj Light":
        value: "#8F73FB"
        flutter: "0xFF8F73FB"
        source: "direct"
      "Mrj Dark":
        value: "#A991FF"
        flutter: "0xFFA991FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_color_rd_brand_color_7"
    semantic_name: "color / rd/brand-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0acf5321742ee74ecb192871046c37dfe1143864"
      name: "color / rd/brand-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "direct"
      Dark:
        value: "#8882F7"
        flutter: "0xFF8882F7"
        source: "direct"
      "SL Light":
        value: "#02A199"
        flutter: "0xFF02A199"
        source: "direct"
      "SL Dark":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "direct"
      "SL Orange Light":
        value: "#BB7E37"
        flutter: "0xFFBB7E37"
        source: "direct"
      "SL Orange Dark":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "direct"
      "Mrj Light":
        value: "#6E57D4"
        flutter: "0xFF6E57D4"
        source: "direct"
      "Mrj Dark":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_color_rd_brand_color_8"
    semantic_name: "color / rd/brand-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "68b69023f537cfa2026eb6c97f816aa6b6d913a2"
      name: "color / rd/brand-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#360ABD"
        flutter: "0xFF360ABD"
        source: "direct"
      Dark:
        value: "#AAA6FA"
        flutter: "0xFFAAA6FA"
        source: "direct"
      "SL Light":
        value: "#007A76"
        flutter: "0xFF007A76"
        source: "direct"
      "SL Dark":
        value: "#7CE5D9"
        flutter: "0xFF7CE5D9"
        source: "direct"
      "SL Orange Light":
        value: "#965A1E"
        flutter: "0xFF965A1E"
        source: "direct"
      "SL Orange Dark":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "direct"
      "Mrj Light":
        value: "#513EAD"
        flutter: "0xFF513EAD"
        source: "direct"
      "Mrj Dark":
        value: "#D7C9FF"
        flutter: "0xFFD7C9FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#360ABD"
  - token_id: "color_color_rd_brand_color_9"
    semantic_name: "color / rd/brand-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "630727699af3910cfcd4f940e09ad67b3d2aa1b9"
      name: "color / rd/brand-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#250092"
        flutter: "0xFF250092"
        source: "direct"
      Dark:
        value: "#CBCBFC"
        flutter: "0xFFCBCBFC"
        source: "direct"
      "SL Light":
        value: "#005453"
        flutter: "0xFF005453"
        source: "direct"
      "SL Dark":
        value: "#C2F2EC"
        flutter: "0xFFC2F2EC"
        source: "direct"
      "SL Orange Light":
        value: "#713B0B"
        flutter: "0xFF713B0B"
        source: "direct"
      "SL Orange Dark":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "direct"
      "Mrj Light":
        value: "#382A87"
        flutter: "0xFF382A87"
        source: "direct"
      "Mrj Dark":
        value: "#ECE5FF"
        flutter: "0xFFECE5FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#250092"
  - token_id: "color_color_rd_brand_color_active"
    semantic_name: "color / rd/brand-color/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8cea47b1b8a6d2621645f4377d1c720bd07e786c"
      name: "color / rd/brand-color/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/7"
      Dark:
        value: "#8882F7"
        flutter: "0xFF8882F7"
        source: "rd/brand-color/7"
      "SL Light":
        value: "#02A199"
        flutter: "0xFF02A199"
        source: "rd/brand-color/7"
      "SL Dark":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "rd/brand-color/7"
      "SL Orange Light":
        value: "#BB7E37"
        flutter: "0xFFBB7E37"
        source: "rd/brand-color/7"
      "SL Orange Dark":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "rd/brand-color/7"
      "Mrj Light":
        value: "#6E57D4"
        flutter: "0xFF6E57D4"
        source: "rd/brand-color/7"
      "Mrj Dark":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_color_rd_brand_color_disabled"
    semantic_name: "color / rd/brand-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "142610d6b06e7adcd6d7670ba86c025d571b37e0"
      name: "color / rd/brand-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/3"
      Dark:
        value: "#1E179F"
        flutter: "0xFF1E179F"
        source: "rd/brand-color/3"
      "SL Light":
        value: "#7CE5D9"
        flutter: "0xFF7CE5D9"
        source: "rd/brand-color/3"
      "SL Dark":
        value: "#007A76"
        flutter: "0xFF007A76"
        source: "rd/brand-color/3"
      "SL Orange Light":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "rd/brand-color/3"
      "SL Orange Dark":
        value: "#965A1E"
        flutter: "0xFF965A1E"
        source: "rd/brand-color/3"
      "Mrj Light":
        value: "#D7C9FF"
        flutter: "0xFFD7C9FF"
        source: "rd/brand-color/3"
      "Mrj Dark":
        value: "#513EAD"
        flutter: "0xFF513EAD"
        source: "rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_color_rd_brand_color_focus"
    semantic_name: "color / rd/brand-color/focus"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColorFocus"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8f4f7c0a873f6bc8a00c01fa90f024ff82d8fc87"
      name: "color / rd/brand-color/focus"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/1"
      Dark:
        value: "#00014D"
        flutter: "0xFF00014D"
        source: "rd/brand-color/1"
      "SL Light":
        value: "#EDFCFA"
        flutter: "0xFFEDFCFA"
        source: "rd/brand-color/1"
      "SL Dark":
        value: "#002E2E"
        flutter: "0xFF002E2E"
        source: "rd/brand-color/1"
      "SL Orange Light":
        value: "#FFF9E8"
        flutter: "0xFFFFF9E8"
        source: "rd/brand-color/1"
      "SL Orange Dark":
        value: "#4D2100"
        flutter: "0xFF4D2100"
        source: "rd/brand-color/1"
      "Mrj Light":
        value: "#F3EFFE"
        flutter: "0xFFF3EFFE"
        source: "rd/brand-color/1"
      "Mrj Dark":
        value: "#261D61"
        flutter: "0xFF261D61"
        source: "rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_color_rd_brand_color_light"
    semantic_name: "color / rd/brand-color/light"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColorLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2ad0388a7bb94a4c620b1e5b31f741810e9b1993"
      name: "color / rd/brand-color/light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/1"
      Dark:
        value: "#00014D"
        flutter: "0xFF00014D"
        source: "rd/brand-color/1"
      "SL Light":
        value: "#EDFCFA"
        flutter: "0xFFEDFCFA"
        source: "rd/brand-color/1"
      "SL Dark":
        value: "#002E2E"
        flutter: "0xFF002E2E"
        source: "rd/brand-color/1"
      "SL Orange Light":
        value: "#FFF9E8"
        flutter: "0xFFFFF9E8"
        source: "rd/brand-color/1"
      "SL Orange Dark":
        value: "#4D2100"
        flutter: "0xFF4D2100"
        source: "rd/brand-color/1"
      "Mrj Light":
        value: "#F3EFFE"
        flutter: "0xFFF3EFFE"
        source: "rd/brand-color/1"
      "Mrj Dark":
        value: "#261D61"
        flutter: "0xFF261D61"
        source: "rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_color_rd_brand_color_light_active"
    semantic_name: "color / rd/brand-color/light-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdBrandColorLightActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3a5d6ee77b1df7cac3b589d2ce6a481a6b004ef6"
      name: "color / rd/brand-color/light-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "rd/brand-color/2"
      Dark:
        value: "#0A0876"
        flutter: "0xFF0A0876"
        source: "rd/brand-color/2"
      "SL Light":
        value: "#C2F2EC"
        flutter: "0xFFC2F2EC"
        source: "rd/brand-color/2"
      "SL Dark":
        value: "#005453"
        flutter: "0xFF005453"
        source: "rd/brand-color/2"
      "SL Orange Light":
        value: "#F9EAC9"
        flutter: "0xFFF9EAC9"
        source: "rd/brand-color/2"
      "SL Orange Dark":
        value: "#713B0B"
        flutter: "0xFF713B0B"
        source: "rd/brand-color/2"
      "Mrj Light":
        value: "#ECE5FF"
        flutter: "0xFFECE5FF"
        source: "rd/brand-color/2"
      "Mrj Dark":
        value: "#382A87"
        flutter: "0xFF382A87"
        source: "rd/brand-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_color_rd_capsule_active_bg"
    semantic_name: "color / rd/capsule/active-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdCapsuleActiveBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "531c5a4deae3880e864c13d1e956d8d99b281c88"
      name: "color / rd/capsule/active-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      Dark:
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_capsule_active_border_color"
    semantic_name: "color / rd/capsule/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdCapsuleActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "87c7d48b0ac285c119c55f6968d3217eded46402"
      name: "color / rd/capsule/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_capsule_bg"
    semantic_name: "color / rd/capsule/bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdCapsuleBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a9c81890028298df76fc0d6565b7da7aade84953"
      name: "color / rd/capsule/bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      Dark:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Orange Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Orange Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "Mrj Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "Mrj Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_color_rd_capsule_wrap_bg"
    semantic_name: "color / rd/capsule/wrap-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdCapsuleWrapBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4eee39ea05d49fd1f0a0f12ef721d88ed7e6c4d5"
      name: "color / rd/capsule/wrap-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      Dark:
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_component_border"
    semantic_name: "color / rd/component-border"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdComponentBorder"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "12ef6d310dfdb3f01544a15a3ee0705c74d6d275"
      name: "color / rd/component-border"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      Dark:
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "SL Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "SL Orange Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "SL Orange Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
      "Mrj Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
      "Mrj Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_color_rd_component_stroke"
    semantic_name: "color / rd/component-stroke"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdComponentStroke"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bed086efdd612f1ff481d90b8b4e537f202f7804"
      name: "color / rd/component-stroke"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_error_color"
    semantic_name: "color / rd/error-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "731ea96bceb0afff7330852bb0d6d88ebd0c0238"
      name: "color / rd/error-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
      Dark:
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "rd/error-color/6"
      "SL Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
      "SL Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "rd/error-color/6"
      "SL Orange Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
      "SL Orange Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "rd/error-color/6"
      "Mrj Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
      "Mrj Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_color_rd_error_color_1"
    semantic_name: "color / rd/error-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "89c805e7f4e4166e1da317d6a1f546ea3b71c43f"
      name: "color / rd/error-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "direct"
      Dark:
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "direct"
      "SL Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "direct"
      "SL Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "direct"
      "SL Orange Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "direct"
      "SL Orange Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "direct"
      "Mrj Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "direct"
      "Mrj Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_color_rd_error_color_10"
    semantic_name: "color / rd/error-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5c33a1aaa35e252321d0ac3ff3d3433304bfa311"
      name: "color / rd/error-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#400404"
        flutter: "0xFF400404"
        source: "direct"
      Dark:
        value: "#FFE0E0"
        flutter: "0xFFFFE0E0"
        source: "direct"
      "SL Light":
        value: "#400404"
        flutter: "0xFF400404"
        source: "direct"
      "SL Dark":
        value: "#FFE0E0"
        flutter: "0xFFFFE0E0"
        source: "direct"
      "SL Orange Light":
        value: "#400404"
        flutter: "0xFF400404"
        source: "direct"
      "SL Orange Dark":
        value: "#FFE0E0"
        flutter: "0xFFFFE0E0"
        source: "direct"
      "Mrj Light":
        value: "#400404"
        flutter: "0xFF400404"
        source: "direct"
      "Mrj Dark":
        value: "#FFE0E0"
        flutter: "0xFFFFE0E0"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#400404"
  - token_id: "color_color_rd_error_color_2"
    semantic_name: "color / rd/error-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "76f5ca4113361d051d88486164b7194f0898b31d"
      name: "color / rd/error-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "direct"
      Dark:
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "direct"
      "SL Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "direct"
      "SL Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "direct"
      "SL Orange Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "direct"
      "SL Orange Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "direct"
      "Mrj Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "direct"
      "Mrj Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD6D6"
  - token_id: "color_color_rd_error_color_3"
    semantic_name: "color / rd/error-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8d313437367e5063df0312e64afc7d45d145d099"
      name: "color / rd/error-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "direct"
      Dark:
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "direct"
      "SL Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "direct"
      "SL Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "direct"
      "SL Orange Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "direct"
      "SL Orange Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "direct"
      "Mrj Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "direct"
      "Mrj Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_color_rd_error_color_4"
    semantic_name: "color / rd/error-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ff7f542c1001cd31afeb226c21ae887e5ad62680"
      name: "color / rd/error-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      Dark:
        value: "#8B1A1A"
        flutter: "0xFF8B1A1A"
        source: "direct"
      "SL Light":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "SL Dark":
        value: "#8B1A1A"
        flutter: "0xFF8B1A1A"
        source: "direct"
      "SL Orange Light":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "SL Orange Dark":
        value: "#8B1A1A"
        flutter: "0xFF8B1A1A"
        source: "direct"
      "Mrj Light":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "Mrj Dark":
        value: "#8B1A1A"
        flutter: "0xFF8B1A1A"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FF7373"
  - token_id: "color_color_rd_error_color_5"
    semantic_name: "color / rd/error-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5758884bc7e7c47c92a04c2d72e8ec0447d6f661"
      name: "color / rd/error-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      Dark:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "SL Light":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "SL Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "SL Orange Light":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "SL Orange Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "Mrj Light":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "Mrj Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F54040"
  - token_id: "color_color_rd_error_color_6"
    semantic_name: "color / rd/error-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "30cd439678582083feef172701046b756927ec69"
      name: "color / rd/error-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      Dark:
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "SL Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "SL Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "SL Orange Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "SL Orange Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
      "Mrj Light":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "direct"
      "Mrj Dark":
        value: "#F54040"
        flutter: "0xFFF54040"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_color_rd_error_color_7"
    semantic_name: "color / rd/error-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bb8dfa9366bd5c1e69b3818cd8fbaf9293445caa"
      name: "color / rd/error-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "direct"
      Dark:
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "SL Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "direct"
      "SL Dark":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "SL Orange Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "direct"
      "SL Orange Dark":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
      "Mrj Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "direct"
      "Mrj Dark":
        value: "#FF7373"
        flutter: "0xFFFF7373"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_color_rd_error_color_8"
    semantic_name: "color / rd/error-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "983a5d8e0f979ce4704914be10b47ba43ad68fc7"
      name: "color / rd/error-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#8C0C0C"
        flutter: "0xFF8C0C0C"
        source: "direct"
      Dark:
        value: "#FF9999"
        flutter: "0xFFFF9999"
        source: "direct"
      "SL Light":
        value: "#8C0C0C"
        flutter: "0xFF8C0C0C"
        source: "direct"
      "SL Dark":
        value: "#FF9999"
        flutter: "0xFFFF9999"
        source: "direct"
      "SL Orange Light":
        value: "#8C0C0C"
        flutter: "0xFF8C0C0C"
        source: "direct"
      "SL Orange Dark":
        value: "#FF9999"
        flutter: "0xFFFF9999"
        source: "direct"
      "Mrj Light":
        value: "#8C0C0C"
        flutter: "0xFF8C0C0C"
        source: "direct"
      "Mrj Dark":
        value: "#FF9999"
        flutter: "0xFFFF9999"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#8C0C0C"
  - token_id: "color_color_rd_error_color_9"
    semantic_name: "color / rd/error-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cfda5d3f9e4b9372a23c37d12354f0850fa32590"
      name: "color / rd/error-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#650808"
        flutter: "0xFF650808"
        source: "direct"
      Dark:
        value: "#FFBFBF"
        flutter: "0xFFFFBFBF"
        source: "direct"
      "SL Light":
        value: "#650808"
        flutter: "0xFF650808"
        source: "direct"
      "SL Dark":
        value: "#FFBFBF"
        flutter: "0xFFFFBFBF"
        source: "direct"
      "SL Orange Light":
        value: "#650808"
        flutter: "0xFF650808"
        source: "direct"
      "SL Orange Dark":
        value: "#FFBFBF"
        flutter: "0xFFFFBFBF"
        source: "direct"
      "Mrj Light":
        value: "#650808"
        flutter: "0xFF650808"
        source: "direct"
      "Mrj Dark":
        value: "#FFBFBF"
        flutter: "0xFFFFBFBF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#650808"
  - token_id: "color_color_rd_error_color_active"
    semantic_name: "color / rd/error-color/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "79162bb541dccbef4fa7ead79a18a9e7a9801126"
      name: "color / rd/error-color/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
      Dark:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/5"
      "SL Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
      "SL Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/5"
      "SL Orange Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
      "SL Orange Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/5"
      "Mrj Light":
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
      "Mrj Dark":
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_color_rd_error_color_disabled"
    semantic_name: "color / rd/error-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "32211ad11f01519909290b14af626addaad754e3"
      name: "color / rd/error-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
      Dark:
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "rd/error-color/3"
      "SL Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
      "SL Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "rd/error-color/3"
      "SL Orange Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
      "SL Orange Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "rd/error-color/3"
      "Mrj Light":
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
      "Mrj Dark":
        value: "#5C1010"
        flutter: "0xFF5C1010"
        source: "rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_color_rd_error_color_focus"
    semantic_name: "color / rd/error-color/focus"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColorFocus"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b01f62f2624d48dd0632bca32d58e4ad8c294842"
      name: "color / rd/error-color/focus"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      Dark:
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "SL Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "SL Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "SL Orange Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "SL Orange Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "Mrj Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "Mrj Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD6D6"
  - token_id: "color_color_rd_error_color_light"
    semantic_name: "color / rd/error-color/light"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColorLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90fcacef09e20e2d91a04fe7c453c22f677dbe59"
      name: "color / rd/error-color/light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
      Dark:
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "rd/error-color/1"
      "SL Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
      "SL Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "rd/error-color/1"
      "SL Orange Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
      "SL Orange Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "rd/error-color/1"
      "Mrj Light":
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
      "Mrj Dark":
        value: "#1A0000"
        flutter: "0xFF1A0000"
        source: "rd/error-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_color_rd_error_color_light_active"
    semantic_name: "color / rd/error-color/light-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdErrorColorLightActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7e070bec9698b389f27ac713257fd4701d9a845c"
      name: "color / rd/error-color/light-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      Dark:
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "SL Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "SL Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "SL Orange Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "SL Orange Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
      "Mrj Light":
        value: "#FFD6D6"
        flutter: "0xFFFFD6D6"
        source: "rd/error-color/2"
      "Mrj Dark":
        value: "#3D0A0A"
        flutter: "0xFF3D0A0A"
        source: "rd/error-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD6D6"
  - token_id: "color_color_rd_font_gray_1"
    semantic_name: "color / rd/font-gray/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontGray1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "30c69acdc01ccf5105c4045517b708a3b55b1ec8"
      name: "color / rd/font-gray/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      Dark:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "SL Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "SL Dark":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "SL Orange Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "SL Orange Dark":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "Mrj Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
      "Mrj Dark":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_color_rd_font_gray_2"
    semantic_name: "color / rd/font-gray/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontGray2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "659a7028a6416744675bb232ade58085def2fc07"
      name: "color / rd/font-gray/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      Dark:
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Orange Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Orange Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "Mrj Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "Mrj Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_color_rd_font_gray_3"
    semantic_name: "color / rd/font-gray/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontGray3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "22c2068947b437b77b35d8bc08db7bc299b1f1cd"
      name: "color / rd/font-gray/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      Dark:
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Orange Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Orange Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "Mrj Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "Mrj Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_color_rd_font_gray_4"
    semantic_name: "color / rd/font-gray/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontGray4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8df284ef55e80ce44f902bdbcf8f2a4a7274c04f"
      name: "color / rd/font-gray/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      Dark:
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "SL Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "SL Dark":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "SL Orange Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "SL Orange Dark":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "Mrj Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
      "Mrj Dark":
        value: "#00000042"
        flutter: "0x42000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_color_rd_font_white_1"
    semantic_name: "color / rd/font-white/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontWhite1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "284ce556704414c10bcbd855aff874a8c898fc83"
      name: "color / rd/font-white/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      Dark:
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "direct"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_font_white_2"
    semantic_name: "color / rd/font-white/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontWhite2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "af08870bb1d32d22370241b10b8f90ff8abd4283"
      name: "color / rd/font-white/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      Dark:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "SL Light":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF8C"
  - token_id: "color_color_rd_font_white_3"
    semantic_name: "color / rd/font-white/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontWhite3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e15ff68dc239b8c2838514288421b018f96d80a0"
      name: "color / rd/font-white/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      Dark:
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "SL Light":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF59"
  - token_id: "color_color_rd_font_white_4"
    semantic_name: "color / rd/font-white/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdFontWhite4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "665e4f824399936df3f9ff28dde3906abda8b05e"
      name: "color / rd/font-white/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      Dark:
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "SL Light":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF38"
  - token_id: "color_color_rd_gray_color_1"
    semantic_name: "color / rd/gray-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "21b5d640c94698488dce41bed5e55e9167f583c4"
      name: "color / rd/gray-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      Dark:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Dark":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Orange Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "SL Orange Dark":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "Mrj Light":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
      "Mrj Dark":
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_color_rd_gray_color_10"
    semantic_name: "color / rd/gray-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3d6b62b15944cde85d6f789e51e983055d11b1cc"
      name: "color / rd/gray-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      Dark:
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "SL Light":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "SL Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "SL Orange Light":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "SL Orange Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "Mrj Light":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
      "Mrj Dark":
        value: "#4B4B4B"
        flutter: "0xFF4B4B4B"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#4B4B4B"
  - token_id: "color_color_rd_gray_color_11"
    semantic_name: "color / rd/gray-color/11"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor11"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8d5c0e4d75e513071a69fa5ed140cd25516cc52f"
      name: "color / rd/gray-color/11"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      Dark:
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Light":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Orange Light":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "SL Orange Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "Mrj Light":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
      "Mrj Dark":
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#383838"
  - token_id: "color_color_rd_gray_color_12"
    semantic_name: "color / rd/gray-color/12"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor12"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c22570009c15cca3801d3cb5f6483730fc6baf01"
      name: "color / rd/gray-color/12"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      Dark:
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Light":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Orange Light":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "SL Orange Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "Mrj Light":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
      "Mrj Dark":
        value: "#2C2C2C"
        flutter: "0xFF2C2C2C"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#2C2C2C"
  - token_id: "color_color_rd_gray_color_13"
    semantic_name: "color / rd/gray-color/13"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor13"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6545ee70ce908baa94888db3ded524849b90c186"
      name: "color / rd/gray-color/13"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      Dark:
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Light":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Orange Light":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "SL Orange Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "Mrj Light":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
      "Mrj Dark":
        value: "#242424"
        flutter: "0xFF242424"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#242424"
  - token_id: "color_color_rd_gray_color_14"
    semantic_name: "color / rd/gray-color/14"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor14"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d004b6c527c8ed0546c12e9c674094379b5441e9"
      name: "color / rd/gray-color/14"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      Dark:
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "SL Light":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "SL Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "SL Orange Light":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "SL Orange Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "Mrj Light":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
      "Mrj Dark":
        value: "#181818"
        flutter: "0xFF181818"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#181818"
  - token_id: "color_color_rd_gray_color_2"
    semantic_name: "color / rd/gray-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3a8231e67db80e072dda861c4b3e38aa4c056dcf"
      name: "color / rd/gray-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      Dark:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "SL Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "SL Dark":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "SL Orange Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "SL Orange Dark":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "Mrj Light":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
      "Mrj Dark":
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_color_rd_gray_color_3"
    semantic_name: "color / rd/gray-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ae3acdd3607ae1dd5395e77ca2397f87f3c5eced"
      name: "color / rd/gray-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      Dark:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Dark":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Orange Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "SL Orange Dark":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "Mrj Light":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
      "Mrj Dark":
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_color_rd_gray_color_4"
    semantic_name: "color / rd/gray-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0b81056697f28a62ec9d40b0d04910498788fa6b"
      name: "color / rd/gray-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      Dark:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "SL Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "SL Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "SL Orange Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "SL Orange Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "Mrj Light":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
      "Mrj Dark":
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_color_rd_gray_color_5"
    semantic_name: "color / rd/gray-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c04e403623aefde420ce7894c288467cda4b1db9"
      name: "color / rd/gray-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      Dark:
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "SL Light":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "SL Dark":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "SL Orange Light":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "SL Orange Dark":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "Mrj Light":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
      "Mrj Dark":
        value: "#C5C5C5"
        flutter: "0xFFC5C5C5"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#C5C5C5"
  - token_id: "color_color_rd_gray_color_6"
    semantic_name: "color / rd/gray-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f3082cf303d28d3605877c4df43bb85ec726bfcb"
      name: "color / rd/gray-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      Dark:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "SL Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "SL Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "SL Orange Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "SL Orange Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "Mrj Light":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
      "Mrj Dark":
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#A6A6A6"
  - token_id: "color_color_rd_gray_color_7"
    semantic_name: "color / rd/gray-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fb85ed0f6a5c09daa2bef862d72e958d322ac9ce"
      name: "color / rd/gray-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      Dark:
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "SL Light":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "SL Dark":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "SL Orange Light":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "SL Orange Dark":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "Mrj Light":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
      "Mrj Dark":
        value: "#8B8B8B"
        flutter: "0xFF8B8B8B"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#8B8B8B"
  - token_id: "color_color_rd_gray_color_8"
    semantic_name: "color / rd/gray-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a0133ca08caa9e713484ead9b784ca37eee9b1a7"
      name: "color / rd/gray-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      Dark:
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "SL Light":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "SL Dark":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "SL Orange Light":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "SL Orange Dark":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "Mrj Light":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
      "Mrj Dark":
        value: "#777777"
        flutter: "0xFF777777"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#777777"
  - token_id: "color_color_rd_gray_color_9"
    semantic_name: "color / rd/gray-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdGrayColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e11479e3f63e4e1c2da441da0db40d7f516ad04f"
      name: "color / rd/gray-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      Dark:
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "SL Light":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "SL Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "SL Orange Light":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "SL Orange Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "Mrj Light":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
      "Mrj Dark":
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#5E5E5E"
  - token_id: "color_color_rd_information_color"
    semantic_name: "color / rd/information-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eb44bac51a99f428fbfe48602c02331e630e30ec"
      name: "color / rd/information-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      Dark:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Orange Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Orange Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "Mrj Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "Mrj Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#2659F0"
  - token_id: "color_color_rd_information_color_1"
    semantic_name: "color / rd/information-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "777354009add4a23a8d9a351851a627e3b34c72a"
      name: "color / rd/information-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "direct"
      Dark:
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "direct"
      "SL Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "direct"
      "SL Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "direct"
      "SL Orange Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "direct"
      "SL Orange Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "direct"
      "Mrj Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "direct"
      "Mrj Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F0F4FF"
  - token_id: "color_color_rd_information_color_10"
    semantic_name: "color / rd/information-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "231fdfe58a4392900d699fb12bd7e814b1041719"
      name: "color / rd/information-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#04165C"
        flutter: "0xFF04165C"
        source: "direct"
      Dark:
        value: "#D6E6FF"
        flutter: "0xFFD6E6FF"
        source: "direct"
      "SL Light":
        value: "#04165C"
        flutter: "0xFF04165C"
        source: "direct"
      "SL Dark":
        value: "#D6E6FF"
        flutter: "0xFFD6E6FF"
        source: "direct"
      "SL Orange Light":
        value: "#04165C"
        flutter: "0xFF04165C"
        source: "direct"
      "SL Orange Dark":
        value: "#D6E6FF"
        flutter: "0xFFD6E6FF"
        source: "direct"
      "Mrj Light":
        value: "#04165C"
        flutter: "0xFF04165C"
        source: "direct"
      "Mrj Dark":
        value: "#D6E6FF"
        flutter: "0xFFD6E6FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#04165C"
  - token_id: "color_color_rd_information_color_2"
    semantic_name: "color / rd/information-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "24ffaddd00998593004605f8735a6742d495cc6b"
      name: "color / rd/information-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "direct"
      Dark:
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "direct"
      "SL Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "direct"
      "SL Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "direct"
      "SL Orange Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "direct"
      "SL Orange Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "direct"
      "Mrj Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "direct"
      "Mrj Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#D6E4FF"
  - token_id: "color_color_rd_information_color_3"
    semantic_name: "color / rd/information-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1a4bfc327d71cb0c5f012d3c7c9a3205fe6eb218"
      name: "color / rd/information-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "direct"
      Dark:
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "direct"
      "SL Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "direct"
      "SL Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "direct"
      "SL Orange Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "direct"
      "Mrj Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "direct"
      "Mrj Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#AABFFF"
  - token_id: "color_color_rd_information_color_4"
    semantic_name: "color / rd/information-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0292490783f1756c745024372afe3c672475f4d2"
      name: "color / rd/information-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      Dark:
        value: "#102690"
        flutter: "0xFF102690"
        source: "direct"
      "SL Light":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "SL Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "direct"
      "SL Orange Light":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "SL Orange Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "direct"
      "Mrj Light":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "Mrj Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#7A9EFF"
  - token_id: "color_color_rd_information_color_5"
    semantic_name: "color / rd/information-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cee06f72fcc3495657ee169795cdb8017024aeb5"
      name: "color / rd/information-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4F7CFF"
        flutter: "0xFF4F7CFF"
        source: "direct"
      Dark:
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "SL Light":
        value: "#4F7CFF"
        flutter: "0xFF4F7CFF"
        source: "direct"
      "SL Dark":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "SL Orange Light":
        value: "#4F7CFF"
        flutter: "0xFF4F7CFF"
        source: "direct"
      "SL Orange Dark":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "Mrj Light":
        value: "#4F7CFF"
        flutter: "0xFF4F7CFF"
        source: "direct"
      "Mrj Dark":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#4F7CFF"
  - token_id: "color_color_rd_information_color_6"
    semantic_name: "color / rd/information-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dcecd8359fa34a5df5a556a1f602057597e2d53d"
      name: "color / rd/information-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      Dark:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "SL Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "SL Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "SL Orange Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "SL Orange Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "Mrj Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
      "Mrj Dark":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#2659F0"
  - token_id: "color_color_rd_information_color_7"
    semantic_name: "color / rd/information-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6f8dbd7de0bc5a314e4f5969acc44f7e0d3587da"
      name: "color / rd/information-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      Dark:
        value: "#5580FF"
        flutter: "0xFF5580FF"
        source: "direct"
      "SL Light":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "SL Dark":
        value: "#5580FF"
        flutter: "0xFF5580FF"
        source: "direct"
      "SL Orange Light":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "SL Orange Dark":
        value: "#5580FF"
        flutter: "0xFF5580FF"
        source: "direct"
      "Mrj Light":
        value: "#1A45D4"
        flutter: "0xFF1A45D4"
        source: "direct"
      "Mrj Dark":
        value: "#5580FF"
        flutter: "0xFF5580FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#1A45D4"
  - token_id: "color_color_rd_information_color_8"
    semantic_name: "color / rd/information-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "062cd3350b2009228b3bc835c5752f11ef1956e7"
      name: "color / rd/information-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#1034AA"
        flutter: "0xFF1034AA"
        source: "direct"
      Dark:
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "SL Light":
        value: "#1034AA"
        flutter: "0xFF1034AA"
        source: "direct"
      "SL Dark":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "SL Orange Light":
        value: "#1034AA"
        flutter: "0xFF1034AA"
        source: "direct"
      "SL Orange Dark":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
      "Mrj Light":
        value: "#1034AA"
        flutter: "0xFF1034AA"
        source: "direct"
      "Mrj Dark":
        value: "#7A9EFF"
        flutter: "0xFF7A9EFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#1034AA"
  - token_id: "color_color_rd_information_color_9"
    semantic_name: "color / rd/information-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3eb9e518a698e71f0c9014a3cdf746ba6ca0bf42"
      name: "color / rd/information-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#092480"
        flutter: "0xFF092480"
        source: "direct"
      Dark:
        value: "#AAC2FF"
        flutter: "0xFFAAC2FF"
        source: "direct"
      "SL Light":
        value: "#092480"
        flutter: "0xFF092480"
        source: "direct"
      "SL Dark":
        value: "#AAC2FF"
        flutter: "0xFFAAC2FF"
        source: "direct"
      "SL Orange Light":
        value: "#092480"
        flutter: "0xFF092480"
        source: "direct"
      "SL Orange Dark":
        value: "#AAC2FF"
        flutter: "0xFFAAC2FF"
        source: "direct"
      "Mrj Light":
        value: "#092480"
        flutter: "0xFF092480"
        source: "direct"
      "Mrj Dark":
        value: "#AAC2FF"
        flutter: "0xFFAAC2FF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#092480"
  - token_id: "color_color_rd_information_color_active"
    semantic_name: "color / rd/information-color/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aed08154643f789d508ab28e2bc4a252950f2d41"
      name: "color / rd/information-color/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      Dark:
        value: "#102690"
        flutter: "0xFF102690"
        source: "rd/information-color/4"
      "SL Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "rd/information-color/4"
      "SL Orange Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "SL Orange Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "rd/information-color/4"
      "Mrj Light":
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color/6"
      "Mrj Dark":
        value: "#102690"
        flutter: "0xFF102690"
        source: "rd/information-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#2659F0"
  - token_id: "color_color_rd_information_color_disabled"
    semantic_name: "color / rd/information-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "19b0736d9592d53f5305ed8719d6d5d69d575db7"
      name: "color / rd/information-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "rd/information-color/3"
      Dark:
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "rd/information-color/3"
      "SL Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "rd/information-color/3"
      "SL Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "rd/information-color/3"
      "SL Orange Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "rd/information-color/3"
      "SL Orange Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "rd/information-color/3"
      "Mrj Light":
        value: "#AABFFF"
        flutter: "0xFFAABFFF"
        source: "rd/information-color/3"
      "Mrj Dark":
        value: "#0A1D72"
        flutter: "0xFF0A1D72"
        source: "rd/information-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#AABFFF"
  - token_id: "color_color_rd_information_color_focus"
    semantic_name: "color / rd/information-color/focus"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColorFocus"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2a9b01251139bb2953b7f922fce5e70a95a3e8a4"
      name: "color / rd/information-color/focus"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      Dark:
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "SL Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "SL Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "SL Orange Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "SL Orange Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "Mrj Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "Mrj Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F0F4FF"
  - token_id: "color_color_rd_information_color_light"
    semantic_name: "color / rd/information-color/light"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColorLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "79c94a7a2aa86433fa1d06608c292f6555bbfb82"
      name: "color / rd/information-color/light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      Dark:
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "SL Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "SL Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "SL Orange Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "SL Orange Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
      "Mrj Light":
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/1"
      "Mrj Dark":
        value: "#020B2E"
        flutter: "0xFF020B2E"
        source: "rd/information-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F0F4FF"
  - token_id: "color_color_rd_information_color_light_active"
    semantic_name: "color / rd/information-color/light-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdInformationColorLightActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8683ff42b5a6a27a3c8701cccf3fa0599c5087da"
      name: "color / rd/information-color/light-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "rd/information-color/2"
      Dark:
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "rd/information-color/2"
      "SL Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "rd/information-color/2"
      "SL Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "rd/information-color/2"
      "SL Orange Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "rd/information-color/2"
      "SL Orange Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "rd/information-color/2"
      "Mrj Light":
        value: "#D6E4FF"
        flutter: "0xFFD6E4FF"
        source: "rd/information-color/2"
      "Mrj Dark":
        value: "#050F4A"
        flutter: "0xFF050F4A"
        source: "rd/information-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#D6E4FF"
  - token_id: "color_color_rd_mask_active"
    semantic_name: "color / rd/mask-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdMaskActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9035b3aef4b6a1b62bd8363ff32910bf691af944"
      name: "color / rd/mask-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      Dark:
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "SL Orange Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Orange Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
      "Mrj Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "Mrj Dark":
        value: "#00000066"
        flutter: "0x66000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_color_rd_mask_background"
    semantic_name: "color / rd/mask-background"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdMaskBackground"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "36f3c1bdd0d450dc44d625c1e2dd4a99c502a868"
      name: "color / rd/mask-background"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFFF5"
        flutter: "0xF5FFFFFF"
        source: "direct"
      Dark:
        value: "#242424F5"
        flutter: "0xF5242424"
        source: "direct"
      "SL Light":
        value: "#FFFFFFF5"
        flutter: "0xF5FFFFFF"
        source: "direct"
      "SL Dark":
        value: "#242424F5"
        flutter: "0xF5242424"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFFF5"
        flutter: "0xF5FFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#242424F5"
        flutter: "0xF5242424"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFFF5"
        flutter: "0xF5FFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#242424F5"
        flutter: "0xF5242424"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFFF5"
  - token_id: "color_color_rd_mask_disabled"
    semantic_name: "color / rd/mask-disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdMaskDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "23b2f597d42a15a9381cd095c7daca279c7d50bf"
      name: "color / rd/mask-disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF99"
        flutter: "0x99FFFFFF"
        source: "direct"
      Dark:
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Light":
        value: "#FFFFFF99"
        flutter: "0x99FFFFFF"
        source: "direct"
      "SL Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF99"
        flutter: "0x99FFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF99"
        flutter: "0x99FFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#00000099"
        flutter: "0x99000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF99"
  - token_id: "color_color_rd_scroll_track_color"
    semantic_name: "color / rd/scroll-track-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdScrollTrackColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3757a152f6ac16fa1bf2a476264f9ab5b3be9870"
      name: "color / rd/scroll-track-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      Dark:
        value: "#333333"
        flutter: "0xFF333333"
        source: "direct"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Dark":
        value: "#333333"
        flutter: "0xFF333333"
        source: "direct"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "SL Orange Dark":
        value: "#333333"
        flutter: "0xFF333333"
        source: "direct"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
      "Mrj Dark":
        value: "#333333"
        flutter: "0xFF333333"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_scrollbar_color"
    semantic_name: "color / rd/scrollbar-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdScrollbarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8f224eb74748edb30e4fc4be33013aa65b26ed66"
      name: "color / rd/scrollbar-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      Dark:
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "SL Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#0000001A"
  - token_id: "color_color_rd_scrollbar_hover_color"
    semantic_name: "color / rd/scrollbar-hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdScrollbarHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9bd3b5c0748f5f1caf19e17d1cdf6fd956c1de42"
      name: "color / rd/scrollbar-hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#0000004D"
        flutter: "0x4D000000"
        source: "direct"
      Dark:
        value: "#FFFFFF4D"
        flutter: "0x4DFFFFFF"
        source: "direct"
      "SL Light":
        value: "#0000004D"
        flutter: "0x4D000000"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF4D"
        flutter: "0x4DFFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#0000004D"
        flutter: "0x4D000000"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF4D"
        flutter: "0x4DFFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#0000004D"
        flutter: "0x4D000000"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF4D"
        flutter: "0x4DFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#0000004D"
  - token_id: "color_color_rd_success_color"
    semantic_name: "color / rd/success-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dc9163b81785ac2bd766d42685c0ed5e2eec03e9"
      name: "color / rd/success-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color/5"
      Dark:
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "rd/success-color/5"
      "SL Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color/5"
      "SL Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "rd/success-color/5"
      "SL Orange Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color/5"
      "SL Orange Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "rd/success-color/5"
      "Mrj Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color/5"
      "Mrj Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_color_rd_success_color_1"
    semantic_name: "color / rd/success-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f46f7555c8f89fab8df8dd1a66150347568e5866"
      name: "color / rd/success-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      Dark:
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "direct"
      "SL Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "SL Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "direct"
      "SL Orange Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "SL Orange Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "direct"
      "Mrj Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "Mrj Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#E3F9E9"
  - token_id: "color_color_rd_success_color_10"
    semantic_name: "color / rd/success-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3be81cf4c45fe6d8f06971a2e825e1c34a41ec4e"
      name: "color / rd/success-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#002515"
        flutter: "0xFF002515"
        source: "direct"
      Dark:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "SL Light":
        value: "#002515"
        flutter: "0xFF002515"
        source: "direct"
      "SL Dark":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "SL Orange Light":
        value: "#002515"
        flutter: "0xFF002515"
        source: "direct"
      "SL Orange Dark":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
      "Mrj Light":
        value: "#002515"
        flutter: "0xFF002515"
        source: "direct"
      "Mrj Dark":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#002515"
  - token_id: "color_color_rd_success_color_2"
    semantic_name: "color / rd/success-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e4f34180c654c46a388a944eb411c47792ef30a4"
      name: "color / rd/success-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      Dark:
        value: "#003314"
        flutter: "0xFF003314"
        source: "direct"
      "SL Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "SL Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "direct"
      "SL Orange Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "SL Orange Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "direct"
      "Mrj Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "Mrj Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#C6F3D7"
  - token_id: "color_color_rd_success_color_3"
    semantic_name: "color / rd/success-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f4b8cd28eb706ca6adbb207feebf60c057538143"
      name: "color / rd/success-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      Dark:
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "direct"
      "SL Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "SL Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "direct"
      "SL Orange Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "SL Orange Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "direct"
      "Mrj Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "Mrj Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#92DAB2"
  - token_id: "color_color_rd_success_color_4"
    semantic_name: "color / rd/success-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6cc34a4fcdded52c64190078d88ec600dd59363b"
      name: "color / rd/success-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      Dark:
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "direct"
      "SL Light":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "SL Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "direct"
      "SL Orange Light":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "SL Orange Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "direct"
      "Mrj Light":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "Mrj Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#56C08D"
  - token_id: "color_color_rd_success_color_5"
    semantic_name: "color / rd/success-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b091705543159294e7b5488b15f435a2fc831e00"
      name: "color / rd/success-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      Dark:
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "direct"
      "SL Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "SL Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "direct"
      "SL Orange Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "SL Orange Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "direct"
      "Mrj Light":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "Mrj Dark":
        value: "#008A3A"
        flutter: "0xFF008A3A"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_color_rd_success_color_6"
    semantic_name: "color / rd/success-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7f0d8bd5af5038afed63a3bf9a1e5bb086b37768"
      name: "color / rd/success-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#008858"
        flutter: "0xFF008858"
        source: "direct"
      Dark:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "SL Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "direct"
      "SL Dark":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "SL Orange Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "direct"
      "SL Orange Dark":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
      "Mrj Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "direct"
      "Mrj Dark":
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#008858"
  - token_id: "color_color_rd_success_color_7"
    semantic_name: "color / rd/success-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c8f4241e4c79efe688f776c40775930ce105fa25"
      name: "color / rd/success-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#006C45"
        flutter: "0xFF006C45"
        source: "direct"
      Dark:
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "SL Light":
        value: "#006C45"
        flutter: "0xFF006C45"
        source: "direct"
      "SL Dark":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "SL Orange Light":
        value: "#006C45"
        flutter: "0xFF006C45"
        source: "direct"
      "SL Orange Dark":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
      "Mrj Light":
        value: "#006C45"
        flutter: "0xFF006C45"
        source: "direct"
      "Mrj Dark":
        value: "#56C08D"
        flutter: "0xFF56C08D"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#006C45"
  - token_id: "color_color_rd_success_color_8"
    semantic_name: "color / rd/success-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fe4de7800dc81afb5ea81cc72f7d16f26bf4344d"
      name: "color / rd/success-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#005334"
        flutter: "0xFF005334"
        source: "direct"
      Dark:
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "SL Light":
        value: "#005334"
        flutter: "0xFF005334"
        source: "direct"
      "SL Dark":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "SL Orange Light":
        value: "#005334"
        flutter: "0xFF005334"
        source: "direct"
      "SL Orange Dark":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
      "Mrj Light":
        value: "#005334"
        flutter: "0xFF005334"
        source: "direct"
      "Mrj Dark":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#005334"
  - token_id: "color_color_rd_success_color_9"
    semantic_name: "color / rd/success-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "407239a5cd907f8b3ef5ca6868d5ee13abb868da"
      name: "color / rd/success-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#003B23"
        flutter: "0xFF003B23"
        source: "direct"
      Dark:
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "SL Light":
        value: "#003B23"
        flutter: "0xFF003B23"
        source: "direct"
      "SL Dark":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "SL Orange Light":
        value: "#003B23"
        flutter: "0xFF003B23"
        source: "direct"
      "SL Orange Dark":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
      "Mrj Light":
        value: "#003B23"
        flutter: "0xFF003B23"
        source: "direct"
      "Mrj Dark":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#003B23"
  - token_id: "color_color_rd_success_color_active"
    semantic_name: "color / rd/success-color/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "20e0a2855740012aa9f59e856a9711cb6f24e817"
      name: "color / rd/success-color/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#008858"
        flutter: "0xFF008858"
        source: "rd/success-color/6"
      Dark:
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "rd/success-color/4"
      "SL Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "rd/success-color/6"
      "SL Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "rd/success-color/4"
      "SL Orange Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "rd/success-color/6"
      "SL Orange Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "rd/success-color/4"
      "Mrj Light":
        value: "#008858"
        flutter: "0xFF008858"
        source: "rd/success-color/6"
      "Mrj Dark":
        value: "#006B2A"
        flutter: "0xFF006B2A"
        source: "rd/success-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#008858"
  - token_id: "color_color_rd_success_color_disabled"
    semantic_name: "color / rd/success-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f16ca94608ae811f803fe245fe64ad1cd8f7fa0c"
      name: "color / rd/success-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "rd/success-color/3"
      Dark:
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "rd/success-color/3"
      "SL Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "rd/success-color/3"
      "SL Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "rd/success-color/3"
      "SL Orange Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "rd/success-color/3"
      "SL Orange Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "rd/success-color/3"
      "Mrj Light":
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "rd/success-color/3"
      "Mrj Dark":
        value: "#004D1E"
        flutter: "0xFF004D1E"
        source: "rd/success-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#92DAB2"
  - token_id: "color_color_rd_success_color_focus"
    semantic_name: "color / rd/success-color/focus"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColorFocus"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "50d8c3ad297cf8afd08fb6e22018e2876f2062aa"
      name: "color / rd/success-color/focus"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      Dark:
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "SL Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "SL Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "SL Orange Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "SL Orange Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "Mrj Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "Mrj Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#C6F3D7"
  - token_id: "color_color_rd_success_color_light"
    semantic_name: "color / rd/success-color/light"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColorLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fc2265c5640dad44ed5d66e0192a415e79df7a98"
      name: "color / rd/success-color/light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
      Dark:
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "rd/success-color/1"
      "SL Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
      "SL Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "rd/success-color/1"
      "SL Orange Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
      "SL Orange Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "rd/success-color/1"
      "Mrj Light":
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
      "Mrj Dark":
        value: "#001A08"
        flutter: "0xFF001A08"
        source: "rd/success-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#E3F9E9"
  - token_id: "color_color_rd_success_color_light_active"
    semantic_name: "color / rd/success-color/light-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdSuccessColorLightActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "79f82b4e4014c1314c037284f67eef4a58295426"
      name: "color / rd/success-color/light-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      Dark:
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "SL Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "SL Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "SL Orange Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "SL Orange Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
      "Mrj Light":
        value: "#C6F3D7"
        flutter: "0xFFC6F3D7"
        source: "rd/success-color/2"
      "Mrj Dark":
        value: "#003314"
        flutter: "0xFF003314"
        source: "rd/success-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#C6F3D7"
  - token_id: "color_color_rd_table_shadow_color"
    semantic_name: "color / rd/table-shadow-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTableShadowColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c70529c5e3b6cbbcd0d09f29c8e3d616accff522"
      name: "color / rd/table-shadow-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000014"
        flutter: "0x14000000"
        source: "direct"
      Dark:
        value: "#0000008C"
        flutter: "0x8C000000"
        source: "direct"
      "SL Light":
        value: "#00000014"
        flutter: "0x14000000"
        source: "direct"
      "SL Dark":
        value: "#0000008C"
        flutter: "0x8C000000"
        source: "direct"
      "SL Orange Light":
        value: "#00000014"
        flutter: "0x14000000"
        source: "direct"
      "SL Orange Dark":
        value: "#0000008C"
        flutter: "0x8C000000"
        source: "direct"
      "Mrj Light":
        value: "#00000014"
        flutter: "0x14000000"
        source: "direct"
      "Mrj Dark":
        value: "#0000008C"
        flutter: "0x8C000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000014"
  - token_id: "color_color_rd_text_color_anti"
    semantic_name: "color / rd/text-color/anti"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorAnti"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "13c5960188f84a894ab7346d635712687b289b98"
      name: "color / rd/text-color/anti"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      Dark:
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "SL Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "SL Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "SL Orange Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "SL Orange Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "Mrj Light":
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
      "Mrj Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_color_rd_text_color_brand"
    semantic_name: "color / rd/text-color/brand"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorBrand"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ad6b2cfdaf70c470b7b5f708059902b131138636"
      name: "color / rd/text-color/brand"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
      Dark:
        value: "#8882F7"
        flutter: "0xFF8882F7"
        source: "rd/brand-color/7"
      "SL Light":
        value: "#0BC7B9"
        flutter: "0xFF0BC7B9"
        source: "rd/brand-color -> rd/brand-color/6"
      "SL Dark":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "rd/brand-color/7"
      "SL Orange Light":
        value: "#E0A558"
        flutter: "0xFFE0A558"
        source: "rd/brand-color -> rd/brand-color/6"
      "SL Orange Dark":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "rd/brand-color/7"
      "Mrj Light":
        value: "#8F73FB"
        flutter: "0xFF8F73FB"
        source: "rd/brand-color -> rd/brand-color/6"
      "Mrj Dark":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_color_rd_text_color_disabled"
    semantic_name: "color / rd/text-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c1e96c9f76464e8616b84ca67d391d90cd8a69c8"
      name: "color / rd/text-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/font-gray/4"
      Dark:
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "SL Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/font-gray/4"
      "SL Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "SL Orange Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/font-gray/4"
      "SL Orange Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "Mrj Light":
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/font-gray/4"
      "Mrj Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_color_rd_text_color_inverted"
    semantic_name: "color / rd/text-color/inverted"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorInverted"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b69016555345a0fae8d17204c73cca2561361192"
      name: "color / rd/text-color/inverted"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#AEBBFF"
        flutter: "0xFFAEBBFF"
        source: "rd/brand-color/4"
      Dark:
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "SL Light":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "rd/brand-color/4"
      "SL Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "SL Orange Light":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "rd/brand-color/4"
      "SL Orange Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
      "Mrj Light":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "rd/brand-color/4"
      "Mrj Dark":
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#AEBBFF"
  - token_id: "color_color_rd_text_color_link"
    semantic_name: "color / rd/text-color/link"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorLink"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f20fc0011943a2a46c8a1d714ce2964ee549e5e2"
      name: "color / rd/text-color/link"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
      Dark:
        value: "#8882F7"
        flutter: "0xFF8882F7"
        source: "rd/brand-color/7"
      "SL Light":
        value: "#0BC7B9"
        flutter: "0xFF0BC7B9"
        source: "rd/brand-color -> rd/brand-color/6"
      "SL Dark":
        value: "#55E0D2"
        flutter: "0xFF55E0D2"
        source: "rd/brand-color/7"
      "SL Orange Light":
        value: "#E0A558"
        flutter: "0xFFE0A558"
        source: "rd/brand-color -> rd/brand-color/6"
      "SL Orange Dark":
        value: "#ECCA8E"
        flutter: "0xFFECCA8E"
        source: "rd/brand-color/7"
      "Mrj Light":
        value: "#8F73FB"
        flutter: "0xFF8F73FB"
        source: "rd/brand-color -> rd/brand-color/6"
      "Mrj Dark":
        value: "#C0ADFF"
        flutter: "0xFFC0ADFF"
        source: "rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_color_rd_text_color_placeholder"
    semantic_name: "color / rd/text-color/placeholder"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorPlaceholder"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4cc60ece78514b33106f0ee2e237d0bb8aaf8064"
      name: "color / rd/text-color/placeholder"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
      Dark:
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "rd/font-white/3"
      "SL Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
      "SL Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "rd/font-white/3"
      "SL Orange Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
      "SL Orange Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "rd/font-white/3"
      "Mrj Light":
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
      "Mrj Dark":
        value: "#FFFFFF59"
        flutter: "0x59FFFFFF"
        source: "rd/font-white/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_color_rd_text_color_primary"
    semantic_name: "color / rd/text-color/primary"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorPrimary"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5218117d5c5cfd6f92942c5a049f377391309a7e"
      name: "color / rd/text-color/primary"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
      Dark:
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "SL Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
      "SL Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "SL Orange Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
      "SL Orange Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
      "Mrj Light":
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
      "Mrj Dark":
        value: "#FFFFFFE5"
        flutter: "0xE5FFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_color_rd_text_color_secondary"
    semantic_name: "color / rd/text-color/secondary"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorSecondary"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e4a65948753c2e8b4cf3ca4e78a810d8ff200dff"
      name: "color / rd/text-color/secondary"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/font-gray/2"
      Dark:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
      "SL Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/font-gray/2"
      "SL Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
      "SL Orange Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/font-gray/2"
      "SL Orange Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
      "Mrj Light":
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/font-gray/2"
      "Mrj Dark":
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_color_rd_text_color_watermark"
    semantic_name: "color / rd/text-color/watermark"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdTextColorWatermark"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "633d238af1cfabe21f6a4b9fcf2e2b6947558aae"
      name: "color / rd/text-color/watermark"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      Dark:
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "SL Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "SL Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "SL Orange Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "SL Orange Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
      "Mrj Light":
        value: "#0000001A"
        flutter: "0x1A000000"
        source: "direct"
      "Mrj Dark":
        value: "#FFFFFF1A"
        flutter: "0x1AFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#0000001A"
  - token_id: "color_color_rd_warning_color"
    semantic_name: "color / rd/warning-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "45b120e7f4d0383e68407bc38faaaa5cd14ad07f"
      name: "color / rd/warning-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color/5"
      Dark:
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "rd/warning-color/5"
      "SL Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color/5"
      "SL Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "rd/warning-color/5"
      "SL Orange Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color/5"
      "SL Orange Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "rd/warning-color/5"
      "Mrj Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color/5"
      "Mrj Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_color_rd_warning_color_1"
    semantic_name: "color / rd/warning-color/1"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "10c846ca2e364dbff9e93607dcf8914fec6a6f3d"
      name: "color / rd/warning-color/1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      Dark:
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "direct"
      "SL Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "SL Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "direct"
      "SL Orange Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "SL Orange Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "direct"
      "Mrj Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "Mrj Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF1E9"
  - token_id: "color_color_rd_warning_color_10"
    semantic_name: "color / rd/warning-color/10"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor10"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6ab7d79245f23669e131313035cd7a277575f06"
      name: "color / rd/warning-color/10"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#3B1700"
        flutter: "0xFF3B1700"
        source: "direct"
      Dark:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "SL Light":
        value: "#3B1700"
        flutter: "0xFF3B1700"
        source: "direct"
      "SL Dark":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "SL Orange Light":
        value: "#3B1700"
        flutter: "0xFF3B1700"
        source: "direct"
      "SL Orange Dark":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
      "Mrj Light":
        value: "#3B1700"
        flutter: "0xFF3B1700"
        source: "direct"
      "Mrj Dark":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#3B1700"
  - token_id: "color_color_rd_warning_color_2"
    semantic_name: "color / rd/warning-color/2"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "05e037add3d3f0894fa73f3a463e5bf9c1e750ae"
      name: "color / rd/warning-color/2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      Dark:
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "direct"
      "SL Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "SL Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "direct"
      "SL Orange Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "SL Orange Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "direct"
      "Mrj Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "Mrj Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD9C2"
  - token_id: "color_color_rd_warning_color_3"
    semantic_name: "color / rd/warning-color/3"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2345f7257729fd63a56d9b572bdf81d53d115c55"
      name: "color / rd/warning-color/3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      Dark:
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "direct"
      "SL Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "SL Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "direct"
      "SL Orange Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "SL Orange Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "direct"
      "Mrj Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "Mrj Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFB98C"
  - token_id: "color_color_rd_warning_color_4"
    semantic_name: "color / rd/warning-color/4"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c28f2df8880f32e9d9f01c4fc0ae8b1bdf85eac2"
      name: "color / rd/warning-color/4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      Dark:
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "direct"
      "SL Light":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "SL Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "direct"
      "SL Orange Light":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "SL Orange Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "direct"
      "Mrj Light":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "Mrj Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FA9550"
  - token_id: "color_color_rd_warning_color_5"
    semantic_name: "color / rd/warning-color/5"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6631c8cc9f061774aac1c98a79e518bb5d9a8e94"
      name: "color / rd/warning-color/5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      Dark:
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "direct"
      "SL Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "SL Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "direct"
      "SL Orange Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "SL Orange Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "direct"
      "Mrj Light":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "Mrj Dark":
        value: "#C25800"
        flutter: "0xFFC25800"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_color_rd_warning_color_6"
    semantic_name: "color / rd/warning-color/6"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3fa52b421472d9c97898fd32200209ad733dd422"
      name: "color / rd/warning-color/6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "direct"
      Dark:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "SL Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "direct"
      "SL Dark":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "SL Orange Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "direct"
      "SL Orange Dark":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
      "Mrj Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "direct"
      "Mrj Dark":
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#BE5A00"
  - token_id: "color_color_rd_warning_color_7"
    semantic_name: "color / rd/warning-color/7"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "61868ec5a3518767aeafb8135dbbe7d987bf65ae"
      name: "color / rd/warning-color/7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#954500"
        flutter: "0xFF954500"
        source: "direct"
      Dark:
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "SL Light":
        value: "#954500"
        flutter: "0xFF954500"
        source: "direct"
      "SL Dark":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "SL Orange Light":
        value: "#954500"
        flutter: "0xFF954500"
        source: "direct"
      "SL Orange Dark":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
      "Mrj Light":
        value: "#954500"
        flutter: "0xFF954500"
        source: "direct"
      "Mrj Dark":
        value: "#FA9550"
        flutter: "0xFFFA9550"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#954500"
  - token_id: "color_color_rd_warning_color_8"
    semantic_name: "color / rd/warning-color/8"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8dcdbbf27bb42b236a7cd07325a8406af52f138c"
      name: "color / rd/warning-color/8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#713300"
        flutter: "0xFF713300"
        source: "direct"
      Dark:
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "SL Light":
        value: "#713300"
        flutter: "0xFF713300"
        source: "direct"
      "SL Dark":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "SL Orange Light":
        value: "#713300"
        flutter: "0xFF713300"
        source: "direct"
      "SL Orange Dark":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
      "Mrj Light":
        value: "#713300"
        flutter: "0xFF713300"
        source: "direct"
      "Mrj Dark":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#713300"
  - token_id: "color_color_rd_warning_color_9"
    semantic_name: "color / rd/warning-color/9"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColor9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c6e5ec7f1233f94755d47f59814c74490b6367e5"
      name: "color / rd/warning-color/9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#532300"
        flutter: "0xFF532300"
        source: "direct"
      Dark:
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "SL Light":
        value: "#532300"
        flutter: "0xFF532300"
        source: "direct"
      "SL Dark":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "SL Orange Light":
        value: "#532300"
        flutter: "0xFF532300"
        source: "direct"
      "SL Orange Dark":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
      "Mrj Light":
        value: "#532300"
        flutter: "0xFF532300"
        source: "direct"
      "Mrj Dark":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#532300"
  - token_id: "color_color_rd_warning_color_active"
    semantic_name: "color / rd/warning-color/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "206278cb00a84e3fa3068a62df64fbeea11bb3ef"
      name: "color / rd/warning-color/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "rd/warning-color/6"
      Dark:
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "rd/warning-color/4"
      "SL Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "rd/warning-color/6"
      "SL Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "rd/warning-color/4"
      "SL Orange Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "rd/warning-color/6"
      "SL Orange Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "rd/warning-color/4"
      "Mrj Light":
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "rd/warning-color/6"
      "Mrj Dark":
        value: "#8A3800"
        flutter: "0xFF8A3800"
        source: "rd/warning-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#BE5A00"
  - token_id: "color_color_rd_warning_color_disabled"
    semantic_name: "color / rd/warning-color/disabled"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColorDisabled"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8b3efeca55e2dc6417792a2dbc892b887866ae62"
      name: "color / rd/warning-color/disabled"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/3"
      Dark:
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "rd/warning-color/3"
      "SL Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/3"
      "SL Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "rd/warning-color/3"
      "SL Orange Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/3"
      "SL Orange Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "rd/warning-color/3"
      "Mrj Light":
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/3"
      "Mrj Dark":
        value: "#5C2200"
        flutter: "0xFF5C2200"
        source: "rd/warning-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFB98C"
  - token_id: "color_color_rd_warning_color_focus"
    semantic_name: "color / rd/warning-color/focus"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColorFocus"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e074fe6c6c8ea16ac85c1d7660dcf0b52a0b5c48"
      name: "color / rd/warning-color/focus"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      Dark:
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "SL Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "SL Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "SL Orange Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "SL Orange Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "Mrj Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "Mrj Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD9C2"
  - token_id: "color_color_rd_warning_color_light"
    semantic_name: "color / rd/warning-color/light"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColorLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b957ea34d224bc2ab5f3d7c0bcbce419bed25dd3"
      name: "color / rd/warning-color/light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
      Dark:
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "rd/warning-color/1"
      "SL Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
      "SL Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "rd/warning-color/1"
      "SL Orange Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
      "SL Orange Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "rd/warning-color/1"
      "Mrj Light":
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
      "Mrj Dark":
        value: "#1A0800"
        flutter: "0xFF1A0800"
        source: "rd/warning-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF1E9"
  - token_id: "color_color_rd_warning_color_light_active"
    semantic_name: "color / rd/warning-color/light-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdColorRdWarningColorLightActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f675c2ce5f064e4c662e0da1e413be6837271fd4"
      name: "color / rd/warning-color/light-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Light:
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      Dark:
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "SL Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "SL Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "SL Orange Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "SL Orange Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
      "Mrj Light":
        value: "#FFD9C2"
        flutter: "0xFFFFD9C2"
        source: "rd/warning-color/2"
      "Mrj Dark":
        value: "#3D1500"
        flutter: "0xFF3D1500"
        source: "rd/warning-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFD9C2"
  - token_id: "color_component_rd_action_sheet_border_color"
    semantic_name: "Component / rd/action-sheet/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c804fa7b7bc22e52f40d09bf26fe36283f70ea66"
      name: "Component / rd/action-sheet/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_action_sheet_cancel_color"
    semantic_name: "Component / rd/action-sheet/cancel-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetCancelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9c73d59e17459321da438e760ab6cae2061347d6"
      name: "Component / rd/action-sheet/cancel-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_action_sheet_color"
    semantic_name: "Component / rd/action-sheet/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dd561f465f23157435be53568a25d8ec42cd6505"
      name: "Component / rd/action-sheet/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_action_sheet_description_color"
    semantic_name: "Component / rd/action-sheet/description-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b14cd86f176ed3eb8f0bb696e84973b0103151cb"
      name: "Component / rd/action-sheet/description-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_action_sheet_disabled_color"
    semantic_name: "Component / rd/action-sheet/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bc8182506e2cb9da2ebd5ec7e8d4e57ff4c459dd"
      name: "Component / rd/action-sheet/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_action_sheet_dot_active_color"
    semantic_name: "Component / rd/action-sheet/dot-active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDotActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e944dd33b838d9ec476fc61a07d48dc2889997c6"
      name: "Component / rd/action-sheet/dot-active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_action_sheet_dot_color"
    semantic_name: "Component / rd/action-sheet/dot-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDotColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9595eacf1a3b3bbfed5a13c1613eaa1a42765958"
      name: "Component / rd/action-sheet/dot-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_action_sheet_gap_color"
    semantic_name: "Component / rd/action-sheet/gap-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetGapColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "45418c621f5d8630902e42607de067c6c27e8777"
      name: "Component / rd/action-sheet/gap-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/page -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_avatar_bg_color"
    semantic_name: "Component / rd/avatar/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "098b5f8303d1d63b9000e61052b5098e773626b9"
      name: "Component / rd/avatar/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "rd/brand-color/light-active -> rd/brand-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_component_rd_avatar_border_color"
    semantic_name: "Component / rd/avatar/border/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a25487c983d76db3258bfde2e55cbeea3bad2107"
      name: "Component / rd/avatar/border/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_avatar_border_color"
    semantic_name: "Component / rd/avatar/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ddf9c6443cab8650b899e38161f5e97814035a0d"
      name: "Component / rd/avatar/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_avatar_content_color"
    semantic_name: "Component / rd/avatar/content-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarContentColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "737021b4d341ca78e2628c541ebb5f941f3f6237"
      name: "Component / rd/avatar/content-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_back_top_round_bg_color"
    semantic_name: "Component / rd/back-top/round/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eb89160e869a93d54746cc60d26f4f6bfe8e755f"
      name: "Component / rd/back-top/round/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_back_top_round_border_color"
    semantic_name: "Component / rd/back-top/round/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b97c74f6e8ac1f5c969e6e22211bb571adaf0097"
      name: "Component / rd/back-top/round/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_back_top_round_color"
    semantic_name: "Component / rd/back-top/round/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b55439481acfba2b25293f39a57b9b8fe5a1c36e"
      name: "Component / rd/back-top/round/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_back_top_round_dark_bg_color"
    semantic_name: "Component / rd/back-top/round/dark-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundDarkBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "95d97ea5463975a5965502adb1f754e2e31343c1"
      name: "Component / rd/back-top/round/dark-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#181818"
        flutter: "0xFF181818"
        source: "rd/gray-color/14"
    notes:
      []
    fallback:
      allowed: false
      value: "#181818"
  - token_id: "color_component_rd_back_top_round_dark_border_color"
    semantic_name: "Component / rd/back-top/round/dark-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundDarkBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9c911cd0544a2a9a9296e69f75af05f8d1f7ea85"
      name: "Component / rd/back-top/round/dark-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#5E5E5E"
        flutter: "0xFF5E5E5E"
        source: "rd/gray-color/9"
    notes:
      []
    fallback:
      allowed: false
      value: "#5E5E5E"
  - token_id: "color_component_rd_back_top_round_dark_color"
    semantic_name: "Component / rd/back-top/round/dark-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundDarkColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7d4b46c7efe84c19951698b7a89e93aa2f052260"
      name: "Component / rd/back-top/round/dark-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_badge_color"
    semantic_name: "Component / rd/badge/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cfffc03a869ac31bba52e265285d1cb826a9d0d8"
      name: "Component / rd/badge/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_badge_content_text_color"
    semantic_name: "Component / rd/badge/content-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeContentTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "af4c8a2cc1e66a73c58382a748f5af8f1c64b06f"
      name: "Component / rd/badge/content-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_badge_text_color"
    semantic_name: "Component / rd/badge/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aaf8abc3e54a94e01c0102ac48e24472aa5671b5"
      name: "Component / rd/badge/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/text-color/anti -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_danger_active_bg_color"
    semantic_name: "Component / rd/button/danger/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "13f5552c3f31f9d07c49045a8fdb8d635961942d"
      name: "Component / rd/button/danger/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_component_rd_button_danger_active_border_color"
    semantic_name: "Component / rd/button/danger/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8fa3a17c5e9773986cc3d5d443f056cac2edb8c5"
      name: "Component / rd/button/danger/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_component_rd_button_danger_bg_color"
    semantic_name: "Component / rd/button/danger/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "226663622109b87d7a3d0212242e84d18118722a"
      name: "Component / rd/button/danger/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_danger_border_color"
    semantic_name: "Component / rd/button/danger/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ada60c44ab5f9face4f39a50122a7d1d293392bb"
      name: "Component / rd/button/danger/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_danger_color"
    semantic_name: "Component / rd/button/danger/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f74c7bd2ba44387aeb95aa504e5d4cf6f2364218"
      name: "Component / rd/button/danger/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_danger_disabled_bg"
    semantic_name: "Component / rd/button/danger/disabled-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerDisabledBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5e30f753d083189c183592c39ff27d41a333f49d"
      name: "Component / rd/button/danger/disabled-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_button_danger_disabled_border_color"
    semantic_name: "Component / rd/button/danger/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2c8ffbab114a2f133bf4b3194e23ae1388e56df7"
      name: "Component / rd/button/danger/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_button_danger_disabled_color"
    semantic_name: "Component / rd/button/danger/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3cf7fc4f71ebe4dcb19440788fdfbcd6ee6e6933"
      name: "Component / rd/button/danger/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/disabled -> rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_button_danger_outline_active_bg_color"
    semantic_name: "Component / rd/button/danger-outline/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerOutlineActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "da563cb0175402a68c20d0fc14bacbc93a72053b"
      name: "Component / rd/button/danger-outline/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_danger_outline_active_border_color"
    semantic_name: "Component / rd/button/danger-outline/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerOutlineActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1ad07fa1e69119dd03c959c7802a5173be905faa"
      name: "Component / rd/button/danger-outline/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_component_rd_button_danger_outline_border_color"
    semantic_name: "Component / rd/button/danger-outline/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerOutlineBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9dc0d60dd1ca2ffd03a2944780a6708106fd9e01"
      name: "Component / rd/button/danger-outline/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_danger_outline_color"
    semantic_name: "Component / rd/button/danger-outline/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerOutlineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d1605b854f1db31fb2a5959d4acf6acb31a6c66b"
      name: "Component / rd/button/danger-outline/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_danger_outline_disabled_color"
    semantic_name: "Component / rd/button/danger-outline/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerOutlineDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ca130a3abf6e93161355fad2ef239c446b587cc6"
      name: "Component / rd/button/danger-outline/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_button_danger_text_active_bg_color"
    semantic_name: "Component / rd/button/danger-text/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerTextActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3095d75f2adf2c0a255ebdcab66c3bb7a2e493b5"
      name: "Component / rd/button/danger-text/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_danger_text_color"
    semantic_name: "Component / rd/button/danger-text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b40b0b9bbe9ee50b6e540cd0d0866b085b2a49ab"
      name: "Component / rd/button/danger-text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_danger_text_disabled_color"
    semantic_name: "Component / rd/button/danger-text/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDangerTextDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e8dda39c0699cece763099d90361363efdf612f6"
      name: "Component / rd/button/danger-text/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/disabled -> rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_button_default_active_bg_color"
    semantic_name: "Component / rd/button/default/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "af59ac9caa87894c96c021b7979850baaa18b721"
      name: "Component / rd/button/default/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/bg-color/component-active -> rd/gray-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#A6A6A6"
  - token_id: "color_component_rd_button_default_active_border_color"
    semantic_name: "Component / rd/button/default/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ac1f3e1ae3283ed0223a22cb4a5f9ef706df20fd"
      name: "Component / rd/button/default/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#A6A6A6"
        flutter: "0xFFA6A6A6"
        source: "rd/bg-color/component-active -> rd/gray-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#A6A6A6"
  - token_id: "color_component_rd_button_default_bg_color"
    semantic_name: "Component / rd/button/default/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "63b04373d27e558dd7fceee3ee2d548cf81109aa"
      name: "Component / rd/button/default/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_default_border_color"
    semantic_name: "Component / rd/button/default/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3ea32156359d6abce24fb05085dc1fee3b294bf1"
      name: "Component / rd/button/default/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_default_color"
    semantic_name: "Component / rd/button/default/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1934429c8e885f8e7ac4fcabbe7ab170594d7fd5"
      name: "Component / rd/button/default/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_button_default_disabled_bg"
    semantic_name: "Component / rd/button/default/disabled-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultDisabledBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "293b81cf1f0c95b9feb5bb554cb98214479e71e4"
      name: "Component / rd/button/default/disabled-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_button_default_disabled_border_color"
    semantic_name: "Component / rd/button/default/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6047cd4c0d6548507caa5511d629742e52dc1af9"
      name: "Component / rd/button/default/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_button_default_disabled_color"
    semantic_name: "Component / rd/button/default/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "39c314e0f14d909e374d0ef26c6d0f010bff9d5b"
      name: "Component / rd/button/default/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_button_default_outline_active_bg_color"
    semantic_name: "Component / rd/button/default-outline/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultOutlineActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a4f3152c8a8f8286b30fc68478f76327c54a00f"
      name: "Component / rd/button/default-outline/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_default_outline_active_border_color"
    semantic_name: "Component / rd/button/default-outline/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultOutlineActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "983337238f3522bda19569164b190e9fab84d40b"
      name: "Component / rd/button/default-outline/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_button_default_outline_border_color"
    semantic_name: "Component / rd/button/default-outline/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultOutlineBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5b2308831e4e4681ccd1b4f308595cf2f53142e8"
      name: "Component / rd/button/default-outline/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_button_default_outline_color"
    semantic_name: "Component / rd/button/default-outline/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultOutlineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6bcb12c14940753c4fb2ae16f8755378d986ea7b"
      name: "Component / rd/button/default-outline/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_button_default_outline_disabled_color"
    semantic_name: "Component / rd/button/default-outline/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultOutlineDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9e2a6ac06f05d60006305839b4be90b416dc5d2a"
      name: "Component / rd/button/default-outline/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_button_default_text_active_bg_color"
    semantic_name: "Component / rd/button/default-text/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonDefaultTextActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2715c40f32a7fafad07f9fb5a75bec905cc4e2f"
      name: "Component / rd/button/default-text/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_ghost_border_color"
    semantic_name: "Component / rd/button/ghost/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aa165fa54a55e163f0cc625e7a974c059557e0ef"
      name: "Component / rd/button/ghost/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/button/ghost/color"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_ghost_color"
    semantic_name: "Component / rd/button/ghost/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c9dad66f033c5a8fb7d1fb3ce763fabb7081c0ea"
      name: "Component / rd/button/ghost/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_ghost_danger_border_color"
    semantic_name: "Component / rd/button/ghost/danger/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostDangerBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e12e7885fe4639a8dc9e4be90b806ec8f15d58d3"
      name: "Component / rd/button/ghost/danger/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_ghost_danger_color"
    semantic_name: "Component / rd/button/ghost/danger/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostDangerColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "121ab1ea13383beaf4d3573d5a683d01dd10d02c"
      name: "Component / rd/button/ghost/danger/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_button_ghost_danger_hover_color"
    semantic_name: "Component / rd/button/ghost/danger/hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostDangerHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "892576ac54421cbc468ec6bb2c89696c7bb7b9de"
      name: "Component / rd/button/ghost/danger/hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/active -> rd/error-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_component_rd_button_ghost_disabled_color"
    semantic_name: "Component / rd/button/ghost/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "62f19069f31ef50d7fb53121886d55ea5be50cea"
      name: "Component / rd/button/ghost/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF38"
        flutter: "0x38FFFFFF"
        source: "rd/font-white/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF38"
  - token_id: "color_component_rd_button_ghost_hover_color"
    semantic_name: "Component / rd/button/ghost/hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "580afd273dac2471da228f9dcbd80630cd036555"
      name: "Component / rd/button/ghost/hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF8C"
  - token_id: "color_component_rd_button_ghost_primary_border_color"
    semantic_name: "Component / rd/button/ghost/primary/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostPrimaryBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec3d41b71ef674b4f8a630685dfe3ab88689a522"
      name: "Component / rd/button/ghost/primary/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_ghost_primary_color"
    semantic_name: "Component / rd/button/ghost/primary/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostPrimaryColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f8eb533feee6cb31d6599f2012e3e7b7756fd9e6"
      name: "Component / rd/button/ghost/primary/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_ghost_primary_hover_color"
    semantic_name: "Component / rd/button/ghost/primary/hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonGhostPrimaryHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c9d60a184a2ad9452e58af9374905172b1e3ead8"
      name: "Component / rd/button/ghost/primary/hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_button_light_active_bg_color"
    semantic_name: "Component / rd/button/light/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a32b2983a9cca1fb488bae86e83ecc985a564875"
      name: "Component / rd/button/light/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "rd/brand-color/light-active -> rd/brand-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_component_rd_button_light_active_border_color"
    semantic_name: "Component / rd/button/light/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ca36f37962d20ec61d450756b1a6ce345fea86ed"
      name: "Component / rd/button/light/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "rd/brand-color/light-active -> rd/brand-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_component_rd_button_light_bg_color"
    semantic_name: "Component / rd/button/light/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1ee9392c0cece29158e8f9255f92a0b413cc35a5"
      name: "Component / rd/button/light/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_button_light_border_color"
    semantic_name: "Component / rd/button/light/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6fc1a4e264c8af48b5c8913e4f605aac8e6be58"
      name: "Component / rd/button/light/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_button_light_color"
    semantic_name: "Component / rd/button/light/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3acc9b9dd3c899d858ec68688775ceffc0f43ecc"
      name: "Component / rd/button/light/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_light_disabled_bg"
    semantic_name: "Component / rd/button/light/disabled-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightDisabledBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "65eab60a1571584732d59b9614fc3c1145da5d76"
      name: "Component / rd/button/light/disabled-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_button_light_disabled_border_color"
    semantic_name: "Component / rd/button/light/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec323f9e46201390e4a90d8245f4752775649d8e"
      name: "Component / rd/button/light/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_button_light_disabled_color"
    semantic_name: "Component / rd/button/light/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5a80e4cabc59da29c8c8f0aadd34af537a0511a6"
      name: "Component / rd/button/light/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_button_light_outline_active_bg_color"
    semantic_name: "Component / rd/button/light-outline/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "62f0d7db5436c450654c59bc2d33e2954c8c245c"
      name: "Component / rd/button/light-outline/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E6ECFF"
        flutter: "0xFFE6ECFF"
        source: "rd/brand-color/light-active -> rd/brand-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#E6ECFF"
  - token_id: "color_component_rd_button_light_outline_active_border_color"
    semantic_name: "Component / rd/button/light-outline/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "00e29986e61ec4c4f1d651700d51acf1535b63ed"
      name: "Component / rd/button/light-outline/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_button_light_outline_bg_color"
    semantic_name: "Component / rd/button/light-outline/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d5bd300d66fd6cbd2148a4f751d4666f17e4f4c6"
      name: "Component / rd/button/light-outline/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_button_light_outline_border_color"
    semantic_name: "Component / rd/button/light-outline/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9bb7f1c7151a694673120eeacc88836f05f0ab13"
      name: "Component / rd/button/light-outline/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_light_outline_color"
    semantic_name: "Component / rd/button/light-outline/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "21a42ab238aaf93b288bed4efb7f06765e238721"
      name: "Component / rd/button/light-outline/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_light_outline_disabled_color"
    semantic_name: "Component / rd/button/light-outline/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightOutlineDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c4d639eb2ece4d435b7005ceb51242b2549dc85d"
      name: "Component / rd/button/light-outline/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_button_light_text_active_bg_color"
    semantic_name: "Component / rd/button/light-text/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightTextActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ee96e774e1cb93839a6dbb40f7a44eb19df4e66c"
      name: "Component / rd/button/light-text/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_light_text_color"
    semantic_name: "Component / rd/button/light-text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLightTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2e54dc4f10065ea3a44e6f35009cbb6d62a5cd60"
      name: "Component / rd/button/light-text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_active_bg_color"
    semantic_name: "Component / rd/button/primary/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "86cde44e725a01f6246c19d04efed026d045ccb0"
      name: "Component / rd/button/primary/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_button_primary_active_border_color"
    semantic_name: "Component / rd/button/primary/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8cd125e3d1beb9ecf5e4ed5a2c45e6ea57b4ec21"
      name: "Component / rd/button/primary/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_button_primary_bg_color"
    semantic_name: "Component / rd/button/primary/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9c21841795659805f552bee973489c72e432b6b9"
      name: "Component / rd/button/primary/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_border_color"
    semantic_name: "Component / rd/button/primary/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e9deaf7a4e2cdbf0517341222b0864d57191b73"
      name: "Component / rd/button/primary/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_color"
    semantic_name: "Component / rd/button/primary/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c8075444e0e757347b9b481d49353e26f5837121"
      name: "Component / rd/button/primary/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_primary_disabled_bg"
    semantic_name: "Component / rd/button/primary/disabled-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryDisabledBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d9424175041e2cf1c89ec890148c10b7eeb51c25"
      name: "Component / rd/button/primary/disabled-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_button_primary_disabled_border_color"
    semantic_name: "Component / rd/button/primary/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8fcb1b1fef0cadf53a98517ecf6f07de02954473"
      name: "Component / rd/button/primary/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_button_primary_disabled_color"
    semantic_name: "Component / rd/button/primary/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c06298944b2477cb656eb8193968f360c2f24def"
      name: "Component / rd/button/primary/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_button_primary_outline_active_bg_color"
    semantic_name: "Component / rd/button/primary-outline/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryOutlineActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7cec473b49657a2f45226f5ef499d415d8fa0743"
      name: "Component / rd/button/primary-outline/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_primary_outline_active_border_color"
    semantic_name: "Component / rd/button/primary-outline/active-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryOutlineActiveBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3a22a13cced3717d47fdf8b13e78b3404b3f68b2"
      name: "Component / rd/button/primary-outline/active-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_button_primary_outline_border_color"
    semantic_name: "Component / rd/button/primary-outline/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryOutlineBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2dd2c084d719057be6293e776f13039e1649eae7"
      name: "Component / rd/button/primary-outline/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_outline_color"
    semantic_name: "Component / rd/button/primary-outline/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryOutlineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "93c6572ee426a167bd7566a0371820e1311fee9c"
      name: "Component / rd/button/primary-outline/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_outline_disabled_color"
    semantic_name: "Component / rd/button/primary-outline/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryOutlineDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e2551e3bad93655f1ae49e64e365555d4070b3f5"
      name: "Component / rd/button/primary-outline/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_button_primary_text_active_bg_color"
    semantic_name: "Component / rd/button/primary-text/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryTextActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "95a5c95cf8c6533eeb634e07537948a2d548442c"
      name: "Component / rd/button/primary-text/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_button_primary_text_color"
    semantic_name: "Component / rd/button/primary-text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c5bc3a235326181708e0ad705fc304a42d0a3fa7"
      name: "Component / rd/button/primary-text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_button_primary_text_disabled_color"
    semantic_name: "Component / rd/button/primary-text/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonPrimaryTextDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "400b100284407e99aa6199eebc3519e33bf473f8"
      name: "Component / rd/button/primary-text/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_calendar_active_color"
    semantic_name: "Component / rd/calendar/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d1cf74f46df8b8a49a49722594e6fd225f8017be"
      name: "Component / rd/calendar/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_calendar_bg_color"
    semantic_name: "Component / rd/calendar/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ecfb36c5d3ec238d0d8433bac88c435668e03725"
      name: "Component / rd/calendar/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_calendar_dates_color"
    semantic_name: "Component / rd/calendar/dates-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarDatesColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "84bd57fb89052d4f86ae0662c4b9bb29166cef10"
      name: "Component / rd/calendar/dates-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_calendar_days_color"
    semantic_name: "Component / rd/calendar/days-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarDaysColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "67680dfbc2245dd5769ac8c9b86ee5003d9cc820"
      name: "Component / rd/calendar/days-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_calendar_item_centre_color"
    semantic_name: "Component / rd/calendar/item/centre-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarItemCentreColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1cc3f2d497e9177fa845efe684775e26744bcaf1"
      name: "Component / rd/calendar/item/centre-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_calendar_item_disabled_color"
    semantic_name: "Component / rd/calendar/item/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarItemDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f672cc57392dc99b35e51824b43a92f563681acb"
      name: "Component / rd/calendar/item/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_calendar_item_suffix_color"
    semantic_name: "Component / rd/calendar/item/suffix-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarItemSuffixColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9fd213cfd4f7dfc9ed8f05eae6a110d5239b2041"
      name: "Component / rd/calendar/item/suffix-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_calendar_selected_color"
    semantic_name: "Component / rd/calendar/selected-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarSelectedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "466233253e525a065f6a0cf6570d15225f7f4cef"
      name: "Component / rd/calendar/selected-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/text-color/anti -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_calendar_switch_mode_icon_color"
    semantic_name: "Component / rd/calendar/switch-mode/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarSwitchModeIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5568ce0147852e96ac1be7ab45cfeef7a7049cd0"
      name: "Component / rd/calendar/switch-mode/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_calendar_switch_mode_icon_disabled_color"
    semantic_name: "Component / rd/calendar/switch-mode/icon-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarSwitchModeIconDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0b5f48aae23e10e5e77a5246d285378f0879a9ea"
      name: "Component / rd/calendar/switch-mode/icon-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_calendar_title_color"
    semantic_name: "Component / rd/calendar/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e414c1c4dfab10e7dda0d4f5eb1477ff158169f2"
      name: "Component / rd/calendar/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_cascader_active_color"
    semantic_name: "Component / rd/cascader/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d296a4b43b9243e899f992c6ae3f0865a4e80eee"
      name: "Component / rd/cascader/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_cascader_bg_color"
    semantic_name: "Component / rd/cascader/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "08c02a633c5c544c2479abbc0bf3b0a86dd15c3c"
      name: "Component / rd/cascader/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_cascader_border_color"
    semantic_name: "Component / rd/cascader/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c2e5335593d8356fe899aa31508d46c91af124e3"
      name: "Component / rd/cascader/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_cascader_disabled_color"
    semantic_name: "Component / rd/cascader/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2945f54dd0b7b767c534836a560edbc019d2655"
      name: "Component / rd/cascader/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_cascader_options_title_color"
    semantic_name: "Component / rd/cascader/options-title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderOptionsTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9912b5fd2d6ce748a49a94a8b21fa3ad469e453b"
      name: "Component / rd/cascader/options-title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_cascader_step_arrow_color"
    semantic_name: "Component / rd/cascader/step/arrow-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderStepArrowColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7c1539fee0dfe64d0a63d89b48a5c9367296e7cf"
      name: "Component / rd/cascader/step/arrow-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_cascader_title_color"
    semantic_name: "Component / rd/cascader/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "34f07649bfb0c62cac01cea6da304559e5120e3c"
      name: "Component / rd/cascader/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_cell_bg_color"
    semantic_name: "Component / rd/cell/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "61a6294e840724550aa025a4e1947e38ac4b08bf"
      name: "Component / rd/cell/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_cell_border_color"
    semantic_name: "Component / rd/cell/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4bfcdbeebc4f2a36f4d208fa93207acb20e19493"
      name: "Component / rd/cell/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_cell_description_color"
    semantic_name: "Component / rd/cell/description-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90ec8e353529700c599ff856b338598a51b6873a"
      name: "Component / rd/cell/description-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_cell_group_border_color"
    semantic_name: "Component / rd/cell-group/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0075912cef86537b5bd728d0621fcfa76664b8af"
      name: "Component / rd/cell-group/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-level/1-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_cell_group_title_bg_color"
    semantic_name: "Component / rd/cell-group/title/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupTitleBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "34b67a1abb82a94a43bbddd520d2bd1687372d67"
      name: "Component / rd/cell-group/title/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_cell_group_title_color"
    semantic_name: "Component / rd/cell-group/title/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fb3001f3799733ffd2a0b929aa8505c2f1a3ffa8"
      name: "Component / rd/cell-group/title/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_cell_hover_color"
    semantic_name: "Component / rd/cell/hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6ed0be0000fff8921c1df5227192e0b14a9109ec"
      name: "Component / rd/cell/hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_cell_left_icon_color"
    semantic_name: "Component / rd/cell/left-icon/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellLeftIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6299d905581832537a47dfa754879f997fd27d9"
      name: "Component / rd/cell/left-icon/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_cell_note_color"
    semantic_name: "Component / rd/cell/note-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellNoteColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c64835661209889a4edd275a7b82d622f4ec2bde"
      name: "Component / rd/cell/note-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_cell_required_color"
    semantic_name: "Component / rd/cell/required/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellRequiredColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "27e4cf751bd11a19d1e6e47f7e52a4d9a4569fe4"
      name: "Component / rd/cell/required/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_cell_right_icon_color"
    semantic_name: "Component / rd/cell/right-icon/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellRightIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7b343391d443d894c43f238f5b5dddd8046ad692"
      name: "Component / rd/cell/right-icon/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_cell_title_color"
    semantic_name: "Component / rd/cell/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "20f67f11f7c44a3af2379a12fa8d0b50ec1c8a38"
      name: "Component / rd/cell/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_checkbox_bg_color"
    semantic_name: "Component / rd/checkbox/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e3cf4a70c151236ac940bba7b57fdcdf19f5b269"
      name: "Component / rd/checkbox/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_checkbox_border_color"
    semantic_name: "Component / rd/checkbox/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "258bd8755b396dedad83f37946853c3beaf02e72"
      name: "Component / rd/checkbox/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_checkbox_description_color"
    semantic_name: "Component / rd/checkbox/description-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e8ab2318c5a13a5e4498bd6dbac1fb0a9594bcc"
      name: "Component / rd/checkbox/description-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_checkbox_description_disabled_color"
    semantic_name: "Component / rd/checkbox/description-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxDescriptionDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "97bf206c45937258c4733d2052eb3934d382ed7d"
      name: "Component / rd/checkbox/description-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_checkbox_icon_checked_color"
    semantic_name: "Component / rd/checkbox/icon/checked-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxIconCheckedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8446a845c722f3541cb79c0fb3febb120dd2de34"
      name: "Component / rd/checkbox/icon/checked-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_checkbox_icon_color"
    semantic_name: "Component / rd/checkbox/icon/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1029ccf962a8774315565d6dc2d7a59e6c61867f"
      name: "Component / rd/checkbox/icon/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/border-level/2-color -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_checkbox_icon_disabled_bg_color"
    semantic_name: "Component / rd/checkbox/icon/disabled-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxIconDisabledBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e36f1de6bc498fd16eba4ded0c90068af616e26c"
      name: "Component / rd/checkbox/icon/disabled-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_checkbox_icon_disabled_color"
    semantic_name: "Component / rd/checkbox/icon/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxIconDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e94b761716e4cc9a273de2064f013b009ec11a70"
      name: "Component / rd/checkbox/icon/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_checkbox_tag_active_bg_color"
    semantic_name: "Component / rd/checkbox/tag/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTagActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2368379617dcddf6241f810a5efa71f256022b1b"
      name: "Component / rd/checkbox/tag/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_checkbox_tag_active_color"
    semantic_name: "Component / rd/checkbox/tag/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTagActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d162a0ea7f2d1e81dfb1efed65c802d3bdff72e9"
      name: "Component / rd/checkbox/tag/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_checkbox_tag_bg_color"
    semantic_name: "Component / rd/checkbox/tag/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTagBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e20a20f0a6ca5d3e19062a74cb28a72d3b323c38"
      name: "Component / rd/checkbox/tag/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_checkbox_title_color"
    semantic_name: "Component / rd/checkbox/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "83b3e39a0d5d40a10db50bf3d08bd35c38652125"
      name: "Component / rd/checkbox/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_checkbox_title_disabled_color"
    semantic_name: "Component / rd/checkbox/title-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTitleDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "58fc1f868d0e645c8a412e821a4411d0a2d6a4bb"
      name: "Component / rd/checkbox/title-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_collapse_border_color"
    semantic_name: "Component / rd/collapse/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b0410a862d9081dec688ed8bef534a615ef678cf"
      name: "Component / rd/collapse/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-level/1-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_collapse_content_text_color"
    semantic_name: "Component / rd/collapse/content-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseContentTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "992ae72d79c07a88ee40170e305d871658ade213"
      name: "Component / rd/collapse/content-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_collapse_header_text_color"
    semantic_name: "Component / rd/collapse/header-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseHeaderTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9e560e6373eb9015862616af014320396a37f9d4"
      name: "Component / rd/collapse/header-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_collapse_header_text_disabled_color"
    semantic_name: "Component / rd/collapse/header-text-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseHeaderTextDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "72e124d7bdff9b1a041a856a127cbbff10e14408"
      name: "Component / rd/collapse/header-text-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_collapse_icon_color"
    semantic_name: "Component / rd/collapse/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "363bc51dbcd289c24dfe6c624dee76ac614d63a7"
      name: "Component / rd/collapse/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_collapse_panel_bg_color"
    semantic_name: "Component / rd/collapse/panel-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapsePanelBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f9897876ea79facd171706ed6d1912f28aacd8ec"
      name: "Component / rd/collapse/panel-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_color_picker_format_background_color"
    semantic_name: "Component / rd/color-picker/format-background-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerFormatBackgroundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5f9d9a4c844df96ce26bb87eb952bd1d467aebc5"
      name: "Component / rd/color-picker/format-background-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#383838"
        flutter: "0xFF383838"
        source: "rd/gray-color/11"
    notes:
      []
    fallback:
      allowed: false
      value: "#383838"
  - token_id: "color_component_rd_color_picker_panel_background"
    semantic_name: "Component / rd/color-picker/panel/background"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerPanelBackground"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "61fd4203308b3065afeaeeaec0eafdd363e88c4f"
      name: "Component / rd/color-picker/panel/background"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_color_picker_swatch_active"
    semantic_name: "Component / rd/color-picker/swatch/active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSwatchActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d1fc60e5e9d24cedb2f544a66b4bfefd1c0a9e9d"
      name: "Component / rd/color-picker/swatch/active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000033"
        flutter: "0x33000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000033"
  - token_id: "color_component_rd_countdown_bg_color"
    semantic_name: "Component / rd/countdown/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "da32075ebad37ab27556f31b66494bf971f34edd"
      name: "Component / rd/countdown/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_countdown_default_text_color"
    semantic_name: "Component / rd/countdown/default-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownDefaultTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "524f52282b3bc13ff57d555ac1272e25f18a04c3"
      name: "Component / rd/countdown/default-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_countdown_no_unit_color"
    semantic_name: "Component / rd/countdown/no-unit-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownNoUnitColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "516486e32f7b3bd130a8653424d05cc764b6fb5b"
      name: "Component / rd/countdown/no-unit-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_countdown_text_color"
    semantic_name: "Component / rd/countdown/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6a5cbaa29be8c11ab600eb784ec2b2120b283d63"
      name: "Component / rd/countdown/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/text-color/anti -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_countdown_unit_color"
    semantic_name: "Component / rd/countdown/unit-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownUnitColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4aef3d823c6b0de63669b652f76db9a80a2cbebd"
      name: "Component / rd/countdown/unit-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_dialog_close_color"
    semantic_name: "Component / rd/dialog/close/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogCloseColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7177a90452cb39c8fce891fa52a6b3be54d6df19"
      name: "Component / rd/dialog/close/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_dialog_content_color"
    semantic_name: "Component / rd/dialog/content/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogContentColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "644c3dfd96d96a3f8e13c4b1bd7c73ea4c1bdda0"
      name: "Component / rd/dialog/content/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_dialog_title_color"
    semantic_name: "Component / rd/dialog/title/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d9d0d7d04710f78e23ca6ad40392a26cbd3e2c06"
      name: "Component / rd/dialog/title/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_divider_color"
    semantic_name: "Component / rd/divider/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "640b208f7d7b840b474aa50ebfc2cb7554f59cc1"
      name: "Component / rd/divider/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_divider_content_color"
    semantic_name: "Component / rd/divider/content/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerContentColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "782b5fbd768b4aa5fb919a8214ec62cfec895c44"
      name: "Component / rd/divider/content/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_drawer_bg_color"
    semantic_name: "Component / rd/drawer/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8122ecd72f799b1a22f3037b6cec880b8ad610df"
      name: "Component / rd/drawer/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_drawer_border_color"
    semantic_name: "Component / rd/drawer/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8c3aed991d034e0e0fe5bad2a914fee6f10be12b"
      name: "Component / rd/drawer/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-level/1-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_drawer_hover_color"
    semantic_name: "Component / rd/drawer/hover-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerHoverColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3a2e5321484da872918dc7dea87a3fa644cbb98b"
      name: "Component / rd/drawer/hover-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_drawer_icon_color"
    semantic_name: "Component / rd/drawer/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7f2a4c774eaec3abc7d370f5e2f731dc2db4b484"
      name: "Component / rd/drawer/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/drawer/title-color -> rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_drawer_title_color"
    semantic_name: "Component / rd/drawer/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "59bcebeeed64375c65af678b7b43e802b906ab98"
      name: "Component / rd/drawer/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_dropdown_menu_active_color"
    semantic_name: "Component / rd/dropdown/menu/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f0e13b80a809fc17148488a0e7a8e88547169f82"
      name: "Component / rd/dropdown/menu/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_dropdown_menu_background"
    semantic_name: "Component / rd/dropdown/menu/background"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuBackground"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9df05c79268c63c3a9936fd3177cb4bac0381b31"
      name: "Component / rd/dropdown/menu/background"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_dropdown_menu_bg_color"
    semantic_name: "Component / rd/dropdown/menu-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7dd91da8f7fbf4b15612463f2f0be9a1253f7c8b"
      name: "Component / rd/dropdown/menu-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_dropdown_menu_color"
    semantic_name: "Component / rd/dropdown/menu/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "99f3ce64ae53ee07680c4a0bd8872609a9412cf1"
      name: "Component / rd/dropdown/menu/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_dropdown_menu_disabled_color"
    semantic_name: "Component / rd/dropdown/menu/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "49585e7a18e9ac77b30fad45199a106e0d80ee60"
      name: "Component / rd/dropdown/menu/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_empty_description_color"
    semantic_name: "Component / rd/empty/description/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdEmptyDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "704d7a41d14e81860edb13cc4dc97a2511698b9b"
      name: "Component / rd/empty/description/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_empty_icon_color"
    semantic_name: "Component / rd/empty/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdEmptyIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "395846d4a60450e653258bad75492b6ed502cc4f"
      name: "Component / rd/empty/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_footer_link_color"
    semantic_name: "Component / rd/footer/link/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLinkColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0c7c893e85b436cb31606c6643cc80274d61b4a7"
      name: "Component / rd/footer/link/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_footer_link_dividing_line_color"
    semantic_name: "Component / rd/footer/link/dividing-line-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLinkDividingLineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5b5d1a86323afc80a075a8fd317b0c3723c74f26"
      name: "Component / rd/footer/link/dividing-line-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_footer_text_color"
    semantic_name: "Component / rd/footer/text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2d3526cb42177283bf1f34a3c81ee23d09f774a6"
      name: "Component / rd/footer/text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_footer_title_color"
    semantic_name: "Component / rd/footer/title/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b289c11eecd492ac8d2d93f9e9f11d2110907acc"
      name: "Component / rd/footer/title/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_form_item_border_color"
    semantic_name: "Component / rd/form/item/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFormItemBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "55e0ff0cceeaa6ec827197e0ae4f5ffd14ea3e76"
      name: "Component / rd/form/item/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_grid_bg_color"
    semantic_name: "Component / rd/grid/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "09a9ffb7f149fc3b9b08fd7ce83c72a65d53a4e4"
      name: "Component / rd/grid/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_grid_item_bg_color"
    semantic_name: "Component / rd/grid/item/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fa89d7efefa49a045b4818ba3963c0c04a8f6e67"
      name: "Component / rd/grid/item/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_grid_item_border_color"
    semantic_name: "Component / rd/grid/item/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "03395467416d51288e4bc5179d12edc79c31e634"
      name: "Component / rd/grid/item/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_grid_item_description_color"
    semantic_name: "Component / rd/grid/item/description/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9ad8720b857e97946be84cff9e22c6a8d2a02b3a"
      name: "Component / rd/grid/item/description/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_grid_item_hover_bg_color"
    semantic_name: "Component / rd/grid/item/hover-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemHoverBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e9be3d2e3bdc3f20121649dd0bd09356d32364db"
      name: "Component / rd/grid/item/hover-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_grid_item_image_bg_color"
    semantic_name: "Component / rd/grid/item/image/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemImageBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "992d1abc8491973ab8dab70d0cbb38ce7317cb24"
      name: "Component / rd/grid/item/image/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_grid_item_text_color"
    semantic_name: "Component / rd/grid/item/text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1ed608a37f97ef55b9b70c2b16bfd88278c4233c"
      name: "Component / rd/grid/item/text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_guide_popover_border_color"
    semantic_name: "Component / rd/guide/popover/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuidePopoverBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eb7924d8cb06c70705a4b79840314005cae64701"
      name: "Component / rd/guide/popover/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_image_color"
    semantic_name: "Component / rd/image/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "be0ce178d17f304e8902c82e1682bf84cabc2a72"
      name: "Component / rd/image/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_image_loading_bg_color"
    semantic_name: "Component / rd/image/loading/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageLoadingBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ee1a2464f2698ff3928c5e718c3b75b9d8df9c4e"
      name: "Component / rd/image/loading/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_image_loading_color"
    semantic_name: "Component / rd/image/loading/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageLoadingColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f0863cd9e957b79424eaa680402f95df806d36d7"
      name: "Component / rd/image/loading/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_image_viewer_mask_bg_color"
    semantic_name: "Component / rd/image-viewer/mask-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerMaskBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c8d7d690ac80eb75397907977e34d6d49ae8e4d3"
      name: "Component / rd/image-viewer/mask-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/mask-active"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_image_viewer_nav_bg_color"
    semantic_name: "Component / rd/image-viewer/nav/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerNavBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "594d5cde9e6a8a36a716d09fe0187a81d6da68e6"
      name: "Component / rd/image-viewer/nav/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000"
        flutter: "0xFF000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000"
  - token_id: "color_component_rd_image_viewer_nav_color"
    semantic_name: "Component / rd/image-viewer/nav/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerNavColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8a694e507fedb0fb89ddd53b66c17b231e675012"
      name: "Component / rd/image-viewer/nav/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_indexes_anchor_active_bg_color"
    semantic_name: "Component / rd/indexes/anchor/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesAnchorActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f698da0a2abfdd39c3aef1d5419fd57c909624b6"
      name: "Component / rd/indexes/anchor/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_indexes_anchor_active_color"
    semantic_name: "Component / rd/indexes/anchor/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesAnchorActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "36da5f2c18a9a1417bd9652bba78786b344fb3d4"
      name: "Component / rd/indexes/anchor/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_indexes_anchor_bg_color"
    semantic_name: "Component / rd/indexes/anchor/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesAnchorBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6fbc377335a5309f79a877327137353aa3f5e0a"
      name: "Component / rd/indexes/anchor/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_indexes_anchor_color"
    semantic_name: "Component / rd/indexes/anchor/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesAnchorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "de31b772bca7462f0332c5b0e474cae14d3ea8e4"
      name: "Component / rd/indexes/anchor/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_indexes_sidebar_active_bg_color"
    semantic_name: "Component / rd/indexes/sidebar/active-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarActiveBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e612b9f05ab530f454ffa3d47deb47f98c13a21d"
      name: "Component / rd/indexes/sidebar/active-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_indexes_sidebar_active_color"
    semantic_name: "Component / rd/indexes/sidebar/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90ec4ed9344b195bdbea254d8e998ff04266ebde"
      name: "Component / rd/indexes/sidebar/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/text-color/anti -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_indexes_sidebar_color"
    semantic_name: "Component / rd/indexes/sidebar/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6a19c882427d72f20315524a2652350c5f50cbc0"
      name: "Component / rd/indexes/sidebar/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_indexes_sidebar_tips_bg_color"
    semantic_name: "Component / rd/indexes/sidebar/tips/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarTipsBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5954709e90b9418120e340aa90e301153f6539f2"
      name: "Component / rd/indexes/sidebar/tips/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_indexes_sidebar_tips_color"
    semantic_name: "Component / rd/indexes/sidebar/tips/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarTipsColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "891279ed062dc1214e6625e675ea4fad89e08a56"
      name: "Component / rd/indexes/sidebar/tips/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_input_bg_color"
    semantic_name: "Component / rd/input/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cb5268ae8e1f963738525c761e1d22cfe971c8d4"
      name: "Component / rd/input/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_input_border_color"
    semantic_name: "Component / rd/input/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a0fb238507ed9bc11bf17c009510f3b04a1d58b2"
      name: "Component / rd/input/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_input_cursor_color"
    semantic_name: "Component / rd/input/cursor-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputCursorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c4f38d39ede66d9fdc19546bee11ea450dda84fc"
      name: "Component / rd/input/cursor-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_input_default_text_color"
    semantic_name: "Component / rd/input/default/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputDefaultTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b2bc2bf7b7c90b973342cc9b064ada2bc6d7aaed"
      name: "Component / rd/input/default/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_default_tips_color"
    semantic_name: "Component / rd/input/default/tips-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputDefaultTipsColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1559826be3c31586e4383605744fb6bf2d6a0760"
      name: "Component / rd/input/default/tips-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_input_disabled_text_color"
    semantic_name: "Component / rd/input/disabled-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputDisabledTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e0ae2973edead7d1a8bcc36c7115c8b793ac4e17"
      name: "Component / rd/input/disabled-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_input_error_text_color"
    semantic_name: "Component / rd/input/error/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputErrorTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "562270c597310d5bef3f4a76c46fb30de9082986"
      name: "Component / rd/input/error/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_input_error_tips_color"
    semantic_name: "Component / rd/input/error/tips-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputErrorTipsColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "712be33aa02a95889f8e84011afef3c425b6c756"
      name: "Component / rd/input/error/tips-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_input_label_text_color"
    semantic_name: "Component / rd/input/label/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputLabelTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "da65f510db5400b0e487ad93f7e24b45e0d7f4b7"
      name: "Component / rd/input/label/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_placeholder_text_color"
    semantic_name: "Component / rd/input/placeholder/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputPlaceholderTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "781bd35df59ab1c8e51d553b5842f777f08de898"
      name: "Component / rd/input/placeholder/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_input_prefix_icon_color"
    semantic_name: "Component / rd/input/prefix/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputPrefixIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9ebcd6d4232426dbc3bf0ab74f71ba0d5505f2db"
      name: "Component / rd/input/prefix/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_prefix_icon_color"
    semantic_name: "Component / rd/input/prefix-icon/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputPrefixIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "47af2160545647d156bf28b3ef9965529ac1acc5"
      name: "Component / rd/input/prefix-icon/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_success_text_color"
    semantic_name: "Component / rd/input/success/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuccessTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4b08cbddadc1c632b491f20651bd9569da9378ba"
      name: "Component / rd/input/success/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_input_success_tips_color"
    semantic_name: "Component / rd/input/success/tips-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuccessTipsColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2218698956a839cd5ba275e729710605c65c752e"
      name: "Component / rd/input/success/tips-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_input_suffix_icon_color"
    semantic_name: "Component / rd/input/suffix/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuffixIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "89fce14828f6b20cd914a4aff1976d1366b25440"
      name: "Component / rd/input/suffix/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_input_suffix_icon_color"
    semantic_name: "Component / rd/input/suffix-icon/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuffixIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "de97c5b8abfc1885569963fb94add059c92b63a9"
      name: "Component / rd/input/suffix-icon/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_input_suffix_text_color"
    semantic_name: "Component / rd/input/suffix/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuffixTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d17bab0f38004061e6ff59a7482f884864f5c870"
      name: "Component / rd/input/suffix/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_suffix_text_color"
    semantic_name: "Component / rd/input/suffix-text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputSuffixTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "788217ce30b43d5ac14bb640c9d0f7e2cdf5e2ce"
      name: "Component / rd/input/suffix-text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_input_warning_text_color"
    semantic_name: "Component / rd/input/warning/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputWarningTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "456bde8837fc4e8720732010cc3e35469c42bb88"
      name: "Component / rd/input/warning/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_input_warning_tips_color"
    semantic_name: "Component / rd/input/warning/tips-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputWarningTipsColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c50d189bdb883f58efe871fda63cb0a642193d4e"
      name: "Component / rd/input/warning/tips-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_link_danger_active_color"
    semantic_name: "Component / rd/link/danger/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDangerActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dae836dc07424b5b582d7129ebeaaa09c5ff7bd2"
      name: "Component / rd/link/danger/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#B81010"
        flutter: "0xFFB81010"
        source: "rd/error-color/active -> rd/error-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#B81010"
  - token_id: "color_component_rd_link_danger_color"
    semantic_name: "Component / rd/link/danger/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDangerColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "05ec5574b1b4b32810d20ef1cb8f6645b67ab6cf"
      name: "Component / rd/link/danger/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_link_danger_disabled_color"
    semantic_name: "Component / rd/link/danger/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDangerDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90471773d2d1b7b16fcd426c1576bda298b55e4b"
      name: "Component / rd/link/danger/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFADAD"
        flutter: "0xFFFFADAD"
        source: "rd/error-color/disabled -> rd/error-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFADAD"
  - token_id: "color_component_rd_link_default_active_color"
    semantic_name: "Component / rd/link/default/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDefaultActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "213672043984c84373bb1ee37d3a5712ca512fb3"
      name: "Component / rd/link/default/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_link_default_color"
    semantic_name: "Component / rd/link/default/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5e51c3ba1fba4d02fd21237d88b41d814cdb5ee3"
      name: "Component / rd/link/default/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_link_default_disabled_color"
    semantic_name: "Component / rd/link/default/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkDefaultDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "930613d51b1c2bbe2d4eb1c9709ab1f790806f15"
      name: "Component / rd/link/default/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_link_primary_active_color"
    semantic_name: "Component / rd/link/primary/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkPrimaryActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d8faf3d29c56c1257f3a7eb8fa9dd9637af184c9"
      name: "Component / rd/link/primary/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_link_primary_color"
    semantic_name: "Component / rd/link/primary/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkPrimaryColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1845c42e8d417b5616317e37afaa10f7547bbb50"
      name: "Component / rd/link/primary/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_link_primary_disabled_color"
    semantic_name: "Component / rd/link/primary/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkPrimaryDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f9fdb8cb4b55c5af7669b2f4fb014e57c88f36bf"
      name: "Component / rd/link/primary/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_link_success_active_color"
    semantic_name: "Component / rd/link/success/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkSuccessActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "289896facb87149734f5268e558723db9cf4f528"
      name: "Component / rd/link/success/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#008858"
        flutter: "0xFF008858"
        source: "rd/success-color/active -> rd/success-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#008858"
  - token_id: "color_component_rd_link_success_color"
    semantic_name: "Component / rd/link/success/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a694bf7dc3b668367c11d5b45ba3748ff6d0e446"
      name: "Component / rd/link/success/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_link_success_disabled_color"
    semantic_name: "Component / rd/link/success/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkSuccessDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ffab3ee39030dcb0df966d04bbf4aff943ea637a"
      name: "Component / rd/link/success/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#92DAB2"
        flutter: "0xFF92DAB2"
        source: "rd/success-color/disabled -> rd/success-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#92DAB2"
  - token_id: "color_component_rd_link_warning_active_color"
    semantic_name: "Component / rd/link/warning/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkWarningActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "29aed650f2cbad33b0ed73884aca4485e845534c"
      name: "Component / rd/link/warning/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#BE5A00"
        flutter: "0xFFBE5A00"
        source: "rd/warning-color/active -> rd/warning-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#BE5A00"
  - token_id: "color_component_rd_link_warning_color"
    semantic_name: "Component / rd/link/warning/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1c399cc44617b4d242d002c8639bfc464be69c8b"
      name: "Component / rd/link/warning/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_link_warning_disabled_color"
    semantic_name: "Component / rd/link/warning/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkWarningDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "93aa23506edc219f0069099d2ee9db3c180a1af4"
      name: "Component / rd/link/warning/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/disabled -> rd/warning-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFB98C"
  - token_id: "color_component_rd_loading_color"
    semantic_name: "Component / rd/loading/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLoadingColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "efe47fa730673f5991ed0f497033b3996aaf6af9"
      name: "Component / rd/loading/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_loading_full_bg_color"
    semantic_name: "Component / rd/loading/full-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLoadingFullBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cd583d71984ee7aeee47d38baad44a9174b38e93"
      name: "Component / rd/loading/full-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF99"
        flutter: "0x99FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF99"
  - token_id: "color_component_rd_loading_line_bg_color"
    semantic_name: "Component / rd/loading/line-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLoadingLineBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eadad1e9aae0d51522f518f4dcbc983fc579f37a"
      name: "Component / rd/loading/line-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_loading_text_color"
    semantic_name: "Component / rd/loading/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLoadingTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d4f0923f0a4b3458d6d82c5358ec7e9fc57abaa1"
      name: "Component / rd/loading/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_message_bg_color"
    semantic_name: "Component / rd/message/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "59096f1849e576aa00b66997c5ecdf8fb060ee54"
      name: "Component / rd/message/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_message_close_icon_color"
    semantic_name: "Component / rd/message/close-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageCloseIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8ae5325cc772c44d4523dece171d23107a545406"
      name: "Component / rd/message/close-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_message_content_color"
    semantic_name: "Component / rd/message/content-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageContentColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "769f7fa5682b2c01e51e994e56aa09c1ed5ee6ae"
      name: "Component / rd/message/content-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_message_error_color"
    semantic_name: "Component / rd/message/error-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageErrorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "32e31e7cbee3b104e360db1c6606dd69f23b24f0"
      name: "Component / rd/message/error-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_message_info_color"
    semantic_name: "Component / rd/message/info-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageInfoColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e4d2d46548f2fa29b045173264354d84eb154d9c"
      name: "Component / rd/message/info-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color -> rd/information-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#2659F0"
  - token_id: "color_component_rd_message_success_color"
    semantic_name: "Component / rd/message/success-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "234a943856cbbaddcb214491583cdbc61290a1d9"
      name: "Component / rd/message/success-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_message_warning_color"
    semantic_name: "Component / rd/message/warning-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ddedc98e20f358f2a48f4e386797ebc934c63185"
      name: "Component / rd/message/warning-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_navbar_bg_color"
    semantic_name: "Component / rd/navbar/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8b0bb6af8f9a21fd6881828e98e1682807d1fe9b"
      name: "Component / rd/navbar/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_navbar_capsule_border_color"
    semantic_name: "Component / rd/navbar/capsule/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarCapsuleBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "77b00460ff79fa58918d3f71518427ceba88c03a"
      name: "Component / rd/navbar/capsule/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_navbar_color"
    semantic_name: "Component / rd/navbar/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5d917d753cec21302cf9d678d3f758b785b44083"
      name: "Component / rd/navbar/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_navbar_ground_glass_bg_color"
    semantic_name: "Component / rd/navbar/ground glass-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarGroundGlassBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4548435158948f45f9d971ca58d3193342fd20dd"
      name: "Component / rd/navbar/ground glass-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFFCC"
        flutter: "0xCCFFFFFF"
        source: "rd/bg-color/ground-glass"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFFCC"
  - token_id: "color_component_rd_notice_bar_error_bg_color"
    semantic_name: "Component / rd/notice-bar/error/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarErrorBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "435a8db590d5aab96c34dd05a31814b2f3c684a2"
      name: "Component / rd/notice-bar/error/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/light -> rd/error-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_component_rd_notice_bar_error_color"
    semantic_name: "Component / rd/notice-bar/error/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarErrorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "60bd8731754fb37a705e3a4b220781f24424d055"
      name: "Component / rd/notice-bar/error/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_notice_bar_font_color"
    semantic_name: "Component / rd/notice-bar/font-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarFontColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "63b900d1c523b3d38a02ce51883d90c20f78a663"
      name: "Component / rd/notice-bar/font-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_notice_bar_info_bg_color"
    semantic_name: "Component / rd/notice-bar/info/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarInfoBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "31b2cbe0d3875817e1f8c3d91bb50b18f1cf950e"
      name: "Component / rd/notice-bar/info/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F0F4FF"
        flutter: "0xFFF0F4FF"
        source: "rd/information-color/light -> rd/information-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F0F4FF"
  - token_id: "color_component_rd_notice_bar_info_color"
    semantic_name: "Component / rd/notice-bar/info/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarInfoColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4c2a27c92d1c0aaeeb4ac9e7af05979ed9672ce1"
      name: "Component / rd/notice-bar/info/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2659F0"
        flutter: "0xFF2659F0"
        source: "rd/information-color -> rd/information-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#2659F0"
  - token_id: "color_component_rd_notice_bar_operation_font_color"
    semantic_name: "Component / rd/notice-bar/operation-font-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarOperationFontColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "652ef8f3e93e0f1e7ca10c0717223d0d13c909e0"
      name: "Component / rd/notice-bar/operation-font-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_notice_bar_success_bg_color"
    semantic_name: "Component / rd/notice-bar/success/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarSuccessBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a421fa300ef08e0b56e8a0c20f04a89c9d5aa5d0"
      name: "Component / rd/notice-bar/success/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/light -> rd/success-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#E3F9E9"
  - token_id: "color_component_rd_notice_bar_success_color"
    semantic_name: "Component / rd/notice-bar/success/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b23fd1b57d1c182b91e6be6b8df4d44fb1556392"
      name: "Component / rd/notice-bar/success/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_notice_bar_suffix_icon_color"
    semantic_name: "Component / rd/notice-bar/suffix-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarSuffixIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a1fbda156be09b6dcf7a9da185361a74c0aa8f99"
      name: "Component / rd/notice-bar/suffix-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_notice_bar_warning_bg_color"
    semantic_name: "Component / rd/notice-bar/warning/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarWarningBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0e5b90986e2f96ce88ffd17a029de3294d487822"
      name: "Component / rd/notice-bar/warning/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/light -> rd/warning-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF1E9"
  - token_id: "color_component_rd_notice_bar_warning_color"
    semantic_name: "Component / rd/notice-bar/warning/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "30ec4fbbc20f4664140e861759ccb32449fccbc2"
      name: "Component / rd/notice-bar/warning/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_overlay_bg_color"
    semantic_name: "Component / rd/overlay/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdOverlayBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "19f5e06cb1c7d5f4f024318c19342d9fbe577587"
      name: "Component / rd/overlay/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/mask-active"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_picker_bg_color"
    semantic_name: "Component / rd/picker/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "efdbed8a953f6a40c036435fe64d1f96fbbe9c75"
      name: "Component / rd/picker/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_picker_cancel_color"
    semantic_name: "Component / rd/picker/cancel-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerCancelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "00d0c8803efdadb295b9a940c63aecb6c1ce3a08"
      name: "Component / rd/picker/cancel-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_picker_confirm_color"
    semantic_name: "Component / rd/picker/confirm-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerConfirmColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ebbc394e08863b5b5bdb40d756ad48e6650161df"
      name: "Component / rd/picker/confirm-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_picker_indicator_bg_color"
    semantic_name: "Component / rd/picker/indicator/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerIndicatorBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "39f090252eb767394b33689a65ddbe1286a54c8f"
      name: "Component / rd/picker/indicator/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_picker_item_active_color"
    semantic_name: "Component / rd/picker/item/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerItemActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1c83630aba1027ca91787d6c20a602bb035a05cd"
      name: "Component / rd/picker/item/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_picker_item_color"
    semantic_name: "Component / rd/picker/item/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerItemColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9bb25baa005330deba69b355871e4e018de76c07"
      name: "Component / rd/picker/item/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_picker_item_disabled_color"
    semantic_name: "Component / rd/picker/item/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerItemDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fc44ee9cc203a982e734f0cac6792e3d750fd398"
      name: "Component / rd/picker/item/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_picker_mask_color_bottom"
    semantic_name: "Component / rd/picker/mask-color-bottom"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerMaskColorBottom"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e3cc5cf445f82d31d7450ec9774d1d86f695e856"
      name: "Component / rd/picker/mask-color-bottom"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF66"
        flutter: "0x66FFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF66"
  - token_id: "color_component_rd_picker_mask_color_top"
    semantic_name: "Component / rd/picker/mask-color-top"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerMaskColorTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "db695fc967d8955aee3c49f432e4519c192da886"
      name: "Component / rd/picker/mask-color-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFFEB"
        flutter: "0xEBFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFFEB"
  - token_id: "color_component_rd_picker_title_color"
    semantic_name: "Component / rd/picker/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "42eff070050b02b56f86a86b92afb61d7a437620"
      name: "Component / rd/picker/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_popover_brand_bg_color"
    semantic_name: "Component / rd/popover/brand/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverBrandBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "164ec4b0e25ceed4224da85ceb0f88a43f2954dd"
      name: "Component / rd/popover/brand/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_popover_brand_color"
    semantic_name: "Component / rd/popover/brand/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverBrandColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bcaf3befe5c489833eebe5a668755b2725118d81"
      name: "Component / rd/popover/brand/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_popover_dark_bg_color"
    semantic_name: "Component / rd/popover/dark/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverDarkBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fb30d4fb67a80f423af13168e2f2291edebf6fe3"
      name: "Component / rd/popover/dark/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_popover_dark_color"
    semantic_name: "Component / rd/popover/dark/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverDarkColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "838db02b6f3b4de1dd694f270299d1702749b9f9"
      name: "Component / rd/popover/dark/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_popover_error_bg_color"
    semantic_name: "Component / rd/popover/error/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverErrorBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8c1437e9ee956d3b8d034bda501fa7666676d800"
      name: "Component / rd/popover/error/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_component_rd_popover_error_color"
    semantic_name: "Component / rd/popover/error/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverErrorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5f6e159f90d040b0eaab995202d6252f165e854f"
      name: "Component / rd/popover/error/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_popover_light_bg_color"
    semantic_name: "Component / rd/popover/light/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverLightBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b8c822bf6196a05201ff6010e0fd7393a9277368"
      name: "Component / rd/popover/light/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_popover_light_color"
    semantic_name: "Component / rd/popover/light/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8b81f2a2bc50d7bb00032b7852b8930b35ae1b38"
      name: "Component / rd/popover/light/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_popover_success_bg_color"
    semantic_name: "Component / rd/popover/success/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverSuccessBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5305a02f8ec41930bfa1975dd42df241a0876607"
      name: "Component / rd/popover/success/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#E3F9E9"
  - token_id: "color_component_rd_popover_success_color"
    semantic_name: "Component / rd/popover/success/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4412457e1c8aa048257d12989837adef9b0cc1cb"
      name: "Component / rd/popover/success/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_popover_warning_bg_color"
    semantic_name: "Component / rd/popover/warning/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverWarningBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "89ebf9375353d4326f71202eb244c030d4caabae"
      name: "Component / rd/popover/warning/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF1E9"
  - token_id: "color_component_rd_popover_warning_color"
    semantic_name: "Component / rd/popover/warning/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "45e44fbb50c0e2e6db140414e1ffcc429df1c73e"
      name: "Component / rd/popover/warning/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_popup_bg_color"
    semantic_name: "Component / rd/popup/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopupBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5b63c2f2ec066eaf8e12e0a6ebd8edc05a226414"
      name: "Component / rd/popup/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_popup_close_btn_color"
    semantic_name: "Component / rd/popup/close-btn-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopupCloseBtnColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "24699ad3e2a262f39a86d53a1322084766b338a8"
      name: "Component / rd/popup/close-btn-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_progress_circle_inner_bg_color"
    semantic_name: "Component / rd/progress/circle-inner-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressCircleInnerBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5bfb6fad330d98a6c39a30f12c59baa3d4016281"
      name: "Component / rd/progress/circle-inner-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_progress_info_dark_color"
    semantic_name: "Component / rd/progress/info-dark-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInfoDarkColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "77abfb546f0335af8471e189c98a05d9dd21df77"
      name: "Component / rd/progress/info-dark-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_progress_info_light_color"
    semantic_name: "Component / rd/progress/info-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInfoLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "daadf40f43f964671e255b656f078a96469a78d7"
      name: "Component / rd/progress/info-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_progress_inner_bg_color"
    semantic_name: "Component / rd/progress/inner-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInnerBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2fbc43797b0a848b784785c63ccb5c8026ab4ff0"
      name: "Component / rd/progress/inner-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_progress_inner_bg_color_active"
    semantic_name: "Component / rd/progress/inner-bg-color-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInnerBgColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a935484aaefa787a8033bc43d795a759ae44170e"
      name: "Component / rd/progress/inner-bg-color-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_progress_inner_bg_color_error"
    semantic_name: "Component / rd/progress/inner-bg-color-error"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInnerBgColorError"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7ec305b594081d7da82feae0c76d1ab215f1de74"
      name: "Component / rd/progress/inner-bg-color-error"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_progress_inner_bg_color_success"
    semantic_name: "Component / rd/progress/inner-bg-color-success"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInnerBgColorSuccess"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "928e81223b3412344bcfbb4e92e26b83531ce15e"
      name: "Component / rd/progress/inner-bg-color-success"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_progress_inner_bg_color_warning"
    semantic_name: "Component / rd/progress/inner-bg-color-warning"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInnerBgColorWarning"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a73d3c9bfee113762946e889bc938b907c4f6fe8"
      name: "Component / rd/progress/inner-bg-color-warning"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_progress_track_bg_color"
    semantic_name: "Component / rd/progress/track-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressTrackBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e314f4fbf26a701037b3f32f192dadb12900be9c"
      name: "Component / rd/progress/track-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_pull_down_refresh_color"
    semantic_name: "Component / rd/pull-down-refresh/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPullDownRefreshColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b107f66ceb97d07ade99ed7b2ad4832a36b0b5c0"
      name: "Component / rd/pull-down-refresh/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_pull_down_refresh_text_color"
    semantic_name: "Component / rd/pull-down-refresh/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPullDownRefreshTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3cb38c5ec44bcbd2dd6bf79f54645b608f87ff15"
      name: "Component / rd/pull-down-refresh/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_qrcode_expired_link_color_active"
    semantic_name: "Component / rd/qrcode/expired-link-color-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeExpiredLinkColorActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6b98d1cffa4a76fb4662f6f7da3d6b1b92ea6ef8"
      name: "Component / rd/qrcode/expired-link-color-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4830E7"
        flutter: "0xFF4830E7"
        source: "rd/brand-color/active -> rd/brand-color/7"
    notes:
      []
    fallback:
      allowed: false
      value: "#4830E7"
  - token_id: "color_component_rd_qrcode_scanned_icon_color"
    semantic_name: "Component / rd/qrcode/scanned-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeScannedIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a1047f6ddb4351fada7a7e1dcd9428299c92ed72"
      name: "Component / rd/qrcode/scanned-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_radio_bg_color"
    semantic_name: "Component / rd/radio/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ad89f2d71448e6f4fff0ecabf1ad1ef9035ebf7a"
      name: "Component / rd/radio/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_radio_border_color"
    semantic_name: "Component / rd/radio/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "095acca4651d41997104a324af4122b83aec6e3d"
      name: "Component / rd/radio/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_radio_content_color"
    semantic_name: "Component / rd/radio/content-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioContentColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bd91aed9dedc8893ad2698210f10cd7ff65d511c"
      name: "Component / rd/radio/content-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_radio_content_disabled_color"
    semantic_name: "Component / rd/radio/content-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioContentDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1cbbf2660fcba0882b3eb65f71106dbca27c3a5f"
      name: "Component / rd/radio/content-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_radio_icon_checked_color"
    semantic_name: "Component / rd/radio/icon-checked-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioIconCheckedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4979a3f16768967c257bf64658b0f8695d321e25"
      name: "Component / rd/radio/icon-checked-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_radio_icon_color"
    semantic_name: "Component / rd/radio/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a2a00af352d1a4f898dac6df649a29db6c3bef44"
      name: "Component / rd/radio/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_radio_icon_disabled_bg_color"
    semantic_name: "Component / rd/radio/icon-disabled-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioIconDisabledBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b859a3b678559daed6812835af0d4d97159796d8"
      name: "Component / rd/radio/icon-disabled-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_radio_icon_disabled_color"
    semantic_name: "Component / rd/radio/icon-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioIconDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c528ff1457a5c35515819c7fa5a97c379da46ec5"
      name: "Component / rd/radio/icon-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_radio_label_color"
    semantic_name: "Component / rd/radio/label-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioLabelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dd4f357c3aeedf25086a5efe7716d5818fb2969f"
      name: "Component / rd/radio/label-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_radio_label_disabled_color"
    semantic_name: "Component / rd/radio/label-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioLabelDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6912efa64cbc8f0b29e6861e735f6bfe22692daf"
      name: "Component / rd/radio/label-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_rate_disabled_selected_color"
    semantic_name: "Component / rd/rate/disabled/selected-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateDisabledSelectedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8bccd7b275b6611e896c7670fb80490de13011b2"
      name: "Component / rd/rate/disabled/selected-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFB98C"
        flutter: "0xFFFFB98C"
        source: "rd/warning-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFB98C"
  - token_id: "color_component_rd_rate_disabled_unselected_color"
    semantic_name: "Component / rd/rate/disabled/unselected-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateDisabledUnselectedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fa21d970d9039fb5145d23911a74b89642020468"
      name: "Component / rd/rate/disabled/unselected-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_rate_selected_color"
    semantic_name: "Component / rd/rate/selected-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateSelectedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "99412a93bd6b139ca797a370924be4bf30b10b43"
      name: "Component / rd/rate/selected-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_rate_text_active_color"
    semantic_name: "Component / rd/rate/text/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateTextActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "171f0323f61a1498ef4d751d1ef8f73b02cbb02f"
      name: "Component / rd/rate/text/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_rate_text_color"
    semantic_name: "Component / rd/rate/text/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "64b1011d7e4574370b4f702f5f694eca4805bef5"
      name: "Component / rd/rate/text/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_rate_unselected_color"
    semantic_name: "Component / rd/rate/unselected-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateUnselectedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c1384490448806119396bf7e01e82f8db2c0aa2b"
      name: "Component / rd/rate/unselected-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/bg-color/secondarycomponent -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_result_description_color"
    semantic_name: "Component / rd/result/description/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "941dcebd01db9f522e81851fa589864d7b97b06a"
      name: "Component / rd/result/description/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/text-color/secondary -> rd/font-gray/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_result_icon_default_color"
    semantic_name: "Component / rd/result/icon/default-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultIconDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "67d567fed76f16b9e0fc7ffb104e816e9ca38527"
      name: "Component / rd/result/icon/default-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_result_icon_error_color"
    semantic_name: "Component / rd/result/icon/error-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultIconErrorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2ce7a4c494d7a14edad8acdda97f0b122c806581"
      name: "Component / rd/result/icon/error-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_result_icon_success_color"
    semantic_name: "Component / rd/result/icon/success-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultIconSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6cea69e5fcbc6b463c3e0f97bd2ad29557db5e23"
      name: "Component / rd/result/icon/success-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_result_icon_warning_color"
    semantic_name: "Component / rd/result/icon/warning-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultIconWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "549452c09e91eb73f3b6ac69de6b4beea6876a6d"
      name: "Component / rd/result/icon/warning-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_result_title_color"
    semantic_name: "Component / rd/result/title/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9ecc7cba509dc60af361ac1561a29a452a388994"
      name: "Component / rd/result/title/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_search_action_color"
    semantic_name: "Component / rd/search/action-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchActionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f9ec953ad009ddb979dc14303328f55b72fd4f5e"
      name: "Component / rd/search/action-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_search_bg_color"
    semantic_name: "Component / rd/search/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "88c8cf8c092e1db7b368e8985cdb5f0d10d6a618"
      name: "Component / rd/search/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_search_clear_icon_color"
    semantic_name: "Component / rd/search/clear-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchClearIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c59d0fa6591ddbc8280051be9bee26f8fb49654d"
      name: "Component / rd/search/clear-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_search_cursor_color"
    semantic_name: "Component / rd/search/cursor-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchCursorColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0bdb28a72770011ad032e0480ccecd5963ea5942"
      name: "Component / rd/search/cursor-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_search_icon_color"
    semantic_name: "Component / rd/search/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5a305e2bcd62fd985a2d68f06ecfc0d8673642e8"
      name: "Component / rd/search/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_search_label_color"
    semantic_name: "Component / rd/search/label-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchLabelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4cceaf298c5f4bac76b4a836df021f5235ff1f73"
      name: "Component / rd/search/label-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_search_placeholder_color"
    semantic_name: "Component / rd/search/placeholder-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchPlaceholderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e5e61351f8179d861312a2a35d51310cff608443"
      name: "Component / rd/search/placeholder-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_search_result_high_light_color"
    semantic_name: "Component / rd/search/result-high-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchResultHighLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "084fb18698a4c545ffa398f835676f248adc4e4c"
      name: "Component / rd/search/result-high-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_search_text_color"
    semantic_name: "Component / rd/search/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b187239800ed8521e8a6e4c1181ad39c11af5fc2"
      name: "Component / rd/search/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_side_bar_active_color"
    semantic_name: "Component / rd/side-bar/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9af4ba16629ef4569b3795e185087b7c789cb637"
      name: "Component / rd/side-bar/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_side_bar_bg_color"
    semantic_name: "Component / rd/side-bar/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c744afbcf58cc3334ca308005cad12e5952ec676"
      name: "Component / rd/side-bar/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_side_bar_color"
    semantic_name: "Component / rd/side-bar/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c14d039ec73169f74bf2a1691fcc5285fe27be3a"
      name: "Component / rd/side-bar/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_side_bar_disabled_color"
    semantic_name: "Component / rd/side-bar/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "50e39ed3a84a295db7a8a1748a8cb37a8c3bbd64"
      name: "Component / rd/side-bar/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_side_bar_prefix_bg_color"
    semantic_name: "Component / rd/side-bar/prefix-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarPrefixBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6f1363e637ab0ababb7a3fb33e5edf7c2e26e0ac"
      name: "Component / rd/side-bar/prefix-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_skeleton_animation_flashed"
    semantic_name: "Component / rd/skeleton/animation-flashed"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonAnimationFlashed"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7150f0147ba0c0a97d47e81acbb0a6dc6f7d187b"
      name: "Component / rd/skeleton/animation-flashed"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_skeleton_animation_gradient"
    semantic_name: "Component / rd/skeleton/animation-gradient"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonAnimationGradient"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cf89db32c099200da9bc91371519c50909b3b487"
      name: "Component / rd/skeleton/animation-gradient"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/container-active -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_skeleton_bg_color"
    semantic_name: "Component / rd/skeleton/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a5fd86fc26237fed7c7d6a6c6199a9b61621c31c"
      name: "Component / rd/skeleton/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_slider_active_color"
    semantic_name: "Component / rd/slider/active/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "69af43add975a3eb127d64335ad1d172ab00a253"
      name: "Component / rd/slider/active/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_slider_active_disabled_color"
    semantic_name: "Component / rd/slider/active/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderActiveDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fab68dec50ad8a04a2d8d663f4a2a333d0d619c4"
      name: "Component / rd/slider/active/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_slider_capsule_bar_color"
    semantic_name: "Component / rd/slider/capsule/bar-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderCapsuleBarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "558ef544007d16fa6c3c72147099470c91bcc50e"
      name: "Component / rd/slider/capsule/bar-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_slider_default_color"
    semantic_name: "Component / rd/slider/default/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b11b8a19768e11254b0a551930bc22066f90649a"
      name: "Component / rd/slider/default/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_slider_default_disabled_color"
    semantic_name: "Component / rd/slider/default/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDefaultDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1473497edc9df741bd8dcb1b16592ee4a6385f87"
      name: "Component / rd/slider/default/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_slider_disabled_text_color"
    semantic_name: "Component / rd/slider/disabled-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDisabledTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "13b35fc19281d88f84edf60fd599147efbc27f2b"
      name: "Component / rd/slider/disabled-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_slider_dot_bg_color"
    semantic_name: "Component / rd/slider/dot/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDotBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "521839dd825187993b91d29d4642d4966ad3f611"
      name: "Component / rd/slider/dot/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_slider_dot_border_color"
    semantic_name: "Component / rd/slider/dot/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDotBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "017752928e3c311af5c6f0cb1ec694c50fd408d6"
      name: "Component / rd/slider/dot/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_slider_dot_disabled_bg_color"
    semantic_name: "Component / rd/slider/dot/disabled-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDotDisabledBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e6eb3537b89463eaf180a25638815f53679ee544"
      name: "Component / rd/slider/dot/disabled-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_slider_dot_disabled_border_color"
    semantic_name: "Component / rd/slider/dot/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDotDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "be35d289229066be16262463469b411408d0d675"
      name: "Component / rd/slider/dot/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_slider_text_color"
    semantic_name: "Component / rd/slider/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "20499d5be7b505c3237dd31f27ada6f8808e3258"
      name: "Component / rd/slider/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_step_item_default_circle_bg"
    semantic_name: "Component / rd/step-item/default/circle-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDefaultCircleBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5a28db7ce57359fef1e13e7cef47d21d1462fcc7"
      name: "Component / rd/step-item/default/circle-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_step_item_default_circle_color"
    semantic_name: "Component / rd/step-item/default/circle-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDefaultCircleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8ee4bcf757c1acd95a7b794b81711c751a9fece5"
      name: "Component / rd/step-item/default/circle-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_step_item_default_dot_border_color"
    semantic_name: "Component / rd/step-item/default/dot-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDefaultDotBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a62fd1e5616b6d9f6e583941681a82f0a7bce2a7"
      name: "Component / rd/step-item/default/dot-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_step_item_default_icon_color"
    semantic_name: "Component / rd/step-item/default/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDefaultIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "318e2bc117c63dc809d6693f479e138654c498f6"
      name: "Component / rd/step-item/default/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_step_item_default_title_color"
    semantic_name: "Component / rd/step-item/default/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDefaultTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9b5f4263128bd6287ae0dbfe2af2730fc3db4760"
      name: "Component / rd/step-item/default/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_step_item_description_color"
    semantic_name: "Component / rd/step-item/description-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDescriptionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a2c1880fbd36f76511a3d22b640bfac237c4110b"
      name: "Component / rd/step-item/description-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_step_item_error_circle_bg"
    semantic_name: "Component / rd/step-item/error/circle-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemErrorCircleBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b64954397fd59e2e1ffb37f6f7b525a877c320df"
      name: "Component / rd/step-item/error/circle-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_component_rd_step_item_error_circle_color"
    semantic_name: "Component / rd/step-item/error/circle-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemErrorCircleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fe0fd7029eceae057dd3ccceb43064f6e1f3a66f"
      name: "Component / rd/step-item/error/circle-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_step_item_error_dot_border_color"
    semantic_name: "Component / rd/step-item/error/dot-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemErrorDotBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "860eb8ee6db329750f4b4b686e9a4904b953f54a"
      name: "Component / rd/step-item/error/dot-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_step_item_error_icon_color"
    semantic_name: "Component / rd/step-item/error/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemErrorIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "84d6e991c05026fd9c62b28400341157ef696653"
      name: "Component / rd/step-item/error/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_step_item_error_title_color"
    semantic_name: "Component / rd/step-item/error/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemErrorTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bca277f4ce4fbde3775f1e96257f83e6b2354f94"
      name: "Component / rd/step-item/error/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_step_item_finish_circle_bg"
    semantic_name: "Component / rd/step-item/finish/circle-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishCircleBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "851bc92cdbc38880bead3f53dd792998a6fcf3ca"
      name: "Component / rd/step-item/finish/circle-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_step_item_finish_circle_color"
    semantic_name: "Component / rd/step-item/finish/circle-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishCircleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "216802245c972ca125b342eebe23d1db850dcc30"
      name: "Component / rd/step-item/finish/circle-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_finish_dot_border_color"
    semantic_name: "Component / rd/step-item/finish/dot-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishDotBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c87707702880bbbc6cabb7f661dee2d6af3f9988"
      name: "Component / rd/step-item/finish/dot-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_finish_icon_color"
    semantic_name: "Component / rd/step-item/finish/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6488bdb1b8d75bc8aa90db23c467681b5fa4b107"
      name: "Component / rd/step-item/finish/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_finish_line_color"
    semantic_name: "Component / rd/step-item/finish-line-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishLineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "995cefb145252dcf9a571f68f63bddd5d2159211"
      name: "Component / rd/step-item/finish-line-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_finish_title_color"
    semantic_name: "Component / rd/step-item/finish/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemFinishTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cb78bc84509fbe6791c84409b3c2c7ccf337bddc"
      name: "Component / rd/step-item/finish/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_step_item_line_color"
    semantic_name: "Component / rd/step-item/line-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemLineColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c3c41d12b8c7941fcb891883e84c5a5643a7ec4a"
      name: "Component / rd/step-item/line-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_step_item_process_circle_bg"
    semantic_name: "Component / rd/step-item/process/circle-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemProcessCircleBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7e54477ef0a3334e2439f84656030f5607aa623f"
      name: "Component / rd/step-item/process/circle-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_process_circle_color"
    semantic_name: "Component / rd/step-item/process/circle-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemProcessCircleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e533f15f49639640bc5dd50cbd693884418a70a5"
      name: "Component / rd/step-item/process/circle-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_step_item_process_dot_border_color"
    semantic_name: "Component / rd/step-item/process/dot-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemProcessDotBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "306378aa4fa4ca5c65d8a1b26e32fbe636b769f9"
      name: "Component / rd/step-item/process/dot-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_process_icon_color"
    semantic_name: "Component / rd/step-item/process/icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemProcessIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "94cdbfbd498b6d79098f33da85eb2c683ced2b22"
      name: "Component / rd/step-item/process/icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_step_item_process_title_color"
    semantic_name: "Component / rd/step-item/process/title-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemProcessTitleColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8b648a46fcab9e0aae6bf13be70a87053c2fd3d3"
      name: "Component / rd/step-item/process/title-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_stepper_border_color"
    semantic_name: "Component / rd/stepper/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "349425464b9132cba5b5d81fe128b796ccfd3425"
      name: "Component / rd/stepper/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_stepper_input_color"
    semantic_name: "Component / rd/stepper/input-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperInputColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6561a02590333c0e34abf88edbdb484fc38d0f91"
      name: "Component / rd/stepper/input-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_stepper_input_disabled_bg"
    semantic_name: "Component / rd/stepper/input-disabled-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperInputDisabledBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d7c67fbd656dc10c4836d7224ff56a2111c90aad"
      name: "Component / rd/stepper/input-disabled-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_stepper_input_disabled_color"
    semantic_name: "Component / rd/stepper/input-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperInputDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "99de8c47408622a2900ad5df92d76f6e40db5629"
      name: "Component / rd/stepper/input-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_swiper_nav_btn_bg_color"
    semantic_name: "Component / rd/swiper/nav/btn/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavBtnBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9cff2f4fc6442ad8cea599093964182073cbfa26"
      name: "Component / rd/swiper/nav/btn/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_swiper_nav_btn_color"
    semantic_name: "Component / rd/swiper/nav/btn/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavBtnColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8eb0e639627d0f1c8bb1bf7f38dd31c75a3c8832"
      name: "Component / rd/swiper/nav/btn/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_swiper_nav_dot_active_color"
    semantic_name: "Component / rd/swiper/nav/dot/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavDotActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "23289925686ec1e5c7f7c7348680a9e24bd88854"
      name: "Component / rd/swiper/nav/dot/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_swiper_nav_dot_color"
    semantic_name: "Component / rd/swiper/nav/dot/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavDotColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "22738172ed3a15fdc2ea26e1fb533d83601d24cc"
      name: "Component / rd/swiper/nav/dot/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF8C"
  - token_id: "color_component_rd_swiper_nav_fraction_bg_color"
    semantic_name: "Component / rd/swiper/nav/fraction/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavFractionBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2704508acf6ad873ab87c03d1cac1846a956c03f"
      name: "Component / rd/swiper/nav/fraction/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_swiper_nav_fraction_color"
    semantic_name: "Component / rd/swiper/nav/fraction/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavFractionColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6593f975fe141ed725f075ccf0b105d7a4332638"
      name: "Component / rd/swiper/nav/fraction/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_swiper_nav_outside_bg"
    semantic_name: "Component / rd/swiper/nav/outside-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavOutsideBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a4a956f9ef9243f9498e323bc99d0288bc0d46a"
      name: "Component / rd/swiper/nav/outside-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_swiper_nav_outside_bg_active"
    semantic_name: "Component / rd/swiper/nav/outside-bg-active"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavOutsideBgActive"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c4ace9f8296c3c39686217234b70936ca4c188d1"
      name: "Component / rd/swiper/nav/outside-bg-active"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_switch_checked_color"
    semantic_name: "Component / rd/switch/checked-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchCheckedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8936ca4f1522afa4ea7b8bf3073811bd0022cd75"
      name: "Component / rd/switch/checked-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_switch_checked_disabled_color"
    semantic_name: "Component / rd/switch/checked-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchCheckedDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4b15265b9818b221b36135104d96965034a783f7"
      name: "Component / rd/switch/checked-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_switch_dot_disabled_color"
    semantic_name: "Component / rd/switch/dot-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchDotDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f4c0a2094251fcf5408f5254f57f40a154562c93"
      name: "Component / rd/switch/dot-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_switch_label_checked_color"
    semantic_name: "Component / rd/switch/label-checked-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLabelCheckedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b89f2660636d1f41276ad7c1b5d9e409b53b0c53"
      name: "Component / rd/switch/label-checked-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/switch/checked-color -> rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_switch_label_color"
    semantic_name: "Component / rd/switch/label-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLabelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f2cebc2780e47fdba7dbeacdd2a473a29d3e0e84"
      name: "Component / rd/switch/label-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/bg-color/secondarycontainer-active -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_switch_loading_color"
    semantic_name: "Component / rd/switch/loading-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLoadingColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4e1990c7ce8e94a738a7b1bcf2c32f8b682fed7e"
      name: "Component / rd/switch/loading-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_switch_unchecked_color"
    semantic_name: "Component / rd/switch/unchecked-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchUncheckedColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e89ca7360f4796c420bda75f6ea5aa13c23700a3"
      name: "Component / rd/switch/unchecked-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/bg-color/secondarycontainer-active -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_switch_unchecked_disabled_color"
    semantic_name: "Component / rd/switch/unchecked-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchUncheckedDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "545f571934ba97f3ed820f3eecb554cb46b42c9f"
      name: "Component / rd/switch/unchecked-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_tab_bar_active_bg"
    semantic_name: "Component / rd/tab-bar/active-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarActiveBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4e96db5066f2c3a0ccc9e3e01a49d42925a4537a"
      name: "Component / rd/tab-bar/active-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_tab_bar_active_color"
    semantic_name: "Component / rd/tab-bar/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "44489fe340263fa339faa7a6d4405c20638d9dec"
      name: "Component / rd/tab-bar/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_tab_bar_bg_color"
    semantic_name: "Component / rd/tab-bar/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d41d294e37b82bb6df069aa43ee69978f2cd4b2c"
      name: "Component / rd/tab-bar/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_tab_bar_border_color"
    semantic_name: "Component / rd/tab-bar/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "69c3e95c9133d1e23de9af12a7e9ce05c77b8aca"
      name: "Component / rd/tab-bar/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-level/1-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_tab_bar_color"
    semantic_name: "Component / rd/tab-bar/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "05cfabb3ef60f53bc42de6d85f077337bea7cf2f"
      name: "Component / rd/tab-bar/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_tab_bar_hover_bg_color"
    semantic_name: "Component / rd/tab-bar/hover-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarHoverBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2b796ba2783102079e916d690281af6b33b354d1"
      name: "Component / rd/tab-bar/hover-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#0000000D"
        flutter: "0x0D000000"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#0000000D"
  - token_id: "color_component_rd_tab_bar_spread_border_color"
    semantic_name: "Component / rd/tab-bar/spread-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarSpreadBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "40e27ab709982372f1c17478a75744fb62c39cd4"
      name: "Component / rd/tab-bar/spread-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/border-level/1-color -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_table_action_bg_color"
    semantic_name: "Component / rd/table/action-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableActionBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "944c567ac569b1d43f1e94b76ea153953aafe0bb"
      name: "Component / rd/table/action-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_table_bg"
    semantic_name: "Component / rd/table/bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "054a473715e4d969a785c03e19337165b54e72e1"
      name: "Component / rd/table/bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_table_border_color"
    semantic_name: "Component / rd/table/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8a8f4c6e5259f0d91088182c24a2ad7fae87f974"
      name: "Component / rd/table/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_table_color_empty"
    semantic_name: "Component / rd/table/color-empty"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableColorEmpty"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a4434eb77957ebd93ad410babde92d4b3ebaef4d"
      name: "Component / rd/table/color-empty"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_table_filter_icon_default_color"
    semantic_name: "Component / rd/table/filter-icon-default-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableFilterIconDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d7d9b61f1507f8707631583bd4c38897ea4c31f6"
      name: "Component / rd/table/filter-icon-default-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_table_fixed_cell_border_color"
    semantic_name: "Component / rd/table/fixed-cell-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableFixedCellBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e48052f0c3cdfea9cbce32e074e2328491c4d6a7"
      name: "Component / rd/table/fixed-cell-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_table_head_text_color"
    semantic_name: "Component / rd/table/head-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableHeadTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f70d21ae3486f5971d060965f7b6b1458ccae590"
      name: "Component / rd/table/head-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_table_header_bg_color"
    semantic_name: "Component / rd/table/header-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableHeaderBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "07404c4f7d10473bfac55df5b868c1bd64791256"
      name: "Component / rd/table/header-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_table_highlight_bg_color"
    semantic_name: "Component / rd/table/highlight-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableHighlightBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "28d388c4f1f5aa8941738184d0f2a416ba4cbff1"
      name: "Component / rd/table/highlight-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_table_highlight_bg_color_hover"
    semantic_name: "Component / rd/table/highlight-bg-color-hover"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableHighlightBgColorHover"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ac103b3f992569fcb742a5aaa3449d74a0ccf91e"
      name: "Component / rd/table/highlight-bg-color-hover"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#383838"
        flutter: "0xFF383838"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#383838"
  - token_id: "color_component_rd_table_highlight_dark_bg_color"
    semantic_name: "Component / rd/table/highlight-dark-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableHighlightDarkBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0c9169b1a9540d0eccd2bca5168e1203557d1f76"
      name: "Component / rd/table/highlight-dark-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_table_icon_active_color"
    semantic_name: "Component / rd/table/icon-active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableIconActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "73b34c9fe5b3f5f518c8b0ad6a37f0e8ec00117f"
      name: "Component / rd/table/icon-active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_table_icon_default_color"
    semantic_name: "Component / rd/table/icon-default-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableIconDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "db9671c5b6ecf28da659a27e0afff1e33d288c7d"
      name: "Component / rd/table/icon-default-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_table_link_text_color"
    semantic_name: "Component / rd/table/link-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableLinkTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fa9d43ff60f0c10222e38c585fd1a5d5efa4fff8"
      name: "Component / rd/table/link-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/text-color/link -> rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_table_row_disabled_color"
    semantic_name: "Component / rd/table/row-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableRowDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "71a515c422591ab903541ba6c46a3840a71fc66f"
      name: "Component / rd/table/row-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_table_sort_bg_color"
    semantic_name: "Component / rd/table/sort-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableSortBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "17704fb103c49e651f9eb5448621f1f22cf32cef"
      name: "Component / rd/table/sort-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_table_text_color"
    semantic_name: "Component / rd/table/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "67b4ce3f90936bbe316c280a376a69c1dbfd8cbb"
      name: "Component / rd/table/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_tabs_border_color"
    semantic_name: "Component / rd/tabs/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e2e4e1d3125ccaff5b8d31694b8bd322d4ebff2"
      name: "Component / rd/tabs/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/component-stroke -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_tabs_item_active_color"
    semantic_name: "Component / rd/tabs/item/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dffedafa18fbb8ca9ad86c90f90184daa9570781"
      name: "Component / rd/tabs/item/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_tabs_item_color"
    semantic_name: "Component / rd/tabs/item/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b7a79d97ed0d872378cd59322a0b0e3abab1e5a0"
      name: "Component / rd/tabs/item/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_tabs_item_disabled_color"
    semantic_name: "Component / rd/tabs/item/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f46e6cc11bbba92cf1df2e7be92b0816948ecf4b"
      name: "Component / rd/tabs/item/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_tabs_item_tag_active_bg"
    semantic_name: "Component / rd/tabs/item/tag/active-bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemTagActiveBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8d7157131eb67d533982cc26fe854382d2f17463"
      name: "Component / rd/tabs/item/tag/active-bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_tabs_item_tag_bg"
    semantic_name: "Component / rd/tabs/item/tag/bg"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemTagBg"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b73b62076b5b7e06103db114b13b2a65b7475abe"
      name: "Component / rd/tabs/item/tag/bg"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_tabs_nav_background"
    semantic_name: "Component / rd/tabs/nav-background"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsNavBackground"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a9efbe380418650474d17fdd19855ff8206a1df"
      name: "Component / rd/tabs/nav-background"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_tabs_track_color"
    semantic_name: "Component / rd/tabs/track/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsTrackColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5cd93b60ae6b69e9fe5977bc4986743502c677d2"
      name: "Component / rd/tabs/track/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_tag_checked_dark_disabled_color"
    semantic_name: "Component / rd/tag/checked-dark-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCheckedDarkDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aac3d26e40037e94e92a3c57193e37534abb392c"
      name: "Component / rd/tag/checked-dark-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF8C"
        flutter: "0x8CFFFFFF"
        source: "rd/font-white/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF8C"
  - token_id: "color_component_rd_tag_checked_disabled_background_color"
    semantic_name: "Component / rd/tag/checked-disabled-background-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCheckedDisabledBackgroundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "390fb5588e5b57082467c67956628fb7dd553bfb"
      name: "Component / rd/tag/checked-disabled-background-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_tag_checked_disabled_border_color"
    semantic_name: "Component / rd/tag/checked-disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCheckedDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e6475a1761709afc3f5a0029d096a856521faa8c"
      name: "Component / rd/tag/checked-disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_tag_checked_disabled_color"
    semantic_name: "Component / rd/tag/checked-disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCheckedDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "32fd4fa08264506e627d63a552675dd9c3202533"
      name: "Component / rd/tag/checked-disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#CFDAFF"
        flutter: "0xFFCFDAFF"
        source: "rd/brand-color/disabled -> rd/brand-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#CFDAFF"
  - token_id: "color_component_rd_tag_checked_light_disabled_background_color"
    semantic_name: "Component / rd/tag/checked-light-disabled-background-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCheckedLightDisabledBackgroundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f4925dc8ca59d206b35e004376264b85999e5624"
      name: "Component / rd/tag/checked-light-disabled-background-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_tag_close_icon_color"
    semantic_name: "Component / rd/tag/close-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagCloseIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0e5950743fc7f4c39bf0fc7bc32aa383e5361404"
      name: "Component / rd/tag/close-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_tag_danger_color"
    semantic_name: "Component / rd/tag/danger-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDangerColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "40d9a4b897600604bc030bb55531f9a090bac4c6"
      name: "Component / rd/tag/danger-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#D92020"
        flutter: "0xFFD92020"
        source: "rd/error-color -> rd/error-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#D92020"
  - token_id: "color_component_rd_tag_danger_light_color"
    semantic_name: "Component / rd/tag/danger-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDangerLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c9bf798568986bdd21e9614a609a42ba9e966ddf"
      name: "Component / rd/tag/danger-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF0F0"
        flutter: "0xFFFFF0F0"
        source: "rd/error-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF0F0"
  - token_id: "color_component_rd_tag_default_color"
    semantic_name: "Component / rd/tag/default-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDefaultColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "97d6e3767132aca1e3aa66e8ef8fdd1e765ed7d8"
      name: "Component / rd/tag/default-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E7E7E7"
        flutter: "0xFFE7E7E7"
        source: "rd/bg-color/component -> rd/gray-color/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#E7E7E7"
  - token_id: "color_component_rd_tag_default_font_color"
    semantic_name: "Component / rd/tag/default-font-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDefaultFontColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a455ac9ea20b047e86f2c62f5b0076c64ab0f00f"
      name: "Component / rd/tag/default-font-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_tag_default_light_color"
    semantic_name: "Component / rd/tag/default-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDefaultLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ed35ecaaba62e9d5c144f338342facfe64b5ceb4"
      name: "Component / rd/tag/default-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_tag_disabled_background_color"
    semantic_name: "Component / rd/tag/disabled-background-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDisabledBackgroundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "17224e0ccdcf786c33a4ed687c8978750135d025"
      name: "Component / rd/tag/disabled-background-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#EEEEEE"
        flutter: "0xFFEEEEEE"
        source: "rd/bg-color/component-disabled -> rd/gray-color/2"
    notes:
      []
    fallback:
      allowed: false
      value: "#EEEEEE"
  - token_id: "color_component_rd_tag_disabled_border_color"
    semantic_name: "Component / rd/tag/disabled-border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDisabledBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f84421a82b41269ca303690f18221483f8f1dabf"
      name: "Component / rd/tag/disabled-border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_tag_disabled_color"
    semantic_name: "Component / rd/tag/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "780205829a0e14426ec2567a702575a55fb3e69f"
      name: "Component / rd/tag/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_tag_outline_bg_color"
    semantic_name: "Component / rd/tag/outline-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagOutlineBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "849447da6c7167272d4d327ee91c76e4302fdf19"
      name: "Component / rd/tag/outline-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_tag_primary_color"
    semantic_name: "Component / rd/tag/primary-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagPrimaryColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8d48072f3aefdf58d2f4d74d9805f33f51af8f14"
      name: "Component / rd/tag/primary-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_tag_primary_light_color"
    semantic_name: "Component / rd/tag/primary-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagPrimaryLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "52e3286f6f48e57afb3118abe51f936f9b8615ec"
      name: "Component / rd/tag/primary-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F6FF"
        flutter: "0xFFF3F6FF"
        source: "rd/brand-color/light -> rd/brand-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F6FF"
  - token_id: "color_component_rd_tag_success_color"
    semantic_name: "Component / rd/tag/success-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSuccessColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "df615b230ca60726084bd712d651091e4fd70890"
      name: "Component / rd/tag/success-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#2BA471"
        flutter: "0xFF2BA471"
        source: "rd/success-color -> rd/success-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#2BA471"
  - token_id: "color_component_rd_tag_success_light_color"
    semantic_name: "Component / rd/tag/success-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSuccessLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "496c3910bd2411391fd513011e6321d4becf0905"
      name: "Component / rd/tag/success-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E3F9E9"
        flutter: "0xFFE3F9E9"
        source: "rd/success-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#E3F9E9"
  - token_id: "color_component_rd_tag_warning_color"
    semantic_name: "Component / rd/tag/warning-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagWarningColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8fc4736e657dab00129786492332ba9a5c7dafc7"
      name: "Component / rd/tag/warning-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#E37318"
        flutter: "0xFFE37318"
        source: "rd/warning-color -> rd/warning-color/5"
    notes:
      []
    fallback:
      allowed: false
      value: "#E37318"
  - token_id: "color_component_rd_tag_warning_light_color"
    semantic_name: "Component / rd/tag/warning-light-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagWarningLightColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "486c9f57bcc603cb713a5e6c49577a1bc302f990"
      name: "Component / rd/tag/warning-light-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFF1E9"
        flutter: "0xFFFFF1E9"
        source: "rd/warning-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFF1E9"
  - token_id: "color_component_rd_textarea_background_color"
    semantic_name: "Component / rd/textarea/background-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaBackgroundColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cefd657aa630995da8eb4f717eeba1e6d6ec8a76"
      name: "Component / rd/textarea/background-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_textarea_border_color"
    semantic_name: "Component / rd/textarea/border-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaBorderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e4f9996ea071827e5befa999579ec847db69d4e9"
      name: "Component / rd/textarea/border-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#DCDCDC"
        flutter: "0xFFDCDCDC"
        source: "rd/component-border -> rd/gray-color/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#DCDCDC"
  - token_id: "color_component_rd_textarea_disabled_text_color"
    semantic_name: "Component / rd/textarea/disabled-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaDisabledTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d55afc43170e42d01aeeedf03ac022b49a87ff50"
      name: "Component / rd/textarea/disabled-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_textarea_indicator_text_color"
    semantic_name: "Component / rd/textarea/indicator-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaIndicatorTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "63d1024a84a61b2ec23a37010be1c473c704c30f"
      name: "Component / rd/textarea/indicator-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_textarea_label_color"
    semantic_name: "Component / rd/textarea/label-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaLabelColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "07f699234b57d45ac11c40494db3a88467b6d857"
      name: "Component / rd/textarea/label-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_textarea_placeholder_color"
    semantic_name: "Component / rd/textarea/placeholder-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaPlaceholderColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b7941d2d17e9134cf9d79a0ee1bb364fc1467bc0"
      name: "Component / rd/textarea/placeholder-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_textarea_text_color"
    semantic_name: "Component / rd/textarea/text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e416e20e525e943b67d1a768846c75b925d316bf"
      name: "Component / rd/textarea/text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_toast_bg_color"
    semantic_name: "Component / rd/toast/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "02d20b1d0cb8b93f4276d6e0d81e0867ca015f98"
      name: "Component / rd/toast/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000099"
        flutter: "0x99000000"
        source: "rd/mask-active"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000099"
  - token_id: "color_component_rd_toast_color"
    semantic_name: "Component / rd/toast/color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e97958c3847f120ffbb723a19ea55ef0a1129868"
      name: "Component / rd/toast/color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/text-color/anti -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_tree_bg_color"
    semantic_name: "Component / rd/tree/bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0ad4fdc106ffb3c1a2d38b98ae39e98db2d8eb91"
      name: "Component / rd/tree/bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "rd/bg-color/container -> rd/font-white/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "color_component_rd_tree_colum_text_color"
    semantic_name: "Component / rd/tree/colum-text-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeColumTextColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "47eb2741400c25d8a8133cd742376c9de6c2deee"
      name: "Component / rd/tree/colum-text-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#000000E5"
        flutter: "0xE5000000"
        source: "rd/text-color/primary -> rd/font-gray/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#000000E5"
  - token_id: "color_component_rd_tree_item_active_color"
    semantic_name: "Component / rd/tree/item/active-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeItemActiveColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "002d78bdd5978e1e559e4b0a41c984b53b1347f2"
      name: "Component / rd/tree/item/active-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#4E39F2"
        flutter: "0xFF4E39F2"
        source: "rd/brand-color -> rd/brand-color/6"
    notes:
      []
    fallback:
      allowed: false
      value: "#4E39F2"
  - token_id: "color_component_rd_tree_item_disabled_color"
    semantic_name: "Component / rd/tree/item/disabled-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeItemDisabledColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a1bd97b5cd9d81150d836ba3b3c444fc8f55a348"
      name: "Component / rd/tree/item/disabled-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000042"
        flutter: "0x42000000"
        source: "rd/text-color/disabled -> rd/font-gray/4"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000042"
  - token_id: "color_component_rd_tree_root_bg_color"
    semantic_name: "Component / rd/tree/root-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeRootBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "18751068497918675ced6fb0f6fe0b79f9a5bb0d"
      name: "Component / rd/tree/root-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_upload_add_bg_color"
    semantic_name: "Component / rd/upload/add-bg-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadAddBgColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ab18de8cf3b7e281d907ed81824f69fb968c3a50"
      name: "Component / rd/upload/add-bg-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_upload_add_color"
    semantic_name: "Component / rd/upload/add-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadAddColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a9ba9db2aac049758f739851649d4d6667b137fc"
      name: "Component / rd/upload/add-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#00000066"
        flutter: "0x66000000"
        source: "rd/text-color/placeholder -> rd/font-gray/3"
    notes:
      []
    fallback:
      allowed: false
      value: "#00000066"
  - token_id: "color_component_rd_upload_background"
    semantic_name: "Component / rd/upload/background"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadBackground"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4b4596010a8a0fe78db867ded9f54a5fcfb4506a"
      name: "Component / rd/upload/background"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#F3F3F3"
        flutter: "0xFFF3F3F3"
        source: "rd/upload/add-bg-color -> rd/bg-color/secondarycontainer -> rd/gray-color/1"
    notes:
      []
    fallback:
      allowed: false
      value: "#F3F3F3"
  - token_id: "color_component_rd_upload_delete_icon_color"
    semantic_name: "Component / rd/upload/delete-icon-color"
    category: "color"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadDeleteIconColor"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "917fe000702be646f8c7ec2bdb2e8436ff8b5342"
      name: "Component / rd/upload/delete-icon-color"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "#FFFFFF"
        flutter: "0xFFFFFFFF"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "#FFFFFF"
  - token_id: "number_component_rd_avatar_border_width_large"
    semantic_name: "Component / rd/avatar/border/width-large"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBorderWidthLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5efb625880eb36e945c7af734dba005de590e7a6"
      name: "Component / rd/avatar/border/width-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_avatar_border_width_medium"
    semantic_name: "Component / rd/avatar/border/width-medium"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBorderWidthMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ad54bd3bb6d6c344b36467a1c5bfc29c4e544d64"
      name: "Component / rd/avatar/border/width-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "number_component_rd_avatar_border_width_small"
    semantic_name: "Component / rd/avatar/border/width-small"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarBorderWidthSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a48fec15ebb53c34f3e95b5988213d408f2ba5b2"
      name: "Component / rd/avatar/border/width-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 1
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 1
  - token_id: "number_component_rd_back_top_fixed_right"
    semantic_name: "Component / rd/back-top/fixed/right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopFixedRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "810c281b445ba7a2ab520561963fac2be6f94d42"
      name: "Component / rd/back-top/fixed/right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_badge_basic_height"
    semantic_name: "Component / rd/badge/basic-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeBasicHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c2d8065c777290baacf200fc05930746179d2e0f"
      name: "Component / rd/badge/basic-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_badge_basic_padding"
    semantic_name: "Component / rd/badge/basic-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeBasicPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f728bf807e2f8e8980802a3bf534ed558f323a60"
      name: "Component / rd/badge/basic-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_badge_basic_width"
    semantic_name: "Component / rd/badge/basic-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeBasicWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2ded22a0eda88d11d58400039d0311f602fe0a62"
      name: "Component / rd/badge/basic-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_badge_dot_size"
    semantic_name: "Component / rd/badge/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec4aa678715770ac954f1231ee9edb1e093b98cd"
      name: "Component / rd/badge/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_badge_large_height"
    semantic_name: "Component / rd/badge/large/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeLargeHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "183eaf2763c10df96d1f93145b872b09ff82c01f"
      name: "Component / rd/badge/large/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_badge_large_padding"
    semantic_name: "Component / rd/badge/large/padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeLargePadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5ce30a36970df91845db07122e8a87a1f0471bb2"
      name: "Component / rd/badge/large/padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 5
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 5
  - token_id: "number_component_rd_button_border_width"
    semantic_name: "Component / rd/button/border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cd2c1e80f0b1e891553cda9e79ff2c16b094684f"
      name: "Component / rd/button/border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "number_component_rd_cascader_options_height"
    semantic_name: "Component / rd/cascader/options-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderOptionsHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0661d933ecd16b434cd6047f1e3803c3f1345bc2"
      name: "Component / rd/cascader/options-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 320
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 320
  - token_id: "number_component_rd_cascader_step_dot_size"
    semantic_name: "Component / rd/cascader/step/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderStepDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "60d0520c3047438fb86b1ff1815cadcd5a962bc1"
      name: "Component / rd/cascader/step/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_cascader_step_height"
    semantic_name: "Component / rd/cascader/step/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderStepHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c2bc26d857d4975f8a6a7ef45c56c961e05262ce"
      name: "Component / rd/cascader/step/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 44
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 44
  - token_id: "number_component_rd_cascader_title_padding"
    semantic_name: "Component / rd/cascader/title-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderTitlePadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "da0374b9ddcd0f0b20eccdcb1f49d3b0ee409e04"
      name: "Component / rd/cascader/title-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/spacer-5"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_cell_group_title_line_height"
    semantic_name: "Component / rd/cell-group/title/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupTitleLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a84633b42ddc2d79fd81551a6250e459593a1909"
      name: "Component / rd/cell-group/title/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 45
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 45
  - token_id: "number_component_rd_cell_group_title_padding_left"
    semantic_name: "Component / rd/cell-group/title/padding-left"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupTitlePaddingLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9b36d962d3d162a1f523e8c745c5dda3ef1e861a"
      name: "Component / rd/cell-group/title/padding-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_cell_horizontal_padding"
    semantic_name: "Component / rd/cell/horizontal-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a394e685b9e881a087a95127b764c9c5bcc5a233"
      name: "Component / rd/cell/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_cell_image_height"
    semantic_name: "Component / rd/cell/image/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellImageHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1a51d04b71fa61aa72a222a3188a87c59f2019c2"
      name: "Component / rd/cell/image/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_cell_image_width"
    semantic_name: "Component / rd/cell/image/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellImageWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f703c6f9bac37238e9555d5f138b122db3148e61"
      name: "Component / rd/cell/image/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_cell_left_icon_size"
    semantic_name: "Component / rd/cell/left-icon/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellLeftIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6ce3eb70a9c95ad294fd91d361efb53483fb646b"
      name: "Component / rd/cell/left-icon/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_cell_right_icon_size"
    semantic_name: "Component / rd/cell/right-icon/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellRightIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e5b101eec8360ab3583e30af730a62e20b1d3ea1"
      name: "Component / rd/cell/right-icon/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_cell_vertical_padding"
    semantic_name: "Component / rd/cell/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "76b547ec493fe69d1aa48f5b949a395a0a3ecb9b"
      name: "Component / rd/cell/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_checkbox_border_width"
    semantic_name: "Component / rd/checkbox/border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c458a33e47c24586c9df92076661684a9f2de739"
      name: "Component / rd/checkbox/border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_checkbox_icon_size"
    semantic_name: "Component / rd/checkbox/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "51376ec6985404916c7cc4beb200e9c667b8cc49"
      name: "Component / rd/checkbox/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_checkbox_title_line_height"
    semantic_name: "Component / rd/checkbox/title-line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxTitleLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c49300a642164f4296bab845409f880b8a52ed77"
      name: "Component / rd/checkbox/title-line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_checkbox_vertical_padding"
    semantic_name: "Component / rd/checkbox/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCheckboxVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6033629fc2c54db0215e1ec7d2fa8ac0bdd6a3c8"
      name: "Component / rd/checkbox/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/spacer-5"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_collapse_content_padding"
    semantic_name: "Component / rd/collapse/content-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCollapseContentPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c0b337bbf2e6dfbbdf7e9077fdf3acc06502aef6"
      name: "Component / rd/collapse/content-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_color_picker_gradient_preview_height"
    semantic_name: "Component / rd/color-picker/gradient-preview/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerGradientPreviewHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8ab58405be687a3acc951c26f62c408f175d44a0"
      name: "Component / rd/color-picker/gradient-preview/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "number_component_rd_color_picker_gradient_preview_width"
    semantic_name: "Component / rd/color-picker/gradient-preview/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerGradientPreviewWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "29f7185d46fd6c9c444cdc40aab984a9d927a643"
      name: "Component / rd/color-picker/gradient-preview/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "number_component_rd_color_picker_input_format_margin_left"
    semantic_name: "Component / rd/color-picker/input-format-margin-left"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerInputFormatMarginLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec618d510029a18642cf191920f444df29aa8f13"
      name: "Component / rd/color-picker/input-format-margin-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_color_picker_panel_padding"
    semantic_name: "Component / rd/color-picker/panel/padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerPanelPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "48e916dd6616c129c2b2ef0ece1d9c49f5c8ba84"
      name: "Component / rd/color-picker/panel/padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_color_picker_panel_width"
    semantic_name: "Component / rd/color-picker/panel/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerPanelWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2c1545a1d3adf982ef3eaadb13584c04a302c3b3"
      name: "Component / rd/color-picker/panel/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 375
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 375
  - token_id: "number_component_rd_color_picker_saturation_height"
    semantic_name: "Component / rd/color-picker/saturation/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSaturationHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "74c5d78de227b5c3afe23d47a749b6523bfcac5f"
      name: "Component / rd/color-picker/saturation/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 144
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 144
  - token_id: "number_component_rd_color_picker_saturation_thumb_size"
    semantic_name: "Component / rd/color-picker/saturation/thumb-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSaturationThumbSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8449d1429b52be730ded17a20677ba6d81772a89"
      name: "Component / rd/color-picker/saturation/thumb-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_color_picker_slider_height"
    semantic_name: "Component / rd/color-picker/slider/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSliderHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5d2d657739ea8460f3e7e250b6a26dfc9b919fe9"
      name: "Component / rd/color-picker/slider/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_color_picker_slider_thumb_padding"
    semantic_name: "Component / rd/color-picker/slider/thumb-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSliderThumbPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c19fd534acd4da48b0ab03283cdef102e6307492"
      name: "Component / rd/color-picker/slider/thumb-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_color_picker_slider_thumb_size"
    semantic_name: "Component / rd/color-picker/slider/thumb-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSliderThumbSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1827dc48bfb92125bf3ce554d1a210b0fff1de47"
      name: "Component / rd/color-picker/slider/thumb-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_color_picker_swatch_height"
    semantic_name: "Component / rd/color-picker/swatch/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSwatchHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "46d7e40aa40c1920c4ea1d5575c37d36d8a320cd"
      name: "Component / rd/color-picker/swatch/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_color_picker_swatch_padding"
    semantic_name: "Component / rd/color-picker/swatch/padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSwatchPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b4b2df0e7c2e86a1f257955cddb7b0e9dd8365e1"
      name: "Component / rd/color-picker/swatch/padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "number_component_rd_color_picker_swatch_width"
    semantic_name: "Component / rd/color-picker/swatch/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSwatchWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cb35bc263a18d06e4556f6141e5dd4beee26078a"
      name: "Component / rd/color-picker/swatch/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_countdown_large_bg_width"
    semantic_name: "Component / rd/countdown/large/bg-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeBgWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "078e24873cac60f3a24529c1ca160c63f6f1bad8"
      name: "Component / rd/countdown/large/bg-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "number_component_rd_countdown_large_no_unit_margin"
    semantic_name: "Component / rd/countdown/large/no-unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeNoUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "71d180ce430700e189685b81ffbf8c8d58908d33"
      name: "Component / rd/countdown/large/no-unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_countdown_large_unit_margin"
    semantic_name: "Component / rd/countdown/large/unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "85e06e2460c89640129d16551006b815de491967"
      name: "Component / rd/countdown/large/unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_countdown_medium_bg_width"
    semantic_name: "Component / rd/countdown/medium/bg-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumBgWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5e1330a314a79d2f4b5685216410cbfab7211ffb"
      name: "Component / rd/countdown/medium/bg-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_countdown_medium_no_unit_margin"
    semantic_name: "Component / rd/countdown/medium/no-unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumNoUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7555842e652884b7d34c65bb98176bc1895cb18c"
      name: "Component / rd/countdown/medium/no-unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_countdown_medium_unit_margin"
    semantic_name: "Component / rd/countdown/medium/unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f6923f100be8ba30ab2ecb42123a2eac946e3b55"
      name: "Component / rd/countdown/medium/unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 5
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 5
  - token_id: "number_component_rd_countdown_small_bg_width"
    semantic_name: "Component / rd/countdown/small/bg-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallBgWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "78efe70e626b34c1f84ec591fb8accbc1294013a"
      name: "Component / rd/countdown/small/bg-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_countdown_small_no_unit_margin"
    semantic_name: "Component / rd/countdown/small/no-unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallNoUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "173b8faf5a7e2750f3e96e56bd3c580be2865600"
      name: "Component / rd/countdown/small/no-unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "number_component_rd_countdown_small_unit_margin"
    semantic_name: "Component / rd/countdown/small/unit-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallUnitMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7b4a17b35d7855b5288dd33b506c14c48c23e0ce"
      name: "Component / rd/countdown/small/unit-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_data_time_picker_year_width"
    semantic_name: "Component / rd/data-time-picker/year-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDataTimePickerYearWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5c47dc5da6c85f61a01fccf165f7ff6c262f5af1"
      name: "Component / rd/data-time-picker/year-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 64
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 64
  - token_id: "number_component_rd_dialog_body_max_height"
    semantic_name: "Component / rd/dialog/body-max-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogBodyMaxHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c250cffa2fb0a9adef8c7dd4d8a49004379edd78"
      name: "Component / rd/dialog/body-max-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 456
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 456
  - token_id: "number_component_rd_dialog_close_icon_size"
    semantic_name: "Component / rd/dialog/close/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogCloseIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c9d91c1995fec743ed3f44f65c0b9cf8d17e2880"
      name: "Component / rd/dialog/close/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_dialog_width"
    semantic_name: "Component / rd/dialog/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2406d7340d91dd9eeb4bfc808cc2d0a3e01a0f89"
      name: "Component / rd/dialog/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 311
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 311
  - token_id: "number_component_rd_divider_border_width"
    semantic_name: "Component / rd/divider/border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d54d18c2e73f355a4c896ca63adba9d6f35fc119"
      name: "Component / rd/divider/border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 1
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 1
  - token_id: "number_component_rd_divider_content_margin"
    semantic_name: "Component / rd/divider/content/margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerContentMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cc1db7135a8d133decc4209304f2c035e0474d4a"
      name: "Component / rd/divider/content/margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/spacer-4"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_divider_horizontal_margin"
    semantic_name: "Component / rd/divider/horizontal-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerHorizontalMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cabef7b3fc59a9df092c41c001d5179b60802803"
      name: "Component / rd/divider/horizontal-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "number_component_rd_divider_vertical_margin"
    semantic_name: "Component / rd/divider/vertical-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerVerticalMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8c04efb50ba00f4c9a7b4827d52eb7563386e151"
      name: "Component / rd/divider/vertical-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_drawer_footer_padding_bottom"
    semantic_name: "Component / rd/drawer/footer-padding-bottom"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerFooterPaddingBottom"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1ef0cb9797b762c9d266dbb5a3a47ddd9f6f037b"
      name: "Component / rd/drawer/footer-padding-bottom"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_drawer_item_icon_size"
    semantic_name: "Component / rd/drawer/item-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerItemIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "93ce14babfaacf0cef9df35470f8caaf3a167e1f"
      name: "Component / rd/drawer/item-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_drawer_item_padding"
    semantic_name: "Component / rd/drawer/item-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerItemPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a2716a9287374ff25e14db5e867f4a5d3347d782"
      name: "Component / rd/drawer/item-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_drawer_sidebar_height"
    semantic_name: "Component / rd/drawer/sidebar-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerSidebarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c6e5c0ed61d727828f428c19107d9028f77a068e"
      name: "Component / rd/drawer/sidebar-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 70
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 70
  - token_id: "number_component_rd_drawer_width"
    semantic_name: "Component / rd/drawer/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDrawerWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a9697ca2529ebb73f1fed63a819dcd65f7452de7"
      name: "Component / rd/drawer/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 280
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 280
  - token_id: "number_component_rd_dropdown_body_max_height"
    semantic_name: "Component / rd/dropdown/body-max-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownBodyMaxHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2648e5bf022cd65f2c2f0018cb2d682c557cad57"
      name: "Component / rd/dropdown/body-max-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 280
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 280
  - token_id: "number_component_rd_dropdown_menu_icon_size"
    semantic_name: "Component / rd/dropdown/menu/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDropdownMenuIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6c5a641aba0bdb67079e46107362cdc2e8e09b43"
      name: "Component / rd/dropdown/menu/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_empty_action_margin_top"
    semantic_name: "Component / rd/empty/action-margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdEmptyActionMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "76650e4097cc70f3e6450e22602ff29e9a1c3189"
      name: "Component / rd/empty/action-margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "rd/spacer-7"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_empty_description_margin_top"
    semantic_name: "Component / rd/empty/description/margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdEmptyDescriptionMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c6f29c8fdfe39ec93ecc654f7d8b65b5addbf23b"
      name: "Component / rd/empty/description/margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/spacer-5"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_empty_icon_size"
    semantic_name: "Component / rd/empty/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdEmptyIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7bf73e98f36cfbdc489a6405ffec15f1138c4601"
      name: "Component / rd/empty/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 96
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 96
  - token_id: "number_component_rd_footer_link_dividing_line_padding"
    semantic_name: "Component / rd/footer/link/dividing-line-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLinkDividingLinePadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e0b694cd4b44c7b855932c4726f30fbc9908e5c6"
      name: "Component / rd/footer/link/dividing-line-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/spacer-4"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_footer_logo_icon_height"
    semantic_name: "Component / rd/footer/logo/icon/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLogoIconHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "782931bbbef5b4e5a01b5eeaccd9c5b7f8d97b17"
      name: "Component / rd/footer/logo/icon/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_footer_logo_icon_margin_right"
    semantic_name: "Component / rd/footer/logo/icon/margin-right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLogoIconMarginRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e3a888ddc11500e4e6d2fa720b026f0035f5017a"
      name: "Component / rd/footer/logo/icon/margin-right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_footer_logo_icon_width"
    semantic_name: "Component / rd/footer/logo/icon/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLogoIconWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f79937a95eecbac9925201cbf58ce60d1e8e32b1"
      name: "Component / rd/footer/logo/icon/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_footer_logo_title_url_width"
    semantic_name: "Component / rd/footer/logo/title/url-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterLogoTitleUrlWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7bfdb7a355671774fe3ec691825e2da827054bfb"
      name: "Component / rd/footer/logo/title/url-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 128
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 128
  - token_id: "number_component_rd_footer_text_margin_top"
    semantic_name: "Component / rd/footer/text/margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFooterTextMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3f2469c01ccd58ee54afa4c6b200c93555cd0611"
      name: "Component / rd/footer/text/margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_form_item_horizontal_padding"
    semantic_name: "Component / rd/form/item/horizontal-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFormItemHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "157ecce077b8cd7e088a7c8c4920c790645e6d60"
      name: "Component / rd/form/item/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_form_item_vertical_padding"
    semantic_name: "Component / rd/form/item/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFormItemVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "66a9ae186741aaffc97b1080c17e118ba2bca264"
      name: "Component / rd/form/item/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_grid_item_description_padding_top"
    semantic_name: "Component / rd/grid/item/description/padding-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemDescriptionPaddingTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d6b860d8dcce7b3c1677fbd91dfe4c5be2031949"
      name: "Component / rd/grid/item/description/padding-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_grid_item_horizontal_text_description_top"
    semantic_name: "Component / rd/grid/item/horizontal/text-description-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemHorizontalTextDescriptionTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6e57260495fd9026a16a901987e63999eb7cb175"
      name: "Component / rd/grid/item/horizontal/text-description-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "number_component_rd_grid_item_horizontal_text_padding_left"
    semantic_name: "Component / rd/grid/item/horizontal/text-padding-left"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemHorizontalTextPaddingLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6cdeabe8b9311628256647e19473a781f60385ee"
      name: "Component / rd/grid/item/horizontal/text-padding-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_grid_item_icon_size"
    semantic_name: "Component / rd/grid/item/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "963d57e15b135c76954efa1ac926c72a62709ed7"
      name: "Component / rd/grid/item/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_grid_item_image_middle_width"
    semantic_name: "Component / rd/grid/item/image-middle-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemImageMiddleWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "732896c77766b863414c684e756a2d8e579799be"
      name: "Component / rd/grid/item/image-middle-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "number_component_rd_grid_item_image_small_width"
    semantic_name: "Component / rd/grid/item/image-small-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemImageSmallWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "144af0a6ed874cfd18213a1fea8001895174e7e7"
      name: "Component / rd/grid/item/image-small-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_grid_item_image_width"
    semantic_name: "Component / rd/grid/item/image/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemImageWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "781d59897bd22d502499274595344561ba97b62c"
      name: "Component / rd/grid/item/image/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_grid_item_text_padding_top"
    semantic_name: "Component / rd/grid/item/text/padding-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemTextPaddingTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ed2e118a5579a804aa469be8d740fa0a31f1fd21"
      name: "Component / rd/grid/item/text/padding-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_guide_action_margin_right"
    semantic_name: "Component / rd/guide/action-margin-right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideActionMarginRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1c8168deda344e6aa197067d560bb2f1ffbd2095"
      name: "Component / rd/guide/action-margin-right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_guide_dialog_desc_margin_top"
    semantic_name: "Component / rd/guide/dialog/desc-margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideDialogDescMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1763a2d53147a4ed1ac0b34a21a42bf1b24e407c"
      name: "Component / rd/guide/dialog/desc-margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_guide_footer_popover_margin_top"
    semantic_name: "Component / rd/guide/footer/popover-margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideFooterPopoverMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6dd715067584566c64a7d86a364ddf64070cd4e7"
      name: "Component / rd/guide/footer/popover-margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_guide_popover_content_padding"
    semantic_name: "Component / rd/guide/popover/content-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuidePopoverContentPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90db2c17b6419f2a2986ec3388090f9b10247a97"
      name: "Component / rd/guide/popover/content-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_guide_popover_margin_top"
    semantic_name: "Component / rd/guide/popover/margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuidePopoverMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d732d96955462d91d25376875dbf761f458d1f83"
      name: "Component / rd/guide/popover/margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_guide_tooltip_desc_margin_top"
    semantic_name: "Component / rd/guide/tooltip/desc-margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideTooltipDescMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5a5e56c95ec4148c48ccfb3a931bf05e8d5bfb3c"
      name: "Component / rd/guide/tooltip/desc-margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_image_viewer_close_margin_left"
    semantic_name: "Component / rd/image-viewer/close/margin-left"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerCloseMarginLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f8905bf632ab45a3e5c45333fe0a8873f0329d39"
      name: "Component / rd/image-viewer/close/margin-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/spacer-4"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_image_viewer_delete_margin_right"
    semantic_name: "Component / rd/image-viewer/delete/margin-right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerDeleteMarginRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dadf12e002e9b46103ee14ce5fd0347690ddadc8"
      name: "Component / rd/image-viewer/delete/margin-right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/spacer-4"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_image_viewer_icon_size"
    semantic_name: "Component / rd/image-viewer/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "68e7f7badd28b6301e3c5255c43ac4bf0a5c1db8"
      name: "Component / rd/image-viewer/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_image_viewer_nav_height"
    semantic_name: "Component / rd/image-viewer/nav/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerNavHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "500340e4873c292c7c189297dfcfe559700e5b0b"
      name: "Component / rd/image-viewer/nav/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_indexes_sidebar_item_size"
    semantic_name: "Component / rd/indexes/sidebar/item-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarItemSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a850a3c36e8ee0e1f47d222c07217965e6fb7403"
      name: "Component / rd/indexes/sidebar/item-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_indexes_sidebar_line_height"
    semantic_name: "Component / rd/indexes/sidebar/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1eef35e29452b9b0028dafea7ca82df85f2cb307"
      name: "Component / rd/indexes/sidebar/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_indexes_sidebar_right"
    semantic_name: "Component / rd/indexes/sidebar/right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "793888c53938d0ec1d2caa3f426697907f319eca"
      name: "Component / rd/indexes/sidebar/right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_indexes_sidebar_tips_right"
    semantic_name: "Component / rd/indexes/sidebar/tips/right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarTipsRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "391a024328823f2b28302e2e4dc578cd9ad90911"
      name: "Component / rd/indexes/sidebar/tips/right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 38
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 38
  - token_id: "number_component_rd_indexes_sidebar_tips_size"
    semantic_name: "Component / rd/indexes/sidebar/tips/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesSidebarTipsSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "92b17e9d34e529b972c021592ac740705d1c2ce7"
      name: "Component / rd/indexes/sidebar/tips/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_input_label_text_max_width"
    semantic_name: "Component / rd/input/label/text-max-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputLabelTextMaxWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "73162cea35d298c81f83e52db1247d64e28188c9"
      name: "Component / rd/input/label/text-max-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 80
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 80
  - token_id: "number_component_rd_input_vertical_padding"
    semantic_name: "Component / rd/input/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d6135102b3482b01a86b6e0d929db74af60e67fd"
      name: "Component / rd/input/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_link_icon_margin"
    semantic_name: "Component / rd/link/icon/margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkIconMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a949841342ae1385a02794c86f4feb2ee9827740"
      name: "Component / rd/link/icon/margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_message_height"
    semantic_name: "Component / rd/message/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "10361ee8ba63c30553708713556898be5ebf5a63"
      name: "Component / rd/message/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_message_horizontal_padding"
    semantic_name: "Component / rd/message/horizontal-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3f8cd619d96d067184e6d8645d5aeaeed0a9ffe4"
      name: "Component / rd/message/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_message_icon_size"
    semantic_name: "Component / rd/message/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "769f11b52e53826415fb77c97a18e12ce31f412b"
      name: "Component / rd/message/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_message_vertical_padding"
    semantic_name: "Component / rd/message/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c85770c89203e7689c34975688d41b8f7a711ebd"
      name: "Component / rd/message/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_navbar_capsule_height"
    semantic_name: "Component / rd/navbar/capsule/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarCapsuleHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0c298d30dff9c146f3fb45606f026fa7db9ef93f"
      name: "Component / rd/navbar/capsule/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_navbar_capsule_width"
    semantic_name: "Component / rd/navbar/capsule/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarCapsuleWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "11550d81d0a6be1649ab5f699006cd66ab836fd2"
      name: "Component / rd/navbar/capsule/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 88
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 88
  - token_id: "number_component_rd_navbar_height"
    semantic_name: "Component / rd/navbar/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8aeb3488c821ab28f25da024f8ddef920472421f"
      name: "Component / rd/navbar/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_navbar_left_arrow_size"
    semantic_name: "Component / rd/navbar/left-arrow-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarLeftArrowSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0918d0ef38e6878f381441a79ab8367858b200a9"
      name: "Component / rd/navbar/left-arrow-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_navbar_padding_top"
    semantic_name: "Component / rd/navbar/padding-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarPaddingTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2b6924620b603f74edadcd72996f128c3b795e6"
      name: "Component / rd/navbar/padding-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "number_component_rd_navbar_right"
    semantic_name: "Component / rd/navbar/right"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarRight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2cbd5f591b753463e299e870a647e56f5b05a5c8"
      name: "Component / rd/navbar/right"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 95
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 95
  - token_id: "number_component_rd_notice_bar_horizontal_padding"
    semantic_name: "Component / rd/notice-bar/horizontal-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8761bf9e9046e982b7264a83cc4edc5847d10414"
      name: "Component / rd/notice-bar/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_notice_bar_icon_size"
    semantic_name: "Component / rd/notice-bar/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7482c86dffbc09c8b8ba7b6dbf4def1f486c6460"
      name: "Component / rd/notice-bar/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_notice_bar_line_height"
    semantic_name: "Component / rd/notice-bar/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9678789ac73faee7955593879ee7b3c65ffe5c83"
      name: "Component / rd/notice-bar/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_notice_bar_vertical_padding"
    semantic_name: "Component / rd/notice-bar/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNoticeBarVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0fc526f6e6acd6f51d7c09c2075a7e8a728eae75"
      name: "Component / rd/notice-bar/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 13
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 13
  - token_id: "number_component_rd_picker_group_height"
    semantic_name: "Component / rd/picker/group-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerGroupHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "56a752942f28916d29db72e1f9c2a30a2849f798"
      name: "Component / rd/picker/group-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 200
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 200
  - token_id: "number_component_rd_picker_item_height"
    semantic_name: "Component / rd/picker/item-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerItemHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bd761bb2f56e601f104e43d5d19d82adf79e62f1"
      name: "Component / rd/picker/item-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "number_component_rd_picker_toolbar_height"
    semantic_name: "Component / rd/picker/toolbar-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerToolbarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "088efc1f7bec13bc8db58814b883a99e199e0b1c"
      name: "Component / rd/picker/toolbar-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 58
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 58
  - token_id: "number_component_rd_popover_arrow_height"
    semantic_name: "Component / rd/popover/arrow-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverArrowHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "316e8088b9da82c3e217d666c1521d4f6a806189"
      name: "Component / rd/popover/arrow-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_popover_arrow_width"
    semantic_name: "Component / rd/popover/arrow-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverArrowWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "25c269d4e6ab721d1b688d51e32194cb608ef3c1"
      name: "Component / rd/popover/arrow-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_popover_content_arrow_margin"
    semantic_name: "Component / rd/popover/content-arrow-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverContentArrowMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fc13884ed8dc15a6f74483e16e136529c645ccb6"
      name: "Component / rd/popover/content-arrow-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_popover_content_line_height"
    semantic_name: "Component / rd/popover/content-line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverContentLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6bcea538fec7fe480335e64f1636575b67ff2460"
      name: "Component / rd/popover/content-line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_popover_content_margin"
    semantic_name: "Component / rd/popover/content-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverContentMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e7bd9e878cdb00c0c247441e9afe9267b39b61d2"
      name: "Component / rd/popover/content-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_popover_padding"
    semantic_name: "Component / rd/popover/padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9f1e125cc511351ac8d6764215a79c450f067832"
      name: "Component / rd/popover/padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_progress_circle_icon_size"
    semantic_name: "Component / rd/progress/circle-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressCircleIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "da4e04d45b7f2765fe8e914d594b2b1f98e01480"
      name: "Component / rd/progress/circle-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_progress_circle_width"
    semantic_name: "Component / rd/progress/circle-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressCircleWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "436660a156c3954a09780d0a1009356f8fdb947f"
      name: "Component / rd/progress/circle-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 112
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 112
  - token_id: "number_component_rd_progress_line_icon_size"
    semantic_name: "Component / rd/progress/line-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressLineIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c6ee13ab2bffadcc77c0f42cb9a23d075fc4d440"
      name: "Component / rd/progress/line-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_progress_line_stroke_width"
    semantic_name: "Component / rd/progress/line-stroke-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressLineStrokeWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2df79e6110e7cae9002a41b3c67dcb7444bea6f7"
      name: "Component / rd/progress/line-stroke-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_progress_stroke_circle_width"
    semantic_name: "Component / rd/progress/stroke-circle-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressStrokeCircleWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "933f23386a3f0fd8f04675dae5727eba84f38699"
      name: "Component / rd/progress/stroke-circle-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_progress_stroke_plump_width"
    semantic_name: "Component / rd/progress/stroke-plump-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressStrokePlumpWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90903832222e21390e26c01cfb37c6995789b7c9"
      name: "Component / rd/progress/stroke-plump-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_qrcode_line_height"
    semantic_name: "Component / rd/qrcode/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a0ce2d16ce6622f2b51b1d72f1fbdb41a7107e59"
      name: "Component / rd/qrcode/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_qrcode_mask_inner_btn_height"
    semantic_name: "Component / rd/qrcode/mask-inner-btn-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeMaskInnerBtnHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3a5559e6370ace91ca5c0c83d39067d86936fed1"
      name: "Component / rd/qrcode/mask-inner-btn-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_qrcode_mask_inner_gap"
    semantic_name: "Component / rd/qrcode/mask-inner-gap"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeMaskInnerGap"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "23ae7171c60715393aa8792bd87399cff101889d"
      name: "Component / rd/qrcode/mask-inner-gap"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_qrcode_padding"
    semantic_name: "Component / rd/qrcode/padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodePadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f24072410d2bfedadd7ce987f0d6ee1bebd00fe1"
      name: "Component / rd/qrcode/padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_radio_icon_size"
    semantic_name: "Component / rd/radio/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5cf7c4912104282833ea5f2c20c19b602c53fda5"
      name: "Component / rd/radio/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_radio_label_line_height"
    semantic_name: "Component / rd/radio/label-line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioLabelLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ff075729763d0d36afce33c30881aaf16482a678"
      name: "Component / rd/radio/label-line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_radio_vertical_padding"
    semantic_name: "Component / rd/radio/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRadioVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9c28eab541ac6d5f18d4806bb88d52ca479c655e"
      name: "Component / rd/radio/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_result_description_margin_top"
    semantic_name: "Component / rd/result/description/margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultDescriptionMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d3b2044a41fe3e05a7a6abc6a9ac27800a54dbc2"
      name: "Component / rd/result/description/margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_result_icon_size"
    semantic_name: "Component / rd/result/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c152c49700d752ba8d798bb416b00ba47bf8a242"
      name: "Component / rd/result/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 80
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 80
  - token_id: "number_component_rd_result_title_margin_top"
    semantic_name: "Component / rd/result/title/margin-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdResultTitleMarginTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "86123038a9d74610e1ba47a8dd11c22d22cf6c96"
      name: "Component / rd/result/title/margin-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/spacer-4"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_search_clear_icon_size"
    semantic_name: "Component / rd/search/clear-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchClearIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d706ac995a01a47677064521868061f9d5c11e10"
      name: "Component / rd/search/clear-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_search_height"
    semantic_name: "Component / rd/search/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5c4890abd7a185d2ae3487d8e4fc9fb4c57cfbb6"
      name: "Component / rd/search/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "number_component_rd_search_icon_size"
    semantic_name: "Component / rd/search/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c0c12bf46b7317a08de451fbf1a4a16d3edfec27"
      name: "Component / rd/search/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_side_bar_icon_size"
    semantic_name: "Component / rd/side-bar/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e6a90686306648685a271be4519a84f3a7e608ae"
      name: "Component / rd/side-bar/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_side_bar_item_height"
    semantic_name: "Component / rd/side-bar/item-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarItemHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f33ed23860382fbc64e67f5851ed76188f3c5ed2"
      name: "Component / rd/side-bar/item-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 56
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 56
  - token_id: "number_component_rd_side_bar_item_padding"
    semantic_name: "Component / rd/side-bar/item-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarItemPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "90a56afa25c6b85cf8a97342afa88e126b6df35c"
      name: "Component / rd/side-bar/item-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/spacer-5"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_side_bar_width"
    semantic_name: "Component / rd/side-bar/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "442064655c2d98b2ea40e9b595cb10317c55a1de"
      name: "Component / rd/side-bar/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 103
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 103
  - token_id: "number_component_rd_skeleton_circle_height"
    semantic_name: "Component / rd/skeleton/circle/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonCircleHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec22455138e08fcffb6fdddf8fd718e27371fdab"
      name: "Component / rd/skeleton/circle/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_skeleton_rect_height"
    semantic_name: "Component / rd/skeleton/rect/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonRectHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "479dc4fb0040d5e91cb88a23fe225e6b8b8785ec"
      name: "Component / rd/skeleton/rect/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_skeleton_text_height"
    semantic_name: "Component / rd/skeleton/text/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonTextHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "49f87af70cf06657054519d09788410d9ccef4dc"
      name: "Component / rd/skeleton/text/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_slider_bar_height"
    semantic_name: "Component / rd/slider/bar-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderBarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c82fc090086e49744ad8703a51422c45f6b9e9d0"
      name: "Component / rd/slider/bar-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_slider_bar_width"
    semantic_name: "Component / rd/slider/bar-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderBarWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "833156c8ca67b5f88a13b50a81d9022b0777c7e7"
      name: "Component / rd/slider/bar-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_slider_capsule_bar_height"
    semantic_name: "Component / rd/slider/capsule/bar-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderCapsuleBarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6aff6ef109e1cfe82229c2921348e4f6a82f29b6"
      name: "Component / rd/slider/capsule/bar-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_slider_capsule_bar_width"
    semantic_name: "Component / rd/slider/capsule/bar-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderCapsuleBarWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "537d70a1c7e3aebc262551e20a6aadef27eeca17"
      name: "Component / rd/slider/capsule/bar-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_slider_capsule_line_height"
    semantic_name: "Component / rd/slider/capsule/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderCapsuleLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "469b9acf0db7f288f223fb9f136d88f68d847b65"
      name: "Component / rd/slider/capsule/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_slider_dot_size"
    semantic_name: "Component / rd/slider/dot/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSliderDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aad6660d1a232236ebf4fa92f10b2fe98bf1784c"
      name: "Component / rd/slider/dot/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_step_item_circle_size"
    semantic_name: "Component / rd/step-item/circle-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemCircleSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "34053e6106688ff65f7b0ec9ea54bb07dbd61695"
      name: "Component / rd/step-item/circle-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_step_item_dot_size"
    semantic_name: "Component / rd/step-item/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepItemDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "11408ba1cf4bcd53abf7f618d4662496b2a5fb82"
      name: "Component / rd/step-item/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_stepper_border_width"
    semantic_name: "Component / rd/stepper/border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5b0da8ab74843443aa311abf1cd6842e26566e2b"
      name: "Component / rd/stepper/border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 1
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 1
  - token_id: "number_component_rd_stepper_large_height"
    semantic_name: "Component / rd/stepper/large/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperLargeHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a535d158cfde97babd5a26b799c9b4d7b91668c2"
      name: "Component / rd/stepper/large/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 26
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 26
  - token_id: "number_component_rd_stepper_large_icon_size"
    semantic_name: "Component / rd/stepper/large/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperLargeIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1a43f1eaa5a3ce9e5cccaf98a14fc3e71b7a57a4"
      name: "Component / rd/stepper/large/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_stepper_large_input_width"
    semantic_name: "Component / rd/stepper/large/input-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperLargeInputWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a62d964b30e17c0450f4d7fdfb6e07771587ba61"
      name: "Component / rd/stepper/large/input-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 45
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 45
  - token_id: "number_component_rd_stepper_medium_height"
    semantic_name: "Component / rd/stepper/medium/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperMediumHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eb88348c80bd38669e07d290d2653edcc450076d"
      name: "Component / rd/stepper/medium/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_stepper_medium_icon_size"
    semantic_name: "Component / rd/stepper/medium/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperMediumIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4ee5d61c0840808285cfdbe63e814f23b945eb25"
      name: "Component / rd/stepper/medium/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_stepper_medium_input_width"
    semantic_name: "Component / rd/stepper/medium/input-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperMediumInputWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ac27eb51ac191e11742f00e2b7a7fecf9c3879ec"
      name: "Component / rd/stepper/medium/input-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 38
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 38
  - token_id: "number_component_rd_stepper_small_height"
    semantic_name: "Component / rd/stepper/small/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperSmallHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cde611f90c2907b4b23600e761b2dee4d1ee9465"
      name: "Component / rd/stepper/small/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_stepper_small_icon_size"
    semantic_name: "Component / rd/stepper/small/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperSmallIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4b7a3faa3a614d7dfd9c7b19a7d9901769f8dca0"
      name: "Component / rd/stepper/small/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "number_component_rd_stepper_small_input_width"
    semantic_name: "Component / rd/stepper/small/input-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperSmallInputWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9d2f52561d0ef968cffbaa8def3e0912f66d20b2"
      name: "Component / rd/stepper/small/input-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 34
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 34
  - token_id: "number_component_rd_swiper_item_left_padding"
    semantic_name: "Component / rd/swiper/item/left-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperItemLeftPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "724910b205307e1287aa9436bf6d8b16a05fed57"
      name: "Component / rd/swiper/item/left-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_swiper_item_right_padding"
    semantic_name: "Component / rd/swiper/item/right-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperItemRightPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "10a582d271b68a44f3962bac9f4102d6468e9a27"
      name: "Component / rd/swiper/item/right-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_swiper_nav_btn_size"
    semantic_name: "Component / rd/swiper/nav/btn/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavBtnSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3292c5efe02e6023031a6408d8e4b8d9c18d4d46"
      name: "Component / rd/swiper/nav/btn/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_swiper_nav_dot_size"
    semantic_name: "Component / rd/swiper/nav/dot/size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "22eb25a70ba9cd084261e4805838ed05e830d99e"
      name: "Component / rd/swiper/nav/dot/size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "number_component_rd_swiper_nav_dots_bar_active_width"
    semantic_name: "Component / rd/swiper/nav/dots-bar/active-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavDotsBarActiveWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "94af28aeab2327c8dea408beebaba9e311ec2e63"
      name: "Component / rd/swiper/nav/dots-bar/active-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_swiper_nav_fraction_height"
    semantic_name: "Component / rd/swiper/nav/fraction/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavFractionHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2a854500208664832f5bb2e2050094836d63290"
      name: "Component / rd/swiper/nav/fraction/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_switch_dot_horizontal_margin"
    semantic_name: "Component / rd/switch/dot-horizontal-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchDotHorizontalMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a53f785d6c9cd99e78735b5b266d01dc622d46d6"
      name: "Component / rd/switch/dot-horizontal-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_switch_dot_plain_horizontal_margin"
    semantic_name: "Component / rd/switch/dot-plain-horizontal-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchDotPlainHorizontalMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0592c9b3a615516c4d68c3f99884ca1b699ead1d"
      name: "Component / rd/switch/dot-plain-horizontal-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 5
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 5
  - token_id: "number_component_rd_switch_dot_plain_size"
    semantic_name: "Component / rd/switch/dot-plain-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchDotPlainSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c0f39a248c692e1b590e587b1cb6108eb4b75949"
      name: "Component / rd/switch/dot-plain-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_switch_dot_size"
    semantic_name: "Component / rd/switch/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "36d6649b67577c136813eb02f007bc4551fccbaf"
      name: "Component / rd/switch/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_switch_height"
    semantic_name: "Component / rd/switch/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dd1205572d353a4aca6310d143bf8e9c76585190"
      name: "Component / rd/switch/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "number_component_rd_switch_icon_size"
    semantic_name: "Component / rd/switch/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "69b8dbad4e49a808fd7e26f361bb48af4a472d84"
      name: "Component / rd/switch/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "number_component_rd_switch_large_dot_plain_size"
    semantic_name: "Component / rd/switch/large/dot-plain-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeDotPlainSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "754e2fefa9016d093346da255625006a6245732c"
      name: "Component / rd/switch/large/dot-plain-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_switch_large_dot_size"
    semantic_name: "Component / rd/switch/large/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "56bec0d697e55059caf297ccff470eec2910d8d1"
      name: "Component / rd/switch/large/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 26
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 26
  - token_id: "number_component_rd_switch_large_height"
    semantic_name: "Component / rd/switch/large/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "316e8634cc4b255dad90b3a1cab0207d291040a7"
      name: "Component / rd/switch/large/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_switch_large_icon_size"
    semantic_name: "Component / rd/switch/large/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "825e37e731f3b142eb19566b0a99c1482a3bae61"
      name: "Component / rd/switch/large/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_switch_large_width"
    semantic_name: "Component / rd/switch/large/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ee363a7992f8230a3bb95ce12f896fef4756bc2a"
      name: "Component / rd/switch/large/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 52
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 52
  - token_id: "number_component_rd_switch_small_dot_plain_size"
    semantic_name: "Component / rd/switch/small/dot-plain-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallDotPlainSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8f51f9933d77f69659f512cb9fb53117f94fd0e9"
      name: "Component / rd/switch/small/dot-plain-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "number_component_rd_switch_small_dot_size"
    semantic_name: "Component / rd/switch/small/dot-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "233956722275353ab254d462e424974d5beec7d3"
      name: "Component / rd/switch/small/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_switch_small_height"
    semantic_name: "Component / rd/switch/small/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d42b764576e909b5d570f2befdba0cbd03c16bab"
      name: "Component / rd/switch/small/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_switch_small_icon_size"
    semantic_name: "Component / rd/switch/small/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c1e1f97a4d013af07672f0aa9d79fa8f7887a4a6"
      name: "Component / rd/switch/small/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_switch_small_width"
    semantic_name: "Component / rd/switch/small/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6cf304d31ff196388080d60f7478e56074633ce"
      name: "Component / rd/switch/small/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 39
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 39
  - token_id: "number_component_rd_switch_width"
    semantic_name: "Component / rd/switch/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "edb367d4bddc7f90c0bba64410f8d015fc669a00"
      name: "Component / rd/switch/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 45
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 45
  - token_id: "number_component_rd_table_filter_icon_margin_left"
    semantic_name: "Component / rd/table/filter-icon-margin-left"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableFilterIconMarginLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4389c34d1552390fd153e54564906f60fb291724"
      name: "Component / rd/table/filter-icon-margin-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_table_fixed_cell_border_width"
    semantic_name: "Component / rd/table/fixed-cell-border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableFixedCellBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "57f598a15b0450b3beb30ba3b4c24f60db4e80c6"
      name: "Component / rd/table/fixed-cell-border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "number_component_rd_table_fixed_cell_border_width_light"
    semantic_name: "Component / rd/table/fixed-cell-border-width-light"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableFixedCellBorderWidthLight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3fd1137649bd040253c337ad043c5c005ad2adc3"
      name: "Component / rd/table/fixed-cell-border-width-light"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "number_component_rd_table_icon_size"
    semantic_name: "Component / rd/table/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "853d491e3c3f768ded6244cdf610ffc46fa9e795"
      name: "Component / rd/table/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_table_line_height"
    semantic_name: "Component / rd/table/line-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "239b2b52f1b9ce91604cf6af67ff55f535c05755"
      name: "Component / rd/table/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "number_component_rd_table_loading_size"
    semantic_name: "Component / rd/table/loading-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableLoadingSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a3e6a74dc6fae819b2ab2133610eb4c023ba01d"
      name: "Component / rd/table/loading-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "rd/font-size/l -> rd/font-size/title-large"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_table_padding_horizontal"
    semantic_name: "Component / rd/table/padding-horizontal"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTablePaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1425ffcf631f0fa98e8a2e1538a06c5edf42b688"
      name: "Component / rd/table/padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_table_td_editable_icon_margin"
    semantic_name: "Component / rd/table/td-editable-icon-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdEditableIconMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "700b56f195307765086ddc6a2af8c46dc6abb815"
      name: "Component / rd/table/td-editable-icon-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_table_td_editalbe_icon_margin"
    semantic_name: "Component / rd/table/td-editalbe-icon-margin"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdEditalbeIconMargin"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "49847021c2996018ba3049ed4d42664022ed6e81"
      name: "Component / rd/table/td-editalbe-icon-margin"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_table_td_padding_horizontal"
    semantic_name: "Component / rd/table/td-padding-horizontal"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdPaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cd0ece3ca15b25dccce5631159f73dfc5933a15c"
      name: "Component / rd/table/td-padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_table_td_padding_vertical"
    semantic_name: "Component / rd/table/td-padding-vertical"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdPaddingVertical"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0af43a0474e01af7ce4fbe40566559f63d62a655"
      name: "Component / rd/table/td-padding-vertical"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_table_td_padding_vertical_bottom"
    semantic_name: "Component / rd/table/td-padding-vertical-bottom"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdPaddingVerticalBottom"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "500326485d253e452d5a19b42edfd1290be161a5"
      name: "Component / rd/table/td-padding-vertical-bottom"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 11
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 11
  - token_id: "number_component_rd_table_td_padding_vertical_top"
    semantic_name: "Component / rd/table/td-padding-vertical-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableTdPaddingVerticalTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a8d5c035824a0d5da00ea67032963f303362bbf3"
      name: "Component / rd/table/td-padding-vertical-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 13
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 13
  - token_id: "number_component_rd_tabs_icon_size"
    semantic_name: "Component / rd/tabs/icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e7ebcefae00fff8816c4dfa6b47e336d2dd4ec2d"
      name: "Component / rd/tabs/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "number_component_rd_tabs_item_height"
    semantic_name: "Component / rd/tabs/item/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "adcb080bb7de9f5087b3c9ce7cf5d1e4fc2550f7"
      name: "Component / rd/tabs/item/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "number_component_rd_tabs_item_tag_height"
    semantic_name: "Component / rd/tabs/item/tag/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemTagHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2267c7cf6bc0a941e59505fc1ed7940c55ea6be3"
      name: "Component / rd/tabs/item/tag/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_tabs_item_vertical_height"
    semantic_name: "Component / rd/tabs/item/vertical-height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemVerticalHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0830ce11f5a0c573a278f20dc62609ffd9c13e47"
      name: "Component / rd/tabs/item/vertical-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 54
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 54
  - token_id: "number_component_rd_tabs_item_vertical_width"
    semantic_name: "Component / rd/tabs/item/vertical-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsItemVerticalWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "88afccc625a07c6fc776fce63d7977853b88538d"
      name: "Component / rd/tabs/item/vertical-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 104
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 104
  - token_id: "number_component_rd_tabs_track_thickness"
    semantic_name: "Component / rd/tabs/track/thickness"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsTrackThickness"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ccd84d9c9af68fcc7518c713a22f78187e233eef"
      name: "Component / rd/tabs/track/thickness"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "number_component_rd_tabs_track_width"
    semantic_name: "Component / rd/tabs/track/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsTrackWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dce63156a7409c931ca7b095f0b7c8b63fa625ae"
      name: "Component / rd/tabs/track/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_textarea_border_width"
    semantic_name: "Component / rd/textarea/border-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaBorderWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c5a39fe6f6602e2642e2d403c93e40b59766c813"
      name: "Component / rd/textarea/border-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 1
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 1
  - token_id: "number_component_rd_textarea_horizontal_padding"
    semantic_name: "Component / rd/textarea/horizontal-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b97f3a1cc29f3ee97cda919cd1671d7d2f6df2c8"
      name: "Component / rd/textarea/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_textarea_indicator_text_padding_top"
    semantic_name: "Component / rd/textarea/indicator-text-padding-top"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaIndicatorTextPaddingTop"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "479a1e7da9b2ca1330aaa3bf5cdc26060c3e437e"
      name: "Component / rd/textarea/indicator-text-padding-top"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "number_component_rd_textarea_label_width"
    semantic_name: "Component / rd/textarea/label-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaLabelWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "117397060d33b79fb1d38c29f2c7c9dee787ef57"
      name: "Component / rd/textarea/label-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 64
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 64
  - token_id: "number_component_rd_textarea_vertical_padding"
    semantic_name: "Component / rd/textarea/vertical-padding"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9cc9aed7fc2139e2a1825639ad89b00d323ccfd0"
      name: "Component / rd/textarea/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "number_component_rd_toast_column_icon_size"
    semantic_name: "Component / rd/toast/column-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastColumnIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "74f6e3987b5dec916b4f88e81114a57ee23eb4bf"
      name: "Component / rd/toast/column-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "number_component_rd_toast_max_width"
    semantic_name: "Component / rd/toast/max-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastMaxWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9e01760bcfa9b79f2a9abf650c91a27345814868"
      name: "Component / rd/toast/max-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 185
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 185
  - token_id: "number_component_rd_toast_row_icon_size"
    semantic_name: "Component / rd/toast/row-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastRowIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b3d6f1b8b8b69ce2942b60ffd933a743426f8d75"
      name: "Component / rd/toast/row-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "number_component_rd_tree_colum_width"
    semantic_name: "Component / rd/tree/colum-width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeColumWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b7f3fc0cea96293f69c118ecd6b757a9d7ba3566"
      name: "Component / rd/tree/colum-width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 103
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 103
  - token_id: "number_component_rd_tree_item_height"
    semantic_name: "Component / rd/tree/item/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeItemHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9fa9c336d43b823e2ba9553372995b89b5e8c95d"
      name: "Component / rd/tree/item/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 56
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 56
  - token_id: "number_component_rd_upload_add_icon_size"
    semantic_name: "Component / rd/upload/add-icon-size"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadAddIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e5467955578ab8834aba145f17d6d7202661832e"
      name: "Component / rd/upload/add-icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "number_component_rd_upload_height"
    semantic_name: "Component / rd/upload/height"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "11be2f1d890c345330243567b2aaf4e938b83459"
      name: "Component / rd/upload/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 80
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 80
  - token_id: "number_component_rd_upload_width"
    semantic_name: "Component / rd/upload/width"
    category: "number"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2226a85624de12c7793e6fc8a161b0458d4da6b7"
      name: "Component / rd/upload/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 80
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 80
  - token_id: "radius_component_rd_action_sheet_border_radius"
    semantic_name: "Component / rd/action-sheet/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8b309e18b2660a8e587aea51c4af751cf9935422"
      name: "Component / rd/action-sheet/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/radius/extraLarge"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_avatar_circle_border_radius"
    semantic_name: "Component / rd/avatar/circle-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarCircleBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ab238db8ebae5a852b650ca7c3fa24297d6e2eda"
      name: "Component / rd/avatar/circle-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "rd/radius/round"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_avatar_round_border_radius"
    semantic_name: "Component / rd/avatar/round-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarRoundBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "218897f1885175b20a83aa9a56ddc134abc23240"
      name: "Component / rd/avatar/round-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_back_top_half_round_border_radius"
    semantic_name: "Component / rd/back-top/half-round/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopHalfRoundBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "371f4094a558684e22b9afd13f4ae3b772c56528"
      name: "Component / rd/back-top/half-round/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "rd/radius/round"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_back_top_round_border_radius"
    semantic_name: "Component / rd/back-top/round/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9646669ad6edba61840215c35c109c6a4cb00617"
      name: "Component / rd/back-top/round/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "rd/radius/round"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_badge_border_radius"
    semantic_name: "Component / rd/badge/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f63f01f454169730df035d2993c995b73d1aa12c"
      name: "Component / rd/badge/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "radius_component_rd_badge_bubble_border_radius"
    semantic_name: "Component / rd/badge/bubble-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeBubbleBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1efbb94975a8003156cd233896e8ef327c71f2bb"
      name: "Component / rd/badge/bubble-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "radius_component_rd_button_border_radius"
    semantic_name: "Component / rd/button/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "50074dc5bda50f710925c6407ef5d2c2fea6e666"
      name: "Component / rd/button/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_button_icon_border_radius"
    semantic_name: "Component / rd/button/icon-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonIconBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b5d1d078a824590368332e11ecb8c6c6d6a00723"
      name: "Component / rd/button/icon-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_calendar_radius"
    semantic_name: "Component / rd/calendar/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a204bce6f2bdc067772c160edde2936f08e17f68"
      name: "Component / rd/calendar/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_color_picker_gradient_preview_radius"
    semantic_name: "Component / rd/color-picker/gradient-preview/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerGradientPreviewRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "acc9a933de8defa3043eac06f15d47d09e3b13b3"
      name: "Component / rd/color-picker/gradient-preview/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 3
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 3
  - token_id: "radius_component_rd_color_picker_panel_radius"
    semantic_name: "Component / rd/color-picker/panel/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerPanelRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a879df72f9f9a7a2bb0501dc40cce9e516ad1fb"
      name: "Component / rd/color-picker/panel/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_color_picker_saturation_radius"
    semantic_name: "Component / rd/color-picker/saturation/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSaturationRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "871d02c89b8dc2b521cbf93a398ec7e52553e7d4"
      name: "Component / rd/color-picker/saturation/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_color_picker_swatch_border_radius"
    semantic_name: "Component / rd/color-picker/swatch/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdColorPickerSwatchBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c670af10c99ff5084e001d4b82055f5f7ff0ba76"
      name: "Component / rd/color-picker/swatch/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "rd/radius/small"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_countdown_round_border_radius"
    semantic_name: "Component / rd/countdown/round-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownRoundBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9566369c180d80b8510dc28651080c936464e1d0"
      name: "Component / rd/countdown/round-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "rd/radius/round"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_countdown_square_border_radius"
    semantic_name: "Component / rd/countdown/square-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSquareBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a680bd66da318f2ecafb6456ee4edaaa5a6377b3"
      name: "Component / rd/countdown/square-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "rd/radius/small"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_dialog_border_radius"
    semantic_name: "Component / rd/dialog/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "19748cf0348e08618ba46d21b069707ed8ebbfb1"
      name: "Component / rd/dialog/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/radius/extraLarge"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_grid_card_radius"
    semantic_name: "Component / rd/grid/card-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridCardRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ec1453ad4f215736941b7adca3219dd453a3ef6c"
      name: "Component / rd/grid/card-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/radius/large"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "radius_component_rd_grid_item_image_border_radius"
    semantic_name: "Component / rd/grid/item/image/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGridItemImageBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "25e9d0708449a2672660fdd152e58387c577e678"
      name: "Component / rd/grid/item/image/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_guide_dialog_border_radius"
    semantic_name: "Component / rd/guide/dialog/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideDialogBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f69e5dee55c272477a346ce62743a6592f7a3890"
      name: "Component / rd/guide/dialog/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_guide_highlight_border_radius"
    semantic_name: "Component / rd/guide/highlight-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuideHighlightBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d34519d90eccb3b0d9481c853ce7b661fd693f13"
      name: "Component / rd/guide/highlight-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_guide_popover_border_radius"
    semantic_name: "Component / rd/guide/popover/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdGuidePopoverBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "327f2530746a708eda1666f82fb831cff2838290"
      name: "Component / rd/guide/popover/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 9
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 9
  - token_id: "radius_component_rd_image_round_radius"
    semantic_name: "Component / rd/image/round-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageRoundRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1ba839277f00a00e973b49783ba29ce2ed05f211"
      name: "Component / rd/image/round-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_input_border_radius"
    semantic_name: "Component / rd/input/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0a1748f3adbea2b1d97f23b3df2dade266fb6115"
      name: "Component / rd/input/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_message_border_radius"
    semantic_name: "Component / rd/message/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdMessageBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e2efe9e3ed176db381eeb32972b4f4a7c8092140"
      name: "Component / rd/message/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_navbar_capsule_border_radius"
    semantic_name: "Component / rd/navbar/capsule/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdNavbarCapsuleBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f8d678c3653c9469a76037549fcf6315e8762914"
      name: "Component / rd/navbar/capsule/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "radius_component_rd_picker_border_radius"
    semantic_name: "Component / rd/picker/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d0d5e2467ac39c13238b4bfac34d8cfe53947c66"
      name: "Component / rd/picker/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_picker_indicator_border_radius"
    semantic_name: "Component / rd/picker/indicator/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerIndicatorBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "619c200fa6f63abc1b42c1ead56c47bf3bd7e50d"
      name: "Component / rd/picker/indicator/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_popup_border_radius"
    semantic_name: "Component / rd/popup/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopupBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f0f55ca30421896d298a30c294e651da94ce7885"
      name: "Component / rd/popup/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/radius/extraLarge"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_component_rd_qrcode_border_radius"
    semantic_name: "Component / rd/qrcode/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdQrcodeBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e7fd774f4d5ad2f3d718d38f3ebc596c8323745e"
      name: "Component / rd/qrcode/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_search_square_radius"
    semantic_name: "Component / rd/search/square-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSearchSquareRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0da67e9147ab5a3ec7dd0117a7e79b0d6a771480"
      name: "Component / rd/search/square-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_side_bar_border_radius"
    semantic_name: "Component / rd/side-bar/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSideBarBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d15782c82fcd4791a495f6df4f248bc66a1ca557"
      name: "Component / rd/side-bar/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 9
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 9
  - token_id: "radius_component_rd_skeleton_circle_border_radius"
    semantic_name: "Component / rd/skeleton/circle/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonCircleBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2302e3e7dfcc0c87365b91fe15392a56848720f"
      name: "Component / rd/skeleton/circle/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "rd/radius/round"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_skeleton_rect_border_radius"
    semantic_name: "Component / rd/skeleton/rect/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonRectBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "99f39e0413da29f8259276bf546dba372de3c642"
      name: "Component / rd/skeleton/rect/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_skeleton_text_border_radius"
    semantic_name: "Component / rd/skeleton/text/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonTextBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e5e55eba8b6e148b7882353cc74c1ba9061b21b"
      name: "Component / rd/skeleton/text/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "rd/radius/small"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_stepper_border_radius"
    semantic_name: "Component / rd/stepper/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6edf7009d49c67e959b970a9d2f9a265dfbd1eca"
      name: "Component / rd/stepper/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "rd/radius/small"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_swiper_border_radius"
    semantic_name: "Component / rd/swiper/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ef2bc61f2b0f72ed04765c8bc718d0c89e6a2ea7"
      name: "Component / rd/swiper/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "radius_component_rd_switch_large_radius"
    semantic_name: "Component / rd/switch/large/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "451a940503c589c348c0e49b3f4dc09f15bf4475"
      name: "Component / rd/switch/large/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_switch_radius"
    semantic_name: "Component / rd/switch/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "73ae0d4b465d109f9f9dc48ce47dec51b7fc7943"
      name: "Component / rd/switch/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 9999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 9999
  - token_id: "radius_component_rd_switch_small_radius"
    semantic_name: "Component / rd/switch/small/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d8dd480adf3a04f85072f71059facbbd54e95db4"
      name: "Component / rd/switch/small/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_tabs_track_radius"
    semantic_name: "Component / rd/tabs/track/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabsTrackRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e770cfb69e0725010dcd7e77b021df613ca0684"
      name: "Component / rd/tabs/track/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_tag_mark_border_radius"
    semantic_name: "Component / rd/tag/mark-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagMarkBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4c04865f3e33428cbcfb7eeba043fe45ea7f708b"
      name: "Component / rd/tag/mark-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_tag_round_border_radius"
    semantic_name: "Component / rd/tag/round-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagRoundBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3b7679b3fc60f3934fb09393d60ef434ed116d64"
      name: "Component / rd/tag/round-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_component_rd_tag_square_border_radius"
    semantic_name: "Component / rd/tag/square-border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSquareBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a28d4fd7b166b9a68348a791559173e77b4afa6b"
      name: "Component / rd/tag/square-border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "radius_component_rd_textarea_border_radius"
    semantic_name: "Component / rd/textarea/border-radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTextareaBorderRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "27742e040f4c2d2bc10f60979a6e81d26c8e783a"
      name: "Component / rd/textarea/border-radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_toast_radius"
    semantic_name: "Component / rd/toast/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdToastRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d5b1a2d91c31b97c329cb9c214eb8036e3dec7ff"
      name: "Component / rd/toast/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_component_rd_upload_radius"
    semantic_name: "Component / rd/upload/radius"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdUploadRadius"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1e34c976efbd5c23a1e3c82ed3b377d7afd1d513"
      name: "Component / rd/upload/radius"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "rd/radius/default"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_radius_rd_radius_default"
    semantic_name: "radius / rd/radius/default"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdRadiusRdRadiusDefault"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a41dc573040f0ee079055e8e79142cdf3feef841"
      name: "radius / rd/radius/default"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      radius:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "radius_radius_rd_radius_extralarge"
    semantic_name: "radius / rd/radius/extraLarge"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdRadiusRdRadiusExtralarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e58b275f7a3614d55387dcc5ff159494db0a0f07"
      name: "radius / rd/radius/extraLarge"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      radius:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "radius_radius_rd_radius_large"
    semantic_name: "radius / rd/radius/large"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdRadiusRdRadiusLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3edf778bf3d820c179933cce3e314f998c78940d"
      name: "radius / rd/radius/large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      radius:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "radius_radius_rd_radius_round"
    semantic_name: "radius / rd/radius/round"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdRadiusRdRadiusRound"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c1efd2a14eff75db096ee97e329a31a819f42509"
      name: "radius / rd/radius/round"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      radius:
        value: 999
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 999
  - token_id: "radius_radius_rd_radius_small"
    semantic_name: "radius / rd/radius/small"
    category: "radius"
    runtime_source:
      kind: generated_design_token
      name: "rdRadiusRdRadiusSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "34418ec75b5bb52558358415f02fba24ebf858b3"
      name: "radius / rd/radius/small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      radius:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "spacing_component_rd_action_sheet_dot_size"
    semantic_name: "Component / rd/action-sheet/dot-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDotSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4561286412a01d21780229077c39308a411d671a"
      name: "Component / rd/action-sheet/dot-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_component_rd_avatar_group_init_zindex"
    semantic_name: "Component / rd/avatar-group/init-zIndex"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarGroupInitZindex"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "70691834466c2534c2f709f08b660186b74e7f9a"
      name: "Component / rd/avatar-group/init-zIndex"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 50
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 50
  - token_id: "spacing_component_rd_avatar_group_line_spacing"
    semantic_name: "Component / rd/avatar-group/line-spacing"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarGroupLineSpacing"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "397eeed3883ee6b427750c031f2df3e4416fa315"
      name: "Component / rd/avatar-group/line-spacing"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "spacing_component_rd_avatar_group_offset_large"
    semantic_name: "Component / rd/avatar-group/offset-large"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarGroupOffsetLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d58795f57c0f695d8a72ebe6dc64600dd0481a20"
      name: "Component / rd/avatar-group/offset-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: -8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: -8
  - token_id: "spacing_component_rd_avatar_group_offset_medium"
    semantic_name: "Component / rd/avatar-group/offset-medium"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarGroupOffsetMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6720d9464efa88d482cd10662ad65bcfcbe7bd85"
      name: "Component / rd/avatar-group/offset-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: -8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: -8
  - token_id: "spacing_component_rd_avatar_group_offset_small"
    semantic_name: "Component / rd/avatar-group/offset-small"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarGroupOffsetSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aaaed41102ddb45443f3a20d62289d8209a4f09c"
      name: "Component / rd/avatar-group/offset-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: -8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: -8
  - token_id: "spacing_component_rd_avatar_large_icon_font_size"
    semantic_name: "Component / rd/avatar/large/icon-font-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarLargeIconFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "acb1890b07a1a99d960a49b436253957b7183e69"
      name: "Component / rd/avatar/large/icon-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "spacing_component_rd_avatar_large_width"
    semantic_name: "Component / rd/avatar/large/width"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarLargeWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f6ff2c9c61b9babe7bf25f1f60d0ea240f3cce4b"
      name: "Component / rd/avatar/large/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 64
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 64
  - token_id: "spacing_component_rd_avatar_margin_left"
    semantic_name: "Component / rd/avatar/margin-left"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarMarginLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0c6352965566844a7ba374a9a4d787f16d984d03"
      name: "Component / rd/avatar/margin-left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "spacing_component_rd_avatar_margin_left"
    semantic_name: "Component / rd/avatar/margin/left"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarMarginLeft"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dabf3e02e76de2f83a5c40cf6c5fe3e7a4d77c2f"
      name: "Component / rd/avatar/margin/left"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "spacing_component_rd_avatar_medium_icon_font_size"
    semantic_name: "Component / rd/avatar/medium/icon-font-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarMediumIconFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e6db5a7c3f1e35d9d83dea9b6b7c31377a2b254c"
      name: "Component / rd/avatar/medium/icon-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "spacing_component_rd_avatar_medium_width"
    semantic_name: "Component / rd/avatar/medium/width"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarMediumWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "55e5c0caff31157322ee6f84b306d5be2ccf5ca2"
      name: "Component / rd/avatar/medium/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "spacing_component_rd_avatar_small_icon_font_size"
    semantic_name: "Component / rd/avatar/small/icon-font-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarSmallIconFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "965c7f3ac9c28b5bfcd1fb6bdfb90101a831ab4a"
      name: "Component / rd/avatar/small/icon-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "spacing_component_rd_avatar_small_width"
    semantic_name: "Component / rd/avatar/small/width"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarSmallWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "af6179a9715db2556d4aeac1cba5575b7061f47c"
      name: "Component / rd/avatar/small/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "spacing_component_rd_back_top_half_round_height"
    semantic_name: "Component / rd/back-top/half-round/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopHalfRoundHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b6a44648f23ac5f62fbc67f7ce823644d5c0d2d1"
      name: "Component / rd/back-top/half-round/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "spacing_component_rd_back_top_half_round_width"
    semantic_name: "Component / rd/back-top/half-round/width"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopHalfRoundWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4bf44acf5df589fc631496de75bce20ba0243349"
      name: "Component / rd/back-top/half-round/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 60
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 60
  - token_id: "spacing_component_rd_back_top_icon_size"
    semantic_name: "Component / rd/back-top/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "171e48e435a8501b975aa27d96960b5dcecea4fe"
      name: "Component / rd/back-top/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "spacing_component_rd_back_top_round_width"
    semantic_name: "Component / rd/back-top/round/width"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopRoundWidth"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "081b20de9d3477ebc2fe290ad92b4f683648d795"
      name: "Component / rd/back-top/round/width"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "spacing_component_rd_back_top_text_line_height"
    semantic_name: "Component / rd/back-top/text/line-height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopTextLineHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "71b137d3a67d34fcc5a006e27078ffd99c73cde6"
      name: "Component / rd/back-top/text/line-height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "spacing_component_rd_button_extra_small_height"
    semantic_name: "Component / rd/button/extra-small/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonExtraSmallHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2761450d09574383f1a821d93deaa6d9ed22831c"
      name: "Component / rd/button/extra-small/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "spacing_component_rd_button_extra_small_icon_size"
    semantic_name: "Component / rd/button/extra-small/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonExtraSmallIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3f48028c95378f4ad34dcf2d9cc199dd150dc771"
      name: "Component / rd/button/extra-small/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "spacing_component_rd_button_extra_small_padding_horizontal"
    semantic_name: "Component / rd/button/extra-small/padding-horizontal"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonExtraSmallPaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ae955a42af513521a82fb300ebe4b8768f571cad"
      name: "Component / rd/button/extra-small/padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_component_rd_button_icon_spacer"
    semantic_name: "Component / rd/button/icon-spacer"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonIconSpacer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0d926bb40d1fc00cf7e28b080b1cd762c81acc7d"
      name: "Component / rd/button/icon-spacer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_component_rd_button_large_height"
    semantic_name: "Component / rd/button/large/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLargeHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "526922b69e76abf779e0ce6d871c613a0c08f46e"
      name: "Component / rd/button/large/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "spacing_component_rd_button_large_icon_size"
    semantic_name: "Component / rd/button/large/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLargeIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8337637a55a2d67f913093640b3656cd80fe815d"
      name: "Component / rd/button/large/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "spacing_component_rd_button_large_padding_horizontal"
    semantic_name: "Component / rd/button/large/padding-horizontal"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLargePaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5ab5c65d702122a60e6c98de4d24780c973377b9"
      name: "Component / rd/button/large/padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "spacing_component_rd_button_medium_height"
    semantic_name: "Component / rd/button/medium/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonMediumHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f4d3a5a8b1ecbbf5749484eda70cbab8ba9f7b3f"
      name: "Component / rd/button/medium/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "spacing_component_rd_button_medium_icon_size"
    semantic_name: "Component / rd/button/medium/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonMediumIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "86c51cf0e13988c9043f953bec3c687dafe55948"
      name: "Component / rd/button/medium/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "spacing_component_rd_button_medium_padding_horizontal"
    semantic_name: "Component / rd/button/medium/padding-horizontal"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonMediumPaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "dad741930744f6473748fff2c5096b5994c219f5"
      name: "Component / rd/button/medium/padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_button_small_height"
    semantic_name: "Component / rd/button/small/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonSmallHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e041cf25e9997abc2665c1e806320118d268c02b"
      name: "Component / rd/button/small/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "spacing_component_rd_button_small_icon_size"
    semantic_name: "Component / rd/button/small/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonSmallIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "39ff9725f4bfb521f1215f7dc3993af9ff48ccf7"
      name: "Component / rd/button/small/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "spacing_component_rd_button_small_padding_horizontal"
    semantic_name: "Component / rd/button/small/padding-horizontal"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonSmallPaddingHorizontal"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c951e261f047223c7354bd6ae4e057e17d96486a"
      name: "Component / rd/button/small/padding-horizontal"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "spacing_component_rd_cell_border_left_space"
    semantic_name: "Component / rd/cell/border-left-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellBorderLeftSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "13cecdfc9b4f5e2e1e7e0c146dd48e819fe690a7"
      name: "Component / rd/cell/border-left-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/cell/horizontal-padding"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_cell_border_right_space"
    semantic_name: "Component / rd/cell/border-right-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellBorderRightSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fffca74744cdfd3deb5f64ae7ab8e8b670848271"
      name: "Component / rd/cell/border-right-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "spacing_component_rd_form_item_border_left_space"
    semantic_name: "Component / rd/form/item/border-left-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFormItemBorderLeftSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c93db337527ea242fdfcff21cd9f682bf97f3cb4"
      name: "Component / rd/form/item/border-left-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/form/item/horizontal-padding"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_form_item_border_right_space"
    semantic_name: "Component / rd/form/item/border-right-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdFormItemBorderRightSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f1b6cfa35063ace49c25e55382118037330bfc22"
      name: "Component / rd/form/item/border-right-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "spacing_component_rd_input_border_left_space"
    semantic_name: "Component / rd/input/border-left-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputBorderLeftSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "093fe58b4d104a6b01be99e6b1335f643b652c89"
      name: "Component / rd/input/border-left-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_input_border_right_space"
    semantic_name: "Component / rd/input/border-right-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputBorderRightSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a642bba1bfa225eb4c0a42968ab4d0e11e7b7b7c"
      name: "Component / rd/input/border-right-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "spacing_component_rd_popover_content_arrow_spacer"
    semantic_name: "Component / rd/popover/content-arrow-spacer"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverContentArrowSpacer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "244532a608acf89e842d1ae3082180128a1346bf"
      name: "Component / rd/popover/content-arrow-spacer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_progress_info_spacer"
    semantic_name: "Component / rd/progress/info-spacer"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdProgressInfoSpacer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c9199a49dcb223d1cd3bb522965d8e57bdc82f7d"
      name: "Component / rd/progress/info-spacer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "rd/spacer-3"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_component_rd_skeleton_row_spacing"
    semantic_name: "Component / rd/skeleton/row-spacing"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSkeletonRowSpacing"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "014a5377a9d082d0caf0a1eb7dfa0f3ce6e2b419"
      name: "Component / rd/skeleton/row-spacing"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/spacer-5"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_swiper_nav_spacer"
    semantic_name: "Component / rd/swiper/nav/spacer"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwiperNavSpacer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7e45e9993a1e2bbda77ecab54ccc7c155dd836b5"
      name: "Component / rd/swiper/nav/spacer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "spacing_component_rd_tab_bar_height"
    semantic_name: "Component / rd/tab-bar/height"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTabBarHeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a2e1081cf1e13859297a05072d720a2b492773fa"
      name: "Component / rd/tab-bar/height"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 40
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 40
  - token_id: "spacing_component_rd_table_double_sort_icon_space"
    semantic_name: "Component / rd/table/double-sort-icon-space"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTableDoubleSortIconSpace"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b95330ee2d74390919a0917364b164a91f96efa4"
      name: "Component / rd/table/double-sort-icon-space"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "spacing_component_rd_tag_extra_large_horizontal_padding"
    semantic_name: "Component / rd/tag/extra-large/horizontal-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagExtraLargeHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ea7e6a2189493adf004a0b4081a1a25e50f62d85"
      name: "Component / rd/tag/extra-large/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_tag_extra_large_icon_size"
    semantic_name: "Component / rd/tag/extra-large/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagExtraLargeIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9dbf4d7194998efd5d3cd3fea9122183235bea6d"
      name: "Component / rd/tag/extra-large/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_tag_extra_large_vertical_padding"
    semantic_name: "Component / rd/tag/extra-large/vertical-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagExtraLargeVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "69d63e68a9bd2f7eb862dcb8fc304cd402d9f535"
      name: "Component / rd/tag/extra-large/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 9
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 9
  - token_id: "spacing_component_rd_tag_large_horizontal_padding"
    semantic_name: "Component / rd/tag/large/horizontal-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagLargeHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a382e12603370a28f7615272a8b22082554797d9"
      name: "Component / rd/tag/large/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "spacing_component_rd_tag_large_icon_size"
    semantic_name: "Component / rd/tag/large/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagLargeIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5d1e952964d7006b63564c245b0d592668f2d2d1"
      name: "Component / rd/tag/large/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_component_rd_tag_large_vertical_padding"
    semantic_name: "Component / rd/tag/large/vertical-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagLargeVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b19b3783748e64ed0cf5847ea70d344376974292"
      name: "Component / rd/tag/large/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 5
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 5
  - token_id: "spacing_component_rd_tag_medium_horizontal_padding"
    semantic_name: "Component / rd/tag/medium/horizontal-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagMediumHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "35b69141bfc8950c7ec32ccb23b4232701adeb95"
      name: "Component / rd/tag/medium/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_component_rd_tag_medium_icon_size"
    semantic_name: "Component / rd/tag/medium/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagMediumIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0b7bc33b779f33af3250d628e8022739ce4928cf"
      name: "Component / rd/tag/medium/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "spacing_component_rd_tag_medium_vertical_padding"
    semantic_name: "Component / rd/tag/medium/vertical-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagMediumVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "267ba139dbfcc5e874a38d155c7d13ce94a81553"
      name: "Component / rd/tag/medium/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "spacing_component_rd_tag_small_horizontal_padding"
    semantic_name: "Component / rd/tag/small/horizontal-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSmallHorizontalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b9bbf8ed9c8844906ec1f1dd98de7685c574f611"
      name: "Component / rd/tag/small/horizontal-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "spacing_component_rd_tag_small_icon_size"
    semantic_name: "Component / rd/tag/small/icon-size"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSmallIconSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8625e6746d4ee1d6c5cb0b098fda4c665fee6bd9"
      name: "Component / rd/tag/small/icon-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "spacing_component_rd_tag_small_vertical_padding"
    semantic_name: "Component / rd/tag/small/vertical-padding"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSmallVerticalPadding"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c5f768556a271e0cfee774ae85d966c03d4c901e"
      name: "Component / rd/tag/small/vertical-padding"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "spacing_spacer_rd_spacer"
    semantic_name: "spacer / rd/spacer"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "693f21029dfadb303fe3ab5b25c4fb79c84098a6"
      name: "spacer / rd/spacer"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 2
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 2
  - token_id: "spacing_spacer_rd_spacer_1"
    semantic_name: "spacer / rd/spacer-1"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer1"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "577100e73ac34730590f1d666dd103d7d75e5fbf"
      name: "spacer / rd/spacer-1"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 4
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 4
  - token_id: "spacing_spacer_rd_spacer_2"
    semantic_name: "spacer / rd/spacer-2"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "22d0dc1c8983333acd8894b33d42d4d6a7251b29"
      name: "spacer / rd/spacer-2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 6
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 6
  - token_id: "spacing_spacer_rd_spacer_3"
    semantic_name: "spacer / rd/spacer-3"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer3"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1856577adb63171a4361d47c619723ccb3817546"
      name: "spacer / rd/spacer-3"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 8
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 8
  - token_id: "spacing_spacer_rd_spacer_4"
    semantic_name: "spacer / rd/spacer-4"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer4"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "357fe10d24c04913400757f79cbe944dfa162246"
      name: "spacer / rd/spacer-4"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 12
        source: "direct"
    notes:
      - "间距-小-x"
    fallback:
      allowed: false
      value: 12
  - token_id: "spacing_spacer_rd_spacer_5"
    semantic_name: "spacer / rd/spacer-5"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer5"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0f038e906b689e61ea547ea7cff2d55788286fb5"
      name: "spacer / rd/spacer-5"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 16
        source: "direct"
    notes:
      - "间距-小"
    fallback:
      allowed: false
      value: 16
  - token_id: "spacing_spacer_rd_spacer_6"
    semantic_name: "spacer / rd/spacer-6"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer6"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cc482d8ea12e6bac38a0038612184a31147d5f0b"
      name: "spacer / rd/spacer-6"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 24
        source: "direct"
    notes:
      - "间距-中"
    fallback:
      allowed: false
      value: 24
  - token_id: "spacing_spacer_rd_spacer_7"
    semantic_name: "spacer / rd/spacer-7"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer7"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f76599a738e90a3f217fd9552c01e1c8950b2396"
      name: "spacer / rd/spacer-7"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 32
        source: "direct"
    notes:
      - "间距-大"
    fallback:
      allowed: false
      value: 32
  - token_id: "spacing_spacer_rd_spacer_8"
    semantic_name: "spacer / rd/spacer-8"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer8"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "040ad3a6ba901713588701dd35f26f90e2465e2e"
      name: "spacer / rd/spacer-8"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 48
        source: "direct"
    notes:
      - "间距-大-x"
    fallback:
      allowed: false
      value: 48
  - token_id: "spacing_spacer_rd_spacer_9"
    semantic_name: "spacer / rd/spacer-9"
    category: "spacing"
    runtime_source:
      kind: generated_design_token
      name: "rdSpacerRdSpacer9"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cfe78516b00a4f5e52530367181e368c6f9145c6"
      name: "spacer / rd/spacer-9"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      spacer:
        value: 80
        source: "direct"
    notes:
      - "间距-大-xx"
    fallback:
      allowed: false
      value: 80
  - token_id: "typography_component_rd_action_sheet_description_font"
    semantic_name: "Component / rd/action-sheet/description-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdActionSheetDescriptionFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d0e3540b51e9b66fc08efda210bf83dfc29d36a2"
      name: "Component / rd/action-sheet/description-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/body-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_avatar_text_large_font_size"
    semantic_name: "Component / rd/avatar/text/large-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarTextLargeFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fb69c7a4be526465bd92d1d71f07f99074ebf535"
      name: "Component / rd/avatar/text/large-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 20
        source: "rd/font-size/xl -> rd/font-size/title-extraLarge"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_component_rd_avatar_text_medium_font_size"
    semantic_name: "Component / rd/avatar/text/medium-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarTextMediumFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2cb58b4a0e82213fc0a173cd89e1e9f56c8f5bd2"
      name: "Component / rd/avatar/text/medium-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_avatar_text_small_font_size"
    semantic_name: "Component / rd/avatar/text/small-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdAvatarTextSmallFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f795d29694e5da88a10dabae0946440dbd2ac15d"
      name: "Component / rd/avatar/text/small-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_back_top_text_font_size"
    semantic_name: "Component / rd/back-top/text/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBackTopTextFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f57d4be42cc8414d103a2ec08c7201c1f50040ef"
      name: "Component / rd/back-top/text/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_component_rd_badge_font"
    semantic_name: "Component / rd/badge/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a4098b0f1f6e71e6f5c5272f65e59bfb36cbdb15"
      name: "Component / rd/badge/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "rd/font-size/mark-extraSmall"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_component_rd_badge_large_font"
    semantic_name: "Component / rd/badge/large/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdBadgeLargeFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a5b43980b6955e087355e90fb9d584dc580d8348"
      name: "Component / rd/badge/large/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/mark-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_button_extra_small_font_size"
    semantic_name: "Component / rd/button/extra-small/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonExtraSmallFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "49728246751c0790bed062f9300cd8cdf743b4cb"
      name: "Component / rd/button/extra-small/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_button_font_weight"
    semantic_name: "Component / rd/button/font-weight"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonFontWeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "04e2787cab52122d4f062b282f54981e917dc8ce"
      name: "Component / rd/button/font-weight"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 600
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 600
  - token_id: "typography_component_rd_button_large_font_size"
    semantic_name: "Component / rd/button/large/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonLargeFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cd6c4f62f3bf64a356be5ff5724f8fe795c7f8d2"
      name: "Component / rd/button/large/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_button_medium_font_size"
    semantic_name: "Component / rd/button/medium/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonMediumFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6767fefeb727d35e0e660b422020502410b3d0d7"
      name: "Component / rd/button/medium/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_button_small_font_size"
    semantic_name: "Component / rd/button/small/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdButtonSmallFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4f22e61bafebfb4a63991f9486b714ad272c1afc"
      name: "Component / rd/button/small/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_calendar_title_font"
    semantic_name: "Component / rd/calendar/title-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCalendarTitleFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6f3307f29d0d6c2a67ff6f3fe57c892d9126ac48"
      name: "Component / rd/calendar/title-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "rd/font-size/title-large"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_component_rd_cascader_title_font"
    semantic_name: "Component / rd/cascader/title-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCascaderTitleFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ce3afaad3c9dcaf8c871abda2a1499076b517bc1"
      name: "Component / rd/cascader/title-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "rd/font-size/title-large"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_component_rd_cell_group_title_font_size"
    semantic_name: "Component / rd/cell-group/title/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellGroupTitleFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "9e21e18d3b9826fe6f38ba924b98f2a2c983c49f"
      name: "Component / rd/cell-group/title/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_cell_note_font"
    semantic_name: "Component / rd/cell/note-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellNoteFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3805d2647f4811ad9cb45e4e7424aaef93d8c6f3"
      name: "Component / rd/cell/note-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/body-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_cell_note_font_2"
    semantic_name: "Component / rd/cell/note-font 2"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCellNoteFont2"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a7b11c5c4712088668361f5d8aeca4be60a77cc9"
      name: "Component / rd/cell/note-font 2"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/body-large"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_countdown_large_default_font_size"
    semantic_name: "Component / rd/countdown/large/default-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeDefaultFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "70f60d0f867932304f7394d402cdbe8feb4c5e61"
      name: "Component / rd/countdown/large/default-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_component_rd_countdown_large_no_unit_font_size"
    semantic_name: "Component / rd/countdown/large/no-unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeNoUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "aac2d9e9f80cc5c8acf73c9150c7ad04458e577a"
      name: "Component / rd/countdown/large/no-unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_component_rd_countdown_large_round_font_size"
    semantic_name: "Component / rd/countdown/large/round-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeRoundFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "abba1e3c5ecf1f2ec794599126e5222f9aa51bdc"
      name: "Component / rd/countdown/large/round-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_countdown_large_square_font_size"
    semantic_name: "Component / rd/countdown/large/square-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeSquareFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1e6d65fcc2b8b255ec94b88d50bbfcef0152e27f"
      name: "Component / rd/countdown/large/square-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_countdown_large_unit_font_size"
    semantic_name: "Component / rd/countdown/large/unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownLargeUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0463af0c996216b9758da22dd6ceb0295a2fb381"
      name: "Component / rd/countdown/large/unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_countdown_medium_default_font_size"
    semantic_name: "Component / rd/countdown/medium/default-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumDefaultFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6c5824e9ca75ba1edf4c3b0c6a876182563b2675"
      name: "Component / rd/countdown/medium/default-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_countdown_medium_no_unit_font_size"
    semantic_name: "Component / rd/countdown/medium/no-unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumNoUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b48677e6d533b1fe2bb1116ce8e8474ed78f77e5"
      name: "Component / rd/countdown/medium/no-unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_countdown_medium_round_font_size"
    semantic_name: "Component / rd/countdown/medium/round-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumRoundFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "930c01de7d2461df241ec3c6aa2f085c6d129fea"
      name: "Component / rd/countdown/medium/round-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_countdown_medium_square_font_size"
    semantic_name: "Component / rd/countdown/medium/square-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumSquareFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "532112561450cb0804e94c5dc7149383c9fc832a"
      name: "Component / rd/countdown/medium/square-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_countdown_medium_unit_font_size"
    semantic_name: "Component / rd/countdown/medium/unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownMediumUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4af12488d5c90a4d42eeb50d8e0f960e236b21ee"
      name: "Component / rd/countdown/medium/unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/s -> rd/font-size/body-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_countdown_number_font_family"
    semantic_name: "Component / rd/countdown/number-font-family"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownNumberFontFamily"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5e508e8b37b0f0b63a0f3db46d6d0cec4dd00710"
      name: "Component / rd/countdown/number-font-family"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: "TCloudNumber"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "TCloudNumber"
  - token_id: "typography_component_rd_countdown_small_default_font_size"
    semantic_name: "Component / rd/countdown/small/default-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallDefaultFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b0a299e9eafeeb2388f28324acbd72b7f321c181"
      name: "Component / rd/countdown/small/default-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_countdown_small_no_unit_font_size"
    semantic_name: "Component / rd/countdown/small/no-unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallNoUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "34ecfeb8efb8c159dcc2c4d3a94bd387eff7b892"
      name: "Component / rd/countdown/small/no-unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_countdown_small_round_font_size"
    semantic_name: "Component / rd/countdown/small/round-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallRoundFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fe54a0902382c36eaf70b4a314b9b758cd92edcb"
      name: "Component / rd/countdown/small/round-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/s -> rd/font-size/body-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_countdown_small_square_font_size"
    semantic_name: "Component / rd/countdown/small/square-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallSquareFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0ff0abc9620cd4ef01cf56ab7ba385ee876e98a9"
      name: "Component / rd/countdown/small/square-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/s -> rd/font-size/body-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_countdown_small_unit_font_size"
    semantic_name: "Component / rd/countdown/small/unit-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdCountdownSmallUnitFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0bfa99b6615eabba7421119b908f4fb93a79df3b"
      name: "Component / rd/countdown/small/unit-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 0
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 0
  - token_id: "typography_component_rd_dialog_title_font_weight"
    semantic_name: "Component / rd/dialog/title/font-weight"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDialogTitleFontWeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7516b23e30a32777bba52aaeee13f861e8b89256"
      name: "Component / rd/dialog/title/font-weight"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 600
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 600
  - token_id: "typography_component_rd_divider_content_font"
    semantic_name: "Component / rd/divider/content/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdDividerContentFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c597ff71677b1f98ae5ac826883c5d97d766a842"
      name: "Component / rd/divider/content/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/body-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_image_viewer_nav_index_font_size"
    semantic_name: "Component / rd/image-viewer/nav/index-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdImageViewerNavIndexFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fea0e9d3dcd095dc9a6d6453d1977bd09041f82b"
      name: "Component / rd/image-viewer/nav/index-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/base -> rd/font-size/title-small"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_indexes_anchor_active_font_weight"
    semantic_name: "Component / rd/indexes/anchor/active-font-weight"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdIndexesAnchorActiveFontWeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e3c8dc610dd98c2f13e41b31b935a61cbc415dd7"
      name: "Component / rd/indexes/anchor/active-font-weight"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 600
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 600
  - token_id: "typography_component_rd_input_label_text_font"
    semantic_name: "Component / rd/input/label/text-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputLabelTextFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "17d16b94c88b83ea5d6cb1ee27daacd30746d5a1"
      name: "Component / rd/input/label/text-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/body-large"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_input_placeholder_text_font"
    semantic_name: "Component / rd/input/placeholder/text-font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdInputPlaceholderTextFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3ef3cbf4bfb2982cdc17fd296a7695bc9e48d60a"
      name: "Component / rd/input/placeholder/text-font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/body-large"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_link_icon_large_font_size"
    semantic_name: "Component / rd/link/icon/large-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkIconLargeFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d8883d5248a41c11c5774113ac1c85c08d772829"
      name: "Component / rd/link/icon/large-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_component_rd_link_icon_medium_font_size"
    semantic_name: "Component / rd/link/icon/medium-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkIconMediumFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c4fed33fbbc3d67905b73d4e64f782f2e865b9be"
      name: "Component / rd/link/icon/medium-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_link_icon_small_font_size"
    semantic_name: "Component / rd/link/icon/small-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdLinkIconSmallFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "bbff608444434c33e432f851e31f667ae5c3d73e"
      name: "Component / rd/link/icon/small-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_picker_item_active_font_weight"
    semantic_name: "Component / rd/picker/item/active-font-weight"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPickerItemActiveFontWeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e6ea58c10a5561507aea6c7fd2e402848a127c79"
      name: "Component / rd/picker/item/active-font-weight"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 600
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 600
  - token_id: "typography_component_rd_popover_content_font_size"
    semantic_name: "Component / rd/popover/content-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdPopoverContentFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "47605fa0cf771bd72c3cfeb0611200a3ca694186"
      name: "Component / rd/popover/content-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_rate_text_active_font_weight"
    semantic_name: "Component / rd/rate/text/active-font-weight"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateTextActiveFontWeight"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "eada3e7115f5cc38cc2a8e46c90604a9fe71e10c"
      name: "Component / rd/rate/text/active-font-weight"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 600
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 600
  - token_id: "typography_component_rd_rate_text_font_size"
    semantic_name: "Component / rd/rate/text/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdRateTextFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "44e137e74da1df20d30f11b5561b8b900f7e8b8e"
      name: "Component / rd/rate/text/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "rd/font-size/m -> rd/font-size/title-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_stepper_large_font_size"
    semantic_name: "Component / rd/stepper/large/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperLargeFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b40ad0051c8d3acdc066f96c9c44a23c7c76162f"
      name: "Component / rd/stepper/large/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_stepper_medium_font_size"
    semantic_name: "Component / rd/stepper/medium/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperMediumFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7b00674f4aee35c449afa5cacfd6a6623f39c471"
      name: "Component / rd/stepper/medium/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_stepper_small_font_size"
    semantic_name: "Component / rd/stepper/small/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdStepperSmallFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6816bd8cba962fc30aedfc4a1ea9c2633ac65416"
      name: "Component / rd/stepper/small/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_component_rd_switch_label_font_size"
    semantic_name: "Component / rd/switch/label-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLabelFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3e1c08f8284a74eeba70e998621ad32464318c73"
      name: "Component / rd/switch/label-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_switch_large_label_font_size"
    semantic_name: "Component / rd/switch/large/label-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchLargeLabelFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "47f889f59a3cf7673d964f22e467dcf50f9dd79a"
      name: "Component / rd/switch/large/label-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_component_rd_switch_small_label_font_size"
    semantic_name: "Component / rd/switch/small/label-font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdSwitchSmallLabelFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "58dbb061f4f4daf9786895476da9e6283920d86b"
      name: "Component / rd/switch/small/label-font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_tag_extra_large_font"
    semantic_name: "Component / rd/tag/extra-large/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagExtraLargeFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "acbf535f9d716b0f701b18add3986b2fb3e08575"
      name: "Component / rd/tag/extra-large/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/body-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_tag_large_font"
    semantic_name: "Component / rd/tag/large/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagLargeFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cbea1d97a14903c1763c8853f8a40dbd3e025f58"
      name: "Component / rd/tag/large/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 14
        source: "rd/font-size/body-medium"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_component_rd_tag_medium_font"
    semantic_name: "Component / rd/tag/medium/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagMediumFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a4fb1b207d9d51e7534347b5d6d787e672d12a1"
      name: "Component / rd/tag/medium/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 12
        source: "rd/font-size/body-small"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_component_rd_tag_small_font"
    semantic_name: "Component / rd/tag/small/font"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTagSmallFont"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "97b7e1eadccba9c4533bd22759c031a72a0af98e"
      name: "Component / rd/tag/small/font"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 10
        source: "rd/font-size/body-extraSmall"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_component_rd_tree_item_font_size"
    semantic_name: "Component / rd/tree/item/font-size"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdComponentRdTreeItemFontSize"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "008bd871309d846d6a3231906b12cc4dde0e7535"
      name: "Component / rd/tree/item/font-size"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      Value:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_family"
    semantic_name: "font / rd/font-family"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontFamily"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b58d0cd8b23bff60d60058d2878ab9d055eb50a3"
      name: "font / rd/font-family"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: "PingFang SC"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "PingFang SC"
  - token_id: "typography_font_rd_font_family_medium"
    semantic_name: "font / rd/font-family-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontFamilyMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "43af5a68aab87475e0f3e520a1525543280899f4"
      name: "font / rd/font-family-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: "PingFang SC"
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: "PingFang SC"
  - token_id: "typography_font_rd_font_size_base"
    semantic_name: "font / rd/font-size/base"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeBase"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "21f196c2f08934a53f188052bf77b6fb3936397b"
      name: "font / rd/font-size/base"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 14
        source: "rd/font-size/title-small"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_font_rd_font_size_body_extrasmall"
    semantic_name: "font / rd/font-size/body-extraSmall"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeBodyExtrasmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e2bf80e7e0f5ed20f000a46dcf32c08c1db39249"
      name: "font / rd/font-size/body-extraSmall"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_font_rd_font_size_body_large"
    semantic_name: "font / rd/font-size/body-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeBodyLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ff55c6e2d9698e5336c3b4e289987c34ee8273c9"
      name: "font / rd/font-size/body-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_size_body_medium"
    semantic_name: "font / rd/font-size/body-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeBodyMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f1940dbd7efa70af4c53847a10698161e156a8da"
      name: "font / rd/font-size/body-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_font_rd_font_size_body_small"
    semantic_name: "font / rd/font-size/body-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeBodySmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d7233a6b11dc8b46f6091f4764dfd47e21b6bc45"
      name: "font / rd/font-size/body-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_font_rd_font_size_display_large"
    semantic_name: "font / rd/font-size/display-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeDisplayLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "3fbb94562b14e77b3268acf60e15dd602cf16018"
      name: "font / rd/font-size/display-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 64
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 64
  - token_id: "typography_font_rd_font_size_display_medium"
    semantic_name: "font / rd/font-size/display-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeDisplayMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "e07571ee484ac4a051040164cb8f9bb9c88823a6"
      name: "font / rd/font-size/display-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 48
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 48
  - token_id: "typography_font_rd_font_size_headline_large"
    semantic_name: "font / rd/font-size/headline-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeHeadlineLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6b9b2fb55536d151d3d0e506723c7ba81421836f"
      name: "font / rd/font-size/headline-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 36
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 36
  - token_id: "typography_font_rd_font_size_headline_medium"
    semantic_name: "font / rd/font-size/headline-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeHeadlineMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d26cbc341a6b2dd170b796887148f64a34b08cd5"
      name: "font / rd/font-size/headline-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "typography_font_rd_font_size_headline_small"
    semantic_name: "font / rd/font-size/headline-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeHeadlineSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "033ed97a11450d173d384cd4c0f6423c45c235ad"
      name: "font / rd/font-size/headline-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "typography_font_rd_font_size_l"
    semantic_name: "font / rd/font-size/l"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeL"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "c227a2e13ecac98209476a5bd7ec5bf151a9cfb0"
      name: "font / rd/font-size/l"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 18
        source: "rd/font-size/title-large"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_font_rd_font_size_link_large"
    semantic_name: "font / rd/font-size/link-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeLinkLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "30b17318ac0c24545ce2c6969c2f3bccfbc42a69"
      name: "font / rd/font-size/link-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_size_link_medium"
    semantic_name: "font / rd/font-size/link-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeLinkMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "441fbb79acdc74b66544902f92713be4bb7f1c09"
      name: "font / rd/font-size/link-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_font_rd_font_size_link_small"
    semantic_name: "font / rd/font-size/link-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeLinkSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7d46bd65f9f24c8413f10667b4ed731e097b23fc"
      name: "font / rd/font-size/link-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_font_rd_font_size_m"
    semantic_name: "font / rd/font-size/m"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeM"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5fff3a9ca94dd64019cf767a74d6b353590a970a"
      name: "font / rd/font-size/m"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "rd/font-size/title-medium"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_size_mark_extrasmall"
    semantic_name: "font / rd/font-size/mark-extraSmall"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeMarkExtrasmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a635bebbafd97bea14b4beb86ed7eebdd405231"
      name: "font / rd/font-size/mark-extraSmall"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 10
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_font_rd_font_size_mark_large"
    semantic_name: "font / rd/font-size/mark-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeMarkLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "60042e29fd52e47d101cbf7e3dd76b414f5d854d"
      name: "font / rd/font-size/mark-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_size_mark_medium"
    semantic_name: "font / rd/font-size/mark-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeMarkMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b1f27cd742e46a64c1b05c80c3b21ae70c1d3eb2"
      name: "font / rd/font-size/mark-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_font_rd_font_size_mark_small"
    semantic_name: "font / rd/font-size/mark-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeMarkSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0425b1c453f0dd3e120441bfd35fb9bd85f6b8e1"
      name: "font / rd/font-size/mark-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 12
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_font_rd_font_size_s"
    semantic_name: "font / rd/font-size/s"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeS"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "cb00df340801f2e919c26eb3694cc2bfd57f22b3"
      name: "font / rd/font-size/s"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 12
        source: "rd/font-size/body-small"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 12
  - token_id: "typography_font_rd_font_size_title_extralarge"
    semantic_name: "font / rd/font-size/title-extraLarge"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeTitleExtralarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "765f82c191637c979b41c8f63957b4e56b5a3a7a"
      name: "font / rd/font-size/title-extraLarge"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_font_rd_font_size_title_large"
    semantic_name: "font / rd/font-size/title-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeTitleLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "ff977a2be34b2a213fedb7d4f973a303b125b253"
      name: "font / rd/font-size/title-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 18
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 18
  - token_id: "typography_font_rd_font_size_title_medium"
    semantic_name: "font / rd/font-size/title-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeTitleMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "2875d8de7561589e058c511b33209d83f8fca50a"
      name: "font / rd/font-size/title-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_font_size_title_small"
    semantic_name: "font / rd/font-size/title-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeTitleSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "fa8a0290d93b9a12945acfe0e906a12c5f3d881e"
      name: "font / rd/font-size/title-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 14
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 14
  - token_id: "typography_font_rd_font_size_xl"
    semantic_name: "font / rd/font-size/xl"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeXl"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "b1433f9a1d199ba5a79cb6e1caf75145450ff36b"
      name: "font / rd/font-size/xl"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 20
        source: "rd/font-size/title-extraLarge"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_font_rd_font_size_xs"
    semantic_name: "font / rd/font-size/xs"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeXs"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5adf87d054cdcf123c3b47dccb2805fcb509ef31"
      name: "font / rd/font-size/xs"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 10
        source: "rd/font-size/body-extraSmall"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 10
  - token_id: "typography_font_rd_font_size_xxl"
    semantic_name: "font / rd/font-size/xxl"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdFontSizeXxl"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "332f345ef513fd8ffba77923e1ba989c3a93ea0b"
      name: "font / rd/font-size/xxl"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 36
        source: "rd/font-size/headline-large"
    notes:
      - "旧token，用于兼容"
    fallback:
      allowed: false
      value: 36
  - token_id: "typography_font_rd_line_height_body_extrasmall"
    semantic_name: "font / rd/line-height/body-extraSmall"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightBodyExtrasmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4a704481514342df92167190d1276e83b85a07a3"
      name: "font / rd/line-height/body-extraSmall"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_line_height_body_large"
    semantic_name: "font / rd/line-height/body-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightBodyLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7ff94c5a06f8d331ae347b53494e7cf23439af03"
      name: "font / rd/line-height/body-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "typography_font_rd_line_height_body_medium"
    semantic_name: "font / rd/line-height/body-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightBodyMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6e264e0524a19869fd3993f0cd14c5ce32d1aa3f"
      name: "font / rd/line-height/body-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "typography_font_rd_line_height_body_small"
    semantic_name: "font / rd/line-height/body-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightBodySmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "8e8c412ebbf53f50801925a399c8289bd5884e15"
      name: "font / rd/line-height/body-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_font_rd_line_height_display_large"
    semantic_name: "font / rd/line-height/display-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightDisplayLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "637dcb4bc59c943dc2f2fa16620a66caafd6e057"
      name: "font / rd/line-height/display-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 72
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 72
  - token_id: "typography_font_rd_line_height_display_medium"
    semantic_name: "font / rd/line-height/display-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightDisplayMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7eecbda40cfb83d3ed1f91a18593ae99ac161bdb"
      name: "font / rd/line-height/display-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 56
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 56
  - token_id: "typography_font_rd_line_height_headline_large"
    semantic_name: "font / rd/line-height/headline-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightHeadlineLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "7a674a6b6aa596570279209f90eebe88f56bb585"
      name: "font / rd/line-height/headline-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 44
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 44
  - token_id: "typography_font_rd_line_height_headline_medium"
    semantic_name: "font / rd/line-height/headline-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightHeadlineMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "197eeba2f67c371188a4cec466f65ecab6f6d812"
      name: "font / rd/line-height/headline-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 36
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 36
  - token_id: "typography_font_rd_line_height_headline_small"
    semantic_name: "font / rd/line-height/headline-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightHeadlineSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4b37718e308f3838f9a59182a0fb36a7797cdd11"
      name: "font / rd/line-height/headline-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 32
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 32
  - token_id: "typography_font_rd_line_height_link_large"
    semantic_name: "font / rd/line-height/link-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightLinkLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1d38788d3499b0ce0f0560b1a36aa9cab76fbf9c"
      name: "font / rd/line-height/link-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "typography_font_rd_line_height_link_medium"
    semantic_name: "font / rd/line-height/link-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightLinkMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "1f36359489cf206c94305771172770307d2f35e0"
      name: "font / rd/line-height/link-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "typography_font_rd_line_height_link_small"
    semantic_name: "font / rd/line-height/link-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightLinkSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f5cedb1afe06d601e61159c8bc0fa6b3002a60f0"
      name: "font / rd/line-height/link-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_font_rd_line_height_mark_extrasmall"
    semantic_name: "font / rd/line-height/mark-extraSmall"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightMarkExtrasmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "a2bd0f66e1f00f1114b1b9d7f8fe625c89f4c600"
      name: "font / rd/line-height/mark-extraSmall"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 16
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 16
  - token_id: "typography_font_rd_line_height_mark_large"
    semantic_name: "font / rd/line-height/mark-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightMarkLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "f320f1693264d60b8cd23066c1f70327bf8f2ea2"
      name: "font / rd/line-height/mark-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "typography_font_rd_line_height_mark_medium"
    semantic_name: "font / rd/line-height/mark-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightMarkMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "4eef6d482a4ef851b553ea319467c39803395016"
      name: "font / rd/line-height/mark-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
  - token_id: "typography_font_rd_line_height_mark_small"
    semantic_name: "font / rd/line-height/mark-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightMarkSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "0a899d7373dc122cba9aa7034897c9c5dba74f2b"
      name: "font / rd/line-height/mark-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 20
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 20
  - token_id: "typography_font_rd_line_height_title_extralarge"
    semantic_name: "font / rd/line-height/title-extraLarge"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightTitleExtralarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "5060584899d7cb1ad39cf7d7a0d5d683ae1f3a4b"
      name: "font / rd/line-height/title-extraLarge"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 28
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 28
  - token_id: "typography_font_rd_line_height_title_large"
    semantic_name: "font / rd/line-height/title-large"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightTitleLarge"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "64693a18896ba53781625bb630be9da728032ac8"
      name: "font / rd/line-height/title-large"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 26
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 26
  - token_id: "typography_font_rd_line_height_title_medium"
    semantic_name: "font / rd/line-height/title-medium"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightTitleMedium"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "d2d733d4827e67b46b6d4e1ee9eb823d358c7810"
      name: "font / rd/line-height/title-medium"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 24
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 24
  - token_id: "typography_font_rd_line_height_title_small"
    semantic_name: "font / rd/line-height/title-small"
    category: "typography"
    runtime_source:
      kind: generated_design_token
      name: "rdFontRdLineHeightTitleSmall"
      path: "generated/figma-token-source.json"
    figma_source:
      kind: variable
      key: "6c47b093de58ab0359141a08ec1285e6b7701d30"
      name: "font / rd/line-height/title-small"
    source_file: "2.0灵犀基础  Flutter版"
    values_by_mode:
      font:
        value: 22
        source: "direct"
    notes:
      []
    fallback:
      allowed: false
      value: 22
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
    value: null
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
  design_side:
    display_name: 设计侧
    uses:
      - semantic token selection
      - figma variable or style mapping
    system_ids:
      - figma_design_agent
  code_side:
    display_name: 编码侧
    uses:
      - runtime token source path
      - semantic token binding
      - token truth lookup
      - runtime and figma source lookup
    system_ids:
      - component_library_mcp
      - component_library_docs
      - code_tooling
```

这节只说明“哪类角色会怎么用”，不在这里写消费实现。

## Token Entries

真实 token 条目只允许写在这一节，并且必须放在 `token_entries` YAML block 里。

```yaml
token_entries:
  - token_id: REPLACE_ME
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
      value: null
```

维护约定：
- parser 只把这一节里的 `token_entries` 当作真实数据
- `token_entry_template` 只做模板，不算真实条目
- 允许后续按 `### Color`、`### Spacing` 之类子标题继续分块，但机读以 `token_entries` 为准

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
- 新增具体 token 时，只改 `## Token Entries`
- 如果 Figma 或代码来源变了，优先改本文件
- 不要把具体组件用法写进这里，组件用法写到 `components/*.md`
