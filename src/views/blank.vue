<template>
  <div class="blankMain">
    <div class="box">

    </div>
  </div>
</template>
<script>
  export default {
    created () {
      document.title = '';
    }
  };
</script>
<style lang="stylus" scoped>
.blankMain
  width 100%;
  height 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p
    color: #c7c7c7;
    font-size: 16px;
    text-align center;
</style>

