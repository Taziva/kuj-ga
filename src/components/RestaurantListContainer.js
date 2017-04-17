import React from 'react';
import  RestaurantList  from './RestaurantList';
import AppBar from 'material-ui/AppBar'


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
        <AppBar title="Kuj-Ga" />
        <RestaurantList items={this.props.restaurants} onSubmit={this.addRestaurant}/>
      </div>
    )
  }
  addRestaurant(name){
    this.setState({
      restaurants: [].concat(this.state.restaurants).concat([name])
    })
  }
}
