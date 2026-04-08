import styled from "styled-components";
import banner from "../../assets/img/background.png";

export const BannerContainer = styled.div`
  background-image:
  linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2)
  ),
  url(${banner});

  background-size: cover;
  width: auto;
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  background-image {
    opacity: 0.8;
    filter: brightness(1.1);
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const TextSection = styled.section`
  width: 36.75rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AdvantagesSection = styled.section`
  width: 35.438rem;
  height: 5.25rem;
  display: flex;
  gap: 1.5rem;
`;

export const LeftAdvantages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: rigth;
`;

export const RightAdvantages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: right;
`;

export const RightContent = styled.div`
  gap: 1rem;
  display: flex;
`;

export const ImageSection = styled.section`
  width: 29.75rem;
  height: 22.5rem;
`;
