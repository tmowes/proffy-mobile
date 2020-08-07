import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const SearchFormContainer = styled.View`
  margin-bottom: 8px;
`
export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
  margin-top: 4px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
})`
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  background: #fff;
  padding: 0 16px;
  margin-bottom: 16px;
`
export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const InputBlock = styled.View`
  width: 48%;
`
export const SubmitButton = styled(RectButton)`
  height: 48px;
  background: #04d361;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
`
export const SubmitText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  color: #fff;
`
