import { Meta, StoryObj } from '@storybook/react'
import Badge from './index'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

// 緑色のバッジ
export const Green: Story = {
  args: {
    content: '2',
    backgroundColor: '#32bf00',
  },
}

// 赤色のバッジ
export const Red: Story = {
  args: {
    content: '10',
    backgroundColor: '#d4001a',
  },
}
