import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Orders = new Mongo.Collection('orders');

Meteor.methods({
    'orders.add'(orderInfo){
        Orders.insert(orderInfo)
    },
    'platform.remove'(orderInfo){
        
    },
    
})