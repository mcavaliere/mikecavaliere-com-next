"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
