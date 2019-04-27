# jquery-hash
jQuery plugin to return a hash for a string using SHA 1/256/384/512 and the web crypto api

demo: https://angeal185.github.io/jquery-hash

### Installation

npm

```sh
$ npm install jquery-hash --save
```

#### browser

```html
<script src="./path-to/jquery.min.js"></script>
<script src="./dist/jq-hash.min.js"></script>
```

### info


```js
// demo

/**
* $.hash(str, digest, enc, cb)
* @param {string} str ~ string to be hashed
* @param {string} digest ~ 1/256/384/512
* @param {string} enc ~ hex/base64/Uint8
* @param {function} cb ~ callback
*/

$.hash('hello world!', '512', 'hex',function(i){
 console.log(i)
});

```
