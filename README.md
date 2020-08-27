# Netlify Custom Cache

A local Netlify plugin for caching the dependencies of a React app and Jekyll blog that are subpaths of your site

## Why
Because my react app and jekyll blog were subpaths of my site, Netlify did not automatically cache my dependencies. This plugin does that for you. My build times went from 7 minutes to 3.5

## What

See [Create a Local Plugin](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/#local-plugins) of netlify plugin docs

## Gotchas

Note: If you have an older Netlify site, make sure you choose the [latest build image](https://docs.netlify.com/configure-builds/build-plugins/#ui-installation) as noted in the yellow box

## Example
I use this plugin for deploying my site on Netlify. I've included my build script as an example

```
# Example file structure at root
# .
# ├── blog (Jekyll blog)
# ├── build.sh (build script)
# ├── links (React app)
# ├── netlify.toml (netlify config)
# ├── plugins (netlify plugins)
# └── public (public served folder)
```


## Help

Send a message if you need anything