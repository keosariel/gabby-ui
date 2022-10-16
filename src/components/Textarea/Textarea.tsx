import React, { useState, ForwardRefRenderFunction } from "react";
// @ts-ignore
import InputStyles from '../Input/Input.module.css'
import { Typography } from '../Typography/index';

type TextareaSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface TextAreaProps {
    defaultValue?: string | number
    descriptionText?: string
    disabled?: boolean
    error?: string
    className?: string
    inputRef?: string
    label?: string
    name?: string
    actions?: React.ReactNode
    size?: TextareaSize
    borderless?: boolean
    type?: string
    placeholder?: string
    value?: any
    style?: React.CSSProperties
    rows?: number
    limit?: number
    id?: string
    onChange?(x: React.ChangeEvent<HTMLTextAreaElement>): void
    onFocus?(x: React.FocusEvent<HTMLTextAreaElement>): void
    onBlur?(x: React.FocusEvent<HTMLTextAreaElement>): void
    onKeyDown?(x: React.KeyboardEvent<HTMLTextAreaElement>): void
  }

const Textarea : ForwardRefRenderFunction<unknown, TextAreaProps> = (props, ref) => {
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
        inputRef,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
        placeholder,
        style,
        value,
        rows,
        limit,
        id,
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

    const [charLength, setCharLength] = useState(0)

    function onInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCharLength(e.target.value.length)
        if (onChange) {
          onChange(e)
        }
    }
    // TODO: show {charLength}/{limit}
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
                <textarea
                    ref={inputRef}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    name={name}
                    rows={rows}
                    cols={100}
                    className={inputClasses.join(' ')}
                    onChange={onInputChange}
                    onFocus={onFocus ? (event) => onFocus(event) : undefined}
                    onBlur={onBlur ? (event) => onBlur(event) : undefined}
                    onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
                    placeholder={placeholder}
                    style={style}
                    maxLength={limit}
                    {...rest}
                >{value}</textarea>
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

export default React.forwardRef<unknown, TextAreaProps>(Textarea);