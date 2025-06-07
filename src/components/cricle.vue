<template>
    <div class="wheel-container">
      <div class="wheel" :style="{ transform: `rotate(${rotationDeg}deg)` }">
        <div class="slice" v-for="(item, index) in slices" :key="index" :style="{ transform: `rotate(${index * sliceAngle}deg)` }">
          <span>{{ item.label }}</span>
        </div>
      </div>
      <div class="pointer"></div>
      <button @click="spin">开始转动</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 定义转盘的切片数据
  const slices = [
    { label: '奖品1' },
    { label: '奖品2' },
    { label: '奖品3' },
    { label: '奖品4' },
    { label: '奖品5' },
    { label: '奖品6' }
  ];
  
  // 计算每个切片的角度
  const sliceAngle = 360 / slices.length;
  
  // 定义旋转角度的响应式变量
  const rotationDeg = ref(0);
  
  // 定义转动函数
  const spin = () => {
    // 生成一个随机的旋转角度，这里为了确保旋转多圈，加上了 360 * 3
    const randomDegree = Math.floor(Math.random() * 360) + 360 * 10000;
    rotationDeg.value += randomDegree;
  };
  </script>
  
  <style scoped>
  .wheel-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 50px auto;
  }
  
  .wheel {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 5s ease-out;
  }
  
  .slice {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 50%, 100% 0, 100% 100%);
    transform-origin: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .slice:nth-child(odd) {
    background-color: #ff6384;
  }
  
  .slice:nth-child(even) {
    background-color: #36a2eb;
  }
  
  .slice span {
    /* 增大字体大小 */
    font-size: 16px;
    /* 增加字体粗细 */
    font-weight: bold;
    /* 调整文字颜色，确保与背景有足够对比度 */
    color: white;
    /* 优化文字旋转角度 */
    transform: rotate(calc(-45deg - (index * sliceAngle))) translate(0, -30px);
    /* 确保文字在中间 */
    text-align: center;
    /* 防止文字换行 */
    white-space: nowrap;
  }
  
  .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: red;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 10;
  }
  
  button {
    margin-top: 320px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>    