import tw from 'twin.macro'
import { FiImage } from 'react-icons/fi'
import { Link } from '@atoms'
import { useState, useEffect } from 'react'
import { Set_Image_Path, Get_Image } from '@helpers'
import { Image_Cropper } from '@molecules'

const Input_Container = tw.label`relative w-full aspect-ratio[16/9]   p-2 bg-gray-700 rounded-xl grid place-content-center place-items-center  gap-3`

const Image_Icon = tw(FiImage)`w-24 h-auto stroke-1 text-purple-600`
const Input_Field = tw.input`absolute w-full h-full cursor-pointer opacity-0`

const Image_input = () => {
  const [image, setImage] = useState<File>()
  const [imageSrc, setImageSrc] = useState<string>()
  useEffect(() => {
    image && Set_Image_Path(image, setImageSrc)
  }, [image])

  return (
    <Input_Container>
      {imageSrc ? (
        <Image_Cropper src={imageSrc} />
      ) : (
        <>
          <Image_Icon />
          <Link as={'button'} Btn>
            Upload Your Image
          </Link>
          <Input_Field
            type="file"
            accept="image/*"
            onChange={ev => setImage(Get_Image(ev))}
          />
        </>
      )}
    </Input_Container>
  )
}

export default Image_input
