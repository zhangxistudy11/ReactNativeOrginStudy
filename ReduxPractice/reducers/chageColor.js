import  {
  CHANGE_COLOR
}from "../actions/type"
//这里的state可以是对象或者数组等多种形式
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