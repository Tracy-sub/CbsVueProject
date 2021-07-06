<template>
  <div class="cbs">
    <cbs-header></cbs-header>
    <!-- <button @click="jumpTrain">跳转train</button> -->
    <div class="cbs-container">
      <cbs-menu @menuShow="menuShow" class="cbs-con-left"></cbs-menu>
      <section class="cbs-con-right">
        <component :is="rightComponent"></component>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data(){
    return{
      rightComponent:null,
    }
  },
  methods: {
    jumpTrain() {
      this.$router.push({ name: "train1" });
    },
    // 展示
    menuShow($el) {
      console.log($el);
      this.rightComponent = $el
    },
  },
};
</script>
<style lang="scss" scoped>
.cbs {
  width: 100%;
  height: 100%;
}
.cbs-container{
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: space-between;
}
.cbs-con-right{
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  border: 1px solid green;
}
</style>