import { Cropper_Logic } from '@/logic'
import { Cropper_Editor, Cropper_Settings, Image_Input } from '@molecules'

const Cropper = () => {
  const { imageSrc, set_Image_Handler } = Cropper_Logic()
  console.log('Cropper')
  if (imageSrc) {
    return (
      <>
        <Cropper_Editor
          src={imageSrc}
          width_Val={10}
          height_Val={10}
          // aspect_Val={16 / 9}
          // aspect_Val={undefined}
        />
        <Cropper_Settings />
      </>
    )
  } else {
    return <Image_Input set_Image={set_Image_Handler} />
  }
}

export default Cropper
