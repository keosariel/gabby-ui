import React, { ForwardRefRenderFunction } from "react";
// @ts-ignore
import BadgeStyles from './Badge.module.css'

type BadgeColor =   'gray'
                    | 'red'
                    | 'yellow'
                    | 'green'
                    | 'blue'
                    | 'indigo'
                    | 'purple'
                    | 'pink';
type BadgeSize = "sm" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: BadgeColor;
    size?: BadgeSize;
    children: string;
    dot?: boolean;
}

const Badge : ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
    const { size, color, children, dot } = props;
    let classes: string[] = [BadgeStyles["gb-badge"]];

    if (color) {
        classes.push(BadgeStyles[`gb-badge--${color}`]);
    }

    if (size) {
        classes.push(BadgeStyles[`gb-badge--${size}`]);
    }

    return (
        <span className={classes.join(' ')}>
            {dot && (
                <svg
                className={`${BadgeStyles[`gb-badge-dot`]} ${
                    BadgeStyles[`gb-badge--${color}`]
                }`}
                fill="currentColor"
                viewBox="0 0 8 8"
                >
                <circle cx="4" cy="4" r="3" />
                </svg>
            )}
      {children}
    </span>
    );
}

export default React.forwardRef<unknown, BadgeProps>(Badge);