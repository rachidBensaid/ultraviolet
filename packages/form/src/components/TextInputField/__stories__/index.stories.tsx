import type { Meta } from '@storybook/react'
import { Snippet, Stack, Text } from '@ultraviolet/ui'
import { useForm } from 'react-hook-form'
import { Form, TextInputField } from '../..'
import { mockErrors } from '../../../mocks'

export default {
  component: TextInputField,
  decorators: [
    ChildStory => {
      const methods = useForm()
      const {
        errors,
        isDirty,
        isSubmitting,
        touchedFields,
        submitCount,
        dirtyFields,
        isValid,
        isLoading,
        isSubmitted,
        isValidating,
        isSubmitSuccessful,
      } = methods.formState

      return (
        <Form onRawSubmit={() => {}} errors={mockErrors} methods={methods}>
          <Stack gap={2}>
            {ChildStory()}
            <Stack gap={1}>
              <Text variant="bodyStrong" as="p">
                Form input values:
              </Text>
              <Snippet prefix="lines" initiallyExpanded>
                {JSON.stringify(methods.watch(), null, 1)}
              </Snippet>
            </Stack>
            <Stack gap={1}>
              <Text variant="bodyStrong" as="p">
                Form values:
              </Text>
              <Snippet prefix="lines">
                {JSON.stringify(
                  {
                    errors,
                    isDirty,
                    isSubmitting,
                    touchedFields,
                    submitCount,
                    dirtyFields,
                    isValid,
                    isLoading,
                    isSubmitted,
                    isValidating,
                    isSubmitSuccessful,
                  },
                  null,
                  1,
                )}
              </Snippet>
            </Stack>
          </Stack>
        </Form>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        component: 'A switch field that act like a checkbox',
      },
    },
  },
  title: 'Form/Components/Fields/TextInputField',
} as Meta

export { Playground } from './Playground.stories'
export { Required } from './Required.stories'
export { DynamicRequired } from './DynamicRequired.stories'
export { MinMaxLength } from './MinMaxLength.stories'
export { Regex } from './Regex.stories'
