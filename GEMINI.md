# GEMINI.md

## Project Overview

This is a personal blog built with the [Hexo](https://hexo.io/) static site generator. The blog is written in Korean and uses the [NexT](https://theme-next.js.org/) theme. The blog is deployed to GitHub Pages and can be accessed at [https://leafbird.github.io/blog](https://leafbird.github.io/blog).

## Building and Running

### Key Commands

*   **`npm install`**: Install dependencies.
*   **`npm run server`**: Start the local development server at `http://localhost:4000/`.
*   **`npm run build`**: Generate the static site to the `public` directory.
*   **`npm run deploy`**: Deploy the site to GitHub Pages.
*   **`npm run clean`**: Clean the cache and generated files.

### Local Development

To run the blog locally, use the following command:

```bash
npm run server
```

This will start a local server at `http://localhost:4000/`. You can also use the `localhost_4000.sh` script to open the local server in Safari.

### Deployment

The blog is automatically deployed to GitHub Pages via a GitHub Actions workflow whenever there is a push to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

You can also manually deploy the blog using the following command:

```bash
npm run deploy
```

## Development Conventions

### Posts

New posts are created in the `source/_posts` directory. The file name format is `:year-:month-:day-:title.md`.

### Configuration

The main configuration file is `_config.yml`. The theme configuration file is `_config.next.yml`.

### Theme

The blog uses the [NexT](https://theme-next.js.org/) theme. The theme's configuration is in `_config.next.yml`.

### Comments

The blog uses [Disqus](https://disqus.com/) for comments. The Disqus shortname is `leafbird`.
