import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  TopBar,
  BackButton,
  BackIcon,
  LogoImage,
  Header,
  Title,
} from './styles'
import { PageHeaderProps } from './types'

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation()
  return (
    <Container>
      <TopBar>
        <BackButton onPress={() => navigate('Landing')}>
          <BackIcon />
        </BackButton>
        <LogoImage />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  )
}

export default PageHeader
