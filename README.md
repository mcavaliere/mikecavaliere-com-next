<div id="top"></div>

<h3 align="center">MikeCavaliere.com in Next.js</h3>

  <p align="center">
    In-progress Next.js UI rewrite for MikeCavaliere.com (currently WordPress). Uses WordPress headlessly for the moment; all data will eventually be moved off of WordPress.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

My existing personal site at [MikeCavaliere.com](https://mikecavaliere.com/) is running on WordPress, and I want a new, faster version built with Next.js and Chakra-UI, using all the great toys like SSG, a serverless API and so on. 

The first version will be a new design that pulls data from WP headlessly; eventually I'll move off WP entirely. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Chakra-UI](https://chakra-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You'll need a headless [WordPress](https://wordpress.org) installation to populate the article pages.

For more details on this, see the Next.js example repo, ["A statically generated blog example using Next.js and WordPress"](https://nextjs.org/docs/basic-features/pages) . This is where the WordPress data fetching logic was taken from.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mcavaliere/mikecavaliere-com-next.git
   ```
1. Install dependencies by running `yarn` (or `yarn install`).
1. Copy `.env.local.example` to `.env.local`
1. Fill in any relevant environment variables.
1. Start the project by running `yarn dev`, like any other Next.js app.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Twitter - [@mcavaliere](https://twitter.com/mcavaliere)

<p align="right">(<a href="#top">back to top</a>)</p>

## Demo

### [https://mikecavaliere-com-next.vercel.app/](https://mikecavaliere-com-next.vercel.app/)
