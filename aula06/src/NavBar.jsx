import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/a-faculdade">A faculdade</Link><br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
    </nav>
   
  )
}

export default Navbar