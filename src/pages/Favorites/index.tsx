import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import AsyncStorage from '@react-native-community/async-storage'
import { Container, TeacherItemsList } from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { TeacherItemDTO } from '../../components/TeacherItem/types'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<TeacherItemDTO[]>([])

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('favorites')
    if (response) {
      const favoritesTeachers = JSON.parse(response)
      setFavorites(favoritesTeachers)
    }
  }, [])

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <TeacherItemsList>
        {favorites.map((teacher: TeacherItemDTO) => {
          return <TeacherItem key={teacher.id} teacher={teacher} isFavorite />
        })}
      </TeacherItemsList>
    </Container>
  )
}

export default Favorites
