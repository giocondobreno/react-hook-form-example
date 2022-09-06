import { FormProvider, useForm } from 'react-hook-form'
import { DevSide } from './components/DevSide'
import { GeneralData } from './components/GeneralData'
import {
  ButtonsContainer,
  DevFormContainer,
  Form,
  ResetButton,
  SubmitButton,
  Title,
  TitleFormContainer,
} from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Seniority } from './components/Seniority'
import { Experiences } from './components/Experiences'
import { Tecnologies } from './components/Tecnologies'

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export enum DevSides {
  backend = 'backend',
  frontend = 'frontend',
  fullstack = 'fullstack',
}

export enum Tecnology {
  html = 'html',
  css = 'css',
  javascript = 'javascript',
  python = 'python',
}

const registerDevFormValidationSchema = zod.object({
  name: zod.string().trim().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  lastname: zod
    .string()
    .trim()
    .min(2, 'O sobrenome deve ter no mínimo 2 caracteres'),
  email: zod.string().email('O e-mail é inválido'),
  seniority: zod.string().min(1, 'Informe a sua senioridade'),
  experience: zod
    .string()
    .min(10, 'A experiência deve ter no mínimo 10 caracteres'),
  devside: zod.nativeEnum(DevSides, {
    errorMap: () => {
      return { message: 'Informe o tipo de desenvolvimento' }
    },
  }),
  tecnologies: zod.array(zod.string()).nonempty({
    message: 'Informe, no mínimo, uma tecnologia',
  }),
})

type RegisterDevType = zod.infer<typeof registerDevFormValidationSchema>

export function DevForm() {
  const newDevForm = useForm<RegisterDevType>({
    resolver: zodResolver(registerDevFormValidationSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      seniority: '',
      devside: undefined,
      tecnologies: [],
    },
  })

  const { handleSubmit, reset } = newDevForm

  function handleRegisterDev(data: RegisterDevType) {
    console.log(JSON.stringify(data))
  }

  function handleResetForm() {
    reset()
  }

  return (
    <DevFormContainer>
      <TitleFormContainer>
        <Title>Cadastro de DEVs</Title>
      </TitleFormContainer>
      <FormProvider {...newDevForm}>
        <Form onSubmit={handleSubmit(handleRegisterDev)}>
          <GeneralData />
          <DevSide />
          <Seniority />
          <Tecnologies />
          <Experiences />
          <ButtonsContainer>
            <SubmitButton type="submit">Enviar</SubmitButton>
            <ResetButton onClick={handleResetForm}>Limpar</ResetButton>
          </ButtonsContainer>
        </Form>
      </FormProvider>
    </DevFormContainer>
  )
}
