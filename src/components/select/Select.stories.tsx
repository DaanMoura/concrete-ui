import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from 'styled-components'
import Select from '.'

export default {
    title: 'Select',
    component: Select,
    args: {
        ...Select.defaultProps,
        width: '200px',
    },
}

const Container = styled.div`
    width: 100%;
    height: 260px;
`

const options = ['Dog', 'Cat', 'Fish', 'Rabbit', 'Horse']
const Template: ComponentStory<typeof Select> = (args) => (
    <Container>
        <Select {...args} options={options}/>
    </Container>
)
export const Default = Template.bind({});