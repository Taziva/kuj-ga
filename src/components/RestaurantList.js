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
  showSubtitle(item){
    if(item.result.opening_hours){
      return(<div>{
          item.result.opening_hours.open_now === false? "Closed": "Open"
        }<br/>
      <a href={`https://www.google.com/maps/dir/${item.result.startLocation.lat},${item.result.startLocation.lng}/${item.result.geometry.location.lat},${item.result.geometry.location.lng}`} target="_blank">Get Directions</a></div>)
    }else{
      return(<a href={`https://www.google.com/maps/dir/${item.result.startLocation.lat},${item.result.startLocation.lng}/${item.result.geometry.location.lat},${item.result.geometry.location.lng}`} target="_blank">Get Directions</a>)
    }
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
          {this.props.items.map((item) => (
          <Card className="content" style={{marginTop:10}}>
          <CardMedia
            overlay={<CardTitle title={<a href={item.result.website} target="_blank">{item.result.name}</a>} titleStyle={{fontSize: 16}} subtitle={this.showSubtitle(item)} subtitleStyle={{fontSize:12}} />}
            overlayStyle={{paddingTop:0}}>
            {item.result.photos?
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=${item.result.photos[0].photo_reference}&key=${this.props.access}`} alt="Pic From Google" className="restaurant-image"/>
            :
            <img src="http://www.daleweeksphotography.co.uk/wp-content/themes/como/img/aq_resize/noimage-600x600.jpg" alt="Pic From Google" className="restaurant-image"/>
            }
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
