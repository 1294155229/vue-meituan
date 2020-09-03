<template>
  <div class="header">
    <div class="contain">
      <div class="nav">
        <ul class="left">
          <li class="city"><i class="iconfont">&#xe60f;</i>郑州</li>
          <li class="changeCity">
            <router-link to="changecity">切换城市</router-link>
          </li>
          <li class="login"><router-link to="/login">立即登录</router-link></li>
          <li class="regist"><router-link to="/regist">注册</router-link></li>
        </ul>
        <ul class="right">
          <li>我的美团</li>
          <li>手机APP</li>
          <li>商家中心</li>
          <li>美团规则</li>
          <li>网站导航</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 40px;
  background-color: rgb(248, 248, 248);
  cursor: pointer;
}
.nav {
  width: 100%;
  height: 100%;
  color: rgb(102, 102, 102);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav ul {
  height: 100%;
  display: flex;
  align-items: center;
}
.city {
  margin-right: 4px;
}
.nav .city i {
  font-size: 10px;
}
.changeCity a {
  padding: 2px 0;
  margin-right: 4px;
  border: 1px solid rgb(229, 229, 229);
}
.login a {
  margin-left: 10px;
  color: rgb(254, 140, 0);
}
.regist a {
  margin-left: 10px;
}
ul.right {
  width: 389px;
  justify-content: space-between;
}
</style>
