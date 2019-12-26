<template>
  <div id="login">
    <van-panel>
      <van-field v-model="username"
                 placeholder="请输入用户名" />
      <van-field v-model="password"
                 placeholder="请输入用户名" />
      <van-button type="warning"
                  @click="login()">登录</van-button>
    </van-panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login () {
      /*   http://192.168.1.13:8080/Login/
        {"username":"admin","password":"123456"} */

      this.axios.post('/Login', {
        username: this.username,
        password: this.password
      }).then(res => {

        console.log('这儿是正确的回调');
        if (res.data.code === 0) {
          localStorage.setItem('token', res.data.token)
          // 将登录名使用vuex传递到各个页面
          this.$store.commit('handlerToekn', res.data.token);
          this.$toast(res.data.msg);

          // 跳转到首页
          var that = this;
          setTimeout(function () {
            that.$router.push({ name: 'TaskList' })
          }, 1000)
        }
      }).catch(function (error) {
        console.log(error, "这儿是错误回调");
        this.$toast(error.msg);
      });
    }
  }
}
</script>

<style lang="less">
/* #login {
  background: url("../assets/login.png") center center no-repeat;
  background-color: red;
  width: 100%;

  height: 100%;

  background-color: #f5f5f5;

  position: fixed;
}
.van-panel {
  opacity: 0;
  * {
    margin: 30px;
  }
} */
</style>>

