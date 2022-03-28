import { useState, useEffect, ChangeEvent } from 'react'

import { Set_Image_Path, Get_Image } from '@helpers'

const Cropper_Logic = () => {
  const [image, setImage] = useState<File>()
  const [imageSrc, setImageSrc] = useState<string>()
  const set_Image_Handler = (ev: ChangeEvent<HTMLInputElement>) =>
    setImage(Get_Image(ev))
  useEffect(() => {
    image && Set_Image_Path(image, setImageSrc)
  }, [image])
  return { imageSrc, set_Image_Handler }
}

export default Cropper_Logic
