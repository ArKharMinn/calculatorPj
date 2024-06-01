import React from 'react'

const Button = ({ buttonEvent}) => {
  return (
    <div className='bg-white'>
          <div className='btn-group col-10 offset-1 my-3'>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm py-4 btn'>AC</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 mx-2 border shadow-sm btn'>%</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm btn btn-danger'>Del</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-1 ms-2 border shadow-sm btn btnColor text-white'>+</button>
          </div>
          <div className='btn-group col-10 offset-1 mb-3'>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm py-4 btn'>7</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 mx-2 border shadow-sm btn'>8</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm btn'>9</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-1 ms-2 border shadow-sm btn btnColor text-white'>-</button>
          </div>
          <div className='btn-group col-10 offset-1 mb-3'>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm py-4 btn'>4</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 mx-2 border shadow-sm btn'>5</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm btn'>6</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-1 ms-2 border shadow-sm btn btnColor text-white'>*</button>
          </div>
          <div className='btn-group col-10 offset-1 mb-3'>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm py-4 btn'>1</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 mx-2 border shadow-sm btn'>2</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm btn'>3</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-1 ms-2 border shadow-sm btn btnColor text-white'>/</button>
          </div>
          <div className='btn-group col-10 offset-1 mb-3'>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 border shadow-sm py-4 btn'>0</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-2 mx-2 border shadow-sm btn'>.</button>
              <button onClick={(e)=> buttonEvent(e.target.innerText)} className='col-1 ms-2 border shadow-sm btn btn-success text-white'>=</button>
      </div>
    </div>
  )
}

export default Button
