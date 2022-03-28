import tw, { css, styled } from 'twin.macro'
import { FiImage } from 'react-icons/fi'
import { Link, Card } from '@atoms'
import { ChangeEventHandler, Children } from 'react'

const Label = tw(Card)`w-full max-h-full  aspect-ratio[16/9] 
grid place-content-center place-items-center  gap-3  
`.withComponent('label')

const Image_Icon = tw(FiImage)`w-24 h-auto stroke-1 
// text-red-600
bg-gradient-to-tr from-purple-600 p-0
`

// )`w-24 h-auto stroke-1 text-purple-600 stroke-dasharray[100] stroke-dashoffset[100]`

const Input_Field = tw.input`absolute w-full h-full cursor-pointer opacity-0`

type set_Image_Type = { set_Image: ChangeEventHandler<HTMLInputElement> }

const Image_input = ({ set_Image }: set_Image_Type) => (
  <Label>
    <div>
      <Image_Icon></Image_Icon>
    </div>
    <Link as={'button'} Btn>
      Upload Your Image
    </Link>
    <Input_Field type="file" accept="image/*" onChange={set_Image} />
  </Label>
)

export default Image_input
