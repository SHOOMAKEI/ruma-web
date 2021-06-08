import React from 'react';

type InputProps = {
    label?: string
    name: string
    className? : string
    errors: string
    [key: string]: any
}

export default ({ label, name, className, errors ,value, label_required, ...props }: InputProps) => {

    return (
    <div className={`form-group ${className}`}>
      {label && (
        <label className={`h4 mb-3 fw-light ${ label_required?'required form-label': ''}`} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
    id={name}
    name={name}
        {...props}
    className={`form-input form-control`}
    rows={2}
    value={value ? value : ""}
    />
      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
  );
};
