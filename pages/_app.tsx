import React from "react";
import 'antd/dist/antd.css'
import '../assets/styles/antdOverride.scss'
import '../assets/styles/globals.scss'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import Loading from "../components/layout/loading";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => { setPageLoading(true); };
    const handleComplete = () => { setPageLoading(false); };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  return <ConfigProvider direction={router.locale === 'fa' ? "rtl" : "ltr"}>
    {pageLoading ? <Loading loading={true} /> : <Component {...pageProps} /> }
  </ConfigProvider>
}
export default MyApp
