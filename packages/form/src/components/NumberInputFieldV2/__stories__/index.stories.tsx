import type { Meta } from '@storybook/react'
import { Snippet, Stack, Text } from '@ultraviolet/ui'
import { Form, NumberInputFieldV2 } from '../..'
import { mockErrors } from '../../../mocks'

export default {
  component: NumberInputFieldV2,
  decorators: [
    ChildStory => (
      <Form onRawSubmit={() => {}} errors={mockErrors}>
        {values => (
          <Stack gap={2}>
            <div
              style={{
                width: '250px',
              }}
            >
              {ChildStory()}
            </div>
            <Stack gap={1}>
              <Text variant="bodyStrong" as="p">
                Form input values:
              </Text>
              <Snippet prefix="lines" initiallyExpanded>
                {JSON.stringify(values.values, null, 1)}
              </Snippet>
            </Stack>
            <Stack gap={1}>
              <Text variant="bodyStrong" as="p">
                Form values:
              </Text>
              <Snippet prefix="lines">
                {JSON.stringify(values, null, 1)}
              </Snippet>
            </Stack>
          </Stack>
        )}
      </Form>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A NumberInput field',
      },
    },
  },
  title: 'Form/Components/Fields/NumberInputFieldV2',
} as Meta

export { Playground } from './Playground.stories'
export { Required } from './Required.stories'
