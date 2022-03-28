import tw from 'twin.macro'
import { Card } from '@atoms'
import { FiBarChart2, FiCircle, FiSquare } from 'react-icons/fi'

const Input_Label = tw.label`flex flex-col items-center gap-1  text-sm cursor-pointer
 svg:(w-5 h-full)
 all-child:(transition duration-300)
 
`
const Input_Field = tw.input` opacity-0
 checked:sibling:text-purple-600
`

const Cropper_Settings = () => (
  <Card>
    <Input_Label>
      <Input_Field type="radio" name="aspect" value="square" />
      <FiSquare />
      <span>Square</span>
    </Input_Label>

    <Input_Label>
      <Input_Field type="radio" name="aspect" value="circle" />
      <FiCircle />
      <span>Circle</span>
    </Input_Label>

    <Input_Label>
      <Input_Field type="radio" name="aspect" value="custom" />
      <FiBarChart2 />
      <span>Custom</span>
    </Input_Label>
  </Card>
)

export default Cropper_Settings
