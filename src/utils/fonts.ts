import localFont from '@next/font/local'

// Load our custom font files
export const newsFont = localFont({
  src: [
    {
      path: '../assets/fonts/PublicSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PublicSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PublicSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PublicSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-news',
  display: 'swap',
})

// Heading font
export const headingFont = localFont({
  src: [
    {
      path: '../assets/fonts/Financier-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Financier-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Financier-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
})