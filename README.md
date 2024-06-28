# docusaurus_for_baby

It is a presetuped template created by docusaurus, for baby, for github pages

> [!NOTE]
>
> I am looking to create a blog / documentation website, I need:
>
> - Code highlight
>
> - Math equation rendering
>
> - Search
> 
> [Docusaurus](https://docusaurus.io/docs) match my requirement

> [!NOTE]
>
> When learning and setuping `docusaurus`, I found there are still somethings need to be config
> 
> For example, I like dark mode as default
> 
> To support multi document site, I need to add `@docusaurus/plugin-content-docs` to plugins manually, also math equation ... and many other things, so I make this presetuped template

## Get started

Fork this repository, `Settings > Pages > Build and deployment >  Source > GitHub Actions`

### Common config

Modify `volume/common.ts`, change `github_username` and `repo_name`

```typescript
export const github_username = "cwksc-organization"
export const repo_name: String = "docusaurus_for_baby"
```

For example, change `repo_name` to `xxxxx.github.io`

### Docs and markdown

Look at `volume/multiblog` and  `volume/multidoc`, it will auto generate site for each folder

This is where the `.md` markdown is

### Navigation bar

Modify `volume/config/themeConfig/navbar.ts`

```typescript
// ...

export const navbar = {
    // ...
    items: [
        { label: 'Blog 1', to: '/blog1/', position: 'left' },
        { label: 'Blog 2', to: '/blog2/', position: 'left' },
        { label: 'Docs 1', to: "/docs1/", position: 'left' },
        { label: 'Docs 2', to: "/docs2/", position: 'left' },
    ],
};
```

Change `items` to what you want, it is just similar link on top navigation bar

### Code blocks highlighting

Look at `volume/config/themeConfig/prism.ts` if you want to support more language highlighting

### Github action and deploy

Github action is setuped, it will build container and deploy to github pages

It will run around 2 min

## Develop / Contribute

Look at `develop/`

