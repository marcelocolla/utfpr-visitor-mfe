import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'

import { VisitorModel, VisitorValues } from 'types/Visitor'
import httpClient from 'services/httpClient'
import { FormVisitFields } from 'components/FormVisitFields'
import { dataAgora, horaAgora } from 'helpers/dateFormat'

type FormVisitProps = {
  visita: VisitorModel
}

export const FormVisit = ({ visita }: FormVisitProps) => {
  const history = useHistory()

  const initialValues: VisitorValues = {
    id_visita: visita.id_visita,
    id_liberacao: visita.liberacao?.id_liberacao ?? '',
    id_vigilante: visita.id_vigilante_saida ?? '',
    nome_pessoa: visita.nome_pessoa || '',
    ra_aluno: visita.liberacao?.Aluno?.ra_aluno || '',
    data_saida: dataAgora(),
    hora_saida: horaAgora(),
    placa_veiculo: visita.placa_veiculo || '',
    observacoes: visita.observacoes || '',
  }

  const registrarSaida = async (values: VisitorValues) => {
    await httpClient.put('/visita', {
      id_visita: visita.id_visita,
      data_saida: values.data_saida,
      hora_saida: values.hora_saida,
      id_liberacao: values.id_liberacao,
      id_vigilante_saida: values.id_vigilante,
      observacoes: values.observacoes,
    })

    history.go(0)
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={registrarSaida}
      component={FormVisitFields}
    />
  )
}
