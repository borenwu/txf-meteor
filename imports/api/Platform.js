import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Platforms = new Mongo.Collection('platforms');

Meteor.methods({
    'platforms.add'(platformInfo){
        Platforms.insert({

        })
    },
    'platform.remove'(platformInfo){
        
    },
    'platforms.registe'(platformInfo){
        return true
    }   
})
