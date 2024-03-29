/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guides',
      link: {
        "type": "generated-index",
        "description": "Nos guides pour profiter au mieux de notre jeu."
      },
      items: ['guides/premiers-pas', 'guides/jeux' ],
    },
    'contribuer',

  ],
};

export default sidebars;
