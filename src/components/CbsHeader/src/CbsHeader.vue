<template>
  <div class="cbs-header" :style="{width:`${width}+px`,height:`${height}+px`,backgroundColor:bgColor}">
    <div class="header-logo">logo</div>
    <div class=" user"></div>
  </div>
</template>
<script>
export default {
  name:'CbsHeader',
  props:{
    width:{
      type:String,
      default:'100'
    },
    height:{
      type:String,
      default:'70'
    },
    bgColor:{
      type:String,
      default:'#0188FB'
    },
  }
}
</script>
<style>
  @import url('../assets/css/cbsHeader.scss');
</style>