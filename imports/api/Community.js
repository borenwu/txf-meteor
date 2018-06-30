import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Communities = new Mongo.Collection('communities');

Meteor.methods({
    'communities.add'(communityInfo){
        Communities.insert(communityInfo)
    },
    'communities.remove'(communityInfo){
        
    },
    
})