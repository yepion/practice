# audio 组件

> 用于音频播放

![示例](https://ae01.alicdn.com/kf/Hac9dfd0f0dbd46149991c8f2f9fe68f7R.jpeg ':size=280x480')

audio 组件额外支持设置以下属性：

- `url: Url`: 音频播放地址
- `headers: object`: 设置视频网络请求时的 Http 头

```javascript
{
  // ...
  headers: {
    'User-Agent': 'Dora.js/1.0.2',
    'Cookies': '...'
  }
  // ...
}
```

- `hasPrevious: boolean`: 是否还有上一个节目
- `onPrevious()`: 用户点击了“上一个”按钮的回调，应该在这个回调中更改为上一个节目信息
- `hasNext: boolean`: 是否还有下一个节目
- `onNext()`: 用户点击了“下一个”按钮的回调，应该在这个回调中更改为下一个节目信息

```js
module.exports = {
  type: 'audio',
  fetch() {
    return {
      title: 'Audio组件演示',
      url:
        'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3',
      image:
        'https://goss.veer.com/creative/vcg/veer/800water/veer-310433275.jpg',
      hasPrevious: false //
    }
  }
}
```

<button class="run-button" onclick="sendDoraEvent('$router.to','audio')">点击运行</button>
