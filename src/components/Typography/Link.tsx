import React, { ForwardRefRenderFunction } from "react";
import { HandlerFunction } from '@storybook/addon-actions'
// @ts-ignore
import LinkStyles from './Link.module.css'

export interface LinkProps {
    children?: React.ReactNode
    target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
    href?: string
    className?: string
    style?: React.CSSProperties,
    onClick?: HandlerFunction
}

const Link : ForwardRefRenderFunction<unknown, LinkProps> = (props, ref) => {
    const { 
        children,
        target,
        href,
        className,
        style,
        onClick,
    } = props;
    
    let classes = ["gb-typography", LinkStyles['gb-typography-link']]

    if (className) {
        classes = [...classes, className]
    }

    return (
        <a
        onClick={onClick}
        className={classes.join(' ')}
        href={href}
        target={target}
        rel="noopener noreferrer"
        style={style}
        >
            {children}
        </a>
    )
}

export default React.forwardRef<unknown, LinkProps>(Link);