export const dynamic = 'force-dynamic'

// external modules
import type { Metadata } from 'next';

// internal dependencies
import GlobalStyles from '@/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/registry'

// font-families
import '@fontsource/courier-prime/400.css';
import '@fontsource/courier-prime/700.css';
import '@fontsource-variable/geist-mono';

import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import { getGeneralData } from '@/lib/sanity/general'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const generalData = await getGeneralData()
  const headerData = generalData.header
  const menuData = generalData.menu

  return (
    <>
      <html lang="en">
        <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
            <Header content={headerData} />
            {children}
            <Menu menu={menuData} />
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
