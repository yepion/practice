module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
        title: 'Coding...',
        style: 'live',
        image: 'https://ae01.alicdn.com/kf/Hfb994821e07f4b68a8691d6116bdd3157.jpeg',
        label: '英雄联盟',
        viewerCount: '1.1k',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      {
        title: 'Coding...',
        style: 'live',
        image: 'https://ae01.alicdn.com/kf/Hfb994821e07f4b68a8691d6116bdd3157.jpeg',
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      {
        title: 'Coding...',
        style: 'live',
        image: 'https://ae01.alicdn.com/kf/Ha7e5289304d14988bd76bb818c179204c.jpg',
        spanCount: 12,
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
    ]
  }
}
