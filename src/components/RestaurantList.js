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
              avatar={<Avatar backgroundColor={'#ffffff'} icon={<FontIcon style={{ color: '#00BCD4'}} className="fa fa-cutlery"/>}/>}
              titleStyle={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}
            />
          {item.result.photos[0] ?
          <CardMedia
            overlay={<CardTitle title={<a href={`https://www.google.com/maps/dir/${item.result.startLocation.lat},${item.result.startLocation.lng}/${item.result.geometry.location.lat},${item.result.geometry.location.lng}`} target="_blank">Directions</a>} subtitle={<a href={item.result.website} target="_blank">Restaurant Website</a>} />}
            >
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${item.result.photos[0].photo_reference}&key=${this.props.access}`} alt="Pic From Google" className="restaurant-image"/>
          </CardMedia>
          :
          <CardMedia
            overlay={<CardTitle title={item.result.vicinity} subtitle={<a href={item.result.website} target="_blank">Website</a>} />}
            >
            <FontIcon className="content-text" style={{fontSize: 192, color: '#66605a' }} className="fa fa-frown-o" aria-hidden="true" className="restaurant-image"> Sorry, no image available</FontIcon>
          </CardMedia>
        }
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
