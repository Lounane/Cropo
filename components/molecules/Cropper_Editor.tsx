import {
  ChangeEvent,
  ReactEventHandler,
  SyntheticEvent,
  useState,
  useMemo,
  memo,
} from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from 'react-image-crop'
type Cropper_Values_Types = {
  src: string
  width_Val?: number
  height_Val?: number
  aspect_Val?: number
}
export default function Cropper_Editor({
  src,
  width_Val = 100,
  height_Val = 100,
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
          //@ts-ignore
          unit: '%',
          width: width_Val,
          height: height_Val,
          // x: 0,
          // y: 0,
          // width: 50,
          // height: 50,
        },
        //@ts-ignore
        aspect_Val ?? width / height,
        // 16 / 9,
        width,
        height,
      ),
      width,
      height,
    )
    console.log(crop)
    setCrop(crop)
  }

  return (
    <ReactCrop
      crop={crop}
      onChange={(crop, percentCrop) => setCrop(percentCrop)}
      aspect={aspect_Val}
      ruleOfThirds
      tw="rounded-xl"
    >
      <img
        src={src}
        onLoad={onImageLoad}
        // onLoad={_ => console.log('re')}
      />
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
