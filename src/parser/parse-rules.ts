import type { RulesDocument } from '../types.js';

export function parseRulesDocument(filePath: string, rawMarkdown: string): RulesDocument {
  void filePath;
  void rawMarkdown;
  // TODO: Extract yaml blocks and map them into a normalized RulesDocument.
  throw new Error('TODO: implement parseRulesDocument');
}
