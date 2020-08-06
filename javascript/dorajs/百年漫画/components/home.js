module.exports = {
  type: 'topTab',
  fetch() {
    let items = []
    let ca = [
      '最近更新-/page/new',
      '排行榜榜-/page/hot',
      '大陆漫画-/list/dalu',
      '真人漫画-/list/zhenren',
      '少年漫画-/list/shaonian',
      '少女漫画-/list/shaonv',
      '青年漫画-/list/qingnian',
      '女性漫画-/list/nvxing',
      '武侠格斗-/list/wuxiagedou',
      '海外漫画-/list/haiwaimanhua',
      '其它漫画-/list/qita',
      '漫画大全-/page/all'
    ]
    ca.map(data => {
      data = data.split('-')
      items.push({
        title: data[0],
        style: 'list',
        route: $route('tag', {
          tag: data[1]
        })
      })
    })
    return items
  }
}
