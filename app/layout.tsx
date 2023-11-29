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
          <title>Micaelen Miranda</title>
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
