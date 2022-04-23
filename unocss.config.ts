import { presetUno } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'

const config = {
  presets: [presetAttributify(), presetUno()],
}

export default config
