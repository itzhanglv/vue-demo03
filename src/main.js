import Vue from 'vue'
import App from './App.vue'
import './default.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router.js'
 Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.filter('dateFormate',function(val){
     val=val.toString()
  console.log(val)
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
