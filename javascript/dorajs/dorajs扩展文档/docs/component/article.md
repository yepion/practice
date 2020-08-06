# article 组件

> 用于查看文章

![Article component](../_media/article_component.webp ':size=280x480')

article 组件额外支持设置以下属性：

- `time: string|null` 文章时间
- `content: object` 文章的内容，支持以下属性：
- `url: Url|null`: 文章地址，设置该值后，Dora.js 可以识别出内容相对路径的资源。如果 content 值
- `html: string|null`: Html 内容
- `markdown: string|null`: Markdown 内容
- `text: string|null`: 纯文本 内容
- `charset: string`: 编码格式，默认为 UTF-8
  如果只设置了 `url`，则会以 webview 形式打开

```js
module.exports = {
  type: 'article',
  title: '欢迎使用 Dora.js，官网：https://dorajs.com/',
  image: 'https://www.wangbase.com/blogimg/asset/201909/bg2019091201.jpg',
  async fetch() {
    const resp = await $http.get('https://docs.dorajs.com/README.md')
    return {
      content: {
        markdown: resp.data,
        charset: 'utf-8'
      }
    }
  }
}
```

<button class="run-button" onclick="sendDoraEvent('$router.to','article')">点击运行</button>
