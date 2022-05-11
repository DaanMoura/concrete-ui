import React, { useState } from 'react';
import { ComponentStory } from "@storybook/react";
import Checkbox from ".";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        ...Checkbox.defaultProps,

    }
}

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(args.checked);

    const toggleChecked = () => { setChecked(!checked) }

    return ( 
        <Checkbox 
            {...args} 
            checked={checked} 
            onChange={toggleChecked} 
        />
    )
}
export const Default = Template.bind({});