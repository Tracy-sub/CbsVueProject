<template>
  <div class="cbsMenu">
    <div v-for="(menu, index) in menus" :key="index" class="menu-item" @click="show(menu.menu_id)">
      <a>{{ menu.menu_name }}</a>
    </div>
  </div>
</template>
<script>
// 获取数据
import * as menus from "../assets/js/menuData";
export default {
  name: "CbsMenu",
  data() {
    return {
      menus: menus.menus.data,
    };
  },
  created() {
    },
  methods:{
    show(menu_id){
      this.$emit('menuShow',menu_id);
    }
  }
};
</script>
<style>
@import url("../assets/css/CbsMenu.scss");
</style>