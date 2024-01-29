import React from 'react';
import ReactDOM from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import 'hero-slider/dist/index.css';
import featured1 from './assets/img/featured1.webp';
import featured2 from './assets/img/featured2.webp';
import featured3 from './assets/img/featured3.webp';
import featured4 from './assets/img/featured4.webp';


export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 0,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Epic Sports</Title>
          <Subtitle>
            Home to 4K High School Sports
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Basketball"
        background={{
          backgroundImageSrc: featured1
        }}
      />

      <Slide
        shouldRenderMask
        label="Hockey"
        background={{
          backgroundImageSrc: featured2
        }}
      />

      <Slide
        shouldRenderMask
        label="Wrestling"
        background={{
          backgroundImageSrc: featured3
        }}
      />

      <Slide
        shouldRenderMask
        label="Basketball"
        background={{
          backgroundImageSrc: featured4
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
