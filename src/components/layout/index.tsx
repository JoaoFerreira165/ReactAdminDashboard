import { ThemedHeaderV2, ThemedLayoutV2 } from "@refinedev/antd"
import { Header } from "./header"
export const Layout = ({children} : React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 Header={Header}
    Title={(titleProps) => <ThemedHeaderV2 {...titleProps} text="Refine" />}>
        {children}
    </ThemedLayoutV2>
    )
}
