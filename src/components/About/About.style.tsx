import styled from "styled-components";

export const BackgroundImage = styled.img`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5));
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;
export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
`;
export const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const MainAboutContainter = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
`;
export const MainAboutText = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  @media (min-width: 300px) and (max-width: 1000px) {
    top: 130%;
    width:500px;
  }
`;
export const HeaderText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size:30px;
`
export const HeaderText2 = styled.h1`
font-family: 'Montserrat', sans-serif;
font-weight:bolder;
`