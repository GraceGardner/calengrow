import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ErrorContext} from '../Contexts/ErrorContext'
import '../Styles/ErrorModal.scss';

const ErrorModal = () => {
  const {error, setError} = useContext(ErrorContext)

  const clearError = () => {
    setError()
  }

  return (
    <>
    {error &&
      <div className='error-modal'>
        <div className='modal-content'>
          <p className='error-message'>{error}</p>
          <Link to='/'>
            <button className='error-button'
              onClick={clearError}
            >Take me Home
            </button>
          </Link>
        </div>
      </div>
    }
    </>
  )
}

export default ErrorModal;
