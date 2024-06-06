import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  //state to hold values from input field
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  // for conditional rendering
  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true)

  const validate = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (!!value.match(/^[0-9]*$/)) {
      if (name === 'height') {
        setHeight(value)
        setIsHeight(true)
      }
      else{
        setWeight(value)
        setIsWeight(true)
      }
    }
    else {
      if (name === 'height') {
        setIsHeight(false)
      }
      else{
        setIsWeight(false)
      }
    }
  };

  const handleReset = () => {
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setBmi(0)
  }

  const calculate = () => {
    let height_meter = height/100;
    let weight_kg = weight/(height_meter ** 2)
    weight_kg = weight_kg.toFixed(2)
    let str = ' '

    if (weight_kg < 18.5) {
      str = 'Underweight';
    } else if ( weight_kg >= 18.5 && weight_kg < 24.9) {
      str = 'Normal weight';
    } else if (weight_kg >= 25 && weight_kg < 29.9) {
      str = 'Overweight';
    } else if (weight_kg >= 30) {
      str = 'Obese';
    }
    setBmi(`${weight_kg} (${str})`);
  };
  

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 p-5 bg-danger mt-5">

          <div className='p-3 text-success bg-light rounded'>
            <h2>BMI Calculator</h2>
            <p>Measure your BMI based on your height and weight.</p>
            <h2 style={{ color: 'blue' }} className='d-flex align-items-center justify-content-center'>BMI={bmi}</h2>
          </div>

          <div className='mt-5'>
            <TextField className='bg-light w-100 rounded' id="outlined-basic" label="Height *" name="height" variant="outlined" value={height || ""} onChange={(e) => validate(e)} />
            {!isHeight &&
              <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mt-3'>
            <TextField className='bg-light w-100 rounded' id="outlined-basic" label="Weight *" name="weight" variant="outlined" value={weight || ""} onChange={(e) => validate(e)} />
            {!isWeight &&
              <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mt-3 d-flex justify-content-between'>
            <Button variant="contained" color="success" onClick={calculate} disabled={isHeight && isWeight ? false : true}>Calculate</Button>
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>

          </div>


        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  )
}

export default App
