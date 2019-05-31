import {
  CHANGE_COLOR
}from './type'

export const addChangeColor = text =>({
    type: CHANGE_COLOR,
    backColor:text
})