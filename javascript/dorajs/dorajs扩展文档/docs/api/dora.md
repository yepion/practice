# \$dora

> 可以获得 Dora.js 应用的一些信息，以及对扩展实例进行一些配置

## \$dora.mixin(object)

为所有组件继承一个对象

例如，在所有组件 `created()` 时，打印一条日志：

```javascript
$dora.mixin({
  created() {
    console.log('component created')
  }
})
```

## \$dora.versionCode: number

获取 Dora.js 的版本号，如：`10`

```javascript
$ui.toast($dora.versionCode)
```

<button class="run-button" onclick="sendDoraEvent('$dora.versionCode')">点击运行</button>

## \$dora.versionName: string

获取 Dora.js 的版本名，如：`1.0.0`

```javascript
$ui.toast($dora.versionName)
```

<button class="run-button" onclick="sendDoraEvent('$dora.versionName')">点击运行</button>

## \$dora.addons(): Promise<Addon[]>

获取已安装的扩展列表

```javascript
const addons = await $dora.addons()
$ui.showCode(JSON.stringify(addons, null, '  '))
```

<button class="run-button" onclick="sendDoraEvent('$dora.addons')">点击运行</button>

## \$dora.install(url: Url): Promise<Addon | null>

安装一个扩展

```javascript
const result = await $dora.install('npm://@dora.js/unsplash')
$ui.toast(`安装结果: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$dora.install')">点击运行</button>

## \$dora.uninstall(uuid: string): Promise<boolean>

卸载一个扩展

```javascript
const addons = await $dora.addons()
const item = await $input.select({
  title: '卸载哪一个？',
  options: addons.map(addon => ({
    title: addon.displayName,
    uuid: addon.uuid
  }))
})
const result = await $dora.uninstall(item.uuid)
$ui.toast(`卸载结果: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$dora.uninstall')">点击运行</button>

## \$dora.isInstalled(uuid: string): boolean

判断是否安装指定扩展

```javascript
const result = $dora.isInstalled('2f33d8de-c474-4f38-a19b-cf2cab4228cc')
$ui.toast(`安装状态: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$dora.isInstalled')">点击运行</button>

## \$dora.subscribe(userId: string): Promise<boolean>

订阅一个用户

```javascript
const result = await $dora.subscribe('linroid')
$ui.toast(`订阅结果: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$dora.subscribe')">点击运行</button>

## \$dora.isSubscribed(userId: string): boolean

检查是否订阅了这个用户

```javascript
const result = $dora.isSubscribed('linroid')
$ui.toast(`是否订阅该用户: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$dora.isSubscribed')">点击运行</button>

## \$permission.request(family: string)

申请权限

```javascript
const result = await $permission.request('sdcard')
$ui.toast(`申请结果: ${result}`)
```

<button class="run-button" onclick="sendDoraEvent('$permission.request')">点击运行</button>

## \$assets(path: string)

生成 assets 目录下的文件 Url

```javascript
$ui.toast($assets('nokia.jpeg'))
```

<button class="run-button" onclick="sendDoraEvent('$assets')">点击运行</button>

## \$icon(name: string, color: string|null)

生成一个内置图标 Url

```javascript
$ui.toast($icon('ic_settings', 'black'))
```

<button class="run-button" onclick="sendDoraEvent('$icon')">点击运行</button>

## \$route(path: string, data: object)

生成一个路由

```javascript
$ui.toast(
  JSON.stringify(
    $route('index', {
      id: 1
    })
  )
)
```

## \$clipboard.text = String

复制文本

```javascript
$clipboard.text = '文本'
$ui.toast('复制成功')
```

<button class="run-button" onclick="sendDoraEvent('$clipboard.text')">点击运行</button>
