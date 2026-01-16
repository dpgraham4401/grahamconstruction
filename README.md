# Graham Construction

Graham Construction is a local construction company based out of Dallas-Fort Worth, Texas. They specialize 
in residential construction and remodeling projects. This project is a redesign of their current website.

## Key Features:

- **Built with Tailwind CSS & Alpine.js**
- Clean & Modern Design
- Fully Responsive
- Dark & Light Mode
- Fast & Performant
- Lightweight
- View Transitions 
- **Prettier** Code Formatter
- **Google Fonts**
- **Remix Icons**

## Getting Started

```
pnpm dev
```

### Build

```
pnpm build
```

This builds the app for production to the `./dist/` folder.

## Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── .prettierrc
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

- `public/*` - Any static assets (images, fonts, icons, ...)
- `src/*` - Project source code (components, pages, ...)
- `src/components/*` - Reusable Astro components used to build pages.
- `src/layouts/*` - Astro components that define the UI structure shared by one or more pages..
- `src/pages/*` - Astro components used to create new pages on your site. Each page is exposed as a route based on its file name.
- `.prettierrc` - Prettier configuration file.
- `astro.config.mjs` - Astro configuration file.
- `package.json` - File used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Astro.
- `tailwind.config.cjs` - Tailwind configuration file. The theme section is where you define your color palette and fonts.
- `tsconfig.json` - TypeScript configuration file.

For additional information, see the [official documentation](https://docs.astro.build/).

## Deployment

Ready to build and deploy your site? Follow the [official documentation](https://docs.astro.build/en/guides/deploy/).

## License

This project is licensed under the terms of the MIT license.
