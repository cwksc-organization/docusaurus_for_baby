import { multidocs_names } from "./multidocs";
import { multiblog_names } from "./multiblog"

// https://github.com/easyops-cn/docusaurus-search-local

export const themes = [
    [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
            hashed: true,
            docsRouteBasePath: multidocs_names,
            blogRouteBasePath: multiblog_names,
            language: ["en", "zh"],
        }),
    ],
];
