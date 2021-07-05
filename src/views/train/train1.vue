<template>
  <div>
    <section>
      <h3>时间格式化</h3>
    </section>
  </div>
</template>
<script>
export default {
  name:'train1',
  data(){
    return{
      time:'Jun 24, 2021 3:00:12 PM'
    }
  },
  created(){
    this.formatData('Jun 24, 2022 3:00:12 PM');
    console.log(this.$options.filters);
  },
  methods:{
    formatData(value){
      let date = new Date(value);
      let y = date.getFullYear();
      console.log(y);
    }
   
  }
}
</script>