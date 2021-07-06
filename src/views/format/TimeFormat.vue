<template>
  <div>
    <h3>时间格式化</h3>
    <section>
      <p>"Jun 24, 2021 3:00:12 PM" --> 2021年六月24日</p>
      <p>{{formatData('Jun 24, 2021 3:00:12 PM')}}</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "TimeFormat",
  data() {
    return {
      time: "Jun 24, 2021 3:00:12 PM",
      timeStamp:''//时间戳
    };
  },
  created() {
    console.log(new Date().getTime());//1625541562240
  },
  methods: {
    // time 时间格式化
    formatData(value) {
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      console.log(`${year}年${month}月${day}日`);
      return `${year}年${month}月${day}日`;
    },
    // time时间格式化 指定格式
    timeFormatData(time,format){
      console.log(time);
      console.log(format);
    }
  },
};
</script>
<style>
@import url('assets/css/timeFormat.scss');
</style>