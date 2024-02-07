
import './App.css';
import me from './assets/me.jpg'
import Experiences from './experiences';
import Contact from './contact.tsx';


function App() {
  return(
    <div className="all">
<div className='top'>
  <a href="#" className='my'>My portfolio</a>
  <a href="#" className='hm'>Home</a>
  <a href="#" className='exp'>Experiences</a>
  <a href="#" className='cnt'>Contact</a>
</div>

<img src={me} alt="me" className='me'/>
<h2>Deborah RUTAGENGWA</h2>
<h4>Creative Frontend Developer</h4>


<Experiences/>
<Contact/>

</div>

  );


  

}

export default App
