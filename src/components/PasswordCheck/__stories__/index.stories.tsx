import { ComponentMeta } from '@storybook/react'
import PasswordCheck from '..'

export default {
  component: PasswordCheck,
  parameters: {
    docs: {
      description: {
        component:
          'Password checker shows what is missing into password to validate requirements.',
      },
    },
  },
  title: 'Components/Data Entry/PasswordCheck',
} as ComponentMeta<typeof PasswordCheck>

export { Playground } from './Playground.stories'
