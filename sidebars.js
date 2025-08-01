// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Matematica',
      collapsible: true,
      collapsed: false,
      items: [
        'matematica/matematica', // corrisponde a matematica/index.md
        'matematica/algebra',
        'matematica/geometria',
      ],
    },
  ],
};

module.exports = sidebars;
