import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 8px 20px;
  background: #fff;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 35px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #1d5297;

  > img {
    height: 350px;
    padding: 0px 70px;
    position: relative;
    top: 110px;
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 15px;

  span {
    color: #b9d0ef;
    line-height: 27px;
  }

  h2 {
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  svg {
    color: #ffffff;
    margin: 0 5px;
  }
`;

export const Wave = styled.div`
  height: 150px;
  overflow: hidden;

  svg {
    height: 100%;
    width: 100%;

    path {
      stroke: none;
      fill: #1d5297;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1011px;
`;

export const Card = styled.div`
  background: #fff;
  height: 650px;
  width: 100%;
  max-width: 331px;

  margin: 5px;

  border: 1px solid #dfecff;
  border-radius: 4px;
`;

export const Conditions = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  max-width: 1011px;

  margin: 9px;

  letter-spacing: 0px;
  color: #4480c5;
  opacity: 0.7;
  font-size: 12px;
`;
