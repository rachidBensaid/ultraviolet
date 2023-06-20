import { Template } from './Template.stories'

export const Multiline = Template.bind({})

Multiline.args = {
  children: `
# Install the package and start it
pnpm add @ultraviolet/ui
pnpm install
pnpm start
`,
}
