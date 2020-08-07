import React, { useState, useCallback } from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import PageHeader from '../../components/PageHeader'
import { Container, TeacherItemsList } from './styles'
import TeacherItem from '../../components/TeacherItem'
// import SearchForm from '../../components/SearchForm'
import FilterButton from '../../components/PageHeader/Buttons/FilterButton'
import { TeacherItemDTO } from '../../components/TeacherItem/types'
import api from '../../services/api'
import {
  SearchFormContainer,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitText,
} from '../../components/SearchForm/styles'

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const loadFavorites = useCallback(async () => {
    const response = await AsyncStorage.getItem('favorites')
    if (response) {
      const favoritesTeachers = JSON.parse(response)
      const favoritesTeachersIds = favoritesTeachers.map(
        (teacher: TeacherItemDTO) => teacher.id,
      )
      setFavorites(favoritesTeachersIds)
    }
  }, [])

  const handleToggleFilters = useCallback(() => {
    setIsFilterVisible(!isFilterVisible)
  }, [isFilterVisible])

  const searchTeachers = useCallback(() => {
    async function filterClasses() {
      const { data } = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      })
      setTeachers(data)
      loadFavorites()
      setIsFilterVisible(false)
    }
    filterClasses()
  }, [loadFavorites, subject, time, week_day])

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={<FilterButton onPress={handleToggleFilters} />}
      >
        {isFilterVisible && (
          <SearchFormContainer>
            <Label>Materia</Label>
            <Input
              placeholder="Qual matéria?"
              value={subject}
              onChangeText={text => setSubject(text)}
            />
            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input
                  placeholder="Qual dia?"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={searchTeachers}>
              <SubmitText>Filtrar</SubmitText>
            </SubmitButton>
          </SearchFormContainer>
        )}
      </PageHeader>
      <TeacherItemsList>
        {teachers.map((teacher: TeacherItemDTO) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            isFavorite={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherItemsList>
    </Container>
  )
}

export default TeacherList
