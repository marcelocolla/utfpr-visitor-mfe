import React, { Fragment } from 'react'
import { Card, Modal } from '@utfprfabricadesoftware/utfpr-lib-ui-react'
import { Typography } from '@material-ui/core'

import { VisitorModel } from 'types/Visitor'
import httpClient from 'services/httpClient'
import { FormVisit } from 'components/FormVisit'

import { BoxList } from './VisitorList.styles'

export const VisitorList = React.memo(() => {
  const [visitas, setVisitas] = React.useState<VisitorModel[]>()
  const [selection, setSelection] = React.useState<VisitorModel | null>(null)

  const loadVisitors = async () => {
    try {
      const response = await httpClient.get('/visita/visitaDia')
      const data = response.data.visita?.rows || []

      setVisitas(data)
    } catch (err) {
      console.error(err)
      alert('Aconteceu uma falha ao buscar lista de visitas!')
    }
  }

  function exibirVisita(visita: VisitorModel) {
    setSelection(visita)
  }

  React.useEffect(() => {
    loadVisitors()
  }, [])

  return (
    <Fragment>
      <BoxList>
        {visitas &&
          visitas.map((el) => (
            <Card
              key={el.id_visita}
              name={
                el.liberacao?.Aluno?.Pessoa?.nome_pessoa || el.nome_pessoa || 'Nome não informado'
              }
              leftInfo={`Placa: ${el.placa_veiculo ?? 'Não informado'}`}
              rightInfo={`Entrada às ${el.hora_entrada?.slice(0, 5)}`}
              removeDisabled={true}
              onEdition={() => exibirVisita(el)}
            />
          ))}

        {Array.isArray(visitas) && visitas.length === 0 && (
          <Typography variant="subtitle1" gutterBottom>
            Nenhum registro encontrado!
          </Typography>
        )}
      </BoxList>

      {selection && (
        <Modal visible={true} close={() => setSelection(null)} title="Registro de Saída">
          <FormVisit visita={selection} />
        </Modal>
      )}
    </Fragment>
  )
})
