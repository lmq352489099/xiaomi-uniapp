<template>
  <div>
    <!-- <view class="status_bar"> -->
      <!-- 这里是状态栏 -->
    <!-- </view> -->
    <web-view src="http://192.168.1.128:8082/"></web-view>
  </div>
</template>

<script>
var wv;//计划创建的webvie
 // #ifdef APP-PLUS
let statusHeight = plus.navigator.getStatusbarHeight();
console.log(statusHeight);

  // #endif
export default {
  onLoad() {
    // uni.setNavigationBarTitle({
    //   title: '新手教程'
    // });
    plus.navigator.setStatusBarBackground("#FF6666");
    let aa = plus.navigator.getStatusBarBackground();
    console.log(aa);
    
  },
  onReady() {

    // #ifdef APP-PLUS
    var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
    setTimeout(function () {
      plus.navigator.setStatusBarBackground("#FF6666");
        let aa = plus.navigator.getStatusBarBackground();
      console.log(aa);
      wv = currentWebview.children()[0]
      wv.setStyle({ top: statusHeight })
    }, 1000); //如果是页面初始化调用时，需要延时一下
    // #endif
  }
}
</script>

<style lang="scss" scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background: white;
}
</style>