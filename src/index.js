import dragModalVue from './components/modal.vue'

// 在使用组件时，我们提供了Vue.use()的方式，如果使用Vue.use
// 就会调用本身的 install 方法，同时传一个 Vue 这个类的参数，所以一定要像下面这样写

const DragModalVueComponent = {
    install:function(Vue){
        Vue.component('dragModalVue',dragModalVue)
    }
}

export default DragModalVueComponent