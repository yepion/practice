# \$router

> 路由操作

## to(route: Route)

跳转到一个新的路由

```javascript
// 跳转指定路由
$router.to($route('article'))
```

<button class="run-button" onclick="sendDoraEvent('$router.to','article')">点击运行</button>

```javascript
// 跳转默认组件路由
$router.to(
  $route('@webview', {
    url: 'https://www.baidu.com'
  })
)
```

<button class="run-button" onclick="sendDoraEvent('$router.to','@webview')">点击运行</button>

```javascript
// 支持URL Scheme
$router.to($route('weixin://'))
```

<button class="run-button" onclick="sendDoraEvent('$router.to','weixin://')">点击运行</button>
