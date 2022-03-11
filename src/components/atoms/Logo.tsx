import "twin.macro";
import tw, { styled } from "twin.macro";
import Icon from "@imgs/logo.svg";

// const Svg = tw(Icon)``;
const Logo = () => (
  <a href="/" tw="flex content-center items-center gap-1">
    <Icon />
    <Svg />
    <span>Cropomon</span>
  </a>
);

const Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    tw="stroke-zinc-800	"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 5v10a1 1 0 0 0 1 1h10" />
    <path d="M5 8h10a1 1 0 0 1 1 1v10" />
  </svg>
);

export default Logo;
