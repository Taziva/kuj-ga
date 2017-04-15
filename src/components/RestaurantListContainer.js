import React from 'react';
import  RestaurantList  from './RestaurantList'


export default class RestaurantListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      restaurants:[]
    };
    this.addRestaurant = this.addRestaurant.bind(this)
  }
  render(){
    return(
      <div>
        <RestaurantList items={this.state.restaurants} onSubmit={this.addRestaurant}/>
      </div>
    )
  }
  addRestaurant(name){
    this.setState({
      restaurants: [].concat(this.state.restaurants).concat([name])
    })
  }
}
