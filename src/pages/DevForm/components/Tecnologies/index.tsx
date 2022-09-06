import { useFormContext } from 'react-hook-form'
import { ErrorsType } from '../..'
import { Error, InputCheckbox, Label } from '../../styles'
import { OptionsContainer, TecnologiesContainer } from './styles'

export function Tecnologies() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType

  return (
    <TecnologiesContainer>
      <Label>Selecione as tecnologias que utiliza:</Label>

      <OptionsContainer>
        <InputCheckbox id="HTML" {...register('tecnologies')} value="HTML" />
        <Label htmlFor="HTML">HTMl</Label>

        <InputCheckbox id="CSS" {...register('tecnologies')} value="CSS" />
        <Label htmlFor="CSS">CSS</Label>

        <InputCheckbox
          id="Javascript"
          {...register('tecnologies')}
          value="Javascript"
        />
        <Label htmlFor="Javascript">JavaScript</Label>

        <InputCheckbox
          id="Python"
          {...register('tecnologies')}
          value="Python"
        />
        <Label htmlFor="Python">Python</Label>
      </OptionsContainer>
      <Error>{errors.tecnologies?.message}</Error>
    </TecnologiesContainer>
  )
}
