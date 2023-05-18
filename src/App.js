import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() { 

  // light to dark mode
  const [mode, setMode] = useState('light');  
  const [btntext, setbtntext] = useState('Enable Dark Mode')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setbtntext('Enable Light Mode')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enebale", "success");
      document.title = 'Textutils - Dark Mode';
    //   setInterval(() => {
    //   document.title = 'Textutils is Amazing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install Textutils Now';
      
    // }, 1500);
    }else{
      setMode('light');
      setbtntext('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enebale", "success");
      document.title = 'Textutils - Light Mode';

    }
  }

    // light to Green mode
    const [orangeMode, setOrangeMode] = useState('light');
    const [orangeBtn, setorangeBtn] = useState('Enable Orange Mode')
    const [textForOrange, setTextForOrange] = useState('dark')
    const toggleOrangeMode = ()=>{
      if(orangeMode === 'light'){
        setOrangeMode('warning');
        setTextForOrange('light');
        setorangeBtn('Enable Light Mode');
      document.body.style.backgroundColor = '#b18600';
      showAlert("Orange Mode has been enebale", "success");


        setMode(null);
      }else{
        setOrangeMode('light');
        setMode('light');
        setTextForOrange('dark');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enebale", "success");

        setorangeBtn('Enable Orange Mode');

      }
    }

  
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);

  }

  return (
   <>


{/* <Router> */}
<Navbar title="Textutils2" aboutText="about Us" 
mode={mode}
toggleMode={toggleMode}
btnText={btntext}
orangeMode={orangeMode}
textForOrange={textForOrange}
toggleOrangeMode={toggleOrangeMode}
orangeBtn={orangeBtn} 
/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
{/* /users --> Component 1
/users/home -- component 2 */}
{/* <Route exact path="/About" element={<About/>} /> */}
{/* <Route exact path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
               
        	{/* </Routes> */}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
</div>
{/* // </Router> */}


   </>
  );
}
export default App;
