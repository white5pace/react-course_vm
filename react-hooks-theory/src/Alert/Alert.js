import React from 'react';
import {useAlert} from "../Alert/AlertContext";

const Alert = () => {
  const alert = useAlert()

  if(!alert.visible) return null
  console.log(alert)

  return (
    <div className={'alert alert-danger'} onClick={alert.hide}>
      { alert.text }
    </div>
  );
};

export default Alert;