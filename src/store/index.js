import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: []
  },
  mutations: {
    addCart(state, data) {
      state.cartlist.push(data)
    },
    addProduce(state, data) {
      data.count++
    },
    jianCount(state, data) {
      data.oldProduce.count = data.data.count
    },
    jiaCount(state, data) {
      data.oldProduce.count = data.data.count
    },
    isCheck(state, data) {
      data.oldProduce.isCheck = data.data.isCheck
    },
    allCheck(state,data) {
      state.cartlist.forEach(item => {
        item.isCheck = data
      })
    },
    deleteProduce(state,data) {
      state.cartlist.splice(data,1)
    }
  },
  actions: {
    addCart(context, data) {
      let oldProduce = context.state.cartlist.find(item => {
        return data.id == item.id
      })
      if (oldProduce) {
        context.commit('addProduce', oldProduce)
      } else {
        context.commit('addCart', data)
      }
    },
    jianCount(context, data) {
      let oldProduce = context.state.cartlist.find(item => {
        return data.id == item.id
      })
      context.commit('jianCount', { oldProduce, data })
    },
    jiaCount(context, data) {
      let oldProduce = context.state.cartlist.find(item => {
        return data.id == item.id
      })
      context.commit('jiaCount', { oldProduce, data })
    },
    isCheck(context,data) {
      let oldProduce = context.state.cartlist.find(item => {
        return data.id == item.id
      })
      // console.log(oldProduce,data)
      context.commit('isCheck', { oldProduce, data })
    },
    deleteProduce(context,data) {
      let oldProduce = context.state.cartlist.findIndex(item => {
        return data.id == item.id
      })
      console.log(oldProduce)
      context.commit('deleteProduce', oldProduce)
    }
  },
  modules: {
  }
})
