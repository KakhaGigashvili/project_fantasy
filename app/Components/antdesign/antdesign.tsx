import { ConfigProvider } from "antd"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default (props:Props) => {
    return(
        <ConfigProvider
        theme={{
          token: {
            colorText: '#F2BD1D',
              borderRadius: 8,
              colorBgContainer:'#02735E',
              colorBorder:'#0A3A40',
            },
          components: {
            Carousel: {
              arrowSize: 60,
              arrowOffset: -40,
            },
            Input: {
              activeBg: '#02735E',
              addonBg:  '#02735E',
              hoverBg: '#02735E19',
              hoverBorderColor: '#0A3A40'
            },
            Radio: {
              buttonColor: '#F2BD1D',
            },
          },}}> 
          {props.children}
          </ConfigProvider>
    )
}