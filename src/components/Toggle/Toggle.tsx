import React, { useState, ForwardRefRenderFunction } from 'react';
import ToggleStyles from './Toggle.module.css';

type ToggleSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ToggleProps {
    disabled?: boolean
    id?: string
    error?: string
    descriptionText?: string
    label?: string
    onChange?(x: boolean): void
    className?: any
    defaultChecked?: boolean
    checked?: boolean
    size?: ToggleSize
}

const Toggle: ForwardRefRenderFunction<unknown, ToggleProps> = (props, ref) => {
    const {
        disabled,
        id,
        error,
        descriptionText,
        label,
        onChange,
        className,
        defaultChecked,
        checked,
        size,
        ...rest
    } = props;

    const [intChecked, setIntChecked] = useState(
        (defaultChecked || checked) ?? false
    )

    // check if toggle checked is true or false
    // if neither true or false the toggle will rely on component state internally
    const active = checked ?? intChecked

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        // '`onChange` callback for this component
        if (onChange) onChange(!active)
        setIntChecked(!intChecked)
    }

    let toggleClasses = [
        ToggleStyles['gb-toggle'],
        ToggleStyles[`gb-toggle--${size}`],
    ]
    if (active) toggleClasses.push(ToggleStyles['gb-toggle--active'])

    let handleClasses = [ToggleStyles['gb-toggle__handle']]
    if (active) handleClasses.push(ToggleStyles['gb-toggle__handle--active'])
    
    return (
      <div>
        <button
            type="button"
            aria-pressed="false"
            className={toggleClasses.join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
        <span aria-hidden="true" className={handleClasses.join(' ')}></span>
      </button>
      </div>
    )
}

export default React.forwardRef<unknown, ToggleProps>(Toggle);