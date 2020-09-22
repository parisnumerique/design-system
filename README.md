# Paris Design System

## Stack

Build with [Bridgetown](https://www.bridgetownrb.com) Static Site Generator (SSG).

* page content is written in Markdown or HTML
* templating is written with [Liquid](https://shopify.github.io/liquid/) language (could be ERB / Haml / Slim)
* style is written in [Sass](https://sass-lang.com/)

## Folder structure

* `src/_docs` contains the documentation content tree. Order is given by the `order` Front Matter value at the top of each file
* `src/assets` contains all the assets (svg, images, files, etc...) used inside pages
* `src/_components` contains [Liquid Components](https://www.bridgetownrb.com/docs/components) wich can be used inside layout or even Markdown content
* `frontend` contains the JS and Sass files bundled by webpacker
* `src/_data`, `src/_layout` should be self explanatory and is detailed in the Bridgetown [documentation](https://www.bridgetownrb.com/docs/)

## Deployment

### DSIN

Trigerring deployement to DSIN server should be provided.

### Github Pages

A Github Action is set to build & deploy the static site to [https://parisnumerique.github.io/design-system](https://parisnumerique.github.io/design-system) on any commit to `master` branch.

### Netlify

Deploying to Netlify allow us not to change `url` and `baseurl` config. Hence, the static site deployed is identical to the one run in local.

Deployment is automated by a push to the following Gitlab repo : [acekat/design-system](https://gitlab.com/acekat/design-system)

Live site can be reached there : [https://paris-design-system.netlify.app/](https://paris-design-system.netlify.app/)
