import { ComponentStory, ComponentMeta } from '@storybook/react';
import colors from '../../theme/colors'
import Button from '.';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        baseColor: {
            options: Object.keys(colors.state),
            control: { type: 'select' },
        }
    },
    args: Button.defaultProps,

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Click me!</Button>;
export const Default = Template.bind({});
