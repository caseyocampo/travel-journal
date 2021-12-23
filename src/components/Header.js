import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <header>
      <img src={Logo} alt='logo' />
      <p className='header--title'>Casey's Travel Journal</p>
    </header>
  )
}

export default Header
