import React, { ForwardRefRenderFunction } from 'react'
import SelectStyles from './Select.module.css'
import InputStyles from '../Input/Input.module.css';
import { Typography } from '../Typography/index';
 
type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface OptionProps {
  value: string
  children: React.ReactNode
  selected?: boolean
}

export interface OptGroupProps {
  label: string
  children: React.ReactNode
}

export interface SelectProps
  extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  autofocus?: boolean
  children: React.ReactNode
  descriptionText?: string
  error?: string
  icon?: any
  inputRef?: string
  label?: string
  actions?: React.ReactNode
  size?: SelectSize
  borderless?: boolean
}

const Select: ForwardRefRenderFunction<unknown, SelectProps> = (props, ref) => {
    const {
        autofocus,
        children,
        descriptionText,
        error,
        icon,
        inputRef,
        label,
        actions,
        size,
        borderless,
        onChange,
        onFocus,
        onBlur,
        id,
        name,
        value,
        disabled,
        required,
        placeholder="Select option...",
        ...rest
    } = props;

    let selectClasses = [SelectStyles['gb-select']]
    if (error) selectClasses.push(SelectStyles['gb-select--error'])
    if (size) selectClasses.push(SelectStyles[`gb-select--${size}`])
    if (borderless) selectClasses.push(SelectStyles[`gb-select--borderless`])
    
    return (
      <div>
        <div className={SelectStyles['gb-select-container']}>
          <select
            id={id}
            name={name}
            autoFocus={autofocus}
            className={selectClasses.join(' ')}
            onChange={onChange ? (event) => onChange(event) : undefined}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
            onBlur={onBlur ? (event) => onBlur(event) : undefined}
            ref={inputRef}
            value={value}
            disabled={disabled}
            required={required}
            {...rest}
          >
            <option value="" disabled selected>{placeholder}</option>
            {children}
          </select>
          <span className={SelectStyles['gb-select-chevron-container']}>
            <svg
              className={SelectStyles['gb-select-chevron']}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
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
    )
}

export function Option({ value, children, selected }: OptionProps) {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}

export function OptGroup({ label, children }: OptGroupProps) {
  return <optgroup label={label}>{children}</optgroup>
}

export default React.forwardRef<unknown, SelectProps>(Select);