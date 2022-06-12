import './styles.scss'

export const App = () => {
  return (
    <div className="app">
      <h1>{process.env.name} -React TypeScript Webpack Starter Template</h1>
      <h2>mode : {process.env.NODE_ENV}</h2>
      <div>
        <h3>svg</h3>
        <img
          src={'/public/assets/icons/happy.svg'}
          alt={'happy'}
          height={50}
          width={50}
        />
      </div>
      <div>
        <h3>png</h3>
        <img
          src={'/public/assets/icons/logo192.png'}
          alt={'logo'}
          height={50}
          width={50}
        />
      </div>
      <div>
        <h3>font</h3>
        <p>ایران یکان</p>
      </div>
    </div>
  )
}
