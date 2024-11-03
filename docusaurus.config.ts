import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import spaced from 'rehype-spaced';

const config: Config = {
  title: 'Kotlin DSL Basics',
  tagline: 'Learn Kotlin and Kotlin DSLs',
  favicon: 'img/favicon.ico',
  url: 'https://kotlin-dsl-basics.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          rehypePlugins: [spaced],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kotlin DSL Basics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/zsmoore/kotlin-dsl-basics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/zsmoore/kotlin-dsl-basics',
            },
            {
              label: 'Creator Github',
              href: 'https://github.com/zsmoore',
            },
          ],
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/zachary-scott-moore/',
            },
            {
              label: 'Email',
              href: 'mailto:zsmoore@zachary-moore.com',
            },
            {
              label: 'Website',
              href: 'https://zachary-moore.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zachary Moore, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
