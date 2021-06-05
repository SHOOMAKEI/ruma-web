import React from 'react';

type InputProps = {
    label?: string
    name: string
    className? : string
    errors: string
    [key: string]: any
}

export default ({ label, name, className, errors , ...props }: InputProps) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className="h4 mb-3 fw-light" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className="form-control form-control-solid mb-2"

      />
      {errors && <div className="invalid-feedback text-danger mt-2" style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
