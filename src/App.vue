<template>
  <!-- <div> -->
    <router-view></router-view>
    <!-- <div class="container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div> -->
  <!-- </div> -->
</template>

<script>
import { EventBus } from 'vue';
export default {
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    EventBus.$on('isLoading', (data) => {
      this.loading = data;
    })
  },
}
</script>

<!-- <style lang="less">
@bg-left: #485563;
@bg-right: #29323c;
@dot: #909090;
@line: #F8F8F8;

.container {
  height: 300px;
  width: 300px;

  .dot {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 52.5%;
    left: 150px;
    height: 20px;
    width: 20px;
    background-color: @dot;
    border-radius: 5rem;
    transition: all 0.15s ease-in-out;

    &:nth-child(1) {
      left: 80px;
      animation: waveUp 2s, smallExtend 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    &:nth-child(2) {
      left: 115px;
      animation: waveUp 2s, largeExtend 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 0.15s;
    }

    &:nth-child(3) {
      animation: waveUp 2s, smallExtend 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      left: 185px;
      animation: waveUp 2s, largeExtend 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 0.45s;
    }

    &:nth-child(5) {
      left: 220px;
      animation: waveUp 2s, smallExtend 2s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-delay: 0.6s;
    }

    @keyframes waveUp {
      0%,
      15% {
        top: 50%;
      }
      45%,
      65% {
        top: 42.5%;
      }
      85%,
      100% {
        top: 50%;
      }
    }

    @keyframes smallExtend {
      0%,
      8% {
        background-color: @dot;
        height: 20px;
      }
      14%,
      34% {
        background-color: @line;
        height: 47.5px;
      }
      46%,
      100% {
        background-color: @dot;
        height: 20px;
      }
    }

    @keyframes largeExtend {
      0%,
      8% {
        background-color: @dot;
        height: 20px;
      }
      14%,
      34% {
        background-color: @line;
        height: 82.5px;
      }
      46%,
      100% {
        background-color: @dot;
        height: 20px;
      }
    }
  }
}

</style> -->
