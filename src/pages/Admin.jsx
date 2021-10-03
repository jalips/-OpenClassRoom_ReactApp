import { Route, Switch, useRouteMatch } from 'react-router-dom'

function Admin() {
  let { path } = useRouteMatch()
  return (
    <div>
      <h1>Administration 🧮</h1>
      <Switch>
        <Route exact path={'${path}/dashboard'}>
          <p>Dashboard</p>
        </Route>
        <Route path={'${path}/user'}>
          <p>User</p>
        </Route>
      </Switch>
    </div>
  )
}
export default Admin
