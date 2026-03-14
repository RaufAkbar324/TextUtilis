import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Alert(props) {
  return (
    <div style={{height : '50px'}}>
      {
    props.alert &&
  <div className={`alert ${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>: <strong>{props.alert.msg}</strong>
</div>
}
</div>
  )
}
