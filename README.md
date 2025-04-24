# 10.020 Data Driven World

This is an experimental course website for 10.020 Data Driven World module.

You can contribute by forking this repository and creating pull requests 😊

## Getting started

1. The website is built from files in this repo using Github workflows.
2. To contribute, fork this repo, then **create a test branch**. This allows you to create a self-hosted site to test any changes.
3. **In your `test` branch**:
   - Go to `docusaurus.config.js` and edit the `url` and `baseUrl` to match your username and repo name.
   - Go to `.github/workflows/deploy.yml`and change `on push branches` from `main` to `test`.
4. Go to your repo on the Github site > Settings > Pages > change Source to **Github Actions**
5. Commit your `docusaurus.config.js` and `deploy.yml` and push to test branch
6. In Github > Actions, check that the workflow to build is triggered on the `test` branch. If it doesn't work, you may need to set the permissions under Actions > General. When successful, Github should create a new branch `gh-pages` for the built website files.
7. Go to Github > Settings > Pages again and switch source back to **Deploy from a branch**. Select `gh-pages` and Save (you must force it to save if it doesn't).
8. The site should be up at your given URL. If it is not (404 error), go back to Github > Actions and check the `pages build and deployment` workflow ran correctly on the `gh-pages` branch.

Now you can checkout the main repo, and push new commits to both main and test branch. View the changes on your site, and when you are done, submit pull requests through the `main` branch.


## Building Locally

1. If you have admin / sudo rights to your workstation, it could be easier to build the site locally.
2. [Install Node Version Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), reopen Terminal and `nvm install 18`. Important: you **must** install Node v18 because v20 breaks Docusaurus!
3. Clone this project, `cd` to the root folder and run `nvm install`.
4. Run `npm start`. The site should be up.


## Possible Customizations

1. The file `src/pages/index.js` contains the homepage. Edit it to your liking.
2. Add icons to /static/img
3. Add setting to the docusaurus search local to include other docs route base path like psets labs etc
4. Enable brython `npm i docusaurus-live-brython`
5. Swizzled Admonitions: see `docusaurus.config.js`
6. Custom components: see `src/components`

## Markdown features

### Admonitions

You can generate admonitions using:

```
:::[keyword]
<your content>
:::
```

where `[keyword]` can be any of the following:

```
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
```

Edit `/src/theme/Admonition.index.js` to add more custom admonition, and add it in `docusaurus.config.js`.

### Custom markdown snippets and Keybinding

It's advisable to add custom markdown snippets as follows in your VSCode's `markdown.json`:

````
...
  "Red block": {
    "prefix": "redwords",
    "body": [
      "<span style={{ \"color\":\"red\", \"fontWeight\": \"bold\" }}>$TM_SELECTED_TEXT$1</span>"
    ],
    "description": "custom redword block"
  },
    "Image Block React": {
    "prefix": "imageblockreact",
    "body": [
      "<ImageCard path={require(\"./$1\").default} widthPercentage=\"70%$2\"/>"
    ],
    "description": "custom image block in React"
  },
  "Image Block React With Prefix": {
    "prefix": "imageblockreactwithprefix",
    "body": [
      "<ImageCard path={require(\"./images/$1\").default} widthPercentage=\"70%$2\"/>"
    ],
    "description": "custom image block in React with prefix"
  },
  "Deep Dive React": {
    "prefix": "deepdivereact",
    "body": [
      "<DeepDive title=\"Show Pseudocode\">\n\n$1\n```\n$2\n```\n\n</DeepDive>\n$3"
    ],
    "description": "custom deepdive block in React"
  },
  "Front Matter MDX": {
    "prefix": "frontmattermdx",
    "body": [
      "---\nsidebar_position: $1\n---\n\nimport CollapsibleAnswer from '@site/src/components/CollapsibleAnswer';\nimport DeepDive from '@site/src/components/DeepDive';\nimport ImageCard from '@site/src/components/ImageCard';\nimport ChatBaseBubble from \"@site/src/components/ChatBaseBubble\";\n\n$2\n\n<ChatBaseBubble/>\n\n$3"
    ],
    "description": "custom yaml frontmatter block"
  },
  "Keywords React": {
    "prefix": "keywordsreact",
    "body": [":::keyword Keywords\n$1\n:::"],
    "description": "custom keyword admonition"
  },
  "Admonitions React": {
    "prefix": "admonitionsreact",
    "body": [":::$1\n$2\n:::"],
    "description": "shortcut admonition"
  }
  ...
````

Then bind it to a keyboard shortcut in VSCode's `keybindings.json`:

```
...
  {
    "key": "ctrl+alt+e",
    "command": "editor.action.insertSnippet",
    "args": {
      "name": "Image Block React"
    },
    "when": "editorTextFocus && markdownShortcuts:enabled"
  },
  {
    "key": "ctrl+alt+g",
    "command": "editor.action.insertSnippet",
    "args": {
      "name": "Image Block React With Prefix"
    },
    "when": "editorTextFocus && markdownShortcuts:enabled"
  },
  {
    "key": "ctrl+alt+d",
    "command": "editor.action.insertSnippet",
    "args": {
      "name": "Deep Dive React"
    },
    "when": "editorTextFocus && markdownShortcuts:enabled"
  },
  {
    "key": "ctrl+alt+f",
    "command": "editor.action.insertSnippet",
    "args": {
      "name": "Front Matter MDX"
    },
    "when": "editorTextFocus && markdownShortcuts:enabled"
  },
  {
    "key": "ctrl+alt+o",
    "command": "editor.action.insertSnippet",
    "args": {
      "name": "Keywords React"
    },
    "when": "editorTextFocus && markdownShortcuts:enabled"
  },
  ...
```

### Images

Images should be placed in the same directory as the markdown file, inside `/images` folder. See `/docs` for reference.

VSCode extension: `mushan.vscode-paste-image` is immensely useful. [You can install it from here](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image).

You can then bind it to some key to paste image on your clipboard:

```
  {
    "key": "ctrl+alt+v",
    "command": "extension.pasteImage",
    "when": "editorTextFocus"
  },
```

Then set the extension settings as follows:

![](/images/README/2023-07-13-10-54-53.png)

![](/images/README/2023-07-13-10-56-14.png)

This way, the extension is going to paste simply the path from current working directory, like `/images/bfs/2023-07-13-10-58-22.png` into `ImageBlock` component.

## Adding new folder

Lecture notes goes to `docs` folder by default. But, you can create new folder in the root, such as `projects`, `labs`, etc. First, create an entry point: `intro.md` (or any other name, just match it when declaring it in docusaurus config later) inside the new folder.

Now update `docusaurus.config.js`.

**Step 1**: register it under `@docusaurus/plugin-content-docs`:

```
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "projects",
        path: "projects",
        routeBasePath: "projects",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "your-folder-name",
        path: "your-folder-name",
        routeBasePath: "your-folder-name",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
```

**Step 2**: under `themes`, register it as `docsRouteBasePath`:

```
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: ["projects", "notes", "about", "your-folder-name..."],
      },
    ],
```

**Step 3**: update the navbar to include your new folder:

```
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
            to: "/your-folder-name/intro",
            label: "Navbar-Label",
            position: "left",
            activeBaseRegex: `/your-folder-name/`,
          },
          ...
        ]
        ...
      }
```
