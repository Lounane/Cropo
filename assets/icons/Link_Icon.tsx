import tw, { styled } from 'twin.macro'

function Link_icon({ link = false }) {
  const Svg = styled.svg(({ link }: { link: boolean }) => [
    tw`[& #unlink]:transition duration-300 opacity-100 `,
    link && tw`[& #unlink]:opacity-0`,
  ])
  return (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      link={link}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
        // transform=" rotate(23deg) translate(1px, 0px)"
      />
      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />

      <g id="unlink">
        <line x1="16" y1="21" x2="16" y2="19" />
        <line x1="19" y1="16" x2="21" y2="16" />
        <line x1="3" y1="8" x2="5" y2="8" />
        <line x1="8" y1="3" x2="8" y2="5" />
      </g>
    </Svg>
  )
}

export default Link_icon
