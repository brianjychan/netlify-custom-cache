# Netlify Custom Cache

A local Netlify plugin for caching the dependencies of a React app and Jekyll blog that are served via different paths on your site. 

I use this for my own site, so you can see an example [here](https://brianjychan.com). See `/links` and `/blog`

## Why
Because my site is a combination of a static site, react app, and jekyll blog served at different paths on my site, Netlify did not automatically cache their dependencies. 

This plugin does that for you. My build times went from 7 minutes to 3.5

## What

See [Create a Local Plugin](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/#local-plugins) of netlify plugin docs

## Gotchas

If you have an older Netlify site, make sure you choose the [latest build image](https://docs.netlify.com/configure-builds/build-plugins/#ui-installation) as noted in the yellow box

## Example
I use this plugin for deploying my site on Netlify. I've included my build script as an example. This is what the file structure of my source looks like (NOT when served)

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