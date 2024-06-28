import { github_username } from '../common';

export const navbar = {
    title: `${github_username}`,
    logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
    },
    items: [
        { label: 'Blog 1', to: '/blog1/', position: 'left' },
        { label: 'Blog 2', to: '/blog2/', position: 'left' },
        { label: 'Docs 1', to: "/docs1/", position: 'left' },
        { label: 'Docs 2', to: "/docs2/", position: 'left' },
    ],
};
