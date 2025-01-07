import { Meta, StoryObj } from '@storybook/react'
import TextArea from './index'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '行数',
      table: {
        type: { summary: 'number' },
      },
    },
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '最小行数',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: '最大行数',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

// テキストエリア
export const Normal: Story = {
  args: {
    name: 'normal',
    placeholder: 'プレースホルダー',
  },
}

// 赤枠のテキストエリア
export const Error: Story = {
  args: {
    name: 'error',
    hasError: true,
    placeholder: 'プレースホルダー',
  },
}
