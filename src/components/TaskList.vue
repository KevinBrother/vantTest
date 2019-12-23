<template>
  <div class="looklook">

    <van-row type="flex"
             justify="space-around">
      <van-col span="6">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1"
                             :options="option1" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="10">
        <van-field v-model="value"
                   placeholder="按任务名查询" />
      </van-col>
      <van-col span="6">
        <van-button type="default"
                    text="默认按钮" />
      </van-col>
    </van-row>

  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default Vue.extend({
  data() {
    return {
      value1: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    }
  }
});
</script>
<style lang="less">
.van-row {
  //   background-color: blue;
  //   > van-col {
  //     height: 15px;
  //   }
}
</style>