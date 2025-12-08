export const dynamic = "force-dynamic";

// external modules
import type { Metadata } from "next";

// internal dependencies
import GlobalStyles from "@/styles/globalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

// font-families
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import "@fontsource-variable/geist-mono";

import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const metadata = await defaultGETRequest(Endpoints.metadata);

  return (
    <>
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Header content={metadata.content.header} />
            {children}
            <Menu menu={metadata.content.menu} />
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
