# axios-on-rails
This provide axios with csrf token for Ruby on Rails project.

# How to install
## npm
```
npm install --save axios-on-rails
```
## yarn
```
yarn add axios-on-rails
```

# Usage
This enable you to send post/put/patch/delete requests without setting csrf token.

```
import axios from 'axios-on-rails'

axios.post(url).then((response) => {
  console.log(response.data)
})
```
