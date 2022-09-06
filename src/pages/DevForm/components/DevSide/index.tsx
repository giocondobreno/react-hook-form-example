import { useFormContext } from 'react-hook-form'
import { ErrorsType } from '../..'
import { Error, InputRadio, Label } from '../../styles'
import { DevSideContainer, DevSideOptionsContainer } from './styles'

export function DevSide() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <DevSideContainer>
      <Label>De qual lado da aplicação você desenvolve?</Label>

      <DevSideOptionsContainer>
        <InputRadio id="backend" value="backend" {...register('devside')} />
        <Label htmlFor="backend">Backend</Label>
      </DevSideOptionsContainer>

      <DevSideOptionsContainer>
        <InputRadio id="frontend" value="frontend" {...register('devside')} />
        <Label htmlFor="frontend">Frontend</Label>
      </DevSideOptionsContainer>

      <DevSideOptionsContainer>
        <InputRadio id="fullstack" value="fullstack" {...register('devside')} />
        <Label htmlFor="fullstack">Fullstack</Label>
      </DevSideOptionsContainer>
      <Error>{errors.devside?.message}</Error>
    </DevSideContainer>
  )
}
