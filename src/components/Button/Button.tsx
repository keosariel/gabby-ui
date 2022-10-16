import React, { ElementType, ReactNode, CSSProperties, ForwardRefRenderFunction } from "react";
// @ts-ignore
import ButtonStyles from './Button.module.css'

type ButtonType = "default" | "primary" | "secondary";
type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    size?: ButtonSize;
    icon?: ElementType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string;
    role?: string;
    children?: ReactNode;
    loading?: boolean;
    shadow?: boolean;
    hover?: boolean;
    loadingCentered?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
}

const Button : ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const { 
        type="default", 
        size, 
        icon, 
        className, 
        hover,
        children, 
        loading=false, 
        disabled=false, 
        onClick,
        shadow,
        role,
        style,
        ...rest
    } = props;
    let classes: string[] = [ButtonStyles["gb-btn"]];

    if(className){
        classes = [className, ...classes];
    }

    if (type) {
        classes.push(ButtonStyles[`gb-btn--${type}`]);
    }

    if (size) {
        classes.push(ButtonStyles[`gb-btn--${size}`]);
    }

    if(shadow){
        classes.push(ButtonStyles[`gb-btn--shadow`]);
    }

    if(hover){
        classes.push(ButtonStyles[`gb-btn--hover`]);
    }

    return (
        <button 
            className={classes.join(' ')} 
            style={style} 
            disabled={loading || disabled}
            onClick={onClick}
            role={role}
        >
                {children}
        </button>
    );
}

export interface ButtonGroupProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    hover?: boolean;
}

export function ButtonGroup({ children, className, style, hover }: ButtonGroupProps) {
    let classes: string[] = [ButtonStyles["gb-btn-group"]];

    if(hover){
        classes.push(ButtonStyles[`gb-btn-group--hover`]);
    }
    
    if(className){
        classes = [className, ...classes];
    }

    return (
        <div className={classes.join(' ')} style={style}>
            {children}
        </div>
    );
}

export default React.forwardRef<unknown, ButtonProps>(Button);