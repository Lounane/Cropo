import tw, { css, styled } from 'twin.macro'
import { FiImage } from 'react-icons/fi'
import { Btn, Link, Label, Card, Input } from '@atoms'
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
import ImportByUrl from './ImportByUrl'

const ImgSelector = tw(Card)`w-full max-h-full  aspect-ratio[16/9] 
// grid place-content-center place-items-center  gap-3
flex flex-col place-content-center place-items-center gap-2 relative cursor-pointer

transition duration-1000
`.withComponent('div')

const InputUrl = tw(Input)`
rounded-r-none 
transition-opacity duration-1000
// w-1/2
// opacity-0 hidden
// scale-x-0
// translate-x-[ 100vw ]  
`
const BtnContainer = tw.div`
w-full  h-10  z-0
flex justify-between 
duration-300  

[&.transition]:[&-appear, &-enter]:(opacity-0 )
[&.transition]:[&-appear-active, &-enter-active]:opacity-100
// [&.transition-exit]:opacity-100
[&.transition-exit-active]:opacity-0
`

type set_Image_Type = {
  // changeEvent
  // set_Image: string | ChangeEventHandler<HTMLInputElement>
  set_Image: (value: string | ChangeEvent<HTMLInputElement>) => void
}

const Image_input = ({ set_Image }: set_Image_Type) => {
  const [importByUrl, setImportByUrl] = useState(false)

  return (
    <ImgSelector>
      <Image_Icon size="6rem" />
      <SwitchTransition>
        <CSSTransition
          key={importByUrl ? 1 : 2}
          appear={true}
          timeout={300}
          classNames="transition"
          unmountOnExit
        >
          <BtnContainer>
            {!importByUrl ? (
              <>
                <Label Btn>
                  Choose an Image
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={set_Image}
                  />
                </Label>
                <Btn type="button" Btn onClick={() => setImportByUrl(not)}>
                  <Link_icon link size="100%" />
                </Btn>
              </>
            ) : (
              <ImportByUrl show={setImportByUrl} set_Image={set_Image} />
              // <>
              //   <Btn
              //     type="button"
              //     tw="w-16 p-1 text-gray-500"
              //     onClick={() => setImportByUrl(not)}
              //   >
              //     <Remove_Icon size="100%" />
              //   </Btn>
              //   <label tw="z-50  flex overflow-hidden" title="import from url">
              //     <InputUrl type="url" name="urlImport" tw="opacity-100" />

              //     <Btn
              //       type="button"
              //       tw="rounded-l-none"
              //       Btn
              //       onClick={ev => {
              //         const input = ev.currentTarget
              //           .previousElementSibling as HTMLInputElement
              //         const img = input.value
              //         set_Image(img)
              //       }}
              //     >
              //       <Search_Icon size="100%" />
              //     </Btn>
              //   </label>
              // </>
            )}
          </BtnContainer>
        </CSSTransition>
      </SwitchTransition>
    </ImgSelector>
  )
}

export default Image_input
