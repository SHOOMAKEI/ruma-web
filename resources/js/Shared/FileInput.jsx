import React, { useState, useRef } from 'react';

// type InputProps = {
//     label?: string
//     name: string
//     className? : string
//     label_required? : boolean
//     errors: string
//     [key: string]: any
// }
// @ts-ignore
export default ({ className, name, label, accept, errors, label_required, callback, ...props }) => {
  const fileInput = useRef();
  const [file, setFile] = useState('');

  function handleFileChange(e) {
      const data = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(data);
      let base64;
      reader.onload =  function(event) {
          base64 = event.target?.result

          // @ts-ignore
          setFile(base64);
          callback(base64);
          console.log((base64))
      }
  }

  // @ts-ignore
    return (
    <div className={`form-group ${className} `}>
        <label className={`h4 mb-3 fw-light ${ label_required?'required form-label': ''}`}  htmlFor={name}>
          {label}
        </label>
    <div className="custom-file pl-2">
        <input
          id={name}
          name={name}
          accept={accept}
          ref={fileInput}
          type="file"
          data-toggle="custom-file-input"
          className="custom-file-input js-custom-file-input-enabled"
          onChange={handleFileChange}
        />

      {errors && <div className="invalid-feedback" style={{display:'block'}}>{errors}</div>}
    </div>
    </div>
  );
}
