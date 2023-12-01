export const dynamic = 'force-dynamic'

// internal dependencies
import GlobalStyles from '@/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/registry'

// font-families
import '@fontsource/courier-prime/400.css'
import '@fontsource/courier-prime/700.css'
import '@fontsource-variable/quicksand'

import Header from '@/components/Header/Header'
import { getGeneralData } from '@/lib/sanity/general'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const generalData = await getGeneralData()

  return (
    <>
      <html lang="en">
        <head>
          <link 
            rel="icon" 
            href="data:image/svg+xml,
              <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
                <text y=%22.9em%22 font-size=%2290%22>👾</text>
              </svg>"
          ></link>
        </head> 

        <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
            <Header content={generalData} />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
