import tw, { css, styled } from 'twin.macro'
import { FiImage } from 'react-icons/fi'
import { Link, Card, Input } from '@atoms'
import {
  ChangeEvent,
  ChangeEventHandler,
  Children,
  Fragment,
  useState,
} from 'react'
import { Image_Icon, Remove_Icon, Search_Icon } from '@icons'
import Link_icon from '@/assets/icons/Link_Icon'
import { not } from 'rambda'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Transition } from '@headlessui/react'

const ImgSelector = tw(Card)`w-full max-h-full  aspect-ratio[16/9] 
// grid place-content-center place-items-center  gap-3
flex flex-col place-content-center place-items-center gap-2

transition duration-1000
`.withComponent('label')

const InputUrl = tw(Input)`
rounded-r-none 
transition-opacity duration-1000
// w-1/2
// opacity-0 hidden
// scale-x-0
// translate-x-[ 100vw ]  
`
const Btn = tw(Link)`
`.withComponent('button')
const BtnContainer = tw.div`
w-full  h-10  z-0
flex justify-between 
duration-300  

[&.transition]:[&-appear, &-enter]:(opacity-0 )
[&.transition]:[&-appear-active, &-enter-active]:opacity-100
// [&.transition-exit]:opacity-100
[&.transition-exit-active]:opacity-0
`

const Input_Field = tw.input`absolute w-full h-full cursor-pointer opacity-0 `
const Label = tw(Btn)``.withComponent('label')
type set_Image_Type = {
  // changeEvent
  // set_Image: string | ChangeEventHandler<HTMLInputElement>
  set_Image: (value: string | ChangeEvent<HTMLInputElement>) => void
}

const Image_input = ({ set_Image }: set_Image_Type) => {
  const [importByUrl, setImportByUrl] = useState(false)

  return (
    <>
      <ImgSelector>
        <Image_Icon size="6rem" />
        <Input_Field
          type="file"
          accept="image/*"
          onChange={set_Image}
          id="imgInput"
        />
        {/* <div tw="flex h-10 space-x-2 justify-between w-10/12"> */}
        {/* <Link as={'button'} Btn> */}
        <SwitchTransition>
          <CSSTransition
            // in={!importByUrl}
            key={importByUrl ? 1 : 2}
            appear={true}
            timeout={300}
            classNames="transition"
            unmountOnExit
          >
            {!importByUrl ? (
              <BtnContainer>
                <Label htmlFor="imgInput" Btn>
                  Choose an Image
                </Label>
                <Btn
                  type="button"
                  Btn
                  // tw="h-full z-0 "
                  onClick={() => setImportByUrl(not)}
                >
                  <Link_icon link size="100%" />
                </Btn>
              </BtnContainer>
            ) : (
              <BtnContainer>
                <Btn
                  type="button"
                  tw="w-16 p-1 text-gray-500"
                  onClick={() => setImportByUrl(not)}
                >
                  <Remove_Icon size="100%" />
                </Btn>
                <label tw="z-50  flex overflow-hidden" title="import from url">
                  <InputUrl
                    type="url"
                    // onChange={set_Image}
                    name="urlImport"
                    tw="opacity-100"
                  />

                  <Btn
                    type="button"
                    tw="rounded-l-none"
                    Btn
                    onClick={ev => {
                      const input = ev.currentTarget
                        .previousElementSibling as HTMLInputElement
                      const img = input.value
                      set_Image(img)
                      // console.log(img.value)
                    }}
                  >
                    <Search_Icon size="100%" />
                  </Btn>
                </label>
              </BtnContainer>
            )}
          </CSSTransition>
          {/* {importByUrl && ( */}
          {/* )} */}
        </SwitchTransition>
        {/* <label tw="z-50  flex overflow-hidden" title="import from url"> */}
        {/* <Btn
              Btn
              tw="h-full z-0 "
              onClick={() => setImportByUrl(not)}
            >
              <Link_icon link size="100%" />
            </Btn> */}
        {/* </label> */}
        {/* </div> */}
      </ImgSelector>
    </>
  )
}

export default Image_input
