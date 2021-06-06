import React from "react";

export const CustomDropdownMenuItem = React.forwardRef(
    ({children,}, ref) => {
        return (
            <div className="menu-item px-5">
                {children}
            </div>
        );
    },
);

interface CustomButtonDropdownToggleProps {
    children: React.ReactNode;
    cssClass: string;
    onClick: any;
}

export const CustomButtonDropdownToggle = React.forwardRef(
    ({ children, onClick, cssClass }: CustomButtonDropdownToggleProps, ref) => {
        return (
            // @ts-ignore
            <button className={cssClass} ref={ref}
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                    }}>
                {children}
            </button>
        );
    },
);
