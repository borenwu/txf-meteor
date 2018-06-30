import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Inventories = new Mongo.Collection('inventories');

Meteor.methods({
    'inventories.add'(inventoryInfo){
        Inventories.insert(inventoryInfo)
    },
    'inventories.remove'(inventoryInfo){
        
    },
    
})