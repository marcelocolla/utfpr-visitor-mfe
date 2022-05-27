import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))

export const getRoutesMap = (basename = '/visitas'): RouteProps[] => {
  return [
    {
      path: basename,
      component: HomePageLazy,
    },
  ]
}
