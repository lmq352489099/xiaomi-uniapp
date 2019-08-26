<template>
  <view class="uni-tab-bar">
    <!-- 横向滚动导航 -->
    <scroll-view
      id="tab-bar"
      class="uni-swiper-tab"
      scroll-x
      :scroll-left="scrollLeft"
    >
      <view
        v-for="(tab, index) in tabBars"
        :key="tab.id"
        class="swiper-tab-list"
        :class="tabIndex == index ? 'active' : ''"
        :id="tab.id"
        :data-current="index"
        @click="tapTab(index)"
      >
        <view class="tabitems"> {{ tab.name }} </view>
      </view>
    </scroll-view>
    <!-- 列表 -->
    <swiper
      :current="tabIndex"
      class="swiper-box"
      :duration="300"
      @change="changeTab"
    >
      <swiper-item v-for="(tab, index1) in newsitems" :key="index1">
        <scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
          <!-- index模板内容 -->
          <template v-if="tabBars[index1].template === 'index'">
            {{ tab.index }}

            <block v-for="(v, i) in tab.data" :key="i">
              <template v-if="v.type === 'swiper'">
                <!-- 轮播图 -->
                <swiper-image :resdata="v.data" />
              </template>

              <template v-else-if="v.type === 'indexnavs'">
                <!-- 首页分类 -->
                <index-nav :resdata="v.data"></index-nav>
                <divider></divider>
              </template>

              <template v-else-if="v.type === 'threeAdv'">
                <!-- 三图广告 -->
                <thress-adv :resdata="v.data"></thress-adv>
                <!-- 全局分割线 -->
                <divider></divider>
              </template>

              <template v-else-if="v.type === 'oneAdv'">
                <!-- 大图广告位 -->
                <card
                  :headTitle="v.data.title"
                  :bodyCover="v.data.cover"
                ></card>
                <!-- 	<card>
								<block slot="title"> 标题 </block>
								<image src="../../static/images/bg.jpg" mode="widthFix"></image>
								</card> -->
              </template>

              <template v-else-if="v.type === 'list'">
                <!-- 公告列表组件  750 - 5 = 745 745/ 2 = 372.5 -->
                <view class="row j-sb">
                  <block v-for="(vitem, vindex) in v.data" :key="vindex">
                    <common-list :item="vitem" :index="vindex"></common-list>
                  </block>
                </view>
              </template>
            </block>
            <!-- 加载更多 -->
            <view class="uni-tab-bar-loading">
              {{ tab.loadingText }}
            </view>
          </template>

          <!-- special -->

          <template v-if="tabBars[index1].template === 'special'">
            <block v-for="(v, i) in tab.data" :key="i">
              <template v-if="v.type === 'swiper'">
                <!-- 轮播图 -->
                <swiper-image :resdata="v.data" />
              </template>

              <template v-else-if="v.type === 'indexnavs'">
                <!-- 首页分类 -->
                <index-nav :resdata="v.data"></index-nav>
                <divider></divider>
              </template>

              <template v-else-if="v.type === 'list'">
                <card headTitle="热卖爆破">
                  <!-- 公告列表组件  750 - 5 = 745 745/ 2 = 372.5 -->
                  <view class="row j-sb">
                    <block v-for="(vitem, vindex) in v.data" :key="vindex">
                      <common-list :item="vitem" :index="vindex"></common-list>
                    </block>
                  </view>
                </card>
              </template>
            </block>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
import swiperImage from '@/components/index/swiper-Image.vue';
import indexNav from '@/components/index/index-nav.vue';
import thressAdv from '@/components/index/thress-adv.vue';
import card from '@/components/common/card.vue';
import commonList from "@/components/common/common.vue"

