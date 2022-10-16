import React, { ElementType, ReactNode, CSSProperties, ForwardRefRenderFunction } from "react";
// @ts-ignore
import InputStyles from './Input.module.css'
import { Typography } from '../Typography/index';
 
type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>  {
    defaultValue?: string | number
    descriptionText?: string
    disabled?: boolean
    error?: string
    className?: string
    inputRef?: string
    label?: string
    name?: string
    actions?: React.ReactNode
    size?: InputSize
    borderless?: boolean
    type?: string
}

const Input : ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {
    const {
        defaultValue="",
        descriptionText,
        disabled=false,
        error,
        className,
        label,
        name,
        actions,
        size,
        borderless,
        type,
        inputRef,
        id,
        onChange,
        onBlur,
        onFocus,
        onKeyDown,
        placeholder,
        style,
        value,
        ...rest
    } = props;

    let inputClasses: string[] = [InputStyles["gb-input"]];

    if(error) {
        inputClasses.push(InputStyles[`gb-input--error`]);
    }

    if(size){
        inputClasses.push(InputStyles[`gb-input--${size}`]);
    }

    if(borderless){
        inputClasses.push(InputStyles[`gb-input--borderless`]);
    }

    return (
        <div className={className}>
            {label && 
                <Typography.Text className={InputStyles[`gb-input__label`]} size={(size? size : "md")}>
                    <label htmlFor={name}>
                        {label}
                    </label>
                </Typography.Text>
            }
            <div className={InputStyles['gb-input-container']}>
                <input
                    ref={inputRef}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    name={name}
                    className={inputClasses.join(' ')}
                    type={type}
                    id={id}
                    onChange={onChange ? (event) => onChange(event) : undefined}
                    onFocus={onFocus ? (event) => onFocus(event) : undefined}
                    onBlur={onBlur ? (event) => onBlur(event) : undefined}
                    onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
                    placeholder={placeholder}
                    style={style}
                    value={value}
                    {...rest}
                />
                {descriptionText && 
                    <Typography.Text className={InputStyles["gb-input__description"]} type="secondary" size={"xs"}>
                        {descriptionText}
                    </Typography.Text>
                }
                {error && 
                    <Typography.Text className={InputStyles["gb-input__error"]} type="danger" size={"xs"}>
                        {error}
                    </Typography.Text>
                }
            </div>
        </div>
    );
}

export default React.forwardRef<unknown, InputProps>(Input);