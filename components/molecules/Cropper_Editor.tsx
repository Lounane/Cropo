import { SyntheticEvent, useState, useEffect, Dispatch } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {
  centerCrop,
  Crop as Crop_Type,
  makeAspectCrop,
} from 'react-image-crop'
import { ACTION, Action, Crop } from '../organisms/Cropper'
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
  }, [width, height, imgHeight, imgWidth, x, y])
  // useEffect(() => {
  //   if (crop.height !== height || crop.width !== width) {
  //     const { width, height } = crop

  //     cropDispatcher({ type: ACTION.setWidth, value: width })
  //     cropDispatcher({ type: ACTION.setHeight, value: height })
  //     console.log(crop)
  //   }
  // }, [crop.height, crop.width])
  function fixit() {
    // cropDispatcher({
    //   type: ACTION.setRatio,
    //   value: ratio,
    // })
    console.log('hhhhh')
  }

  function fixRatio(ratio: number) {
    return fixit
  }
  return (
    <ReactCrop
      crop={crop}
      onChange={(crop, percentCrop) => {
        setCrop(crop)
      }}
      onComplete={(crop, percentCrop) => {
        const { width, height, x, y } = crop
        // document.removeEventListener('keydown', fixit)

        cropDispatcher({
          type: ACTION.setRatio,
          value: width / height,
        })
        cropDispatcher({ type: ACTION.setWidth, value: width })
        cropDispatcher({ type: ACTION.setHeight, value: height })
        cropDispatcher({ type: ACTION.setPosition, x, y })
        console.log(crop)
      }}
      onDragStart={ev => {
        const initRatio = cropState.ratio || 1
        console.log(ev)
        // const target = ev.target as HTMLDivElement
        // const cropFrame = target.offsetParent
        // document.addEventListener('keydown', fixRatio(initRatio))
        // const { x: newX, y: newY } = ev
        const keepRatio = ev.shiftKey
        if (!keepRatio) {
          cropDispatcher({ type: ACTION.setRatio, value: undefined })
          // cropDispatcher({ type: ACTION.lockRatio })
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
