<template>
  <div
    class="drag-modal-vue-modal-warp" 
    v-show="visible" 
    :style="{ background: mask ? 'rgba(0, 0, 0, 0.5)' : 'transparent', 'z-index': zIndex }"
    @click.self="onClickMask"
  >
    <main-content
        v-if="visible"
        :id="modalId"
        :title="title"
        :width="width"
        :height="height"
        @cancel="cancel"
    >
      <slot></slot>
      <template v-slot:footer>
        <slot name="footer">
          <button class="drag-modal-vue-modal-btn" @click="confirm">确 定</button>
          <button class="drag-modal-vue-modal-btn" @click="close">取 消</button>
        </slot>
      </template>
    </main-content>
  </div>
</template>

<script>
import mainContent from './mainContent'

export default {
  name: 'dragModalVue',
  props: {
    title: {
      // 标题
      type: String,
      default: ''
    },
    width: {
      // 宽度
      type: [String, Number],
      default: 500
    },
    height: {
      // 内部高度
      type: Number,
      default: 0
    },
    mask: {
      // 是否显示遮罩
      type: Boolean,
      default: true
    },
    maskClosable: {
      // 点击蒙层是否允许关闭
      type: Boolean,
      default: true
    },
    zIndex: {
      // 内部高度
      type: Number,
      default: 10
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    mainContent
  },
  data () {
    return {
      modalId: 'ufModal'
    }
  },
  watch: {
  },
  methods: {
    /**
     * @description: 关闭 并发送cancel事件
     */
    close () {
      this.$emit('cancel')
      this.$emit('afterClose')
      this.$emit('update:visible', false)
      this.$emit('close', false)
    },
    /**
     * @description:
     */
    confirm () {
      this.$emit('ok')
      this.close()
    },
    onClickMask () {
      if (this.maskClosable) {
        this.close()
      }
    },
    cancel () {
      this.close()
    }
  },
  model: {
    prop: 'visible',
    event: 'close'
  },
  created () {
    if (this.visible) {
      this.modalId = 'ufModal_' + parseInt(Math.random() * 1e10)
    }
  }
}
</script>
<style src="./index.less">
</style>