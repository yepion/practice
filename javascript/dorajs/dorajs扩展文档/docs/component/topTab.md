# topTab 组件

> 顶部 tab 组件

topTab 组件额外支持设置以下属性：

- `items: object[]`: 顶部的 tab
- `tabMode: string`: 设置 tab 模式，支持以下值：
- auto: 自动模式，默认为 auto
- fixed: 固定大小，会横向填充整个屏幕宽度
- scrollable: 可滚动

![示例](https://ae01.alicdn.com/kf/H0dfcbe5f916e4cd092ed59bec84ec07bf.jpg ':size=280x300')

```javascript
module.exports = {
  type: 'topTab',
  tabMode: 'fixed',
  fetch() {
    return [
      {
        title: '电影',
        image: $icon('movie'),
        route: $route('movies')
      },
      {
        title: '电视剧',
        image: $icon('tv'),
        route: $route('soap')
      }
    ]
  }
}
```

<button class="run-button" onclick="sendDoraEvent('$router.to','topTab')">点击运行</button>

```javascript
module.exports = {
  type: 'topTab',
  actions: [
    {
      title: 'tabMode',
      onClick: async function () {
        const option = await $input.select({
          title: '选择 tabMode',
          options: [
            {
              title: 'fixed',
              value: 'fixed'
            },
            {
              title: 'scrollable',
              value: 'scrollable'
            }
          ]
        })
        this.tabMode = option.value
      }
    }
  ],
  items: [
    {
      title: 'Tab 1',
      route: $route('empty')
    },
    {
      title: 'Tab  2',
      route: $route('empty')
    },
    {
      title: 'Tab  3',
      route: $route('empty')
    },
    {
      title: 'Tab  4',
      route: $route('empty')
    }
  ]
}
```
