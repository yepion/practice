module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [{
      title: 'Title goes here',
      style: 'richMedia',
      image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
      rating: {
        score: 4.5,
        total: 5,
        text: '4.5(1000)'
      },
      summary: 'Secondary line text Lorem ipsum dolor sit amet, nec no nominavi scaevola. Per et sint sapientem, nobis perpetua salutandi mei te.',
      subtitle: 'Subtitle goes here',
      tags: [{
          title: 'Tag 1',
          onClick: this.simpleOnClick
        },
        {
          title: 'Tag 2',
          onClick: this.simpleOnClick
        },
        {
          title: 'Tag 3',
          onClick: this.simpleOnClick
        }
      ],
      actions: [{
          title: 'Action1',
          onClick: this.simpleOnClick
        },
        {
          title: 'Action 2',
          onClick: this.simpleOnClick
        }
      ]
    }, ]
  }
}
