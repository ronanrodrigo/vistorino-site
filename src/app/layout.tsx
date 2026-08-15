import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Vistorino — Do áudio solto à decisão certa",description:"Uma forma mais clara de avaliar o carro que você está pensando em comprar.",metadataBase:new URL("https://vistorino.com")};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
