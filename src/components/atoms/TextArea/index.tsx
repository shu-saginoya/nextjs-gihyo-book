/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react'

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    /**
     * 最小行数
     */
    minRows?: number
    /**
     * 最大行数
     */
    maxRows?: number
    /**
     * バリデーションエラーフラグ
     */
    hasError?: boolean
  }

const baseStyle =
  'p-3 box-border w-full placeholder:text-primary text-black border-2 rounded'
const borderColor = {
  default: 'border-primary',
  error: 'border-danger',
}

/**
 * テキストエリア
 *
 */
const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    hasError,
    onChange,
    ...rest
  } = props
  const borderColorStyle = borderColor[hasError ? 'error' : 'default']
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  // 最低の行数より未満指定しないようにする
  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows.',
  )
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previousRows = e.target.rows

      e.target.rows = minRows // 行数のリセット

      // 現在の行数
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      // 最大を超えないように行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      onChange?.(e)
    },
    [onChange, minRows, maxRows],
  )

  return (
    <textarea
      onChange={handleChange}
      className={`${baseStyle} ${borderColorStyle}`}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </textarea>
  )
}

export default TextArea
