import { docs, meta } from '.source';
import { loader } from 'fumadocs-core/source';

const mappedDocs = docs.map((doc: any) => ({
  type: 'page' as const,
  path: doc.info.path,
  data: doc,
}));

const mappedMeta = meta.map((m: any) => ({
  type: 'meta' as const,
  path: m.info.path,
  data: m.data,
}));

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: [...mappedDocs, ...mappedMeta],
  },
});