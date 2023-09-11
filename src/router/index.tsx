import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const NoFound = lazy(() => import('@/views/NoFound'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NoFound />,
  },
]

export default routes
