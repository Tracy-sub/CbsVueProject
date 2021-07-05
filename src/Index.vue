<template>
  <div>
    <cbs-header></cbs-header>
    <!-- <button @click="jumpTrain">跳转train</button> -->
    <cbs-menu></cbs-menu>
  </div>
</template>
<script>
export default {
  name:'Index',
  methods:{
    jumpTrain(){
      this.$router.push({name:'train1'})
    }
  }
}
</script>