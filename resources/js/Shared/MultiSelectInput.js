import React from 'react';
import Select from 'react-select'

export default ({
  label,
  name,
  options,
  className,
  errors = [],
  ...props
}) => {
  return (
    <div className={`form-group ${className} `}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
        <Select
          closeMenuOnSelect={false}
          isMulti
          name={name}
          {...props}
          className={` form-select form-control-solid mb-2`}
          options={options}
          isSearchable={true}
        />
      {errors && <div id={name+'-error'} className="invalid-feedback animated fadeInDown">{errors}</div>}
    </div>
  );
};
