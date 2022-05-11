import React, { useState } from 'react';
import { ComponentStory } from "@storybook/react";
import Toggle from ".";

export default {
    title: 'Components/Toggle',
    component: Toggle,
    args: {
        ...Toggle.defaultProps,

    }
}

const Template: ComponentStory<typeof Toggle> = (args) => {
    const [checked, setChecked] = useState(args.checked);

    const toggleChecked = () => { setChecked(!checked) }

    return ( 
        <Toggle 
            {...args} 
            checked={checked} 
            onChange={toggleChecked} 
        />
    )
}
export const Default = Template.bind({});