import { Cropper_Logic } from '@/logic'
import { Cropper_Editor, Cropper_Settings, Image_Input } from '@molecules'

const Image_input = () => {
  const { imageSrc, set_Image_Handler } = Cropper_Logic()

  if (imageSrc) {
    return (
      <>
        <Cropper_Editor src={imageSrc} width_Val={100} />
        <Cropper_Settings />
      </>
    )
  } else {
    return <Image_Input set_Image={set_Image_Handler} />
  }
}

export default Image_input
