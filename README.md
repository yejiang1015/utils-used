# utils-used

## Installing

Using npm:

```bash
$ npm install utils-used
```

Using yarn:

```bash
$ yarn add utils-used
```

## Example

Using es6:

```js
import { fmtdate, fmturl } from 'utils-used';

console.log(fmtdate(new Date(), 'yyyy-MM'));
// 第二个参数选填
console.log(fmturl('name', 'https://github.com?name=github'));
```

Using commonjs:

```js
const utils = require('utils-used');

console.log(utils.fmtdate(new Date(), 'yyyy-MM'));
// 第二个参数选填
console.log(utils.fmturl('name', 'https://github.com?name=github'));
```

## Api List

```js

const utils = require('utils-used');
// -- 可选参数
utils.getCookie(name);
utils.delCookie(name);
utils.setCookie(name, value);

utils.fmtdate(date, fmt);

utils.fmturl(name, --url);

utils.getBrowser();
utils.getOs();

```
