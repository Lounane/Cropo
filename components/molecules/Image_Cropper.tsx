import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { Crop } from 'react-image-crop'
import tw, { styled } from 'twin.macro'
import { FiBarChart2, FiCircle, FiSquare } from 'react-icons/fi'
import { Card } from '@atoms'

const Input_Label = tw.label`flex flex-col items-center gap-1  text-sm cursor-pointer
 svg:(w-5 h-full)
 all-child:(transition duration-300)
 
`
const Input_Field = tw.input` opacity-0
 checked:sibling:text-purple-600
`

export default function Image_Cropper({ src }: { src: string }) {
  const [crop, setCrop] = useState<Crop>(initial_Crop)
  return (
    <>
      <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1} ruleOfThirds>
        <img src={src} />
      </ReactCrop>
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
    </>
  )
}

const initial_Crop: Crop = {
  unit: '%', // Can be 'px' or '%'
  x: 0,
  y: 0,
  width: 50,
  height: 50,
}
