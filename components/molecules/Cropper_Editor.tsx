import { ChangeEvent, ReactEventHandler, SyntheticEvent, useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from 'react-image-crop'
import tw from 'twin.macro'
type Cropper_Values_Types = {
  src: string
  width_Val?: number
  height_Val?: number
  aspect_Val?: number
}
export default function Cropper_Editor({
  src,
  width_Val = 100,
  aspect_Val,
}: Cropper_Values_Types) {
  const [crop, setCrop] = useState<Crop>()

  function onImageLoad(e: SyntheticEvent<HTMLImageElement, Event>) {
    const { width, height } = e.currentTarget

    const crop = centerCrop(
      makeAspectCrop(
        {
          // You don't need to pass a complete crop into
          // makeAspectCrop or centerCrop.
          unit: '%',
          width: width_Val,
          height: width_Val,
        },
        //@ts-ignore
        aspect_Val,
        width,
        height,
      ),
      width,
      height,
    )

    setCrop(crop)
  }

  const Image = tw.img`rounded-xl`
  return (
    <ReactCrop
      crop={crop}
      onChange={(crop, percentCrop) => setCrop(percentCrop)}
      aspect={aspect_Val}
      ruleOfThirds
    >
      <Image src={src} onLoad={onImageLoad} />
    </ReactCrop>
  )
}

const initial_Crop: Crop = {
  unit: '%', // Can be 'px' or '%'
  x: 0,
  y: 0,
  width: 50,
  height: 50,
}
