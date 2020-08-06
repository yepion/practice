module.exports = {
  type: 'audio',
  fetch() {
    return {
      title: 'Audio组件演示',
      url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3',
      image: 'https://goss.veer.com/creative/vcg/veer/800water/veer-310433275.jpg',
      headers: {
        'User-Agent': 'Dora.js/1.0.2',
      },
      hasPrevious: false, //是否还有下一个节目
      onNext: () => {
        // 用户点击了“ 下一个” 按钮的回调， 应该在这个回调中更改为下一个节目信息
        $ui.toast("下一个")
      }
    }
  }
}
