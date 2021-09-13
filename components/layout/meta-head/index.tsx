import Head from 'next/head'

const MetaHead= (props: any) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description}/>
    <meta property="og:type" content="website"/>
    <meta name="og:title" property="og:title" content={props.title}/>
    <meta name="og:description" property="og:description" content={props.description}/>
    <meta property="og:locale" content="fa_IR" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="adtrace"/>
    <meta property="og:url" content={`https://adtrace.io/fa/${props.title}/`}/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content={props.title}/>
    <meta name="twitter:description" content={props.description}/>
    <meta name="twitter:site" content="@adtrace_io"/>
    <meta name="twitter:creator" content=""/>
    <link rel="icon" type="image/png" href="/static/images/favicon.ico"/>
    <link rel="apple-touch-icon" href="/static/images/favicon.ico"/>
    <link rel="stylesheet" href=""/>
    <meta property="og:image" content=""/>
    <meta name="twitter:image" content=""/>
    <link rel="canonical" href=""/>
  </Head>
)
export default MetaHead