import React, { useState, ForwardRefRenderFunction } from 'react'
import * as RadixPopover from '@radix-ui/react-popover'
import type * as RadixPopoverTypes from '@radix-ui/react-popover/'

import PopoverStyles from './Popover.module.css'

export interface PopoverProps {
    align?: RadixPopoverTypes.PopoverContentProps['align']
    ariaLabel?: string
    arrow?: boolean
    children?: React.ReactNode
    className?: string
    defaultOpen?: boolean
    modal?: boolean
    onOpenChange?: RadixPopoverTypes.PopoverProps['onOpenChange']
    open?: boolean
    overlay?: React.ReactNode
    portalled?: boolean
    showClose?: boolean
    side?: RadixPopoverTypes.PopoverContentProps['side']
    sideOffset?: RadixPopoverTypes.PopoverContentProps['sideOffset']
    style?: React.CSSProperties
}


const Popover : ForwardRefRenderFunction<unknown, PopoverProps> = (props, ref) => {
    const {
        align,
        ariaLabel,
        arrow,
        children,
        className,
        defaultOpen,
        modal,
        onOpenChange,
        open,
        overlay,
        portalled,
        showClose,
        side,
        sideOffset,
        style,
        ...rest
    } = props;

    let classes = [PopoverStyles['gb-popover__content']]
    if (className) {
        classes.push(className)
    }
    
    return (
        <RadixPopover.Root
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={onOpenChange}
      open={open}
    >
      <RadixPopover.Trigger
        className={PopoverStyles['gb-popover__trigger']}
        aria-label={ariaLabel}
      >
        {children}
      </RadixPopover.Trigger>

      <RadixPopover.Content
        sideOffset={sideOffset}
        side={side}
        align={align}
        className={classes.join(' ')}
        style={style}
        // portalled={portalled}
      >
        {arrow && (
          <RadixPopover.Arrow
            className={PopoverStyles['gb-popover__arrow']}
            offset={10}
          ></RadixPopover.Arrow>
        )}
        {overlay}
        {showClose && (
          <RadixPopover.Close className={PopoverStyles['gb-popover__close']}>
            <svg
                className={`${PopoverStyles[`gb-popover__cancel`]}`}
                fill="currentColor"
                viewBox="0 0 8 8"
                >
                <rect width="50" height="50" />
                </svg>
          </RadixPopover.Close>
        )}
      </RadixPopover.Content>
    </RadixPopover.Root>
    );
}

export default React.forwardRef<unknown, PopoverProps>(Popover);
