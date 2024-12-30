import { Meta, StoryObj } from '@storybook/react'
import Input from './index'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
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
  },
} as Meta<typeof Input>

type Story = StoryObj<typeof Input>

const handleChange = () => {
  // Storybook action loggerを使用する場合:
  // action('onChange')()
  console.log('onChange called')
}

// テキスト入力
export const Normal: Story = {
  args: {
    name: 'normal',
    value: '',
    onChange: handleChange,
    placeholder: 'プレースホルダー',
  },
}

// 赤枠のテキスト入力
export const Error: Story = {
  args: {
    name: 'error',
    value: '',
    onChange: handleChange,
    hasError: true,
    placeholder: 'プレースホルダー',
  },
}
