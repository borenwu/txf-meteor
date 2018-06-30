import {Meteor} from 'meteor/meteor'
import {Platforms} from '../imports/api/Platform.js'
import {WechatUsers} from '../imports/api/WechatUsers.js'

Meteor.publish('platforms.all',function(){
    return Platforms.find({})
})

// db.accounts.aggregate(
    // {$match:{name:"wbr"}},
    // {$addFields:{"bankCards":{$filter:{
        // input:"$bankCards",
        // as:"bankCard",
        // cond:{$eq:["$$bankCard.accountNo",1234]}
    // }}}}
// s)