export type ConsumerName =
  | 'design_side'
  | 'code_side';

export interface ParsedDocumentBase {
  filePath: string;
  rawMarkdown: string;
}

export interface RuleSetMetadata {
  id: string;
  version: string;
  status: string;
  owners: string[];
  source_of_truth: boolean;
  consumers: ConsumerName[];
}

export interface RulesDocument extends ParsedDocumentBase {
  kind: 'rules';
  metadata?: RuleSetMetadata;
  sections: Record<string, unknown>;
}

export interface TokenCategorySource {
  runtime: string;
  figma: string;
}

export interface TokensDocument extends ParsedDocumentBase {
  kind: 'tokens';
  sources: Record<string, TokenCategorySource>;
  sections: Record<string, unknown>;
}

export interface ComponentMetadata {
  component_id: string;
  semantic_name: string;
  status: string;
  owners?: string[];
  consumers?: ConsumerName[];
}

export interface ComponentDocument extends ParsedDocumentBase {
  kind: 'component';
  metadata?: ComponentMetadata;
  sections: Record<string, unknown>;
}

export interface DesignSystemSnapshot {
  rootDir: string;
  rules: RulesDocument | null;
  tokens: TokensDocument | null;
  components: ComponentDocument[];
}

export interface ParserOptions {
  rootDir: string;
}

export interface ExtractedYamlBlock {
  heading: string;
  yamlText: string;
}
