import { ComponentStory } from "@storybook/react";
import Checkbox from ".";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        ...Checkbox.defaultProps,
    }
}

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
)
export const Default = Template.bind({});