import { Route, RouteProps } from 'react-router-dom'

export const renderRouteFromConfig = (
  config: Record<string, RouteProps>,
): JSX.Element[] => {
  return Object.entries(config).map(([key, route]) => {
    return (
      <Route
        key={key}
        {...route}
      />
    )
  })
}
