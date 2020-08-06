async function isSubscribed() {
  const author = "wlor0623";
  let isSubscribed = $dora.isSubscribed(author);
  if (isSubscribed === false) {
    let checkSubscribe = await $input.confirm({
      title: "提示",
      message: "是否订阅脚本作者,以获取更新",
      okBtn: "好的"
    })
    if (checkSubscribe) {
      let result = await $dora.subscribe(author);
      if (result) {
        $ui.toast("订阅成功!");
      } else {
        $ui.toast("订阅失败,请重试!");
      }
    }
  }
}
module.exports = {
  isSubscribed
}
