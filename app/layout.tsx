export const dynamic = 'force-dynamic'

// internal dependencies
import GlobalStyles from '@/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/registry'

// font-families
import '@fontsource/courier-prime/400.css'
import '@fontsource/courier-prime/700.css'
import '@fontsource-variable/quicksand'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { getGeneralData } from '@/lib/sanity/general'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const generalData = await getGeneralData()
  const headerData = generalData.header
  const footerData = generalData.footer

  return (
    <>
      <html lang="en">
        <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
            <Header content={headerData} />
            {children}
            <Footer content={footerData} />
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
