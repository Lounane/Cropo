import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, { Crop } from 'react-image-crop'

export default function Cropper_Editor({ src }: { src: string }) {
  const [crop, setCrop] = useState<Crop>(initial_Crop)
  return (
    <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={1} ruleOfThirds>
      <img src={src} />
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
