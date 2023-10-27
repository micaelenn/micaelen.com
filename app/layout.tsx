'use client'

// internal dependencies
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import GlobalStyles from '@/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <title>Micaelen Miranda</title>
        </head>

        <body>
          <StyledComponentsRegistry>
           <GlobalStyles />
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
