import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import { shallow } from 'enzyme';

test('Should render DashboardPage', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});