import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 p-5 bg-danger mt-5">

          <div className='p-3 text-success bg-light rounded'>
            <h2>BMI Calculator</h2>
            <p>Measure your BMI based on your height and weight.</p>
          </div>

          <div className='mt-5'>
            <TextField className='bg-light w-100' id="outlined-basic" label="Height *" variant="outlined" />
          </div>

          <div className='mt-3'>
            <TextField className='bg-light w-100' id="outlined-basic" label="Weight *" variant="outlined" />
          </div>

          <div className='mt-3 d-flex justify-content-between'>
            <Button variant="contained" color="success" disable>Calculate</Button>
            <Button variant="outlined">
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
