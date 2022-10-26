import { Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { STATE } from '../../reducers/reducerConst';

const ShowError = () => {
  const [showAlert, setShowAlert] = useState(false);
  const messageState = useSelector((state) => state.messageReducer);
  const [errorMsg, setErrorMsg] = useState('');
  const [variant, setVariant] = useState("success");

  const hideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const instantHide = () =>{
    setShowAlert(false);
  }

  useEffect(() => {
    if (messageState[STATE.ERR_MSG] !== '') {
      setErrorMsg(messageState[STATE.ERR_MSG]);
      setShowAlert(true);
      if(messageState[STATE.IS_ERROR]){
        setVariant("danger");
      }else{
        setVariant("success");
      }
      hideAlert();
    }
  }, [messageState]);

  return (
    <>
      {showAlert && (
        <div style={{ position: 'fixed', bottom: '10px', zIndex: '2' }}>
          <Alert variant={variant} onClose={() => instantHide()} dismissible>{errorMsg}</Alert>
        </div>
      )}
    </>
  );
};

export default ShowError;