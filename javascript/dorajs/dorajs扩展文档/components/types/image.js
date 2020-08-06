module.exports = {
  type: 'image',
  fetch() {
    return {
      url: {
        value: 'https://ae01.alicdn.com/kf/Hfb994821e07f4b68a8691d6116bdd3157.jpeg',
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
