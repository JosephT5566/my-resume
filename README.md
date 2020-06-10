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

## How to use CSSTransition

[CSSTransition](http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-props)

[Improve your UI with React Transition Group: A guide with examples](https://blog.logrocket.com/improve-your-ui-with-react-transition-group-999fa35f7cae/)

### Installation

```
# npm
npm install react-transition-group --save

# yarn
yarn add react-transition-group
```

### Import

```js
import CSSTransition from 'react-transition-group'
```

### Use

使用component `CSSTransition`時，有幾個主要的`props`要設定

* `in`: boolean，控制element是否出現
* `timeout`: 進入或離開DOM所需的毫秒數
* `unmountOnExit`: 元素消失時，實際上將完全離開DOM

其餘請參照[官方](http://reactcommunity.org/react-transition-group/css-transition#CSSTransition-props)敘述

example: 

```html
<CSSTransition
  in={this.state.example}
  timeout={300}
  classNames='example'
  unmountOnExit
>
```

設定對應的CSS，使用上是在給定的class name加上**後綴**，`enter`, `enter-active`, `exit`, 和 `exit-active`

* `example-enter`: 當props `in`設為*true*時，element會接收到此CSS
* `example-enter-active`: CSS `example-enter`執行完就會接著新增此CSS，在此設定轉換的行為
* `example-exit`: 當props `in`設為*false*時，element會接收到此CSS
* `example-exit-active`: CSS `example-exit`執行完就會接著新增此CSS，在此設定轉換的行為

example:

```CSS
.cardTransition-enter {
    height: 0px;
}

.cardTransition-enter-active {
    height: 100px;
    transform: translateY(0%);
    transition: all 300ms ease;
}

.cardTransition-exit {
    height: 100px;
}

.cardTransition-exit-active {
    height: 0px;
    transform: translateY(0%);
    transition: all 300ms ease;
}
```

`*-active` class代表想要用怎樣的動畫來表現，所以宣告出`transition`是很重要的，否則就不會出現想要的轉換效果。