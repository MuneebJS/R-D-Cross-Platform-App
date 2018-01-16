import React from 'react';

import {
  Icon,
  Button
} from 'react-onsenui';
export default class ProductListing extends React.Component {
  render() {
    return (
      <div >
        <div>
          <h2>Product 1</h2>
          <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Product 1" />
          <Button onClick={() => console.log("I'm clicked")} modifier='large quiet'>+ ADD TO CART</Button>
        </div>
        <div>
          <h2>Product 2</h2>
          <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Product 2" />
          <Button onClick={() => console.log("I'm clicked")} modifier='large quiet'>+ ADD TO CART</Button>
        </div>
        <div>
          <h2>Product 3</h2>
          <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Product 3" />
          <Button onClick={() => console.log("I'm clicked")} modifier='large quiet'>+ ADD TO CART</Button>
        </div>
        <div>
          <h2>Product 4</h2>
          <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Product 3" />
          <Button onClick={() => console.log("I'm clicked")} modifier='large quiet'>+ ADD TO CART</Button>
        </div>
      </div>
    )
  }
}