<template>
  <NavBar>
  </NavBar>
  <t-layout>
    <t-layout>
      <t-content>
        <router-view></router-view>
      </t-content>
    </t-layout>
  </t-layout>
  <Down>
  </Down>

</template>

<script>
import NavBar from './components/NavBar.vue'
import Down from './components/Down.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'

export default {
  components:{
    NavBar,
    Down
  },
  setup() {
    // // 测试LoginService
    // $.ajax({
    //   url: "http://127.0.0.1:2000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: 'nonfire',
    //     password: '309223',
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp); 
    //   }
    // });
    // // 测试InfoService
    // $.ajax({
    //   url: "http://127.0.0.1:2000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ZTcwYTBmZGMzOWM0N2IyYThhN2QyYmUxY2FiNWFhZCIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2NTEzMTkyNywiZXhwIjoxNjY2MzQxNTI3fQ.nYxFZvn8w_lToeXvWOap9k9KWX_iSUFJJPcH0pkxlrU",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });
    // // 测试RegisterService
    // $.ajax({
    //   url: "http://127.0.0.1:2000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: "xxx",
    //     password: "phmy",
    //     confirmedPassword: "phmy",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // })
  }

}
</script>

<style>

</style>
