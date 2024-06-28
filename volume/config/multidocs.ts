import fs from 'fs';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const multidocs_names = fs.readdirSync("/workspace/docusaurus_for_baby/multidocs", { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

// console.log(multidocs_names);

export const mulitdocs_plugin = multidocs_names.map((dirname, index) => {
    return [
        '@docusaurus/plugin-content-docs',
        {
            id: index == 0 ? 'default' : dirname,
            path: `multidocs/${dirname}`,
            routeBasePath: `${dirname}`,
            sidebarPath: './sidebars.ts',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
    ]
});

// console.log(mulitdocs_plugin);
