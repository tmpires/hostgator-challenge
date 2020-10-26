import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PaymentOptionProps {
  paymentPlan: string;
  value: string;
}

interface CardProps {
  highlighted?: boolean;
}

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
    padding: 0px 20px;
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

export const PaymentPlans = styled.div`
  background-color: #ffffff;
  border: 1px solid #4480c5;
  border-radius: 21px;
  box-shadow: 0px 2px 4px #4480c570;
  cursor: pointer;
  float: left;
  margin-top: 10px;
  margin-bottom: 50px;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentOption = styled.label<PaymentOptionProps>`
  padding: 10px 20px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 5px;
    font: normal normal bold 16px/23px Montserrat;
    letter-spacing: 0px;
  }

  &:not(:last-child) {
    border-right: none;
  }

  input[type='radio']:not(old) {
    opacity: 0;
    position: absolute;
  }

  ${props =>
    props.paymentPlan === props.value &&
    css`
      background-color: #4480c5;
      border: 1px solid #4480c5;
      border-radius: 20px;
      color: #fff;
    `}
`;

export const Carrousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
`;

export const Card = styled.div<CardProps>`
  background: #fff;
  height: 650px;
  width: 100%;
  max-width: 331px;

  margin: 5px;

  border: 1px solid #dfecff;
  border-radius: 4px;

  position: relative;

  & + div {
    margin-bottom: 10px;
    margin-top: 15px;
  }

  ${props =>
    props.highlighted &&
    css`
      &::before {
        content: '';
        position: absolute;
        background-color: #ff6a17;
        width: 100%;
        height: 10px;
        top: -9px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &::after {
        content: '';
        position: absolute;
        background-color: #ff6a17;
        width: 100%;
        height: 5px;
        bottom: -5px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      a {
        background-color: #ff6a17 !important;
      }
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-bottom: 1px solid #dfecff;

  font: normal normal bold 26px/26px Montserrat;
  letter-spacing: 0px;
  padding: 40px;

  img {
    margin-bottom: 10px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-bottom: 1px solid #dfecff;

  padding: 20px;

  .text-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0px;
    color: #333333;
    font: normal normal normal 13px/19px Montserrat;
    strong {
      font: normal normal bold 13px/19px Montserrat;
    }
  }

  .text-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font: normal normal normal 20px/24px Montserrat;
    letter-spacing: 0px;
    color: #1d5297;
    strong {
      font: normal normal bold 35px/24px Montserrat;
      color: #1d5297;
      padding-left: 5px;
    }
    padding-top: 5px;
  }

  a {
    text-decoration: none;
    background: #4480c5;
    border-radius: 26px;
    height: 52px;
    color: #fff;
    text-align: center;
    font: normal normal bold 22px/27px Montserrat;
    letter-spacing: 0px;
    line-height: 52px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#4480C5')};
    }
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    font: normal normal bold 15px/20px Montserrat;
    letter-spacing: 0px;
    color: #333333;
    svg {
      color: #1d5297;
      margin-left: 5px;
    }
  }

  .text-3 {
    margin: 12px;
    text-align: left;
    font: normal normal normal 14px/18px Montserrat;
    letter-spacing: 0px;
    color: #1d5297;
    span {
      margin-left: 10px;
      color: #ffffff;
      text-transform: uppercase;
      background: #51c99c;
      border-radius: 26px;
      padding: 5px 10px;
      font: normal normal bold 14px/18px Montserrat;
    }
  }
`;
export const CardFooter = styled.div`
  padding: 26px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  font: normal normal normal 16px/32px Montserrat;
  letter-spacing: 0px;
  color: #333333;

  strong {
    font: normal normal bold 16px/32px Montserrat;
  }

  .underline {
    border-bottom: 1px #4480c5 dashed;
  }

  strong + span {
    margin-left: 3px;
  }

  span + strong {
    margin-left: 3px;
  }
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
