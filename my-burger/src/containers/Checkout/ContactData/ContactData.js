import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jason',
                address: '2022',
                street: 'Cobbler St',
                zip: '19045',
                country: 'USA',
                email: 'jamboree22@yahoo.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/Orders.json', order)
            .then( response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({ loading: false });
            });
        console.log("ContactData  checkout was called");

    }
    render () {

        let form = (
            <form className={classes.Input} style={{textAlign: 'center', boxAlign: 'center'}}>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Postal Code" />
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
                {/* <Button btnType="Danger"
                    clicked={props.checkoutCancelled}>CANCELLED</Button> */}
                <Button btnType="Success"
                    clicked={this.orderHandler}>ORDER</Button>
            </div>
        )
    }
}

export default ContactData;