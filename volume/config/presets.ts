import type * as Preset from '@docusaurus/preset-classic';

export const presets = [
    [
        'classic',
        {
            docs: false,
            blog: false,
            theme: {
                customCss: './src/css/custom.css',
            },
        } satisfies Preset.Options,
    ],
]
