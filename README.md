https://JosephT5566.github.io/my-resume

## How to build a React-app to github homepage

1. `npx create-react-app app-name`
2. `cd app-name`
3. `npm start`
4. `git init`
5. `git remote add origin https://JosephT5566.github.io/app-name`
6. `npm install gh-pages --save-dev`
7. 在package.json中的script新增
```json
    "scripts": {
    ...
    "predeploy": "npm run build", // bundles React in production mode
    "deploy": "gh-pages -d build" // do gh-pages things
    }
```
8. 在package.json中新增
`"homepage": "https://JosephT5566.github.io/app-name"`
9. `npm run deploy` 可以在github的branch看到新的分支 `gh-pages`
