# \$ui

> 简单的界面交互

## \$ui.alert(message: string)

显示一个 `alert` 警告弹窗

```javascript
$ui.alert('Hello World')
// 回调方法
await $ui.alert('Hello World')
console.log('alert 完成')
```

<button class="run-button" onclick="sendDoraEvent('$ui.alert')">点击运行</button>

## \$ui.toast(message: string)

显示一个 `toast` 提示

```javascript
$ui.toast('Hello World!')
```

<button class="run-button" onclick="sendDoraEvent('$ui.toast')">点击运行</button>

## \$ui.browser(url: string)

打开浏览器

```javascript
$ui.browser('https://www.npmjs.com/')
```

<button class="run-button" onclick="sendDoraEvent('$ui.browser')">点击运行</button>

## \$ui.viewUser(userId: string)

查看一个 npm 用户

```javascript
$ui.viewUser('wlor0623')
```

<button class="run-button" onclick="sendDoraEvent('$ui.viewUser')">点击运行</button>

## \$ui.showCode(string)

弹出输出代码

```javascript
$ui.showCode(JSON.stringify({ a: 1, b: 2, c: 3 }, null, '  '))
```

<button class="run-button" onclick="sendDoraEvent('$ui.showCode')">点击运行</button>
