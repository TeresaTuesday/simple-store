import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/ProductForm.css'

class UpdateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.product.name,
      imgURL: props.product.imgURL,
      desc: props.product.desc,
      price: props.product.price
    }
  }
  
  
  render () {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          imgURL: this.state.imgURL,
          desc: this.state.desc,
          price: this.state.price
        }
        
      })
      
      window.location.replace('/')
    }
    
    return(
      <form className="flexBox"
            onSubmit={handleSubmit}
      >
        <h3>Update Product</h3>
        <TextField floatingLabelText="Name"
                   value={this.state.name}
                   onChange={e => this.setState({name: e.target.value})}
        />
        <TextField floatingLabelText="Image-URL"
                   value={this.state.imgURL}
                   onChange={e => this.setState({imgURL: e.target.value})}
        />
        <TextField floatingLabelText="Description"
                   value={this.state.desc}
                   onChange={e => this.setState({desc: e.target.value})}
        />
        <TextField floatingLabelText="Price"
                   value={this.state.price}
                   onChange={e => this.setState({price: e.target.value})}
                   type="number"
                   min="0.00" step="0.01" max="30"
        />
        <RaisedButton label="Update"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_PRODUCT_MUTATION = gql`
  mutation($id: ID!, $name:String!, $imgURL:String, $desc:String!, $price:Float!){
    updateProduct(
      id: $id,
      name: $name,
      imgURL: $imgURL,
      desc: $desc,
      price: $price
    ){
      id
    }
  }
`
export default graphql(UPDATE_PRODUCT_MUTATION,
  { options:(props) => ({ variables: {id: props.product.id}})}
)(UpdateProduct)
