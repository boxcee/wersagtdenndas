const path = require('path');

module.exports = {
  title: 'hat das gesagt!',
  tagline: 'Zitate die du kennen solltest.',
  url: 'https://wersagtdenndas.info',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/question.gif',
  organizationName: 'boxcee', // Usually your GitHub org/user name.
  projectName: 'wersagtdenndas', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-GHMY1QFGYT',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Wer sagt denn das?',
      logo: {
        alt: 'My Site Logo',
        src: 'img/question.gif',
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Möchtest du ein Zitat hinzufügen?',
              href: 'https://github.com/boxcee/wersagtdenndas/edit/main/database/zitate.json',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/boxcee/wersagtdenndas',
            },
            {
              label: 'Docusaurus',
              href: 'https://v2.docusaurus.io/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/boxcee/wersagtdenndas/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/boxcee/wersagtdenndas/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'database')]
};
