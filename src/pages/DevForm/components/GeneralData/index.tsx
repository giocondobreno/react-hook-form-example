import { useFormContext } from 'react-hook-form'
import { ErrorsType } from '../..'
import { Error, InputEmail, InputText, Label } from '../../styles'
import {
  FirstNameContainer,
  GeneralDataContainer,
  LastNameContainer,
  NameContainer,
} from './styles'

export function GeneralData() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <GeneralDataContainer>
      <NameContainer>
        <FirstNameContainer>
          <Label htmlFor="name">Nome</Label>
          <InputText id="name" {...register('name')} />
          <Error>{errors.name?.message}</Error>
        </FirstNameContainer>

        <LastNameContainer>
          <Label htmlFor="lastName">Sobrenome</Label>
          <InputText id="lastname" {...register('lastname')} />
          <Error>{errors.lastname?.message}</Error>
        </LastNameContainer>
      </NameContainer>

      <Label htmlFor="email">E-mail</Label>
      <InputEmail id="email" {...register('email')} />
      <Error>{errors.email?.message}</Error>
    </GeneralDataContainer>
  )
}
