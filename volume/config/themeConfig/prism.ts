import { themes as prismThemes } from 'prism-react-renderer';

// https://docusaurus.io/docs/markdown-features/code-blocks
// https://prismjs.com/#supported-languages

export const prism = {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: [
        'csharp',
        'java',
        'javascript',
        'json',
        'powershell',
        'typescript',
    ],
};
