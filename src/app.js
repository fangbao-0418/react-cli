import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Router from '@/router'
import '@/utils/common'
render(
  <Router />,
  document.getElementById('root')
)
