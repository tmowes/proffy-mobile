import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  LandingImage,
  WelcomeText,
  LandingText,
  ButtonsContainer,
  StudyButton,
  StudyButtonIcon,
  ButtonText,
  GiveClassesButton,
  GiveClassesButtonIcon,
  Connections,
  HeartIcon,
} from './styles'

const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <LandingImage />
      <WelcomeText>Seja bem-vindo,</WelcomeText>
      <LandingText>O que deseja fazer?</LandingText>
      <ButtonsContainer>
        <StudyButton onPress={() => navigate('StudyTabs')}>
          <StudyButtonIcon />
          <ButtonText>Estudar</ButtonText>
        </StudyButton>
        <GiveClassesButton onPress={() => navigate('GiveClasses')}>
          <GiveClassesButtonIcon />
          <ButtonText>Dar aulas</ButtonText>
        </GiveClassesButton>
      </ButtonsContainer>
      <Connections>
        {'Total de 69 conexões já realizadas  '}
        <HeartIcon />
      </Connections>
    </Container>
  )
}

export default Landing
