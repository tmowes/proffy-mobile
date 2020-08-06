import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  TopBar,
  BackButton,
  BackIcon,
  LogoImage,
  Title,
} from './styles'
import { PageHeaderProps } from './types'

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <TopBar>
        <BackButton onPress={() => navigate('Landing')}>
          <BackIcon />
        </BackButton>
        <LogoImage />
      </TopBar>
      <Title>{title}</Title>
    </Container>
  )
}

export default PageHeader
