import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraComponentsProvider({ children }) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}