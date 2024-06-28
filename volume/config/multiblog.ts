import fs from 'fs';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const multiblog_names = fs.readdirSync("/workspace/docusaurus_for_baby/multiblog", { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

// console.log(multidocs_names);

export const mulitblog_plugin = multiblog_names.map((dirname, index) => {
    return [
        '@docusaurus/plugin-content-blog',
        {
            id: index == 0 ? 'default' : dirname,
            path: `multiblog/${dirname}`,
            routeBasePath: `${dirname}`,
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
    ]
});

// console.log(mulitblog_plugin);
