import React from 'react'
import { PageLayout } from 'components/PageLayout'
import { VisitorList } from 'components/VisitorList'

export const HomePage = () => {
  return (
    <PageLayout title="Visitas">
      <p style={{ textAlign: 'center' }}>Clique no cartão para ver mais informações</p>
      <br />

      <VisitorList />
    </PageLayout>
  )
}
