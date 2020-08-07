import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/icons/back.png'
import logoIcon from '../../assets/logo.png'

export const Container = styled.View`
  background-color: #8257e5;
  padding: 40px;
`

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const BackButton = styled(BorderlessButton)``

export const BackIcon = styled.Image.attrs({
  source: backIcon,
  resizeMode: 'contain',
})``
export const LogoImage = styled.Image.attrs({
  source: logoIcon,
  resizeMode: 'contain',
})``

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin: 24px 0;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
