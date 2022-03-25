import { Dispatch, SetStateAction } from 'react'
function Set_Image_Path(
  image: File,
  setImageSrc: Dispatch<SetStateAction<string | undefined>>,
) {
  const reader = new FileReader()
  reader.readAsDataURL(image)
  reader.onloadend = () => {
    console.log(reader.result)
    setImageSrc(String(reader.result))
  }
}
export default Set_Image_Path
