# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with [Hexo](https://hexo.io/), a fast, simple & powerful blog framework powered by Node.js. The site is deployed to GitHub Pages using automated workflows.

- **Site URL**: https://leafbird.github.io/blog
- **Framework**: Hexo 7.3.0
- **Theme**: NexT 8.0.2
- **Language**: Korean (ko)
- **Author**: leafbird

## Common Commands

### Development
```bash
npm run server          # Start local development server (http://localhost:4000)
npm run build           # Generate static files for production
npm run clean           # Clean cache files and generated files
npm run deploy          # Deploy to GitHub Pages
```

### Blog Management
```bash
hexo new "Post Title"   # Create a new blog post
hexo new draft "Title"  # Create a draft post
hexo publish "Title"    # Move draft to published posts
```

### Helper Scripts
```bash
./localhost_4000.sh     # Open local development server in Safari
./original.sh           # Open live blog site in Safari
./depot.sh              # Open GitHub repository in Safari
```

## Project Structure

- **source/_posts/**: Published blog posts in Markdown format with Korean filenames
- **source/_drafts/**: Draft posts not yet published
- **source/images/**: Static image assets for blog posts
- **themes/**: Theme files (using NexT theme)
- **scaffolds/**: Templates for new posts
- **public/**: Generated static site files (created after `hexo generate`)
- **_config.yml**: Main Hexo configuration
- **_config.next.yml**: NexT theme configuration (using Mist scheme)

## Blog Configuration

### Post Structure
- Posts use Korean titles and are organized by date
- Post asset folders are enabled (`post_asset_folder: true`)
- Permalink structure: `:year/:month/:day/:title/`
- New post naming: `:year-:month-:day-:title.md`

### Key Features Enabled
- RSS feed generation (`hexo-generator-feed`)
- Sitemap generation (`hexo-generator-better-sitemap`)
- Google Analytics (UA-52787243-2)
- Robots.txt generation
- Syntax highlighting with highlight.js
- Deploy to GitHub Pages via git

## Deployment

### Automated Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`):

1. Checkout repository
2. Setup Node.js 18
3. Install dependencies with `npm install`
4. Build site with `npx hexo generate`
5. Deploy to `gh-pages` branch using peaceiris/actions-gh-pages

### Manual Deployment
```bash
npm run deploy  # Uses hexo-deployer-git to push to gh-pages branch
```

## Theme Configuration

The blog uses the NexT theme with the following key settings:
- **Scheme**: Mist
- **Cache**: Enabled for better performance
- **Dark mode**: Disabled
- **Minify**: Disabled

## Development Notes

- The blog content is primarily in Korean
- Posts often include image assets in dedicated folders
- The site uses Asia/Seoul timezone
- External links open in new tabs
- Post asset folder structure allows for organized media per post