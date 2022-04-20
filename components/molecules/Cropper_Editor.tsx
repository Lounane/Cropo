import { SyntheticEvent, useState, useEffect, Dispatch } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {
  centerCrop,
  Crop as Crop_Type,
  makeAspectCrop,
} from 'react-image-crop'
import { ACTION, Action, Crop } from '../organisms/Cropper'
import { thunkify } from 'ramda'
type Cropper_Values_Types = {
  src: string
  Width: number
  Height: number
  FixedRatio: boolean
  AspectRatio?: number
  CircularCrop?: boolean
  RuleOfThirds?: boolean
}
// export default function Cropper_Editor({
//   src,
//   Width,
//   Height,
//   FixedRatio,
//   AspectRatio,
//   CircularCrop,
//   RuleOfThirds,
// }: Cropper_Values_Types) {
export default function Cropper_Editor({
  src,
  cropState,
  cropDispatcher,
}: {
  src: string
  cropState: Crop
  cropDispatcher: Dispatch<Action>
}) {
  const [crop, setCrop] = useState<Crop_Type>()
  // const [imageWidth, setImageWidth] = useState(0)
  // const [imageHeight, setImageHeight] = useState(0)

  // useEffect(() => console.log(crop), [crop?.height, crop?.height])
  const {
    x,
    y,
    width,
    height,
    ratio,
    isCircularCrop,
    isRuleOfThirds,
    isLockedRatio,
    imgWidth,
    imgHeight,
  } = cropState
  const cropMaker =
    // centerCrop(
    makeAspectCrop(
      {
        x,
        y,
        unit: 'px',
        width,
        height,
      },
      // AspectRatio || Width / Height,
      // ratio || width / height,
      //@ts-ignore
      ratio,
      imgWidth,
      imgHeight,
    )
  // ,
  // imgWidth,
  // imgHeight,
  // )

  function onImageLoad(e: SyntheticEvent<HTMLImageElement, Event>) {
    const { width, height } = e.currentTarget
    // setImageWidth(width)
    // setImageHeight(height)
    cropDispatcher({ type: ACTION.setImgSize, width, height })
    cropDispatcher({ type: ACTION.setRatio, value: width / height })
    cropDispatcher({ type: ACTION.setWidth, value: width / 2 })
  }
  // useEffect(() => {
  //   setCrop(centerCrop(cropMaker, imgWidth, imgHeight))
  //   //   setCrop(cropMaker)
  // }, [imgWidth, imgHeight])
  useEffect(() => {
    setCrop(cropMaker)
  }, [width, height, x, y])
  useEffect(() => {
    setCrop(centerCrop(cropMaker, imgWidth, imgHeight))
  }, [imgWidth, imgHeight])
  // useEffect(() => {
  //   if (crop.height !== height || crop.width !== width) {
  //     const { width, height } = crop

  //     cropDispatcher({ type: ACTION.setWidth, value: width })
  //     cropDispatcher({ type: ACTION.setHeight, value: height })
  //     console.log(crop)
  //   }
  // }, [crop.height, crop.width])

  return (
    <ReactCrop
      crop={crop}
      onChange={(crop, percentCrop) => {
        setCrop(crop)
      }}
      onComplete={(crop, percentCrop) => {
        const { width, height, x, y } = crop

        cropDispatcher({
          type: ACTION.setRatio,
          value: width / height,
        })
        cropDispatcher({ type: ACTION.setWidth, value: width })
        cropDispatcher({ type: ACTION.setHeight, value: height })
        cropDispatcher({ type: ACTION.setPosition, x, y })
        console.log(crop)
      }}
      onDragStart={function (ev) {
        const keepRatio = ev.shiftKey
        if (!keepRatio) {
          cropDispatcher({ type: ACTION.setRatio, value: undefined })
        }
      }}
      aspect={ratio}
      ruleOfThirds={isRuleOfThirds}
      circularCrop={isCircularCrop}
      tw="rounded-xl"
    >
      <img src={src} onLoad={onImageLoad} />
    </ReactCrop>
  )
}
