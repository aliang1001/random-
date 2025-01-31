import axios from 'axios'
import * as constants from './constants'
const changHomeDate = (result) =>({
    type: constants.CHANGE_HOME_DATA,
    topicList : result.topicList,
    articleList :result.articleList,
})

const addHomeList = (list,nextPage) =>({
  type : constants.Add_ARTICLE_LIST,
  list: list,
  nextPage
})

export const getHomeInfo = ()=>{
  return ( (dispatch)=>{
    axios.get('/api/home.json').then(res=>{
      const result = res.data.data
      dispatch(changHomeDate(result))
    })
  } )
}

export const getMoreList = (page)=>{
  return ( (dispatch)=>{
    axios.get('/api/homeList.json?page=' + page).then(res=>{
      const result = res.data.data
      dispatch(addHomeList(result,page+1))
    })
  } )
}
export const toggleTopShow = (show)=>({
  type : constants.TOGGLE_TOPSHOW,
  show
})