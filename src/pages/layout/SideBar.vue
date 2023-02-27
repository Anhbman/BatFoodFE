<template>
  <div class="menu">
    <el-row class="menu">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">BatFood</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Khách hàng</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">Món ăn</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
      </el-menu>
    </el-row>

    <!-- Sidebar -->

    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="false">
          <el-submenu index="1">
            <template slot="title">
              <font-awesome-icon icon="fa-solid fa-house" class="icon-item"/>
              <span slot="title">Trang chủ</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Group One</span>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">item four</span>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <font-awesome-icon icon="fa-solid fa-mug-saucer" class="icon-item"/>
              <span slot="title">Nhà hàng</span>
            </template>
            <router-link to="/dashboard/table">
              <el-menu-item index="2-1">
                <font-awesome-icon icon="fa-solid fa-table" class="icon-item"/>
                <span slot="title">Danh sách phòng / bàn</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
          <el-menu-item index="3">
            <font-awesome-icon icon="fa-solid fa-users" class="icon-item"/>
            <span slot="title">Nhân viên</span>
          </el-menu-item>
          <router-link to="/dashboard/food">
            <el-menu-item index="4">
              <font-awesome-icon icon="fa-solid fa-burger" class="icon-item"/>
              <span slot="title">Món ăn</span>
            </el-menu-item>
          </router-link>
          <router-link to="/dashboard/customer/create">
            <el-menu-item index="5">
              <font-awesome-icon icon="fa-solid fa-user" class="icon-item"/>
              <span slot="title">Khách hàng</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row>
          <router-view></router-view>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>
  /* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */

  a { text-decoration: none; }


  .icon-item {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
  }

  /* .menu {
    height: 100%;
  } */
</style>