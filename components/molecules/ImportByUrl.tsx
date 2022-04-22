import { Remove_Icon, Search_Icon } from '@icons'
import { Btn, Input } from '@atoms'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import tw from 'twin.macro'
import { not } from 'rambda'
Remove_Icon

type props = {
  show: Dispatch<SetStateAction<boolean>>
  set_Image: (value: string | ChangeEvent<HTMLInputElement>) => void
}
export default function ImportByUrl({ show, set_Image }: props) {
  return (
    <>
      <Btn type="button" tw="w-16 p-1 text-gray-500" onClick={() => show(not)}>
        <Remove_Icon size="100%" />
      </Btn>
      <label tw="z-50  flex overflow-hidden" title="import from url">
        <Input type="url" name="urlImport" tw="rounded-r-none" />

        <Btn
          type="button"
          tw="rounded-l-none"
          Btn
          onClick={ev => {
            const input = ev.currentTarget
              .previousElementSibling as HTMLInputElement
            const img = input.value
            set_Image(img)
          }}
        >
          <Search_Icon size="100%" />
        </Btn>
      </label>
    </>
  )
}
