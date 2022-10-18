import React, { ForwardRefRenderFunction } from "react";
// @ts-ignore
import CardStyles from './Card.module.css'
import { Typography } from "../Typography";

export interface CardProps {
    children?: React.ReactNode
    className?: string
    cover?: React.ReactNode
    description?: string
    hoverable?: boolean
    shadow?: boolean
    style?: React.CSSProperties
    title?: string
    titleExtra?: React.ReactNode
}

const Card = ({ 
    children,
    className,
    cover,
    description,
    shadow,
    hoverable,
    style,
    title,
    titleExtra
}: CardProps) => {
    
    let classes = [CardStyles['gb-card']]
    if (hoverable) classes.push(CardStyles['gb-card--hoverable'])
    if (className) classes.push(className)
    if (shadow) classes.push(CardStyles['gb-card--shadow'])
    
    return (
        <div className={classes.join(' ')} style={style}>
            {title && (
                <div className={CardStyles['gb-card-head']}>
                <Typography.Text style={{ margin: 0 }} size="md">{title}</Typography.Text>
                <Typography.Link style={{ margin: 0 }}>{titleExtra}</Typography.Link>
                </div>
            )}
            {cover}
            <div className={CardStyles['gb-card-content']}>{children}</div>
        </div>
    );
}

interface MetaProps {
    title?: string
    description?: string
    style?: React.CSSProperties
    className?: string
}
  
function Meta({ title, description, style, className }: MetaProps) {
    return (
      <div style={style} className={className}>``
        <Typography.Text style={{ margin: '0' }} size="xl">
          {title}
        </Typography.Text>
        <div>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </div>
      </div>
    )
}
  
Card.Meta = Meta

export default Card;