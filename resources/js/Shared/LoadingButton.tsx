import React from 'react';

type Props = {
    loading: boolean
    className?: string
    children: string
    props?: any
    type: string
    color?: 'primary' | 'danger' | 'dark';
}
export default ({ loading, className, type, color='primary', children, ...props }:Props) => {
  return (
    <button
      disabled={loading}
      className={`btn btn-${color} ${className}`}
      {...props}
      data-kt-indicator={loading ? 'on': 'off'}
    >
      {loading && <span className="indicator-progress h4 mb-0">
                Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"/>
            </span>}
        <span className="indicator-label h4">{children}</span>

    </button>
  );
};
