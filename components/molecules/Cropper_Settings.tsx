import tw from 'twin.macro'
import { Card } from '@atoms'
import { FiBarChart2, FiCircle, FiSquare } from 'react-icons/fi'
import { ChangeEvent, useState } from 'react'

// const Settings_Container=tw(Card)``
const Input_Number = tw.input`bg-gray-900 shadow-xl text-left p-2 w-full rounded-xl outline-color[#111827] `

const Input_Label = tw.label`flex flex-1 flex-col items-center gap-1  text-sm cursor-pointer p-6 transition duration-300
 svg:(w-5 h-full)
 all-child:(transition duration-300)
 hover:bg-gray-900
 
`
const Input_Field = tw.input` 
hidden 
 checked:[& + label]:(text-purple-600 bg-gray-900)
`

const Cropper_Settings = () => {
  const [aspectRatio, setAspectRatio] = useState(1)
  const [fixedRatio, setFixedRatio] = useState(true)
  const [circularCrop, setCircularCrop] = useState(false)
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)

  function on_Change_Handler(ev: ChangeEvent<HTMLInputElement>) {
    console.log(ev.target.value)
  }

  return (
    <Card>
      {/* <Card> */}
      <Card tw="flex p-0">
        <Input_Field
          type="radio"
          id="square"
          name="aspect"
          value={1}
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
          name="aspect"
          value="circle"
          onChange={on_Change_Handler}
        />
        <Input_Label htmlFor="circle">
          <FiCircle />
          <span>Circle</span>
        </Input_Label>
      </Card>

      <Card as={'form'}>
        <Input_Number type="number" />
      </Card>
    </Card>
  )
}

export default Cropper_Settings
