<template>
  <div>
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

    </van-cell-group>
    <van-button type="primary">默认按钮</van-button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
