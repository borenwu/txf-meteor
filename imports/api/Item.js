import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Items = new Mongo.Collection('items');

Meteor.methods({
    'items.add'(itemInfo){
        Items.insert(itemInfo)
    },
    'items.remove'(itemInfo){
        
    },
    
})