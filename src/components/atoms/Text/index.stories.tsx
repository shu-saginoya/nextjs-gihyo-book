import { Meta, StoryObj } from '@storybook/react'
import Text from './index'

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    variant: {
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
      defaultValue: 'base',
      description: 'テキストバリアント',
      table: {
        type: { summary: 'xs, sm, base, lg, xl, 2xl' },
        defaultValue: { summary: 'base' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

// サンプルテキスト
const longText =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more - or - less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web site still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like).'

// XS
export const XS: Story = {
  args: {
    variant: 'xs',
    children: longText,
  },
}

// SM
export const SM: Story = {
  args: {
    variant: 'sm',
    children: longText,
  },
}

// Base
export const Base: Story = {
  args: {
    variant: 'base',
    children: longText,
  },
}

// LG
export const LG: Story = {
  args: {
    variant: 'lg',
    children: longText,
  },
}

// XL
export const XL: Story = {
  args: {
    variant: 'xl',
    children: longText,
  },
}

// 2XL
export const XXL: Story = {
  args: {
    variant: '2xl',
    children: longText,
  },
}
