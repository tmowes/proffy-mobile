import React, { useState } from 'react'

import {
  SearchFormContainer,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitText,
} from './styles'

const SearchForm: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  return (
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
      <SubmitButton>
        <SubmitText>Filtrar</SubmitText>
      </SubmitButton>
    </SearchFormContainer>
  )
}

export default SearchForm
