<template>
  <div class="cbs-header" :style="{width:`${width}+px`,height:`${height}+px`,backgroundColor:bgColor}">
    
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
  @import url('../../../assets/static/css/components/cbsHeader.scss');
</style>