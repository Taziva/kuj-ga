import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
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
  textStyle(){
    return(
      {textAlign: 'center',
        color: '#66605a'}
      )
  }
  render(){
    return !this.props.items || this.props.items.error_message ?
    <Card className="content">
      <CardText className="content-text" style={this.textStyle()}>
        Sorry, service currently not available
      </CardText>
      <CardText className="content-text" style={this.textStyle()}>
        <FontIcon className="content-text" style={{fontSize: 192, color: '#66605a' }} className="fa fa-frown-o" aria-hidden="true"></FontIcon>
      </CardText>
    </Card>
    :
    (
      <div>
          {this.props.items.map((item, index) => (
          <Card className="content" key={index} style={{marginTop:10}}>
            <CardHeader
              title={item.result.name}
              avatar={<Avatar src={item.icon}/>}
            />
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
