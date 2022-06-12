import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '../components/UserInfo'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'user', component: HelloWorld
    },
    {
      path: '/user', name: 'user', component: UserInfo
    },
    {
      path: '/hello',
      component: HelloWorld,
      props: {
        pMsg: 'Hello World'
      }
    }

  ]
})
