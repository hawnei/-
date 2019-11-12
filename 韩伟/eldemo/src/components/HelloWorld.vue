<template>
  <div class="box">
    <div class="formWrap">
      <p>ETH管理系统</p>
      <div class="form">
        <div class="demo-input-suffix">
          <el-input placeholder="请选择日期" prefix-icon="el-icon-user" v-model="input1"></el-input>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-key" v-model="input2" show-password></el-input>
        </div>
        <el-row>
          <el-button type="primary">登录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      input1: "",
      input2: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  background-color: #00fa9a;
  position: relative;
  
}
</style>