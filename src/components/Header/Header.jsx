import enas from '../../assets/images/enas.jpg';
import './header.css';
export default function Header(){
    return (
      <header className="App-header">
          
          <h2>ENAS N. I. ZAID</h2>
          <img src={enas} alt='enas' className='logo'/>
          <h3 className='contact'>Contact <p>" enaszaid995@gmail.com || +19514419983 " </p></h3>
      </header>
    );
}