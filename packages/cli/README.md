# SoliBee

[![Solibee](https://github.com/oslabs-beta/Solibee/blob/docs/README/assets/solibee-logo-and-name-v2.png)](https://solibee.dev/)

<p align="center">Solibee is an open-source collection of accessible and customizable components for Solid JS.</p>

## Description

Speed up your SolidJS development with open-source, fully tested & customizable UI components.

## Features

- Easy to use: To get started with Solibee please visit our [documentation](https://solibee.dev/installation) for user-friendly customizable component previews and installation guides.
- Customizable: All Solibee components are built using Solid JS and styled with Tailwind CSS which ensures that each component is easily customizable to fit the design and needs of your project.
- Accessible: Solibee component library is designed with accessibility in mind to ensure that all our users can interact with the components. Our components follow WAI-ARIA design patterns.
- Documented: Comprehensive documentation provided for each component to facilitate easy usage and understanding.
- Reliable: Solibee custom components are written in JavaScript or TypeScript and tested with Jest and Solid JS Testing library.
- Opportunities to contribute: Solibee is an open-source project built for the Solid JS community. If you have any questions, feedback, or suggestions, please visit our [github](https://github.com/oslabs-beta/Solibee) .

## Usage

Solibee CLI to help you get started quickly. To use a component in your project please follow the steps below:

- Run the following command in your terminal. Substitute `ComponentName` with the name of the custom component you would like to use. You can see the preview and the full list of components [here](https://solibee.dev/component/accordion).

```sh
npx solibee create-[ComponentName]
```

- When you run the CLI command above it will automatically install all dev dependencies.

- After successful installation you will find a new Solibee directory created in your root folder. This directory will contain a `CustomComponent`, `Tailwind.config`, `PostCSS.config` files.

- Configure dev dependencies:

  - If you don't have `Tailwind.config` and `PostCSS.config` files in the root directory, bring `Tailwind.config` and `PostCSS.config` files from Solibee directory to your root directory.
  - If you have existing `Tailwind.config` and `PostCSS.config` files in your root directory, integrate Tailwind and PostCSS configurations installed with Solibee.

- Configure Tailwind styles
  - Add the following to your global CSS styles file.

```sh
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
```

- You're ready to go!

## Testing

Solibee component library was built with testing in mind. Testing is done with Jest and Solid JS Testing Library. Testing has been implemented on 100% of custom components. Currently, all tests for the custom components exist in our [github](https://github.com/oslabs-beta/Solibee).

[![Testing](https://github.com/oslabs-beta/Solibee/blob/docs/README/assets/Test-coverage.png)](https://solibee.dev/)

## Contributors

### Marselena Sequoia

<img src="https://github.com/marsbird.png?size=100" alt="marsbird" style="border-radius: 50%; width: 100px; height: 100px; display: block; overflow: hidden;">

- **GitHub:** [@marsbird](https://github.com/marsbird)

### Bongi Sibanda

<img src="https://github.com/trialnerr.png?size=100" alt="trialnerr" style="border-radius: 50%; width: 100px; height: 100px;">

- **GitHub:** [@trialnerr](https://github.com/trialnerr)

### Neul Seo

<img src="https://github.com/neulseo2.png?size=100" alt="neulseo2" style="border-radius: 50%; width: 100px; height: 100px;">

- **GitHub:** [@neulseo2](https://github.com/neulseo2)

### Lillian Tenn

<img src="https://github.com/tenn501.png?size=100" alt="tenn501" style="border-radius: 50%; width: 100px; height: 100px;">

- **GitHub:** [@tenn501](https://github.com/tenn501)

### Congke Zhao

<img src="https://github.com/CK-Zhao.png?size=100" alt="CK-Zhao" style="border-radius: 50%; width: 100px; height: 100px;">

- **GitHub:** [@CK-Zhao](https://github.com/CK-Zhao)

## License

Solibee is an open-source product licensed under the MIT License.

[![Solibee](https://github.com/oslabs-beta/Solibee/blob/docs/README/assets/solibee-logo-thin.png)](https://solibee.dev/)
