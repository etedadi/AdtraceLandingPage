import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <script async type="text/javascript" src="/static/chat.js"></script>
        </Head>
      <body>
        <Main />
      <NextScript />
      </body>
      </Html>
    )
  }
}

export default MyDocument