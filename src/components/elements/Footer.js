/** @jsx jsx */
import {jsx } from "theme-ui"
import {Link} from "gatsby"


const Footer = () => {
    return (
        <footer
        sx={{
          fontSize: 1,
          color: 'text',
          bg: 'background',
        }}>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
      
            mx: 'auto',
            px: 2,
            py: 4,
          }}>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            Home
          </Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            Blog
          </Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>
            About
          </Link>
          <div sx={{ mx: 'auto' }} />
          <div sx={{ p: 2 }}>© 2019 Jane Doe</div>
        </div>
      </footer>
      
    )
}

export default Footer