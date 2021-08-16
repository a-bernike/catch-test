This is a test project.

## Getting Started

First, run the development server:
1. Clone this repository
2. Create `.env` file and copy-paste the value from `envsample` file.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Architecture

1. `/configs` = To store any constant variables. Inside it, there is `urlList.js` file to store the page URLs. When we want to define redirect link, just use the value in this file rather than hard coding it. By doing so, it will be easier to manage the links if in the future there will be url changes because we only need to change them from this file. There is another file called `index.js`. This file is used to export all files in `/configs` so we can just import it like this `import { urlList } from 'configs'`.

2. `/helpers` = To store any helper functions. There is `/helpers/index.ts` to export all helper files inside this directory. `/Common` is used to store any common usage functions.

3. `/models` = To store interfaces and types.

4. `/pages` = The default routing directory from NextJS.

5. `/public` = The default public assets directory from NextJS.

6. `/services` = To store any API related functions. `/services/Product` is used to store Product API calls. `/services/request.ts` is a class to make it easier to use axios package.

7. `/store` = To store redux related functions. `/store/actions` is used to store dispatch actions. `/store/reducers` is used to store the initialization of redux state. And `/store/constants` is used just to store constant variables.

8. `/styles` = To store global SCSS files.

9. `/views` = To store React components. React components used to display page's view will be placed in `/views/containers`. And global React components (e.g: Layout, Header) will be placed in `/views/components` while the reuseable one will be placed in `/views/components/widgets`.
