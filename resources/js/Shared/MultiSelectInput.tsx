import React from 'react';
// @ts-ignore
import Select from 'react-select'

type Props = {
    label?: string
    name: string
    className? : string
    label_required? : boolean
    errors: string
    [key: string]: any
}
type error = {
    id: string
}

export default ({
  label,
  name,
  options,
  className,
  errors,
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
        <Select
          closeMenuOnSelect={true}
          isMulti
          name={name}
          {...props}
          options={options}
          isSearchable={true}
        />
      {errors && <div id={name+'-error'} className="invalid-feedback ">
          {errors}
      </div>}
    </div>
  );
};
