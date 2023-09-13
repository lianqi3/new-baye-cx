import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const Mine = lazy(() => import('@/views/Mine'))
const Assets = lazy(() => import('@/views/Assets'))
const Withdraw = lazy(() => import('@/views/Withdraw'))
const MinePool = lazy(() => import('@/views/MinePool'))
const Invite = lazy(() => import('@/views/Invite'))
const Test = lazy(() => import('@/views/Test'))
const NoFound = lazy(() => import('@/views/NoFound'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Mine',
    element: <Mine />,
  },
  {
    path: '/Assets',
    element: <Assets />,
  },
  {
    path: '/Withdraw',
    element: <Withdraw />,
  },
  {
    path: '/MinePool',
    element: <MinePool />,
  },
  {
    path: '/Invite',
    element: <Invite />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <NoFound />,
  },
]

export default routes
