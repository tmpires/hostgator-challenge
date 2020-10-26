import React, { useCallback, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FiCheck } from 'react-icons/fi';
import { MdInfo } from 'react-icons/md';
import {
  Container,
  Header,
  HeaderContent,
  Banner,
  BannerContent,
  BannerText,
  Wave,
  Content,
  PaymentPlans,
  PaymentOption,
  Carrousel,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Conditions,
} from './styles';

import logoImg from '../../assets/hostgator-logo.svg';
import deskImg from '../../assets/Grupo-29995.svg';
import customerImg from '../../assets/Grupo-29996.svg';
import planP from '../../assets/Grupo-29909.svg';
import planM from '../../assets/Grupo-29910.svg';
import planTurbo from '../../assets/Grupo-29911.svg';
import RadioOff from '../../assets/RadioOff.svg';
import RadioOn from '../../assets/RadioOn.svg';

const Plans: React.FC = () => {
  const [paymentPlan, setPaymentPlan] = useState('1');
  const handlePaymentPlans = useCallback(event => {
    const { value } = event.target;
    setPaymentPlan(value);
  }, []);
  const isDesktop = useMediaQuery('(min-width:769px)');
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="HostGator" />
        </HeaderContent>
      </Header>
      <Banner>
        <BannerContent>
          {isDesktop && <img src={deskImg} alt="Desk" />}
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
          {isDesktop && <img src={customerImg} alt="Customer" />}
        </BannerContent>
        <Wave>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-0.00,49.85 C150.00,149.60 271.37,-49.87 500.00,49.85 L500.00,-0.00 L-0.00,-0.00 Z" />
          </svg>
        </Wave>
      </Banner>
      <Content>
        <span>Quero pagar a cada:</span>
        <PaymentPlans>
          <PaymentOption htmlFor="3years" paymentPlan={paymentPlan} value="1">
            {paymentPlan === '1' ? (
              <img src={RadioOn} alt="Checked Radio Button" />
            ) : (
              <img src={RadioOff} alt="Unchecked Radio Button" />
            )}
            <span>3 anos</span>
            <input
              type="radio"
              name="paymentPlan"
              value="1"
              id="3years"
              onClick={handlePaymentPlans}
              defaultChecked
            />
          </PaymentOption>
          <PaymentOption htmlFor="1year" paymentPlan={paymentPlan} value="2">
            {paymentPlan === '2' ? (
              <img src={RadioOn} alt="Checked Radio Button" />
            ) : (
              <img src={RadioOff} alt="Unchecked Radio Button" />
            )}
            <input
              type="radio"
              name="paymentPlan"
              value="2"
              id="1year"
              onClick={handlePaymentPlans}
            />
            <span>1 ano</span>
          </PaymentOption>
          <PaymentOption htmlFor="1month" paymentPlan={paymentPlan} value="3">
            {paymentPlan === '3' ? (
              <img src={RadioOn} alt="Checked Radio Button" />
            ) : (
              <img src={RadioOff} alt="Unchecked Radio Button" />
            )}
            <input
              type="radio"
              name="paymentPlan"
              value="3"
              id="1month"
              onClick={handlePaymentPlans}
            />
            <span>1 mês</span>
          </PaymentOption>
        </PaymentPlans>
        <Carrousel>
          <Card>
            <CardHeader>
              <img src={planP} alt="Plano P" />
              <span>Plano P</span>
            </CardHeader>
            <CardContent>
              <span className="text-1">
                <s>R$ 431,64</s>
                <strong> R$ 302,15 </strong>
              </span>
              <span className="text-1">equivalente a</span>
              <span className="text-2">
                <span>R$</span>
                <strong> 8,39</strong>
                <span>/mês*</span>
              </span>
              <a href="http://google.com">Contrate Agora</a>
              <strong>
                1 ano de Domínio Grátis
                <MdInfo />
              </strong>
              <span className="text-3">
                economize R$ 174,48
                <span>40% off</span>
              </span>
            </CardContent>
            <CardFooter>
              <div>
                <span className="underline">Para 1 site</span>
              </div>
              <div>
                <strong>100 GB</strong>
                <span>de Armazenamento</span>
              </div>
              <div>
                <span className="underline">
                  <span>Contas de E-mail</span>
                  <strong>Ilimitadas</strong>
                </span>
              </div>
              <div>
                <span>Criador de Sites</span>
                <strong style={{ textDecoration: 'underline' }}>Grátis</strong>
              </div>
              <div>
                <span>Certificado SSL</span>
                <strong>Grátis</strong>
                <span>(https)</span>
              </div>
            </CardFooter>
          </Card>
          <Card highlighted>
            <CardHeader>
              <img src={planM} alt="Plano M" />
              <span>Plano M</span>
            </CardHeader>
            <CardContent>
              <span className="text-1">
                <s>R$ 647,64</s>
                <strong> R$ 453,35 </strong>
              </span>
              <span className="text-1">equivalente a</span>
              <span className="text-2">
                <span>R$</span>
                <strong> 12,59</strong>
                <span>/mês*</span>
              </span>
              <a href="http://google.com">Contrate Agora</a>
              <strong>
                1 ano de Domínio Grátis
                <MdInfo />
              </strong>
              <span className="text-3">
                economize R$ 174,48
                <span>40% off</span>
              </span>
            </CardContent>
            <CardFooter>
              <div>
                <span className="underline">Sites Ilimitados</span>
              </div>
              <div>
                <strong>100 GB</strong>
                <span>de Armazenamento</span>
              </div>
              <div>
                <span className="underline">
                  <span>Contas de E-mail</span>
                  <strong>Ilimitadas</strong>
                </span>
              </div>
              <div>
                <span>Criador de Sites</span>
                <strong style={{ textDecoration: 'underline' }}>Grátis</strong>
              </div>
              <div>
                <span>Certificado SSL</span>
                <strong>Grátis</strong>
                <span>(https)</span>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img src={planTurbo} alt="Plano Turbo" />
              <span>Plano Turbo</span>
            </CardHeader>
            <CardContent>
              <span className="text-1">
                <s>R$ 1.439,64</s>
                <strong> R$ 1.007,75 </strong>
              </span>
              <span className="text-1">equivalente a</span>
              <span className="text-2">
                <span>R$</span>
                <strong> 27,99</strong>
                <span>/mês*</span>
              </span>
              <a href="http://google.com">Contrate Agora</a>
              <strong>
                1 ano de Domínio Grátis
                <MdInfo />
              </strong>
              <span className="text-3">
                economize R$ 174,48
                <span>40% off</span>
              </span>
            </CardContent>
            <CardFooter>
              <div>
                <span className="underline">Sites Ilimitados</span>
              </div>
              <div>
                <strong>150 GB</strong>
                <span>de Armazenamento</span>
              </div>
              <div>
                <span className="underline">
                  <span>Contas de E-mail</span>
                  <strong>Ilimitadas</strong>
                </span>
              </div>
              <div>
                <span>Criador de Sites</span>
                <strong style={{ textDecoration: 'underline' }}>Grátis</strong>
              </div>
              <div>
                <span>Certificado SSL</span>
                <strong>Grátis</strong>
                <span>(https)</span>
              </div>
            </CardFooter>
          </Card>
        </Carrousel>
        <Conditions>
          <a href="http://google.com">*Confira as condições da promoção</a>
        </Conditions>
      </Content>
    </Container>
  );
};

export default Plans;
