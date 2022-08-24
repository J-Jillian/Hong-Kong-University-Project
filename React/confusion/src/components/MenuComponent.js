import React, { Component } from "react";
import { DishDetail } from "./DishDetailComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDish: null,
    }
    console.log('menu Component constructor is invoked')
  }

  componentDidMount(){
    console.log('menu ComponentdidMount is invoked')
  }

 

  renderDish(dish) {
    if (dish != null) {
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>;
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this. props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log('menu Component render is invoked')



    return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
        <DishDetail dish={this.state.selectedDish} />
            </div>
     
  );
}
}

export default Menu;
