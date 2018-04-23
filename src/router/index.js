import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/stores'

import App from '@/containers/App'
import Main from '@/containers/Main'
import modules from './modules'

const isPro = process.env.NODE_ENV === 'production'

const Router = isPro ? BrowserRouter : HashRouter

const basename = '/'
const configs = [
  { path: '/', component: modules.Index, exact: true },
  { path: '/demo/:id', component: modules.Demo }
]
const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Main>
            {
              configs.map((item, index) => {
                if (!item.disable) {
                  return <Route key={'router-' + index} path={item.path} component={item.component} exact={item.exact}/>
                }
              })
            }
          </Main>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
