import ajax from './ajax'
import request from './request'
import Qs from 'qs' 

export const getHomeTab = () => ajax({
  url: '/api/homeTab'
})

export const getHomeBanner = () => ajax({
  url: '/api/homeBanner'
})

export const getHomeKingKongList = () => ajax({
  url: '/api/homeKingKongList'
})

export const getHomeNewItemList = () => ajax({
  url: '/api/homeNewItemList'
})

export const getDetailDataOne = () => ajax({
  url: '/api/detail/1'
})

export const getDetailDataTwo = () => ajax({
  url: '/api/detail/2'
})

export const getDetailDataThree = () => ajax({
  url: '/api/detail/3'
})

export const getDetailDataFour = () => ajax({
  url: '/api/detail/4'
})

export const getDetailDataFive = () => ajax({
  url: '/api/detail/5'
})

export const getDetailDataSix = () => ajax({
  url: '/api/detail/6'
})

export const getHomeItem = (categoryId) => request({
  url: '/foo/item/list.json',
  params: {
    __timestamp: +new Date(),
    categoryId
  }
})

export const getCategoryLeft = (categoryId = 11) => request({
  url: '/foo/item/cateList.json',
  params: {
    __timestamp: +new Date(),
    categoryId
  }
})

export const getDeseveSwiper = () => request({
  url: '/foo/topic/v1/know/navWap.json'
})

export const getDesevePuBuLiu = (page,size) => request({
  url: '/foo/topic/v1/find/recAuto.json',
  params: {
    page,
    size,
    exceptIds: ''
  }
})

export const getSearch = () => request({
  url: '/foo/xhr/search/init.json',
  method: 'POST',
  headers: {
    'Accept': 'application/x-www-form-urlencoded'
  } 
})

export const getSearchList = (keywordPrefix) => request({
  url: '/foo/xhr/search/searchAutoComplete.json',
  method: 'POST',
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  headers: {
    'Accept': 'application/x-www-form-urlencoded'
  },
  data: {
    keywordPrefix
  }
})