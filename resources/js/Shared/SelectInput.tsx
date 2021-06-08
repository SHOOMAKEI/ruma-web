import React from 'react';

type Props = {
    label?: string
    name: string
    className? : string
    label_required? : boolean
    errors: string
    [key: string]: any
}

export default ({
  label,
  name,
  className,
  children,
  errors ,
  label_required,
  ...props
}: Props) => {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className={`h4 mb-3 fw-light ${ label_required?'required form-label': ''}`} htmlFor={name}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select form-control-solid mb-2`}
      >
        {children}
      </select>
      {errors && <div className="invalid-feedback " style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
