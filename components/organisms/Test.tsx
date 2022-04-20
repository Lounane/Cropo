import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import {
  Transition as HeadlessUiTransition,
  TransitionEvents,
} from '@headlessui/react'
import tw, { TwStyle } from 'twin.macro'

/**
 * HeadlessUI "Transition"
 * Customized for twin.macro + typescript
 * https://headlessui.dev/react/transition
 */

type TransitionProps = {
  enter?: TwStyle
  enterFrom?: TwStyle
  enterTo?: TwStyle
  entered?: TwStyle
  leave?: TwStyle
  leaveFrom?: TwStyle
  leaveTo?: TwStyle
  children: React.ReactNode
  show?: boolean
  as?: React.ElementType
  appear?: boolean
  unmount?: boolean
} & TransitionEvents

function Transition(props: TransitionProps) {
  return <HeadlessUiTransition {...getProps(props)} />
}

Transition.Child = function TransitionChild(props: TransitionProps) {
  return <HeadlessUiTransition.Child {...getProps(props)} />
}

function getProps(props: TransitionProps) {
  return {
    ...props,
    enter: 'enter',
    enterFrom: 'enter-from',
    enterTo: 'enter-to',
    entered: 'entered',
    leave: 'leave',
    leaveFrom: 'leave-from',
    leaveTo: 'leave-to',
    css: {
      '&.enter': props.enter,
      '&.enter-from': props.enterFrom,
      '&.enter-to': props.enterTo,
      '&.entered': props.entered,
      '&.leave': props.leave,
      '&.leave-from': props.leaveFrom,
      '&.leave-to': props.leaveTo,
    },
    beforeEnter: () => props.beforeEnter?.(),
    afterEnter: () => props.afterEnter?.(),
    beforeLeave: () => props.beforeLeave?.(),
    afterLeave: () => props.afterLeave?.(),
  }
}

export default function Test() {
  let [isShowing, setIsShowing] = useState(true)
  let resetIsShowing = useTimeoutFn(() => setIsShowing(true), 500)[2]

  return (
    <div tw="flex flex-col items-center">
      <div tw="w-32 h-32">
        <Transition
          as={Fragment}
          show={true}
          {...transitionProps}
          appear={true}
        >
          <div tw="w-full h-full bg-white rounded-md shadow-lg" />
        </Transition>
      </div>

      <button
        onClick={() => {
          setIsShowing(false)
          resetIsShowing()
        }}
        tw="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full backface-visibility[hidden] active:bg-opacity-40 hover:(scale-105 bg-opacity-30) focus:outline-none bg-opacity-20"
      >
        <svg viewBox="0 0 20 20" fill="none" tw="w-5 h-5 opacity-70">
          <path
            d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <span tw="ml-3">Click to transition</span>
      </button>
    </div>
  )
}

const transitionProps = {
  enter: tw`transform transition duration-[4000ms]`,
  enterFrom: tw`opacity-0 rotate-[-120deg] scale-50`,
  enterTo: tw`opacity-100 rotate-0 scale-100`,
  leave: tw`transform duration-200 transition ease-in-out`,
  leaveFrom: tw`opacity-100 rotate-0 scale-100`,
  leaveTo: tw`opacity-0 scale-95`,
}
