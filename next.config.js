/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['adtrace.io'],
  }
}
