# \$http

> 进行 http 网络请求

Dora.js 运行时集成了著名的网络请求库 [axios](https://github.com/axios/axios)，`$http` 只是它的一个别名，除此之外没有任何其他区别。

因为 axios 已经有非常好的文档了，本文档就不再详细说明，具体可参见 [axios 官方文档](https://github.com/axios/axios)，使用时将官方文档中的 `axios` 替换为 `$http` 即可，这里会举一些常见的例子供大家快速上手，读者也可以查看 [Dora.js 官方扩展仓库](https://github.com/DoraKit/samples) 中的示例来学习。

## 发送 GET 请求

```javascript
$http
  .get('https://www.baidu.com', {
    params: {
      ID: 12345
    }
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.error(err)
  })
```

<button class="run-button" onclick="sendDoraEvent('$http.get')">点击运行</button>

## 发送 POST 请求

```javascript
axios
  .post('https://www.baidu.com', {
    username: 'admin',
    password: 'admin'
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.error(err)
  })
```

<button class="run-button" onclick="sendDoraEvent('$http.post')">点击运行</button>

## await 异步调用 GET 方法

```javascript
module.export {
    async fetch() {
        let resp = await $http.get('https://api.example.com/')
        console.log(resp.data)
    }
}
```

## await 异步调用 POST 方法

```javascript
module.export {
    async fetch() {
        let resp = await $http.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        console.log(resp.data)
    }
}
```
