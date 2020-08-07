import React from 'react'

import { Container, FilterIcon } from './styles'
import { FilterButtonProps } from './types'

const FilterButton: React.FC<FilterButtonProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <FilterIcon />
    </Container>
  )
}

export default FilterButton
