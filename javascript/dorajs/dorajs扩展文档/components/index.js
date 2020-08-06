module.exports = {
  type: 'webview',
  async fetch({ args, page }) {
    let url = await getURL();
    return {
      url: url
    }
  },
  async onEvent(event, data) {
    switch (event) {

      case "$ui.toast":
        $ui.toast('Hello World!')
        // switch (data) {
        //   case "$dora.versionCode":
        //     $ui.toast($dora.versionCode)
        //     break;
        //   case "$dora.versionName":
        //     $ui.toast($dora.versionName)
        //     break;
        //   default:
        //     $ui.toast('Hello World!')
        //     break;
        // }

        break;
      case "$ui.browser":
        $ui.browser('https://www.npmjs.com/')
        break;
      case "$ui.viewUser":
        $ui.viewUser('wlor0623')
        break;
      case "$ui.alert":
        $ui.alert('Hello World')
        break;
      case "$ui.showCode":
        $ui.showCode(JSON.stringify({ a: 1, b: 2, c: 3 }, null, '  '))
        break;
      case "$input.confirm":
        let ok = await $input.confirm({
          title: '确认弹窗',
          message: '确定吗?',
          okBtn: '是的'
        })
        $ui.toast(`ok=${ok}`)
        break;
      case "$input.prompt":
        let name = await $input.prompt({
          title: '输入姓名',
          hint: '输入你的姓名',
          value: ''
        })
        $ui.toast(`你好 ${name}`)
        break;
      case "$input.number":
        let age = await $input.number({
          title: '输入年龄',
          hint: '年龄',
          value: ''
        })
        $ui.toast(`年龄: ${age}`)
        break;
      case "$input.password":
        let password = await $input.password({
          title: '输入密码',
          hint: '密码',
          value: ''
        })
        $ui.toast(`密码: ${password}`)
        break;
      case "$input.select":
        if (data === 'multiple') {
          // 多选
          let multipleSelected = await $input.select({
            title: '选择多项',
            multiple: true,
            options: [{
                id: '1',
                title: '选项1'
              },
              {
                id: '2',
                title: '选项2'
              },
              {
                id: '3',
                title: '选项3'
              }
            ]
          })
          $ui.toast(`选择了 ${JSON.stringify(multipleSelected)}`)
        } else {
          // 单选
          let radioSelected = await $input.select({
            title: '选择一个选项',
            options: [{
                id: '1',
                title: '选项1'
              },
              {
                id: '2',
                title: '选项2'
              },
              {
                id: '3',
                title: '选项3'
              }
            ]
          })
          $ui.toast(`选择了 ${JSON.stringify(radioSelected)}`)
        }
        break;
      case "$router.to":
        switch (data) {
          case "weixin://":
            $router.to($route('weixin://'))
            break;
          case "@webview":
            $router.to(
              $route('@webview', {
                url: 'https://www.baidu.com'
              })
            )
            break;
          case "article":
            $router.to(
              $route('types/article')
            )
            break;
          case "image":
            $router.to(
              $route('types/image')
            )
            break;
          case "drawer":
            $router.to(
              $route('types/drawer')
            )
            break;
          case "webview":
            $router.to(
              $route('types/webview')
            )
            break;
          case "topTab":
            $router.to(
              $route('types/topTab')
            )
            break;
          case "bottomTab":
            $router.to(
              $route('types/bottomTab')
            )
            break;
          case "list":
            $router.to(
              $route('types/list')
            )
            break;
          case "audio":
            $router.to(
              $route('types/audio')
            )
            break;
          case "video":
            $router.to(
              $route('types/video')
            )
            break;
          case "list_simple":
            $router.to(
              $route('types/list_simple')
            )
            break;
          case "list_label":
            $router.to(
              $route('types/list_label')
            )
            break;
          case "list_chips":
            $router.to(
              $route('types/list_chips')
            )
            break;
          case "list_icon":
            $router.to(
              $route('types/list_icon')
            )
            break;
          case "list_dashboard":
            $router.to(
              $route('types/list_dashboard')
            )
            break;
          case "list_vod":
            $router.to(
              $route('types/list_vod')
            )
            break;
          case "list_live":
            $router.to(
              $route('types/list_live')
            )
            break;
          case "list_richMedia":
            $router.to(
              $route('types/list_richMedia')
            )
            break;
          case "list_gallery":
            $router.to(
              $route('types/list_gallery')
            )
            break;
          case "list_book":
            $router.to(
              $route('types/list_book')
            )
            break;
          case "list_article":
            $router.to(
              $route('types/list_article')
            )
            break;
          case "list_richContent":
            $router.to(
              $route('types/list_richContent')
            )
            break;
          case "list_category":
            $router.to(
              $route('types/list_category')
            )
            break;
          default:
            break;
        }

        break;
      case "$dora.versionCode":
        $ui.toast($dora.versionCode)
        break;
      case "$dora.versionName":
        $ui.toast($dora.versionName)
        break;
      case "$dora.addons":
        const addons1 = await $dora.addons()
        $ui.showCode(JSON.stringify(addons1, null, '  '))
        break;
      case "$dora.install":
        const result = await $dora.install('npm://@dora.js/unsplash')
        $ui.toast(`安装结果: ${result}`)
        break;
      case "$dora.uninstall":
        const addons2 = await $dora.addons()
        const item = await $input.select({
          title: '卸载哪一个？',
          options: addons2.map(addon => ({
            title: addon.displayName,
            uuid: addon.uuid
          }))
        })
        $ui.toast(`卸载结果: ${ await $dora.uninstall(item.uuid)}`)
        break;
      case "$dora.isInstalled":
        $ui.toast(`安装状态: ${$dora.isInstalled('2f33d8de-c474-4f38-a19b-cf2cab4228cc')}`)
        break;
      case "$dora.subscribe":
        $ui.toast(`订阅结果: ${ await $dora.subscribe('wlor0623')}`)
        break;
      case "$dora.isSubscribed":
        $ui.toast(`是否订阅该用户: ${$dora.isSubscribed('wlor0623')}`)
        break;
      case "$permission.request":
        $ui.toast(`申请结果: ${await $permission.request('sdcard')}`)
        break;
      case "$assets":
        $ui.toast($assets('nokia.jpeg'))
        break;
      case "$icon":
        $ui.toast($icon('ic_settings', 'black'))
        break;
      case "$clipboard.text":
        $clipboard.text = (new Date()).getTime()
        $ui.toast('复制成功')
        break;
      case "$prefs.open":
        $prefs.open()
        break;
      case "$prefs.get":
        $prefs.get('name')
        break;
      case "$prefs.set":
        $prefs.set('name', 'Dora.js')
        break;
      case "$prefs.all":
        $prefs.all()
        break;
      case "$http.get":
        $http
          .get('https://www.baidu.com', {
            params: {
              ID: 12345
            }
          })
          .then(res => {
            $ui.showCode(JSON.stringify(res.data))
          })
          .catch(err => {
            console.error(err)
          })
        break;
      case "$http.post":
        $http
          .post('https://www.baidu.com', {
            username: 'admin',
            password: 'admin'
          })
          .then(res => {
            $ui.showCode(res)
          })
          .catch(err => {
            console.error(err)
          })
        break;
      case "$storage.put":
        $storage.put('time', new Date().getTime());
        $ui.toast("保存成功")
        break;
      case "$storage.get":
        $ui.toast($storage.get('time'))

        break;
      case "$storage.all":
        $ui.showCode(JSON.stringify($storage.all()))

        break;
      case "$storage.has":
        $ui.showCode($storage.has('time'))

        break;
      default:
        console.error("未找到匹配事件");


        break;
    }
  }
}

function getURL() {
  return new Promise((resolve, reject) => {
    let port = $storage.get("port");
    setTimeout(() => {
      resolve(`http://localhost:${port}`)
    }, 1000);
  });
}
