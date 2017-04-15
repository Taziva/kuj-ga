import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class RestaurantList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return this.props.items?
    (
      <div>
        <input value={this.state.text} onChange={this.setText}/>
        <button onClick={this.handleClick}>Add</button>
        <ul>
          {this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div>
    ):
    <div>
      <input value={this.state.text} onChange={this.setText}/>
      <button onClick={this.handleClick}>Add</button>
    </div>

  }
  setText(event){
    this.setState({text: event.target.value})
  }
  handleClick(){
    this.props.onSubmit(this.state.text)
  }
}
RestaurantList.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
