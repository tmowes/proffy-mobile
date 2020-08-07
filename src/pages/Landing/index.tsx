import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

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
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    async function loadConnections() {
      const { data } = await api.get('connections')
      setTotalConnections(data.total)
    }
    loadConnections()
  }, [])

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
        {`Total de ${totalConnections} conexões já realizadas  `}
        <HeartIcon />
      </Connections>
    </Container>
  )
}

export default Landing
