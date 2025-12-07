// @ts-nocheck
import * as __fd_glob_3 from "../content/docs/system-design/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/ml-design/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/dsa/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "dsa/index.mdx": __fd_glob_1, "ml-design/index.mdx": __fd_glob_2, "system-design/index.mdx": __fd_glob_3, });

export const meta = await create.meta("meta", "content/docs", {});