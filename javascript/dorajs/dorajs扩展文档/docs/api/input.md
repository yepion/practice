# \$input

> 用户输入操作

## \$input.confirm(params: ConfirmParams): Promise<boolean>

显示一个确认弹窗

- `title: string`: 标题
- `message: string`: 文本消息
- `okBtn: string|null`: 确定按钮的文字，默认为“确定”

返回一个 `Promise<boolean>`，值表示用户是否点了确定按钮

```javascript
let ok = await $input.confirm({
  title: '确认弹窗',
  message: '确定吗?',
  okBtn: '是的'
})
$ui.toast(`ok=${ok}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.confirm')">点击运行</button>

## \$input.prompt(data: object): Promise<boolean>

请求输入文本：

- `title: string`: 标题
- `hint: string|null`: 输入提示
- `value: string|null`: 默认值
- `okBtn: string|null`: 确定按钮的文字，默认为“确定”

返回一个 `Promise<string|null>`，值为用户输入的内容，null 表示用户取消了输入

```javascript
let name = await $input.prompt({
  title: '输入姓名',
  hint: '输入你的姓名',
  value: ''
})
$ui.toast(`你好 ${name}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.prompt')">点击运行</button>

## \$input.text(params: InputParams): Promise<boolean>

请求输入数字

- `title: string`: 标题
- `hint: string|null`: 输入提示
- `value: string|null`: 默认值
- `okBtn: string|null`: 确定按钮的文字，默认为“确定”

返回一个 `Promise<string|null>`，值为用户输入的内容，null 表示用户取消了输入

```javascript
let age = await $input.number({
  title: '输入年龄',
  hint: '年龄',
  value: ''
})
$ui.toast(`年龄: ${age}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.number')">点击运行</button>

## \$input.password(params: InputParams): Promise<boolean>

请求输入密码

- `title: string`: 标题
- `hint: string|null`: 输入提示
- `value: string|null`: 默认值
- `okBtn: string|null`: 确定按钮的文字，默认为“确定”

返回一个 `Promise<string|null>`，值为用户输入的内容，null 表示用户取消了输入

```javascript
let age = await $input.password({
  title: '输入密码',
  hint: '密码',
  value: ''
})
$ui.toast(`密码: ${age}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.password')">点击运行</button>

## \$input.select(data: object): Promise<boolean>

单项选择

```javascript
let selected = await $input.select({
  title: '选择一个选项',
  options: [
    {
      id: '1',
      title: '选项1'
    },
    {
      id: '2',
      title: '选项2'
    },
    {
      id: '3',
      title: '选项3'
    }
  ]
})
$ui.toast(`选择了 ${JSON.stringify(selected)}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.select')">点击运行</button>

## \$input.select(data: object): Promise<boolean>

多项选择

```javascript
let selected = await $input.select({
  title: '选择多选项',
  multiple: true,
  options: [
    {
      id: '1',
      title: '选项1'
    },
    {
      id: '2',
      title: '选项2'
    },
    {
      id: '3',
      title: '选项3'
    }
  ]
})
$ui.toast(`选择了 ${JSON.stringify(selected)}`)
```

<button class="run-button" onclick="sendDoraEvent('$input.select','multiple')">点击运行</button>
