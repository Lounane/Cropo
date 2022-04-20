import tw from 'twin.macro'
import { Card, Input } from '@atoms'
import { FiBarChart2, FiCircle, FiSquare } from 'react-icons/fi'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Link_Icon } from '@icons'
import { ACTION, Action, Crop } from '../organisms/Cropper'
import { always, cond, equals } from 'ramda'

const Inputs_Container = tw(
  Card,
)`grid grid-template[  "width aspectRatio" "height aspectRatio" /3fr 1fr] pb-0 pt-8`

const Aspect_Ratio = tw.button`grid-area[aspectRatio] relative  overflow-hidden grid place-items-center
svg:(z-index[1]  filter drop-shadow-3xl)
before:( content block h-1/2 w-full border-2 rounded-xl border-dashed border-gray-500 absolute transform translate-x--1/2 translate-y-1/2 origin-center  top-0 )
hover:before:border-purple-600
// hocus:svg:text-purple-400
`
const Label_Number = tw.label` 
grid grid-template["input unit" /3fr 1fr] 
cursor-pointer text-left py-8
`
// const Input_Number = tw.input`bg-gray-900 shadow-xl text-left p-3 w-full rounded-l-xl outline-none
// grid-area[input] transition duration-300
// hocus:bg-gray-700
// hocus:[& + span]:text-purple-500
// `
const Input_Number = tw(Input)`
rounded-r-none
grid-area[input] 
hocus:bg-gray-700
hocus:[& + span]:text-purple-500
`
const Input_Header = tw.span`absolute px-2 py-1`
const Input_Unit = tw.span`grid-area[unit] grid place-items-center
bg-gray-800 rounded-r-xl
transition duration-300 
`

const Input_Label = tw.label`flex flex-1 flex-col items-center gap-1  text-sm cursor-pointer p-6 transition duration-300
 svg:(w-5 h-full)
 all-child:(transition duration-300)
 hover:bg-gray-900
 
`
const Input_Field = tw.input` 
hidden 
 checked:[& + label]:(text-purple-600 bg-gray-900)
`
enum INPUT_NAME {
  shape = 'shape',
  ratioLocker = 'ratioLocker',
  circle = 'circle',
  width = 'width',
  height = 'height',
}

// type cropSetters = {
//   setFixedRatio: Dispatch<SetStateAction<boolean>>
//   setAspectRatio: Dispatch<SetStateAction<number>>
//   setCircularCrop: Dispatch<SetStateAction<boolean>>
//   setRuleOfThirds: Dispatch<SetStateAction<boolean>>
//   setWidth: Dispatch<SetStateAction<number>>
//   setHeight: Dispatch<SetStateAction<number>>

//   FixedRatio: boolean
// }
// const Cropper_Settings = ({
//   setFixedRatio,
//   setAspectRatio,
//   setCircularCrop,
//   setRuleOfThirds,
//   setWidth,
//   setHeight,
//   FixedRatio,
// }: cropSetters) => {
const Cropper_Settings = ({
  cropState,
  cropDispatcher,
}: {
  cropState: Crop
  cropDispatcher: Dispatch<Action>
}) => {
  const { isLockedRatio } = cropState
  function on_Change_Handler(ev: any) {
    const input = ev.currentTarget
    //   console.log(ev.currentTarget.name)
    // switch (input.name) {
    //   case INPUT_NAME.ratioLocker:
    // cropDispatcher({ type: ACTION.lockRatio })
    //     break
    //   case INPUT_NAME.width:
    //     cropDispatcher({ type: ACTION.setWidth, value: +input.value })
    //     break
    //   case INPUT_NAME.height:
    //     cropDispatcher({ type: ACTION.setHeight, value: +input.value })
    //     break
    // }
    console.log(input)
    const cropActionMapper: Map<string, Action> = new Map([
      [INPUT_NAME.ratioLocker, { type: ACTION.lockRatio }],
      [INPUT_NAME.width, { type: ACTION.setWidth, value: +input.value }],
      [INPUT_NAME.height, { type: ACTION.setHeight, value: +input.value }],
    ])
    const action = cropActionMapper.get(input.name)

    if (action) {
      console.log(action)
      cropDispatcher(action)
    }
  }
  // const t = equals(INPUT_NAME.ratioLocker)
  // const doo = cropDispatcher({ type: ACTION.lockRatio })
  // // type tt = typeof t
  // const on_Change_Handler = cond<[b: INPUT_NAME], void>([[t, doo]])

  return (
    <Card>
      {/* <Card> */}
      <Card tw="flex p-0">
        <Input_Field
          type="radio"
          id="square"
          name={INPUT_NAME.shape}
          onChange={on_Change_Handler}
          defaultChecked
        />
        <Input_Label htmlFor="square">
          <FiSquare />
          <span>Square</span>
        </Input_Label>

        <Input_Field
          type="radio"
          id="circle"
          name={INPUT_NAME.shape}
          value="circle"
          onChange={on_Change_Handler}
        />
        <Input_Label htmlFor="circle">
          <FiCircle />
          <span>Circle</span>
        </Input_Label>
      </Card>

      <Inputs_Container>
        <Label_Number tw="grid-area[width]">
          <Input_Header>Width :</Input_Header>

          <Input_Number
            type="number"
            name={INPUT_NAME.width}
            onChange={on_Change_Handler}
            value={cropState.width}
          />
          <Input_Unit>px</Input_Unit>
        </Label_Number>

        <Label_Number tw="grid-area[height]">
          <Input_Header>Height :</Input_Header>

          <Input_Number
            type="number"
            name={INPUT_NAME.height}
            onChange={on_Change_Handler}
            value={cropState.height}
          />
          <Input_Unit>px</Input_Unit>
        </Label_Number>

        {/* <Aspect_Ratio onClick={() => setFixedRatio(val => !val)}> */}
        <Aspect_Ratio
          name={INPUT_NAME.ratioLocker}
          onClick={on_Change_Handler}
          // onClick={() => {
          // console.log('fixedRatio:', FixedRatio)
          // setFixedRatio(val => !val)
          // }}
        >
          <Link_Icon link={isLockedRatio} />
        </Aspect_Ratio>
      </Inputs_Container>
    </Card>
  )
}

export default Cropper_Settings
