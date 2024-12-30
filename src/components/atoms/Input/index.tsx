/* eslint-disable prettier/prettier */
import React from 'react'

export type InputProps = {
  name?: string
  placeholder?: string
  pattern?: string
  disabled?: boolean
  value?: string
  hasBorder?: boolean
  hasError?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
const Input: React.FC<InputProps> = ({
  name,
  placeholder = undefined,
  pattern = undefined,
  disabled = false,
  value = '',
  hasBorder = true,
  hasError,
  onChange,
}) => {
  const borderColorStyle = borderColor[hasError ? 'error' : 'default']

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${hasBorder ? borderStyle : ''} ${borderColorStyle}`}
    />
  )
}

export default Input
