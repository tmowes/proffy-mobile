import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import favoriteImg from '../../assets/icons/heart-outline.png'
import unFavoriteImg from '../../assets/icons/unfavorite.png'
import whatsappImg from '../../assets/icons/whatsapp.png'
import { TeacherItemProps } from './types'

export const Container = styled.View`
  background: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  padding: 16px;
`
export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`

export const ProfileInfo = styled.View`
  margin-left: 16px;
`
export const ProfileName = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 20px;
  color: #32264d;
`
export const ProfileSubject = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  color: #6a6180;
  margin-top: 4px;
`
export const Bio = styled.Text`
  margin: 16px 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`
export const Footer = styled.View`
  background: #fafafc;
  align-items: center;
`
export const PriceText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`
export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: #8257e5;
`
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`
export const FavButton = styled(RectButton)<TeacherItemProps>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background: #8257e5;
  ${({ isFavorite }) =>
    isFavorite &&
    css`
      background: #e33d3d;
    `}
`
export const FavIcon = styled.Image.attrs({
  source: favoriteImg,
})``
export const UnFavIcon = styled.Image.attrs({
  source: unFavoriteImg,
})``
export const WhatsButton = styled(RectButton)`
  background: #04d361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const WhatsIcon = styled.Image.attrs({
  source: whatsappImg,
})``
export const WhatsText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: #fff;
  margin-left: 16px;
`
