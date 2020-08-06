module.exports = {
  type: 'list',
  fetch() {
    return [
      {
        title: '上报',
        summary: '',
        route: $route('zxlg')
      }
    ]
  }
}
