# \$prefs

> 读取和设置配置项

对配置项操作: [配置项](/arch/prefs)

## \$prefs.open():

打开配置页面

```javascript
$prefs.open()
```

<button class="run-button" onclick="sendDoraEvent('$prefs.open')">点击运行</button>

## \$prefs.get(key): any?

读取一个配置项的值，返回值类型取决于 `prefs.json` 中设置的数据类型

参数:

- `key: string` 配置项的 key

```javascript
$prefs.get('name')
```

<button class="run-button" onclick="sendDoraEvent('$prefs.get')">点击运行</button>

## \$prefs.set(key, value)

设置一个配置项的值

参数：

- `key: string` 配置项的 key
- `value: any?` 配置项的值，类型需要和 `prefs.json` 中设置的数据类型保持一致

```javascript
$prefs.set('name', 'Dora.js')
```

<button class="run-button" onclick="sendDoraEvent('$prefs.set')">点击运行</button>

## all(): object

获取所有配置项的 key-value 值

```javascript
$prefs.all()
```

<button class="run-button" onclick="sendDoraEvent('$prefs.all')">点击运行</button>
