/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
  
  
const Layout = ({ children }) => {

return (
 
    <Styled.root>
        <div sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: 3,
        paddingTop: 0,
        }}
        >
            <main>{children}</main>
        </div>
    </Styled.root>

)
}

export default Layout