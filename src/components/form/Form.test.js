import React from 'react';
import Form from './Form';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});




 


describe('testing Form', ()=>{
    it('Form have rendered correctly',  ()=>{
        const form = shallow(<Form />);
        expect(form).toMatchSnapshot();
    })
})