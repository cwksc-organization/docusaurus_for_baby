import type { Config } from '@docusaurus/types';

import { github_username, repo_name } from './common';

import { presets } from './presets';
import { themeConfig } from './themeConfig/themeConfig';
import { stylesheets } from './stylesheets';
import { themes } from './themes';
import { plugins } from './plugins';
import { i18n } from './i18n';

let baseUrl = `/${repo_name}/`
if (repo_name == `${github_username}.github.io`.toLowerCase()) {
    baseUrl = "/"
}

export const config_custom: Config = {
    title: `${github_username}`,
    favicon: 'img/favicon.ico',

    baseUrl: baseUrl,
    i18n: i18n,
    onBrokenLinks: 'warn' as const,
    onBrokenMarkdownLinks: 'warn' as const,
    organizationName: `${github_username}`,
    plugins: plugins,
    presets: presets,
    projectName: `${repo_name}`,
    stylesheets: stylesheets,
    themeConfig: themeConfig,
    themes: themes,
    url: `https://${github_username}.github.io`,
}
