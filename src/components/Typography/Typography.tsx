import React from 'react'
import TypographyStyles from './Typography.module.css'
import Text from './Text'
import Link from './Link'

function Typography({ children, className, tag = 'div', style }: any) {
  let classes = [
    TypographyStyles['gb-typography'],
    TypographyStyles['gb-typography-container'],
  ]
  if (className) {
    classes.push(className)
  }
  let CustomTag: any = `${tag}`
  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

Typography.Text = Text
Typography.Link = Link

export default Typography