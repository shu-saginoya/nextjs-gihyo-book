/* eslint-disable prettier/prettier */
import React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasBorder?: boolean
  hasError?: boolean
}

const baseStyle = 'p-3 box-border w-full placeholder:text-primary text-black'
const borderStyle = 'border-2 rounded'
const borderColor = {
  default: 'border-primary',
  error: 'border-danger',
}

/**
 * インプット
 *
 */
const Input: React.FC<InputProps> = (props: InputProps) => {
  const { hasBorder = true, hasError, ...rest } = props
  const borderColorStyle = borderColor[hasError ? 'error' : 'default']

  return (
    <input
      type="text"
      className={`${baseStyle} ${hasBorder ? borderStyle : ''} ${borderColorStyle}`}
      {...rest}
    />
  )
}

export default Input
