import { useState, useEffect, ChangeEvent } from 'react'

import { Set_Image_Path, Get_Image } from '@helpers'

const Cropper_Logic = () => {
  const [img, setImg] = useState<File>()
  const [imgSrc, setImgSrc] = useState<string>()
  const setImgHandler = (value: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string') {
      setImgSrc(value)
    } else {
      setImg(Get_Image(value))
    }
  }
  useEffect(() => {
    img && Set_Image_Path(img, setImgSrc)
  }, [img])
  return { imgSrc, setImgHandler, setImgSrc }
}

export default Cropper_Logic
