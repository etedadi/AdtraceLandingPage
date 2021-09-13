import 'antd/dist/antd.css'
import '../styles/antdOverride.scss'
import '../styles/globals.scss'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <ConfigProvider direction="rtl">
    <Component {...pageProps} />
  </ConfigProvider>
}
export default MyApp
