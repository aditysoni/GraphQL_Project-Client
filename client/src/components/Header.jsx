import logo from './assets/logo.png';
import './css/header.css';
export default function Header() {
  return (
    <nav className='main'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}