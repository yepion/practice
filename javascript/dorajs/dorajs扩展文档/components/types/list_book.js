module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        image: 'https://img1.doubanio.com/view/subject/l/public/s2768378.jpg',
        title: '三体',
        style: 'book'
      },
      {
        image: 'https://img3.doubanio.com/view/subject/l/public/s8958650.jpg',
        title: 'JavaScript高级程序设计',
        style: 'book'
      },
    ]
  }
}
