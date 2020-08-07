import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled(BorderlessButton)``

export const FilterIcon = styled(Feather).attrs({
  name: 'filter',
  size: 20,
  color: '#fff',
})``
