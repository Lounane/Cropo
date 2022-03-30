import tw, { css, styled } from 'twin.macro'
import { FiImage } from 'react-icons/fi'
import { Link, Card } from '@atoms'
import { ChangeEventHandler, Children } from 'react'
import { Image_Icon } from '@icons'

const Label = tw(Card)`w-full max-h-full  aspect-ratio[16/9] 
grid place-content-center place-items-center  gap-3
`.withComponent('label')

const Input_Field = tw.input`absolute w-full h-full cursor-pointer opacity-0 `

type set_Image_Type = { set_Image: ChangeEventHandler<HTMLInputElement> }

const Image_input = ({ set_Image }: set_Image_Type) => (
  <Label>
    <Image_Icon size="6rem" />
    <Link as={'button'} Btn>
      Upload Your Image
    </Link>
    <Input_Field type="file" accept="image/*" onChange={set_Image} />
  </Label>
)

export default Image_input
