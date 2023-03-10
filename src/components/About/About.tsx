import React from "react";
import {
  BackgroundImage,
  HeaderText,
  HeaderText2,
  ImageContainer,
  ImageText,
  MainAboutContainter,
  MainAboutText,
} from "./About.style";
import image from "../common/images/pexels-abdel-rahman-abu-baker-2537395.jpg";
import YouthComponent from "./youth";
import { useRecoilState } from "recoil";
import { handleClickState } from "../common/globalStateManager";
function About() {
  const [state, setState] = useRecoilState(handleClickState);

  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = () => {
    setState(!state);
  }
  console.log(state)

  return (
    <div style={{ height: "100vh" }}>
      <ImageContainer>
        <BackgroundImage src={image} />
        <ImageText>
          {" "}
          <h1>We Honor One Another to Glorify God</h1>
        </ImageText>
      </ImageContainer>

      <MainAboutContainter>
        <MainAboutText>
          <HeaderText>Welcome To </HeaderText>
          <HeaderText2>International Baptist Ministries</HeaderText2>

          <p>
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout. Lorem ipsum is mostly a part of a Latin text by the
            classical author and philosopher Cicero. Its words and letters have
            been changed by addition or removal, so to deliberately render its
            content nonsensical; it's not genuine, correct, or comprehensible
            Latin anymore. While lorem ipsum's still resembles classical Latin,
            it actually has no meaning whatsoever. As Cicero's text doesn't
            contain the letters K, W, or Z, alien to latin, these, and others
            are often inserted randomly to mimic the typographic appearence of
            European languages, as are digraphs not to be found in the original
          </p>
        </MainAboutText>
      </MainAboutContainter>
      <YouthComponent />
    </div>
  );
}

export default About;
