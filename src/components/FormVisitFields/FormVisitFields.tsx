import React from 'react'
import { Form } from 'formik'
import {
  FormBody,
  FormLine,
  InputField,
  FormFooter,
  Button,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

export const FormVisitFields = () => {
  return (
    <Form>
      <FormBody>
        <FormLine>
          <InputField name="nome_pessoa" label="Nome do Aluno" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField name="ra_aluno" label="Matrícula" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField name="data_saida" label="Data" disabled={true} />
          <InputField name="hora_saida" label="Horário" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField name="nome_pessoa" label="Vigilante Responsável" disabled={true} />
        </FormLine>
        <FormLine>
          <InputField
            name="placa_veiculo"
            label="Informe a placa do veículo"
            required
            disabled={true}
          />
        </FormLine>
        <FormLine>
          <InputField name="observacoes" label="Observações" />
        </FormLine>
      </FormBody>

      <FormFooter mt="3rem">
        <Button name="registroButton">Registrar Saída</Button>
      </FormFooter>
    </Form>
  )
}
