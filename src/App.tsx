import './styles.css'

export const App = () => {
  return (
    <h1>
      {process.env.name} -React TypeScript Webpack Starter Template -{' '}
      {process.env.NODE_ENV}
    </h1>
  )
}
