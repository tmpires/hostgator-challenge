import React from 'react';

import { FiCheck } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Banner,
  BannerContent,
  BannerText,
  Wave,
  Content,
  Carrousel,
  Card,
  Conditions,
} from './styles';

import logoImg from '../../assets/hostgator-logo.svg';
import deskImg from '../../assets/Grupo-29995.svg';
import customerImg from '../../assets/Grupo-29996.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
        </HeaderContent>
      </Header>
      <Banner>
        <BannerContent>
          <img src={deskImg} alt="Desk" />
          <BannerText>
            <span>Hospedagem de Sites</span>
            <h2>
              Tenha uma hospedagem de sites estável e evite perder visitantes
              diariamente
            </h2>
            <span>
              <FiCheck />
              99,9% de disponibilidade: seu site sempre no ar
            </span>
            <span>
              <FiCheck />
              Suporte 24h, todos os dias
            </span>
            <span>
              <FiCheck />
              Painel de Controle cPanel
            </span>
          </BannerText>
          <img src={customerImg} alt="Customer" />
        </BannerContent>
        <Wave>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-0.00,49.85 C150.00,149.60 271.37,-49.87 500.00,49.85 L500.00,-0.00 L-0.00,-0.00 Z" />
          </svg>
        </Wave>
      </Banner>
      <Content>
        <Carrousel>
          <Card>
            <span>alou</span>
          </Card>
          <Card>
            <span>alou</span>
          </Card>
          <Card>
            <span>alou</span>
          </Card>
        </Carrousel>
        <Conditions>
          <a href="http://google.com">*Confira as condições da promoção</a>
        </Conditions>
      </Content>
    </Container>
  );
};

export default SignIn;
