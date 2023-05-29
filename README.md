# [D] NEXT.JS: API RENDERING COMPLEXITIES

## 3. CODEFEED EXTERNAL API RENDERING

### A. EXTERNAL API SETUP: NEWSAPI

**API CHOICE:** We will use an external API as to show the differences with SSR, and our choice is "NewsAPI": `https://newsapi.org/`

  - You need to sign up (with a testing account) & obtain your API key

  - **NOTE:** This API is very developer friendly, and provides lots of different example endpoints **AND** the structure of the returned response object

  - **OUR CHOICE:** We will pre-filter the articles based on [**source:**](https://newsapi.org/docs/endpoints/sources)

&nbsp;

**CHALLENGE:** Using the browser NewsAPI client + Postman, experiement with the endpoints & apikey to find the correct endpoints which:

  - (i) Return an array of all top headline articles made by ABC News Australia
  
  - (ii) Return an array of all top headline articles made by BBC News

&nbsp;

### B. INTEGRATE EXTERNAL API WITH APPLICATION

**PURPOSE:** We need to ensure that whenever we call NewsAPI in our application, the server-side call securely passes in the API Key to the endpoint request:

  - **PREMIUM:** NewsAPI blocks all requests made from CLIENT-SIDE without the premium payment.  

  - **NEXT ADVANTAGE:** By using Next SSG & SSR, we can avoid this as our endpoint requests will be server-side.  We need to pass the APIKey in ahead of time using `ENVs` 

**SETUP:**

  - Create `.env.local` in root directory

  - Create new global ENV of `NEWS_API_KEY=` and assign the API Key generated on https://newsapi.org/account as its value

  - Ensure your `NEWS_API_KEY` in `next.config.js` matches this variable: `process.env.NEWS_API_KEY`

&nbsp;

### C. CHALLENGE: STATIC SITE GENERATION for AUSNEWS

**GOAL:** Using the `ReposPage` in `livefolio` as a guide, create a new base route in `codefeed` to loop the top ABC News AU articles into a list of cards:

**EXAMPLE:** You can refer to `https://thecodefeed.vercel.app/` as a guide of what to look like!

**STEPS:**

  - (a) Create a new route in `/pages` to match the link in `Header.jsx` to **ausfeed**

  - (b) Using `getStaticProps` & FetchAPI, fetch the array from the ABC News endpoint & load into the props of the newly routed page.  

    - **ENV:** Using template literals & string interpolation, pass the dynamic `NEWS_API_KEY` into the endpoint request, passed from the envs
  
    - **Refer to ReactDevTools to check the data has loaded into the page**

  - (c) Using our refactoring processes, create a new `/articles` directory in `/feature` components.  Inside, create `/ArticleList` directory + `/ArticleItem` directory

  - (d) In tandem, complete the following: 
  
    - (i) Build the `/ArticleList` component which `maps` against the array and pulls out some data into an `/ArticleItem` component (*HINT: Use the `<Container>` to set the grid and avoid styling*)

    - (ii) Build the `/ArticleItem` component which passes in the individual object properties (*try with just `image` or link `url` to start with*)

    - (iii) Call the `/ArticleList` in the new ausnews route & pass in the dynamic data.  Check that the data displays at a minimum

    - (iv) Feel free to style the `ArticleItem` component further **OR** include the styles provided in the `scss` components file `._articleItem.scss` as a `.module.scss` file & link correctly

  - (e) **ADDITIONAL:** Using `ButtonLink.jsx` try to pass the dynamic `path` prop into the reusable component + `target` to get it to open a new page with the article's site

&nbsp;

### D. CHALLENGE: SERVER-SIDE GENERATION for WORLDNEWS

**GOAL:** Using the `ReposPage` in `livefolio` as a guide, create a new base route in `codefeed` to loop the top ABC News AU articles into a list of cards:

**EXAMPLE:** You can refer to `https://thecodefeed.vercel.app/` as a guide of what to look like!

**STEPS:**

  - (a) Create a new route in `/pages` to match the link in `Header.jsx` to **worldfeed**

  - (b) Using `getServerSideProps` & FetchAPI, fetch the array from the ABC News endpoint & load into the props of the newly routed page.  **Refer to ReactDevTools to check the data has loaded into the page**

  - (c) Complete the same steps as above for `(d)(i)-(iv)` but for the SSR data & ensure it works

&nbsp;

### E. PRE-PREARING YOUR PORTFOLIO APPLICATION

At this point, we have practically finished all aspects of the `dev` build needed for the Assessment, including additional practice with server-side rendering - *which is the trickiest aspect, aside from deployment itself!*

**BEFORE WE DO** - this is a good point to start working on your portfolio before we hit the final complex aspect of Next.js

**OPTIONS FOR PORTFOLIO:**

  - **(a) ENHANCED PORTFOLIO:** Create a Next.js-enhanced version of your Portfolio app build in Term 1, using `livefolio` as an exemplar + *build additional static pages (see rubric)*

  **OR**

  - **(b) NEWS APPLICATION:** Create a Next.js application which has dynamic news articles at its core (*e.g. a sports news aggregator application*), using this `03_codefeed-rendering` as an exemplar + *build additional static pages (see rubric)*

  **OR**

  - **(c) CUSTOM API APPLICATION [HARD]:** Create a Next.js application which feeds in dynamic objects from a custom Next.js API, using `06_codefeed-prebuilt-paths` as your exemplar (*upcoming*)

  **OR**

  - **(d) NOVEL APPLICATION [HARDEST]:** Build from scratch and build in the steps we did in class, to tailor-make your application using a combination of features highlighted with the completed `livefolio` & `codefeed` builds

&nbsp;

**FOR ANY OPTION:**  At this point, you should style & mold your application to what you would like in the following manner:

  - Review the Portfolio task and decide on application design

  - Create base routes & install necessary dependencies
  
  - Create your own global and component-level styling & **choosing a CSS framework system**

  - Craft more pages, as required by portfolio, such as privacy policy page, T&Cs, About Page = **to hit the 10 page marker**

  - Determine your source of dynamic data & choose your minimum form of rendering: CSR, SSG or SSG?