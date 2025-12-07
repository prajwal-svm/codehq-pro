// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "dsa/index.mdx": () => import("../content/docs/dsa/index.mdx?collection=docs"), "ml-design/index.mdx": () => import("../content/docs/ml-design/index.mdx?collection=docs"), "system-design/index.mdx": () => import("../content/docs/system-design/index.mdx?collection=docs"), }),
};
export default browserCollections;