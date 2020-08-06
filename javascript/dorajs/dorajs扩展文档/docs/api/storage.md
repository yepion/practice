# \$storage

> key-value 的本地数据存储

## \$storage.put(key, value)

存入一个数据，如果该 `key` 已经存在，会替换掉已有的值

参数：

- `key: string`: 存入的 key，用于标识这个数据
- `value: any`: 要存的值

```javascript
$storage.put('time', new Date().getTime())
```

<button class="run-button" onclick="sendDoraEvent('$storage.put')">点击运行</button>

## \$storage.get(key): any

获取 `key` 的值

```javascript
$ui.toast($storage.get('time'))
```

<button class="run-button" onclick="sendDoraEvent('$storage.get')">点击运行</button>

## \$storage.all(): object

获取本地保存的所有数据，返回的是一个 key-value Map

```javascript
$ui.showCode($storage.all())
```

<button class="run-button" onclick="sendDoraEvent('$storage.all')">点击运行</button>

## \$storage.has(key): boolean

是否存在 `key` 的数据，返回一个布尔值

```javascript
$ui.showCode($storage.has('time'))
```

<button class="run-button" onclick="sendDoraEvent('$storage.has')">点击运行</button>
