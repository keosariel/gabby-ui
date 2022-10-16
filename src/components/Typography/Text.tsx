import React, { ForwardRefRenderFunction } from "react";
// @ts-ignore
import TextStyles from './Text.module.css'

type TextType = 'default' | 'secondary' | 'success' | 'warning' | 'danger'
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface TextProps {
    className?: string
    children: any
    size?: TextSize
    style?: React.CSSProperties
    type?: TextType
    disabled?: boolean
    mark?: boolean
    code?: boolean
    keyboard?: boolean
    underline?: boolean
    strikethrough?: boolean
    strong?: boolean
    small?: boolean
}

const Text : ForwardRefRenderFunction<unknown, TextProps> = (props, ref) => {
    const { 
        className,
        children,
        size,
        style,
        type,
        disabled,
        mark,
        code,
        keyboard,
        underline,
        strikethrough,
        strong,
        small
    } = props;
    
    let classes = [TextStyles['gb-typography-text']]

    if (className) {
        classes.push(className)
    }

    if (type) {
        classes.push(TextStyles[`gb-typography-text-${type}`])
    }

    if (disabled) {
        classes.push(TextStyles[`gb-typography-text-disabled`])
    }

    if (underline) {
        classes.push(TextStyles[`gb-typography-text-underline`])
    }

    if (strikethrough) {
        classes.push(TextStyles[`gb-typography-text-strikethrough`])
    }

    if (small) {
        classes.push(TextStyles['gb-typography-text-small'])
    }

    if (size) {
        classes.push(TextStyles[`gb-typography-text-${size}`])
    }

    if (code)
        return (
            <code style={style} className={classes.join(' ')}>
                {children}
            </code>
        )
    if (mark)
        return (
            <mark style={style} className={classes.join(' ')}>
                {children}
            </mark>
        )
    if (keyboard)
        return (
            <kbd style={style} className={classes.join(' ')}>
                {children}
            </kbd>
        )
    if (strong)
        return (
            <strong style={style} className={classes.join(' ')}>
                {children}
            </strong>
        )
    return (
        <span style={style} className={classes.join(' ')}>
            {children}
        </span>
    )
}

export default React.forwardRef<unknown, TextProps>(Text);