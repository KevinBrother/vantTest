<template>
  <div>
    <van-row>
      <van-col span="8">
        <van-cell-group>
          <van-cell title="单元格"
                    value="内容" />
          <van-cell title="单元格"
                    value="内容"
                    label="asdfasdff" />
          <van-cell title="URL 跳转"
                    is-link
                    url="/vant/mobile.html" />
          <van-cell title="路由跳转"
                    is-link
                    to="/HelloWorld" />
          <div>
            <van-button type="primary"
                        center="true">默认按钮</van-button>
          </div>
        </van-cell-group>
      </van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({

});
</script> 


<script>
/* export default {

} */
</script>

