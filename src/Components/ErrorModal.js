import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ErrorModal.scss';

const ErrorModal = ({error}) => {

  return(
    <div className='error-modal'>
      <div className='modal-content'>
        <p className='error-message'>{error}</p>
        {!error.includes('500') && <Link to='/'>Take me Home</Link>}
      </div>
    </div>
  );
}

export default ErrorModal;
