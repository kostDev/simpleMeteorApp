import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
    'tasks.insert'(text,from, isBot) {
        Messages.insert({
            text,
            from,
            isBot,
            createdAt: new Date()
        });
    }
});