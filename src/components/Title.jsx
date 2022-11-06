import React from 'react'
import '../components/styles/components/styleTitle.css';
const Title = ({titulo}) => {
  return (
  <div id="containerTitulo" className=''>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <h2 className='text-center'>{titulo}</h2>
        </div>
      </div>
  </div>
    // <header className='row col'>
    //     <h2 className='text-center'>{titulo}</h2>
    // </header>
  )
}

export default Title