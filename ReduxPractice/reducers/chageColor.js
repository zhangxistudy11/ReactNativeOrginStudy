import  {
  CHANGE_COLOR
}from "../actions/type"
//这里的state可以是对象或者数组等多种形式
//tip3:根据类型，将上一层传来数值往下分发
//tip:3 Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

const changeColor = (state={},action) =>{
    const {type,backColor} = action;
    
    switch(type){
        case CHANGE_COLOR:
            return{
                ...state,backColor:backColor
            }
        default:
            return  state
    }
}

export default changeColor;