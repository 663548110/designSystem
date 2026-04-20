import type { ComponentDocument } from '../types.js';

export function parseComponentDocument(filePath: string, rawMarkdown: string): ComponentDocument {
  void filePath;
  void rawMarkdown;
  // TODO: Extract component metadata, bindings, variants, snippets, and consumer hints.
  throw new Error('TODO: implement parseComponentDocument');
}

export function isComponentEntryFile(filePath: string): boolean {
  return filePath.endsWith('.md') && !filePath.endsWith('/README.md') && !filePath.endsWith('/_template.md');
}
