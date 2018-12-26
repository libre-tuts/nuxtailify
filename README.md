# NuxTailify

## About

- An Opinionated Nuxt Starter Boilerplate That Utilizes Vuetify In Conjuction with Tailwind CSS plus Other Good Stuff Taken from [Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate) Such as Linting, Test , And Documentation and Vscode Settings.
- This Uses Vuetify In Ala Cart Mode with Vuetify Loader Which Load Components On Demand Together With All Its Dependancy and CSS Styling.
- This Uses PurgeCSS Was Used to Allow All On Demand Styling of Vuetify While Only Compiling Tailwind CSS Class If It is Used.
- You Can Use Vuetify As Is Without Importing Any Component Except Those Limitation Listed on Their [Docs](https://vuetifyjs.com/en/guides/a-la-carte#vuetify-loader)
- You can Utilize Tailwind Class Using `tw-` prefix ie. `tw-bg-red`.
- Font and Icons Can Be Used for Offline Development (Uses Fontawesome, Material Icons , And Roboto Fonts). Read More On How to Add Custom Icons [Here](https://vuetifyjs.com/en/framework/icons)

## To Do

- Add Internationalization
- Make Default Layout , Dashboard, Home, Modal
- Add ENV Var
- Add Home Page
- Add Auth Page
- Add Dashboard Page
- Add Meta for SEO
- Middleware for Authenticated User
- Authentication Can be Choosen to use FireBase or Any Other backend Way of Authentication.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
