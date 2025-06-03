// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data Driven World 🌏",
  tagline: "The best way to learn programming is to write programs",
  url: "https://data-driven-world.github.io",
  baseUrl: "/2023/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "data-driven-world", // Usually your GitHub org/user name.
  projectName: "2023", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "notes",
          admonitions: {
            keywords: [
              "info",
              "success",
              "danger",
              "note",
              "tip",
              "warning",
              "important",
              "caution",
              "keyword",
              "think",
            ],
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "psets",
    //     path: "psets",
    //     routeBasePath: "psets",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //   },
    // ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "projects",
        path: "projects",
        routeBasePath: "projects",
        sidebarPath: require.resolve("./sidebars.js"),
        admonitions: {
          keywords: [
            "info",
            "success",
            "danger",
            "note",
            "tip",
            "warning",
            "important",
            "caution",
            "keyword",
            "think",
          ],
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "learning-objectives",
        path: "learning-objectives",
        routeBasePath: "learning-objectives",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // docsRouteBasePath: ["psets", "projects", "docs", "about"],
        docsRouteBasePath: ["projects", "notes", "learning-objectives", "about"],
      },
    ],
    [
      "docusaurus-live-brython",
      {
        brythonSrc: 'https://cdn.jsdelivr.net/npm/brython@3.12.4/brython.min.js', // default
        brythonStdlibSrc: 'https://cdn.jsdelivr.net/npm/brython@3.12.4/brython_stdlib.js' // default
      },
    ],
    "@docusaurus/theme-mermaid",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      subjectCard: {
        title: "What will we learn in 10.020?",
        description:
          "The course is a continuation of 10.014 Computational Thinking for Design and is designed as a project-based course. It introduces students to data structures, algorithm, and introductory machine learning algorithm in a practical way.",
        buttons: {
          primary: {
            label: "About",
            href: "about/intro",
          },
          secondary: {
            label: "Learning Objectives",
            href: "learning-objectives/intro",
          },
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "10.020",
        logo: {
          alt: "DDW Logo",
          src: "img/home-logo.svg",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            to: "/about/intro",
            label: "About",
            position: "left",
            activeBaseRegex: `/about/`,
          },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Notes",
          },
          {
            to: "/projects/intro",
            label: "Projects",
            position: "left",
            activeBaseRegex: `/projects/`,
          },
          {
            to: "/learning-objectives/intro",
            label: "Learning Objectives",
            position: "left",
            activeBaseRegex: `/learning-objectives/`,
           },
          {
            to: "/roadmap",
            label: "Roadmap",
            position: "left",
          },
          {
            href: "https://github.com/data-driven-world",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Course Materials",
            items: [
              {
                label: "Lecture Notes",
                to: "/notes/introduction",
              },
              {
                label: "Learning Objectives",
                 to: "/learning-objectives/intro",
              },
              {
                label: "Projects",
                to: "/projects/intro",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/data-driven-world",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 10.020 Data Driven World`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  markdown: {
    mermaid: true,
  },
};

const fs = require('fs');
const path = require('path');

// Optional local override
const localConfigPath = path.resolve(__dirname, 'docusaurus.local.config.js');
if (fs.existsSync(localConfigPath)) {
  const localConfig = require(localConfigPath);
  Object.assign(config, localConfig);
}

module.exports = config;
