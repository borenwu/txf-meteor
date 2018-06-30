import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const WechatUsers = new Mongo.Collection('wechatusers');

Meteor.methods({
    'wechatusers.insert'(userInfo){
        WechatUsers.insert(userInfo)
    }
})
