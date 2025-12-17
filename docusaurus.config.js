// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loja Checkpoint',
  tagline: 'O site.com',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lojacheckpoint.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rodrigo14052005', // Usually your GitHub org/user name.
  projectName: 'LojaCheckpoint_Site', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false, 

  onBrokenLinks: 'throw',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social card (podes trocar por uma imagem tua)
      image: 'img/docusaurus-social-card.jpg',

      // Modo claro/escuro
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },

      // ===== NAVBAR (HEADER) =====
      navbar: {
        title: 'Loja Checkpoint Docs',
        logo: {
          alt: 'Logo Loja Checkpoint',
          src: 'img/logo.svg',           // coloca em static/img/logo.svg
          srcDark: 'img/logo-dark.svg',  // opcional (static/img/logo-dark.svg)
          href: '/',
          target: '_self',
        },
        items: [
          // Docs principais (IDs = nomes dos ficheiros em docs/)
          { type: 'doc', docId: 'intro',            position: 'left', label: 'Introdução' },
          { type: 'doc', docId: 'instalacao',       position: 'left', label: 'Instalação' },
          { type: 'doc', docId: 'funcionalidades',  position: 'left', label: 'Funcionalidades' },
          { type: 'doc', docId: 'estrutura',        position: 'left', label: 'Arquitetura' },
          { type: 'doc', docId: 'roadmap',          position: 'left', label: 'Roadmap' },

          // Blog (mantive, pois tens a pasta blog)
          { to: '/blog', label: 'Blog', position: 'right' },

          // Links para os repositórios
          { href: 'https://github.com/Deni-jpg/Loja-Checkpoint', label: 'Código do App', position: 'right' },
          { href: 'https://github.com/eduardo895/Loja-Checkpoint-Site', label: 'Código do Site', position: 'right' },
        ],
      },

      // ===== FOOTER =====
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              { label: 'Introdução',      to: '/intro' },
              { label: 'Instalação',      to: '/instalacao' },
              { label: 'Funcionalidades', to: '/funcionalidades' },
              { label: 'Arquitetura',     to: '/estrutura' },
              { label: 'Roadmap',         to: '/roadmap' },
            ],
          },
          {
            title: 'Projeto',
            items: [
              { label: 'GitHub — App',  href: 'https://github.com/Deni-jpg/Loja-Checkpoint' },
              { label: 'GitHub — Site', href: 'https://github.com/eduardo895/Loja-Checkpoint-Site' },
            ],
          },
          {
            title: 'Suporte',
            items: [
              { label: 'Issues (App)',  href: 'https://github.com/Deni-jpg/Loja-Checkpoint/issues' },
              { label: 'Issues (Site)', href: 'https://github.com/eduardo895/Loja-Checkpoint-Site/issues' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Loja Checkpoint — Documentação do backend em Python.`,
      },

      // Syntax highlight
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

