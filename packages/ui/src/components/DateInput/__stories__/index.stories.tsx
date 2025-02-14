import type { Meta } from '@storybook/react'
import { DateInput } from '..'

export default {
  component: DateInput,
  decorators: [
    Stories => (
      <div style={{ height: 360 }}>
        <Stories />
      </div>
    ),
  ],
  title: 'Components/Data Entry/DateInput',
} as Meta

export { Playground } from './Playground.stories'
export { Exclude } from './Exclude.stories'
export { Range } from './Range.stories'
export { Uncontrolled } from './Uncontrolled.stories'
export { Controlled } from './Controlled.stories'
export { Error } from './Error.stories'
export { Disabled } from './Disabled.stories'
export { Required } from './Required.stories'
export { Localized } from './Localized.stories'
export { I18n } from './I18n.stories'
export { MinMax } from './MinMax.stories'
