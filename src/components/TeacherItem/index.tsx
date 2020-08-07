import React, { useCallback, useState } from 'react'
import { Linking } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  ProfileName,
  ProfileSubject,
  Bio,
  Footer,
  PriceText,
  PriceValue,
  ButtonsContainer,
  FavButton,
  FavIcon,
  UnFavIcon,
  WhatsButton,
  WhatsIcon,
  WhatsText,
} from './styles'
import { TeacherItemProps, TeacherItemDTO } from './types'
import api from '../../services/api'

const TeacherItem: React.FC<TeacherItemProps> = ({ isFavorite, teacher }) => {
  const [isFavored, setIsFavored] = useState(isFavorite)

  const handleLinkToWhats = useCallback(async () => {
    await api.post('connections', {
      user_id: teacher.id,
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }, [teacher])

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray = []
    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }
    if (isFavored) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: TeacherItemDTO) => {
          return teacherItem.id !== teacher.id
        },
      )
      favoritesArray.splice(favoriteIndex, 1)
      setIsFavored(false)
    } else {
      favoritesArray.push(teacher)
      setIsFavored(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }, [isFavored, teacher])

  // const handleToggleFavorite = useCallback(async () => {
  //   const favorites = await AsyncStorage.getItem('favorites')

  //   if (favorites) {
  //     setFavoredList(JSON.parse(favorites))
  //   }
  //   if (isFavored) {
  //     setFavoredList(
  //       favoredList.filter(teacherItem => {
  //         return teacherItem !== teacher.id
  //       }),
  //     )
  //     setIsFavored(false)
  //   } else {
  //     console.log('favoredList', favoredList)
  //     setFavoredList([...favoredList, teacher.id])
  //     setIsFavored(true)
  //   }
  //   await AsyncStorage.setItem('favorites', JSON.stringify(favoredList))
  // }, [favoredList, isFavored, teacher])

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />
        <ProfileInfo>
          <ProfileName>{teacher.name}</ProfileName>
          <ProfileSubject>{teacher.subject}</ProfileSubject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>
      <Footer>
        <PriceText>
          {`Preço/hora   `}
          <PriceValue>{`R$ ${teacher.cost}`}</PriceValue>
        </PriceText>
        <ButtonsContainer>
          <FavButton
            onPress={handleToggleFavorite}
            isFavorite={isFavored}
            teacher={teacher}
          >
            {isFavored ? <UnFavIcon /> : <FavIcon />}
          </FavButton>
          <WhatsButton onPress={handleLinkToWhats}>
            <WhatsIcon />
            <WhatsText>Entrar em contato</WhatsText>
          </WhatsButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}

export default TeacherItem
