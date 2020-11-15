import React from 'react';
import {shallow, mount} from "enzyme";
import { NoMatch } from "../src/components/NoMatch";

it('should conatin the text "404', () => {
    const wrapper = mount(<NoMatch />)
    expect(wrapper.text()).toContain('404')
})