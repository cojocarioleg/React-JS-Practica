import logoImg from './../../img/icons/logo.svg'

import './header.css';


function Header()
{
  return (
    <header className='header'>
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header_nav">
            <ul>
              <li><a href="#!">catalougue</a></li>
              <li><a href="#!">fashion</a></li>
              <li><a href="#!">favourite</a></li>
              <li><a href="#!">lifestyle</a></li>
              <li><a href="#!" className='header_nav-btn'>sign up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;