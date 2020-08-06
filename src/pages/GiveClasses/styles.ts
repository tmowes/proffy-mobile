import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'
import bgImg from '../../assets/give-classes-background.png'

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`
export const BackgroundImage = styled.ImageBackground.attrs({
  source: bgImg,
  resizeMode: 'contain',
})`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`

export const Description = styled.Text`
  margin-top: 24px;
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  max-width: 240px;
`
export const OkButton = styled(RectButton)`
  margin: 40px 0;
  background: #04d361;
  height: 58px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const OkButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 16px;
`
