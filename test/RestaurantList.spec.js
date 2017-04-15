import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import  RestaurantList from '../src/components/RestaurantList';
import { spy } from 'sinon';

describe('<RestaurantList/>', ()=>{
  it('should render zero items', () => {
    const wrapper = shallow(<RestaurantList items={[]}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<RestaurantList items={undefined}/>);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render some items', () => {
    const items = ['KFC', 'McDonalds', 'Gunpowder'];
    const wrapper = shallow(<RestaurantList items={items}/>);
    expect(wrapper.find('li')).to.have.length(3);
  });
  it('should contain an input and button', ()=>{
    const wrapper = shallow(<RestaurantList />);
    expect(wrapper.containsAllMatchingElements([
      <input/>,
      <button>Add</button>
    ])).to.equal(true);
  });
  it('should accept input', ()=>{
    const wrapper = mount(<RestaurantList />);
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'McDonalds'}});
    expect(wrapper.state('text')).to.equal('McDonalds');
    expect(input.prop('value')).to.equal('McDonalds')
  })
  it('should call onSubmit when Add is clicked', ()=>{
    const addRestaurantSpy = spy();
    const wrapper = shallow(<RestaurantList onSubmit={addRestaurantSpy}/>);
    wrapper.setState({text: "Gunpowder"});
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(addRestaurantSpy.calledOnce).to.equal(true);
    expect(addRestaurantSpy.calledWith("Gunpowder")).to.equal(true);
  })
})
