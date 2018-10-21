import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail  extends Component {
      constructor(props) {
        super(props);
      }


        renderDish(dish) {
          if (dish != null)
              return(
                  <Card>
                      <CardImg top src={dish.image} alt={dish.name} />
                      <CardBody className="d-none d-sm-block">
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                      </CardBody>
                  </Card>
              );
          else
              return(
                  <div></div>
              );
        }

        renderComments(dish){
            if (dish != null){
                console.log(dish.comments);
                const dishComments = dish.comments.map((comment) => {
                    return (
                        <ul class="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author},{comment.date}</li>
                        </ul>               
                    );
                        
                    //{console.log(comment.rating)}
                })
                return(
                    <div onClick={() => this.onDishSelect(dish)}>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        {dishComments}
                    </div>
                )}
            else
                return(
                    <div></div>
                )
    
          }

    
    render() {

        return ( 
            <div className="row">
                <div  className="col-12 col-md-5 m-1"> 
                    {this.renderDish(this.props.selectedDish)} 
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)} 
                </div>
                
            </div>
                                  
                   
        );
    }
}

export default DishDetail;