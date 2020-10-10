<template>
  <div
    class="drag-modal-vue-modal"
    :style="{ width: typeof(width)=='number'?width + 'px':width }"
    :id="id"
  >
    <div class="drag-modal-vue-header" @mousedown="mousedown">
      <div class="drag-modal-vue-title">{{ title }}</div>
      <img class="drag-modal-vue-close" alt="无图片" :src="closeImg" @click.stop="close"/>
    </div>
    <div class="drag-modal-vue-main" :style="{ height: height === 0 ? 'auto' : height + 'px' }">
      <slot></slot>
    </div>
    <div class="drag-modal-vue-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
import closeImg from '../assest/close.png';

export default {
  name: 'mainContent',
  props: {
    title: {
      // 标题
      type: String,
      default: '',
    },
    id: {
      // id
      type: String,
      default: '',
    },
    width: {
      // 宽度
      type: [String, Number],
      default: 500,
    },
    height: {
      // 内部高度
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      modalEl: '', // 保存的modal元素实例
      closeImg, // 关闭按钮图标
    };
  },
  methods: {
    close() {
      this.$emit('cancel');
    },
    mousedown(e) {
      const dv = document.getElementById(this.id);
      let x = 0;
      let y = 0;
      let l = 0;
      let t = 0;
      let isDown = false;
      // 鼠标按下事件
      // 获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;
      // 获取左部和顶部的偏移量
      l = dv.offsetLeft;
      t = dv.offsetTop;
      // 开关打开
      isDown = true;
      // 设置样式
      dv.style.cursor = 'move';
      // 鼠标移动
      window.onmousemove = function (e) {
        if (isDown === false) {
          return;
        }
        // 获取x和y
        const nx = e.clientX;
        const ny = e.clientY;
        // 计算移动后的左偏移量和顶部的偏移量
        const nl = nx - (x - l);
        const nt = ny - (y - t);
        // dv.style.left = nl + 'px'
        // dv.style.top = nt + 'px'
        const windowW = document.body.clientWidth;
        const windowH = document.body.clientHeight;
        if (nl > dv.offsetWidth / 2 && nl + dv.offsetWidth / 2 < windowW) {
          dv.style.left = `${nl}px`;
        } else if (nl < dv.offsetWidth / 2) {
          dv.style.left = `${parseInt(dv.offsetWidth / 2)}px`;
        } else if (nl + dv.offsetWidth / 2 > windowW) {
          `${parseInt(windowW - (dv.offsetWidth / 2))}px`;
        }
        if (nt > dv.offsetHeight / 2 && nt + dv.offsetHeight / 2 < windowH) {
          dv.style.top = `${nt}px`;
        } else if (nt < dv.offsetHeight / 2) {
          dv.style.top = `${parseInt(dv.offsetHeight / 2)}px`;
        } else if (nt + dv.offsetHeight / 2 > windowH) {
          dv.style.top = `${parseInt(windowH - (dv.offsetHeight / 2))}px`;
        }
      };
      // 鼠标抬起事件
      dv.onmouseup = function () {
        // 开关关闭
        isDown = false;
        dv.style.cursor = 'default';
      };
    },
  },
};
</script>
<style src="./index.less">
</style>
