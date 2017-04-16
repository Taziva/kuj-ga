import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar'
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
    return !this.props.items || this.props.items.error_message ?
    <Card>
      <CardText style={{ textAlign: 'center', cursor: 'none' }}>
        Sorry, service currently not available
      </CardText>
    </Card>
    :
    (
      <div>
        <input value={this.state.text} onChange={this.setText}/>
        <button onClick={this.handleClick}>Add</button>
          {this.props.items.map((item, index) => (
          <Card key={index} style={{marginTop:10}}>
            <CardHeader
              title={item.result.name}
              avatar={<Avatar src={item.icon}/>}
            />
          <CardMedia>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${item.result.photos[0].photo_reference}&key=${this.props.access}`} alt="Pic From Google" width="600"/>
          </CardMedia>
          </Card>
        ))}
      </div>
    )

  }
  setText(event){
    this.setState({text: event.target.value})
  }
  handleClick(){
    this.props.onSubmit(this.state.text)
  }
}
RestaurantList.PropTypes = {
  onSubmit: PropTypes.func.isRequired
};
