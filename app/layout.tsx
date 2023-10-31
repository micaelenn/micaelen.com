'use client'

// internal dependencies
import GlobalStyles from '@/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/registry'

// font-families
import '@fontsource/courier-prime/400.css';
import '@fontsource/courier-prime/700.css';
import '@fontsource/coustard/400.css';


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
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
