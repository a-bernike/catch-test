import 'styles/_global.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'store'
import Layout from 'views/components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp