import "twin.macro";
import tw, { styled } from "twin.macro";
import Icon from "@imgs/logo.svg";

// const Svg = tw(Icon)``;
const Logo = () => (
  <a href="/" tw="flex content-center items-center gap-1">
    <Icon />
    <span>Cropomon</span>
  </a>
);

export default Logo;
