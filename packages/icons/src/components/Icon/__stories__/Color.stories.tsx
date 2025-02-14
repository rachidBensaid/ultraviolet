import type { Decorator } from '@storybook/react'
import { Stack } from '@ultraviolet/ui'
import type { ComponentProps } from 'react'
import { Icon } from '..'

const COLORS = ['primary', 'success', 'warning'] as const

export const Color = (args: ComponentProps<typeof Icon>) =>
  COLORS.map(color => <Icon key={color} name="eye" color={color} {...args} />)

Color.parameters = {
  docs: {
    description: { story: 'Set size using `size` property.' },
  },
}

Color.decorators = [
  Story => (
    <Stack gap={2} alignItems="center" direction="row">
      <Story />
    </Stack>
  ),
] as Decorator[]
