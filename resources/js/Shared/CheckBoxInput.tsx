import React from 'react';

type InputProps = {
    label?: string
    name: string
    className? : string
    label_required? : boolean
    errors: string
    [key: string]: any
}

export default ({ label, name, className, value, errors, label_required, ...props }:InputProps) => {
  return (
    <div className={`form-check form-switch form-check-custom form-check-solid px-5 pt-5 ${className}`}>

      <input
        id={name}
        name={name}
        {...props}
        type="checkbox"
        className="form-check-input h-30px w-50px "
      />
       {label && (
        <label className={`form-check-label ${ label_required?'required form-label': ''}`} htmlFor={name}>
          {label}
        </label>
      )}
        <br/>
      {errors && <div className="invalid-feedback " style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
