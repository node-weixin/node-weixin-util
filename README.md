#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coveralls Status][coveralls-image]][coveralls-url]

> Weixin basic functions

微信util项目是
([node-weixin-api](https://github.com/node-weixin/node-weixin-api) 
或者
[node-weixin-express](https://github.com/node-weixin/node-weixin-express))
的一个子项目。

它主要用来完成格式数据的转化，生成一些规则数据或者转化，URL等参数的生成与排列，参数的转换，加密，解密等

交流QQ群: 39287176

注:

 [node-weixin-express](https://github.com/node-weixin/node-weixin-express)是基于node-weixin-*的服务器端参考实现。

 [node-weixin-api](https://github.com/node-weixin/node-weixin-api)是基于node-weixin-*的API接口SDK。

 它们都是由下列子项目组合而成:

 1. [node-weixin-config](https://github.com/node-weixin/node-weixin-config)
    用于微信配置信息的校验

 2. [node-weixin-auth](https://github.com/node-weixin/node-weixin-auth)
    用于与微信服务器握手检验

 3. [node-weixin-util](https://github.com/node-weixin/node-weixin-util)
    一些常用的微信请求，加密，解密，检验的功能与处理

 4. [node-weixin-request](https://github.com/node-weixin/node-weixin-request)
    微信的各类服务的HTTP请求的抽象集合

 5. [node-weixin-oauth](https://github.com/node-weixin/node-weixin-oauth)
    微信OAuth相关的操作

 6. [node-weixin-pay](https://github.com/node-weixin/node-weixin-pay)
    微信支付的服务器接口

 7. [node-weixin-jssdk](https://github.com/node-weixin/node-weixin-jssdk)
    微信JSSDK相关的服务器接口

 8. [node-weixin-menu](https://github.com/node-weixin/node-weixin-menu)
    微信菜单相关的操作与命令
    
 9. [node-weixin-user](https://github.com/node-weixin/node-weixin-user)
    微信用户API
    
10. [node-weixin-media](https://github.com/node-weixin/node-weixin-media)
    微信多媒体API

11. [node-weixin-qrcode](https://github.com/node-weixin/node-weixin-qrcode)
    微信二维码API


## Install

```sh
$ npm install --save node-weixin-util
```


## Usage

```js
var nodeWeixinUtil = require('node-weixin-util');
var url, result;
var params = {
  a: '1',
  c: '2',
  '美国': '中国'
};

url = nodeWeixinUtil.toParam(params);
result = nodeWeixinUtil.marshall(params);
result = nodeWeixinUtil.toXml(params);

```


## License

MIT © [node-weixin](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/node-weixin-util.svg
[npm-url]: https://npmjs.org/package/node-weixin-util
[travis-image]: https://travis-ci.org/node-weixin/node-weixin-util.svg?branch=master
[travis-url]: https://travis-ci.org/node-weixin/node-weixin-util
[daviddm-image]: https://david-dm.org/node-weixin/node-weixin-util.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/node-weixin/node-weixin-util
[coveralls-image]: https://coveralls.io/repos/node-weixin/node-weixin-util/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/node-weixin/node-weixin-util?branch=master
