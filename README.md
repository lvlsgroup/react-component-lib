## Setup
### DEVELOPMENT
1. `npm i`
2. `npm run dev`
### WORKFLOW
0. You got a feature to create a dropdown for Project X and think it could be used by other projects.
1. Create a new branch from master, example `add-dropdown-component`
2. Bump version in package.json (example 0.0.1 to 0.0.2)
3. Create a pull request to merge `add-dropdown-component` into `master`
4. Merge it to master after review
5. Wait 5 minutes (circleCI needs to publish it to npm)
6. Go to Project X and bump react-component-lib to `0.0.2`
7. If Project X didnt get it, try `rm -rf node_modules` and `rm -rf package-lock.json` and then do `npm i`
