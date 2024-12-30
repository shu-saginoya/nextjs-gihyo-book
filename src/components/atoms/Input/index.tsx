/* eslint-disable prettier/prettier */
import React from 'react'

export type InputProps = {
  name: string
  value: string
  onChange: (name: string, value: string) => void
  placeholder?: string
  pattern?: string
  disabled?: boolean
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
const Input: React.FC<InputProps> = ({
  name,
  placeholder = undefined,
  pattern = undefined,
  disabled = false,
  value = '',
  onChange,
  hasBorder = true,
  hasError,
}) => {
  const borderColorStyle = borderColor[hasError ? 'error' : 'default']

  // イベントハンドラーをローカルで定義し、必要な値のみを親に渡す
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value)
  }

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      pattern={pattern}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className={`${baseStyle} ${hasBorder ? borderStyle : ''} ${borderColorStyle}`}
    />
  )
}

export default Input
