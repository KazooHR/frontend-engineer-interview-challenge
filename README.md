# Frontend Engineering Interview

This repository is a slim representation of WorkTango's frontend design system, and the technical pieces underlying it, notably,

- Frontend framework: [React](https://react.dev/learn)
- Bundler: [Webpack](https://webpack.js.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Package manager: [Yarn (Berry)](https://github.com/yarnpkg/berry)
- Monorepo: [TurboRepo](https://turbo.build/repo)
- Design system management: [Storybook](https://storybook.js.org/)
- Testing: [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

The technologies you will be most familiar with for this exercise:

- HTML, CSS, and Javascript
- React
- TypeScript
- Jest and React Testing Library

WorkTango requires 100% test coverage for its entire codebase.

## Dependencies

- [Node 20](https://nodejs.org/en/download/package-manager)
- [Yarn](https://github.com/yarnpkg/berry)
- any modern web browser

## Development

Once you have the dependencies installed:

```sh
$ yarn            # Install and build node modules

$ yarn test       # To run the tests and generate coverage metrics

$ yarn test:watch # For watch mode!

$ yarn storybook  # To startup Storybook
```

## Contributing

WorkTango has a robust, yet ever-changing set of code conventions and standards. This repository represents the fact that you will be working in code that mixes and matches patterns, and will be expected to improve things as you see them, if you're working adjacent.

Baseline (robot-enforced) standards:

- Use `prettier` (with no options) to format your code
- We require 100% unit test code coverage: everything is either tested [or explicitly ignored](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md) (via `// istanbul ignore next - <REASON>`)
- Tests live right next to the code it's testing, such that `ComponentA.test.tsx` fully covers `ComponentA.tsx`
- We do not use global CSS, or highly-nested CSS. We share as few rules as possible to help [prevent cascade conflicts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).
- Although we do have a few UI-level tests, we generally trust our engineers, design, and QA teams to ensure the user _experience_ of these components comes together appropriately at the end. At the unit level, and especially in our DLS, test logic; test behaviors as best you can, but don't fight with how you can setup the entire world just to test how a few button variants look on screen.
- Trust your tools. When we test things, we only test external dependencies where the benefit of exercising them is worth the performance trade off. (e.g., don't test _that React sends click events._ Trust that that happens OK, and test your handlers in isolation where makes sense.)

## What's next?

Play with the repository, learn the coding practices, boot up Storybook, run the tests, and explore the monorepo. Once you've done that, [check out `EXERCISES.md`](./EXERCISES.md) for some things to play around with in preparation for the technical interview.
