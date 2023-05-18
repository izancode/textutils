import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercse was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to Upper Case", "success");
    } 
    const handleLoClick = () =>{
      // console.log("Uppercse was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case", "success");

  } 
  const handleClearText = () =>{
    // console.log("Uppercse was clicked" + text);
    let newText = '';
    setText(newText);
  props.showAlert("Cleared", "success");

} 

// const handleCopyText = () =>{
//   // console.log("Uppercse was clicked" + text);
//   const newText2 = document.querySelector('#myBox')
//   newText2.select();
//   newText2.setSelectionRange(0, 99999);
//   document.execCommand('copy');

//   setText(newText2);
// } 

const handleCopyText = () =>{
  var text = document.getElementById('myBox')
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert("Copied", "success");

}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra Space", "success");

}
    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // setText("test ");
  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'} `} style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3">
 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearText}>Clear</button>
<button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes  read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
