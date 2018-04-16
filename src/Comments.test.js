import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comments from './Comments'


describe('<Comments />', () => {
    const comments = {
        1: {
            comment: 'test 1'
        },
        2: {
            comment: 'test 2'
        }
    }
    it('renders without crashing', () => {
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.length).toBe(1)
    })
    it('check if it renders two comments', () => {
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find('Comment').length).toBe(2)
    })
})