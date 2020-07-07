/** @jsx jsx */
import { Styled, jsx } from "theme-ui"

import Header from '../components/elements/Header'
import Footer from '../components/elements/Footer'
  
const Layout = ({ children }) => {

return (
 
    <Styled.root>

            <Header />
                <main  sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: 3,
        paddingTop: 0,
        }}>{children}</main>
            <Footer />
    
    </Styled.root>

)
}

export default Layout