import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import  RestaurantListContainer  from '../src/components/RestaurantListContainer';
import  RestaurantList from '../src/components/RestaurantList';
import { spy } from 'sinon';

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

describe('<RestaurantListContainer />', () =>{
  it('should render a Restaurant', () =>{
    const wrapper = shallow(<RestaurantListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <RestaurantList/>
    ])).to.equal(true)
  })
  it('should start with an empty list', () =>{
    const wrapper = shallow(<RestaurantListContainer/>);
    expect(wrapper.state('restaurants')).to.eql([]);
  });
  it('adds restaurants to the list', () =>{
    const wrapper = shallow(<RestaurantListContainer/>);
    wrapper.instance().addRestaurant('KFC');
    expect(wrapper.state('restaurants')).to.eql(['KFC'])
  })
  it('passes addRestaurant to Restaurant', ()=>{
    const wrapper = shallow(<RestaurantListContainer/>);
    const restaurant = wrapper.find(RestaurantList);
    const addRestaurant = wrapper.instance().addRestaurant;
    expect(restaurant.prop('onSubmit')).to.eql(addRestaurant)
  })
  it('passes a bound addRestaurant to Restaurant', ()=> {
    const wrapper = shallow(<RestaurantListContainer/>);
    const restaurant = wrapper.find(RestaurantList);
    restaurant.prop('onSubmit')('KFC');
    expect(wrapper.state('restaurants')).to.eql(['KFC']);
  })
  it('renders the items', () => {
   const wrapper = mount(<RestaurantListContainer/>);
   wrapper.instance().addRestaurant('KFC');
   wrapper.instance().addRestaurant('McDonalds');
   expect(wrapper.find('li').length).to.equal(2);
 });
})
