import { Cropper_Logic } from '@/logic'
import { Cropper_Editor, Cropper_Settings, Image_Input } from '@molecules'
import { always, cond, equals, T, propEq, has } from 'rambda'
import { useState, useReducer, Reducer } from 'react'
export type Crop = {
  x: number
  y: number
  imgWidth: number
  imgHeight: number
  width: number
  height: number
  ratio: number | undefined
  isLockedRatio: boolean
  isCircularCrop: boolean
  isRuleOfThirds: boolean
}

const cropInit: Crop = {
  x: 0,
  y: 0,
  imgWidth: 0,
  imgHeight: 0,
  width: 0,
  height: 0,
  ratio: 1,
  isLockedRatio: true,
  isCircularCrop: false,
  isRuleOfThirds: true,
}
export enum ACTION {
  setPosition,
  setWidth,
  setHeight,
  setRatio,
  lockRatio,
  setImgSize,
  setCircularCrop,
  setRuleOfThirds,
}
type Action_Set_Position = {
  type: ACTION.setPosition
  x: number
  y: number
}
type Action_Set_Width_Height = {
  type: ACTION.setWidth | ACTION.setHeight
  value: number
}
type Action_Set_Ratio = { type: ACTION.setRatio; value: number | undefined }
type Action_Lock_Ratio = {
  type: ACTION.lockRatio
}
type Action_Set_Image = {
  type: ACTION.setImgSize
  width: number
  height: number
}
type Action_Toggle_Options = {
  type: ACTION.setCircularCrop | ACTION.setRuleOfThirds
  value: boolean
}
export type Action =
  | Action_Set_Position
  | Action_Set_Width_Height
  | Action_Set_Ratio
  | Action_Lock_Ratio
  | Action_Set_Image
  | Action_Toggle_Options

function setPosition(state: Crop, action: Action_Set_Position): Crop {
  const { x, y } = action
  return { ...state, x, y }
}

function setWidth(state: Crop, action: Action_Set_Width_Height): Crop {
  const width = +action.value.toFixed()
  const ratio = width / state.height
  const height = state.ratio ? +(width / state.ratio).toFixed() : state.height
  return state.isLockedRatio
    ? { ...state, width, height }
    : { ...state, width, ratio }
}

function setHeight(state: Crop, action: Action_Set_Width_Height): Crop {
  const height = +action.value.toFixed()
  const width = state.ratio ? +(height * state.ratio).toFixed() : state.width
  const ratio = state.width / height
  return state.isLockedRatio
    ? { ...state, width, height }
    : { ...state, height, ratio }
}

function setRatio(state: Crop, action: Action_Set_Ratio): Crop {
  return { ...state, ratio: action.value, isLockedRatio: true }
}

function lockRatio(state: Crop): Crop {
  const isLockedRatio = !state.isLockedRatio
  return { ...state, isLockedRatio }
}

function setImgSize(state: Crop, action: Action_Set_Image): Crop {
  const { width: imgWidth, height: imgHeight } = action
  return { ...state, imgWidth, imgHeight }
}
const cropReducer = (state: Crop, action: Action): Crop => {
  switch (action.type) {
    case ACTION.setPosition:
      return setPosition(state, action)
    case ACTION.setImgSize:
      return setImgSize(state, action)
    case ACTION.setWidth:
      return setWidth(state, action)
    case ACTION.setHeight:
      return setHeight(state, action)
    case ACTION.setRatio:
      return setRatio(state, action)
    case ACTION.lockRatio:
      return lockRatio(state)
    default:
      return state
  }
}
const Cropper = () => {
  const [cropState, cropDispatcher] = useReducer(cropReducer, cropInit)

  const { imageSrc, set_Image_Handler } = Cropper_Logic()
  console.log('Cropper')
  if (imageSrc) {
    return (
      <>
        <Cropper_Editor
          src={imageSrc}
          cropState={cropState}
          cropDispatcher={cropDispatcher}
        />
        <Cropper_Settings
          cropState={cropState}
          cropDispatcher={cropDispatcher}
        />
      </>
    )
  } else {
    return <Image_Input set_Image={set_Image_Handler} />
  }
}

export default Cropper
