import 'antd/dist/antd.css'
import '../assets/styles/antdOverride.scss'
import '../assets/styles/globals.scss'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <ConfigProvider direction={router.locale === 'fa' ? "rtl" : "ltr"}>
    <Component {...pageProps} />
  </ConfigProvider>
}
export default MyApp
