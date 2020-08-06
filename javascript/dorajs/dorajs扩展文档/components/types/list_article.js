module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      time: 'just now',
      title: '任天堂 Switch 国行版上市, 腾讯提供本地化网络服务',
      style: 'article',
      author: {
        name: 'xx媒体'
      },
      image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
      summary: '12 月 4 日，腾讯集团和任天堂在上海举行发布会，宣布腾讯引进的任天堂新世代游戏机 Nintendo Switch 将于 12 月 10 日正式发售 ... 有「马力欧之父」称号的任天堂株式会社代表取缔役、专门领域开发主导宫本茂通过视频形式表示：任天堂长久以来，一直希望可以为中国顾客提供任天堂的游戏娱乐，现在这个梦想得以实现，真的感到十分高兴，也十分感谢 ... 腾讯游戏任天堂合作部总经理钱赓介绍，关于未来 Nintendo Switch 的网络服务方面，腾讯在国内架设了适合中国网络环境的网络系统，将通过云服务，设立了本地化的网络服务'
    }]
  }
}
