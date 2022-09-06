import { useFormContext } from 'react-hook-form'
import { ErrorsType } from '../..'
import { Error, Label, Option, Select } from '../../styles'
import { SeniorityContainer } from './styles'

export function Seniority() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType
  return (
    <SeniorityContainer>
      <Label>Senioridade</Label>

      <Select id="seniority" {...register('seniority')} defaultValue="">
        <Option disabled value="">
          Selecione
        </Option>
        <Option value="Junior">Junior</Option>
        <Option value="Pleno">Pleno</Option>
        <Option value="Senior">Senior</Option>
      </Select>
      <Error>{errors.seniority?.message}</Error>
    </SeniorityContainer>
  )
}
