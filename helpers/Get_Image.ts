import { ChangeEvent } from 'react'
function Get_Image(ev: ChangeEvent<HTMLInputElement>) {
  const files = ev.target.files
  if (files && files.length) {
    const file = files[0]
    return file
  }
}
export default Get_Image
