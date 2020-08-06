import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  BackgroundImage,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles'

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation()

  return (
    <Container>
      <BackgroundImage>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </BackgroundImage>
      <OkButton onPress={() => goBack()}>
        <OkButtonText>Tudo Bem</OkButtonText>
      </OkButton>
    </Container>
  )
}

export default GiveClasses
