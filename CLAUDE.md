# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Santiago Benitez-Fernandez's game-dev portfolio: a static site with plain HTML, one CSS file and one JS file. There is no package.json, build step, linter or test suite. Bulma 1.0.4 (CSS framework) and Font Awesome 7 are loaded from CDNs in each page's `<head>`.

- **Hosting:** GitHub Pages (repo `ActuallySanta/ActuallySanta.github.io`) serves the root of `main` at http://www.santibenfer.com/. Anything merged to `main` goes live.
- **Branches:** commit all work to `Non-public-facing-branch` unless the user explicitly names another branch. Don't commit to `main` directly or create new branches unasked. Changes reach `main` only through a PR the user approves.
- **Preview:** the user previews with the VS Code Live Server extension. Any static server at the repo root works too, for example `python -m http.server`. Check both desktop and mobile widths, because the navbar and card layout change at 1023px and 768px.

## Structure

- `index.html` is the home page: a hero, an About section, and a Bulma `fixed-grid featured-projects-grid` of project cards. Each card links to its project page and to the game's external page (itch.io, etc.).
- `Project Pages/<Name>-Project.html` has one page per game. All pages follow the same section layout: a hero with a play link, a "Tech Used / Skills Utilized" box, a description, screenshots, and Contributions cards (one card per role).
- `CSS/styles.css` holds custom styles. Bulma variables are overridden on `:root`, followed by responsive breakpoints and card-grid rules.
- `JS/index.js` is loaded by every page. It toggles the burger menu, opens the Projects dropdown on click (mobile only, ≤1023px; desktop uses Bulma's hover), and sets every card in `.featured-projects-grid` / `.project-grid` to the height of the tallest one on load and resize.
- `Media/` holds icons, favicons, the resume PDF, and `Game-Screenshots/<Game>/`. Folder names are not consistent (for example `SpaceState-Ouroboros`, `Tuxedo-TIm`), so copy existing paths exactly.
- `Todo.json` is an empty stub and is not used by the site.

## Conventions and gotchas

- **Duplicated navbar:** the full `<nav>`, including the Projects dropdown that lists every game, is copied into `index.html` and all 8 project pages. Adding, renaming or removing a project means editing the dropdown in all 9 files, plus the card in `index.html`. The user is open to refactoring this, for example with a JS-injected partial or a static generator. Propose it before doing it.
- **Relative paths:** project pages sit one level down, so they use `../CSS/`, `../JS/`, `../Media/` and `../index.html`. `index.html` uses paths with no prefix. The `Project Pages` folder name has a space; keep hrefs exactly as `Project Pages/...`.
- **Case-sensitive paths:** GitHub Pages treats `media/` and `Media/` as different paths, while Windows does not. A wrong case works in local preview and breaks on the live site, so match the folder and file casing exactly.
- **New project page:** copy an existing project page as the template. The JS expects these IDs on every page: `#burger`, `#nav-links`, `#projects-dropdown` and `#projects-toggle`. Without them, `index.js` throws.
- **Formatting:** the files are formatted Prettier-style (2-space indent, attributes wrapped one per line). `.gitattributes` normalizes line endings with `text=auto`.
