import styled, { css } from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'
import landingImg from '../../assets/landing.png'
import studyImg from '../../assets/icons/study.png'
import giveClassesImg from '../../assets/icons/give-classes.png'
import heartImg from '../../assets/icons/heart.png'

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`
export const LandingImage = styled.Image.attrs({
  source: landingImg,
  resizeMode: 'contain',
})`
  width: 100%;
`

const basicTextStyle = css`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  font-family: 'Poppins_400Regular';
`

export const WelcomeText = styled.Text`
  ${basicTextStyle}
  margin-top: 80px;
`
export const LandingText = styled.Text`
  ${basicTextStyle}
  font-family: 'Poppins_600SemiBold';
`
const landingButtonStyle = css`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`
export const StudyButton = styled(RectButton)`
  ${landingButtonStyle}
  background: #9871f5;
`

export const StudyButtonIcon = styled.Image.attrs({
  source: studyImg,
})``
export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 20px;
`
export const GiveClassesButton = styled(RectButton)`
  ${landingButtonStyle}
  background: #04d361;
`
export const GiveClassesButtonIcon = styled.Image.attrs({
  source: giveClassesImg,
})``

export const Connections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`
export const HeartIcon = styled.Image.attrs({
  source: heartImg,
})``