const tpl = {
  data0: {
    "datetime": "40分钟前",
    "article_type": 0,
    "title": "uni-app行业峰会频频亮相，开发者反响热烈!",
    "source": "DCloud",
    "comment_count": 639
  },
  data1: {
    "datetime": "一天前",
    "article_type": 1,
    "title": "DCloud完成B2轮融资，uni-app震撼发布!",
    "image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
    "source": "DCloud",
    "comment_count": 11395
  },
  data2: {
    "datetime": "一天前",
    "article_type": 2,
    "title": "中国技术界小奇迹：HBuilder开发者突破200万",
    "image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
    "source": "DCloud",
    "comment_count": 11395
  },
  data3: {
    "article_type": 3,
    "image_list": [{
      "url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
      "width": 563,
      "height": 316
    }, {
      "url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
      "width": 641,
      "height": 360
    }, {
      "url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
      "width": 640,
      "height": 360
    }],
    "datetime": "5分钟前",
    "title": "uni-app 支持使用 npm 安装第三方包，生态更趋丰富",
    "source": "DCloud",
    "comment_count": 11
  },
  data4: {
    "datetime": "2小时前",
    "article_type": 4,
    "title": "uni-app 支持原生小程序自定义组件，更开放、更自由",
    "image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
    "source": "DCloud",
    "comment_count": 69
  }
};
let dadaa = {
  loadingText: '加载更多...',
  data: [{
    type: "swiper",
    data: [
      { src: '../../static/images/demo/demo4.jpg' },
      { src: '../../static/images/demo/demo4.jpg' },
      { src: '../../static/images/demo/demo4.jpg' }
    ]
  }, {
    type: "indexnavs",
    data: [{ src: '/static/images/indexnav/1.png', text: '新品发布' },
    { src: '/static/images/indexnav/2.gif', text: '小米众筹' },
    { src: '/static/images/indexnav/3.gif', text: '以旧换新' },
    { src: '/static/images/indexnav/4.gif', text: '一分换团' },
    { src: '/static/images/indexnav/5.gif', text: '超值特卖' },
    { src: '/static/images/indexnav/6.gif', text: '小米秒杀' },
    { src: '/static/images/indexnav/7.gif', text: '真心想要' },
    { src: '/static/images/indexnav/8.gif', text: '电视热卖' },
    { src: '/static/images/indexnav/9.gif', text: '家电热卖' },
    { src: '/static/images/indexnav/10.gif', text: '米粉卡' }
    ]
  },
  {
    type: "threeAdv",
    data: {
      big: { src: '/static/images/demo/demo4.jpg' },
      smalltop: { src: '/static/images/demo/demo4.jpg' },
      smalltop2: { src: '/static/images/demo/demo4.jpg' }
    }
  }, {
    type: "oneAdv",
    data: {
      title: "每日精选",
      cover: "/static/images/demo/demo4.jpg"
    }
  },
  {
    type: "list",
    data: [{
      cover: "/static/images/demo/list/1.jpg",
      title: "米家空调",
      oprice: "2699",
      desc: "1.5匹变频",
      pprice: "1399"
    }, {
      cover: "/static/images/demo/list/1.jpg",
      title: "米家空调",
      oprice: "2699",
      desc: "1.5匹变频",
      pprice: "1399"
    }, {
      cover: "/static/images/demo/list/1.jpg",
      title: "米家空调",
      oprice: "2699",
      desc: "1.5匹变频",
      pprice: "1399"
    }, {
      cover: "/static/images/demo/list/1.jpg",
      title: "米家空调",
      oprice: "2699",
      desc: "1.5匹变频",
      pprice: "1399"
    }]
  }
  ]
}
export default {
  components: {
    swiperImage,
    indexNav,
    thressAdv,
    card,
    commonList
  },
  data() {

    return {
      scrollLeft: 0,
      isClickChange: false,
      tabIndex: 0,
      newsitems: [],
      tabBars: [{
        name: '关注',
        id: 'guanzhu',
        template: "index"
      }, {
        name: '推荐',
        id: 'tuijian',
        template: "special"
      }, {
        name: '体育',
        id: 'tiyu',
        template: "special"
      }, {
        name: '热点',
        id: 'redian',
        template: "special"
      }, {
        name: '财经',
        id: 'caijing',
        template: "special"
      }, {
        name: '娱乐',
        id: 'yule',
        template: "special"
      }, {
        name: '军事',
        id: 'junshi',
        template: "special"
      }, {
        name: '历史',
        id: 'lishi',
        template: "special"
      }, {
        name: '本地',
        id: 'bendi',
        template: "special"
      }]
    }
  },
  onLoad() {

    this.newsitems = this.randomfn()
    console.log(this.newsitems);
  },
  methods: {

    // 加载更多
    loadMore(e) {
      setTimeout(() => {
        this.addData(e);
      }, 1200);
    },
    addData(e) {
      if (this.newsitems[e].data.length > 30) {
        this.newsitems[e].loadingText = '没有更多了';
        return;
      }
      // for (let i = 1; i <= 10; i++) {		}
      // this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
      let arr = [{
        type: "swiper",
        data: [
          { src: '../../static/images/demo/demo4.jpg' },
          { src: '../../static/images/demo/demo4.jpg' },
          { src: '../../static/images/demo/demo4.jpg' }
        ]
      }, {
        type: "indexnavs",
        data: [{ src: '/static/images/indexnav/1.png', text: '新品发布' },
        { src: '/static/images/indexnav/2.gif', text: '小米众筹' },
        { src: '/static/images/indexnav/3.gif', text: '以旧换新' },
        { src: '/static/images/indexnav/4.gif', text: '一分换团' },
        { src: '/static/images/indexnav/5.gif', text: '超值特卖' },
        ]
      },
      {
        type: "list",
        data: [{
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399"
        }, {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399"
        }, {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399"
        }, {
          cover: "/static/images/demo/list/1.jpg",
          title: "米家空调",
          oprice: "2699",
          desc: "1.5匹变频",
          pprice: "1399"
        }]
      }
      ]
      this.newsitems[e].data = [...this.newsitems[e].data, ...arr]
      console.log(this.newsitems);

    },
    // 改变tabbar
    async changeTab(e) {
      let index = e.target.current;
      if (this.newsitems[index].data.length === 0) {
        this.addData(index)
      }
      if (this.isClickChange) {
        this.tabIndex = index;
        this.isClickChange = false;
        return;
      }
      let tabBar = await this.getElSize("tab-bar"),
        tabBarScrollLeft = tabBar.scrollLeft;
      let width = 0;

      for (let i = 0; i < index; i++) {
        let result = await this.getElSize(this.tabBars[i].id);
        width += result.width;
      }
      let winWidth = uni.getSystemInfoSync().windowWidth,
        nowElement = await this.getElSize(this.tabBars[index].id),
        nowWidth = nowElement.width;
      if (width + nowWidth - tabBarScrollLeft > winWidth) {
        this.scrollLeft = width + nowWidth - winWidth;
      }
      if (width < tabBarScrollLeft) {
        this.scrollLeft = width;
      }
      this.isClickChange = false;
      this.tabIndex = index; //一旦访问data就会出问题
    },
    getElSize(id) { //得到元素的size
      return new Promise((res, rej) => {
        uni.createSelectorQuery().select("#" + id).fields({
          size: true,
          scrollOffset: true
        }, (data) => {
          res(data);
        }).exec();
      })
    },
    async tapTab(e) { //点击tab-bar
      console.log(e);
      let tabIndex = e;
      if (this.newsitems[tabIndex].data.length === 0) {
        console.log("111111111");
        this.addData(tabIndex)
      }
      if (this.tabIndex === tabIndex) {
        console.log("111111111");
        return false;
      } else {
        console.log("11111111111");
        let tabBar = await this.getElSize("tab-bar"),
          tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
        this.scrollLeft = tabBarScrollLeft;
        this.isClickChange = true;
        this.tabIndex = tabIndex;
      }
    },
    // 生成随机数据
    randomfn() {
      let ary = [];
      // 拿到tabbars的长度,根据长度生成页面
      let tablength = this.tabBars.length
      for (let i = 0; i < tablength; i++) {
        let aryItem = {
          loadingText: '加载更多...',
          data: []
        };
        // if (i < 1) {
        // for (let j = 1; j <= 10; j++) {
        // 	aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
        // }
        // }
        // 给页面添加数据
        if (this.tabBars[i].template === "index") {
          aryItem.data = dadaa.data
        }
        // console.log();
        ary.push(aryItem);

      }
      return ary;
    }
  }
}
</script>

<style>
.tabitems {
  display: inline-block;
  width: 75upx;
  border-bottom: 5upx solid #ffffff;
}

.active .tabitems {
  border-bottom-color: #fd6801;
}

.uni-tab-bar-loading {
  text-align: center;
  font-size: 28upx;
  color: #999;
}
</style>
