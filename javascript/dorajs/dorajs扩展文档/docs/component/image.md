# image 组件

> 用于图片查看，可进行保存、设置壁纸、分享等操作

![Image component](https://ae01.alicdn.com/kf/H2e329054c2444fdfb35c5c6f3b11515dj.jpeg ':size=280x480')

image 组件额外支持设置以下属性：

- `url: Url`: 图片地址

```javascript
module.exports = {
  type: 'image',
  fetch() {
    return {
      url: {
        value:
          'https://ae01.alicdn.com/kf/Hfb994821e07f4b68a8691d6116bdd3157.jpeg',
        headers: {
          Test: 'Test-Header'
        }
      },
      summary: '一段介绍的文字',
      title: '我是标题',
      link: 'https://github.com/DoraKit/vscode-extension',
      author: {
        name: 'linroid',
        avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4',
        route: $route('https://github.com/linroid')
      }
    }
  }
}
```

<button class="run-button" onclick="sendDoraEvent('$router.to','image')">点击运行</button>
