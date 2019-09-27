import {
  CHANGE_COLOR
}from './type'
//tip:2 改变下一层的state,将数据运送到sotre;进一步可升级为 Action Creator
export const addChangeColor = text =>({
    type: CHANGE_COLOR,
    backColor:text
})

// export function addChangeColor(text){
//   return{type: CHANGE_COLOR,backColor:text}
// }