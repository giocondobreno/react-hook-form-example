import styled from 'styled-components'

export const DevFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  background-color: #f0f8ff;
`

export const TitleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: #380b61;
  margin: 0;
  padding: 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid gray;
  padding: 2rem;
  border-radius: 8px;
  text-shadow: 1px 1px 2px #fff;
  box-shadow: 5px 2px 20px #000;
`

export const Label = styled.label`
  color: #6956a7;
  font-weight: bolder;
`

export const BaseInputText = styled.input`
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 8px;
`
export const BaseInputOption = styled.input`
  width: 1.4rem;
  height: 1.4rem;
`

export const InputText = styled(BaseInputText).attrs({ type: 'text' })``

export const InputEmail = styled(BaseInputText).attrs({ type: 'email' })``

export const InputRadio = styled(BaseInputOption).attrs({ type: 'radio' })``

export const InputCheckbox = styled(BaseInputOption).attrs({
  type: 'checkbox',
})``

export const Select = styled.select`
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 8px;
`

export const Option = styled.option``

export const TextArea = styled.textarea`
  border-radius: 8px;
`
export const Error = styled.span`
  color: red;
  font-weight: bolder;
  font-size: 0.8rem;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`
const ButtonBase = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  width: 10rem;
`
export const SubmitButton = styled(ButtonBase).attrs({ type: 'submit' })`
  background-color: #59429d;
`
export const ResetButton = styled(ButtonBase).attrs({ type: 'button' })`
  background-color: #696969;
`
