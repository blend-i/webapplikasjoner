import React from 'react';
import {shallow, mount} from "enzyme";
import NoMatch from "../src/components/NoMatch";
import { Heading } from '@chakra-ui/core';

it('should conatin the text "404', () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper.text()).toContain('404');
})