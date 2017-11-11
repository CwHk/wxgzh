<template>
  <div class="nsr-loading-center" >
    <i class="fa fa-spinner fa-spin"
    :class="{'nsr-loading-hiden': hideLoading}"
    >
    </i>
    {{isEndText}}
  </div>
</template>

<script>
export default {
  props: {
    hideLoading: {
      // default: true
    },
    isEndText: {
      // default: ''
    }
  },
}
</script>

<style>
.nsr-loading-center {
  text-align: center;
  color: #929292;
  margin: 0.2rem auto 0.2rem auto;
}
body .nsr-loading-hiden {
  display: none;
}
</style>