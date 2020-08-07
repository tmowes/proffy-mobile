import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`
export const TeacherItemsList = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 16, paddingBottom: 8 },
})`
  margin-top: -48px;
`
