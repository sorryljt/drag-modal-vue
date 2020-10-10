# drag-modal-vue

#### 基于vue,不依赖任何UI库的可拖拽弹窗组件

#### ![演示动画.gif](https://upload-images.jianshu.io/upload_images/18029972-ad5c878a480fe63f.gif?imageMogr2/auto-orient/strip)

#### 安装及使用

```
yarn add drag-modal-vue -S
or
npm install drag-modal-vue -S
```
```
// main.js
import dragModalVue from "drag-modal-vue";
import "drag-modal-vue/lib/main.css"
Vue.use(dragModalVue);
...
```

```
// page.vue
<template>
  <drag-modal-vue
    v-model="visible"
    title="测试弹层"
  >
  基于vue,不依赖任何UI库的可拖拽弹窗组件
  </drag-modal-vue>
</template>
```

#### 属性

| 属性名 | 含义 | 默认值 |类型
| :----:| :----: | :----: |:----: |
| visible(`v-model`)(visible.sync) | 弹窗的显隐 | false | Boolean
| title | 标题 | '' | String
| width | 弹窗宽度 | 500 | Number
| height | 弹窗高度 | 0(auto) | Number
| mask | 是否显示遮罩 | true | Boolean
| maskClosable | 点击遮罩是否允许关闭 | true | Boolean
| zIndex | 内容的`z-index`值 | 10 | Number
| ok | 点击"确认按钮"的回调 | - | Function
| cancel | 点击"取消按钮"的回调 | - | Function

#### 插槽

| 插槽名 | 含义 | 默认值 |类型
| :----:| :----: | :----: |:----: |
| footer | 弹窗页脚 | 确认取消按钮(建议使用自己UI库按钮) | slot
| close | 自定义右上角关闭按钮 | "X"号图片 | slot

#### 代码贡献
[ZSJ1314](https://github.com/ZSJ1314)、[sorryljt](https://github.com/sorryljt)

