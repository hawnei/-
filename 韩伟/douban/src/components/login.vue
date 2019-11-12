<template>
  <div class="login">
    <div class="w">
      <!-- {{isFine}} -->
      <div class="close" @click="close">
        <!-- <i class="fa fa-times" aria-hidden="true"></i> -->
        <span class="iconfont icon-E607"></span>
      </div>
      <div class="title">
        <h1>登录豆瓣</h1>
        <p>
          登录注册表示同意
          <span>豆瓣使用协议、隐私政策</span>
        </p>
      </div>
      <div class="form">
        <form>
          <input type="text" placeholder="手机号/邮箱" v-model.number="user.phone" />
          <input type="password" placeholder="密码" v-model="user.pwd" />
          <span class="err" v-show='isLogin'>用户名或密码错误</span>
          <button :disabled="!isFine" :class="{'active':isFine}" @click="skip">登录</button>
        </form>
      </div>
      <div class="signup">
        <span>免密码登录</span>
        <span>海外手机登录</span>
        <i>找回密码</i>
      </div>
      <div class="moresign">
        <p>第三方登录</p>
        <div class="icon">
          <i class="fa fa-weibo" aria-hidden="true"></i>
          <i class="fa fa-weixin" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//使用watch computed 监听
export default {
  //  watch 监听手机号和密码的值 正则通过 ->
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        pwd: ""
      },
      // 是否通过正则
      isPhone: false,
      isPwd: false,
      //判断用户是否存在
      isLogin:false
    };
  },
  computed: {
    isFine() {
      if (this.isPhone && this.isPwd) {
        return true;
      }
      return false;
    },
    monitorPhone() {
      return this.user.phone;
    },
    monitorPwd() {
      return this.user.pwd;
    }
  },
  // watch 监听对象 使用computed return出来
  // 纯粹练手 实际 使用 input事件
  watch: {
    monitorPhone(val) {
      var phnumber = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
      var emali = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (phnumber.test(val) || emali.test(val)) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    },
    monitorPwd(val) {
      var reg = /\S{8,16}/;
      if (reg.test(val)) {
        this.isPwd = true;
      } else {
        this.isPwd = false;
      }
    }
  },
  methods: {
    skip() {
      //首先判断用户是否存在
      if(true){
         this.$router.push("/mine");
      }else{
        this.isLogin=true;
      }
    },
    //暂时没思路 想法是从哪个组件过来点击就回去
    close() {
     this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@color: #39bb4a;
span.err{
  color: red;
  font-size:18px; 
}
.login {
  .w {
    width: 3.56rem;
    margin: 0 auto;
    .close {
      font-size: 28px;
      margin: .2rem
    }
    .title {
      text-align: center;
      p {
        color: #ccc;
        span {
          color: @color;
        }
      }
    }
    .form {
      width: 100%;
      margin-top: 0.3rem;
      input,
      button {
        width: 95%;
        height: 0.5rem;
      }
      input {
        border: 1px solid #eee;
        text-indent: 2em;
      }
      button {
        margin: 0.2rem 0;
        color: #fff;
        border-radius: 5px;
        border: none;
        background-color: #a0deaa;
      }
      button.active {
        background-color: @color;
      }
    }
    .signup {
      width: 95%;
      span {
        color: @color;
      }
      i {
        float: right;
        font-style: normal;
      }
    }
    .moresign {
      margin-top: 1rem;
      text-align: center;
      color: #ccc;
      .icon i {
        font-size: 30px;
        // width: 0.2rem;
        // height: 0.2rem;
        padding:.1rem;
        border-radius: 100%;
        margin: 0.3rem;
        box-shadow: 0.01rem 0.1rem 0.2rem #ccc;
      }
      i.fa-weibo {
        color: red;
      }
      i.fa-weixin {
        color: @color;
      }
    }
  }
}
</style>
