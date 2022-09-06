import { useFormContext } from 'react-hook-form'
import { ErrorsType } from '../..'
import { Error, Label, TextArea } from '../../styles'
import { ExperiencesContainer } from './styles'

export function Experiences() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return (
    <ExperiencesContainer>
      <Label>Conte um pouco sobre a sua experiência:</Label>
      <TextArea
        id="experience"
        rows={7}
        cols={60}
        {...register('experience')}
      ></TextArea>
      <Error>{errors.experience?.message}</Error>
    </ExperiencesContainer>
  )
}
