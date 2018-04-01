//import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Messages } from '../api/messages.js';

import './body.html';

Template.body.helpers({
    messages() {
        return Messages.find({});
    },
});

Template.body.events({
    'submit .new-messages'(event) {
        // Prevent default browser form submit
        event.preventDefault();
        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        if(text != null && text.length > 4){
            Meteor.call('tasks.insert', text, 'unknown', false);
            console.log(text);
        }

        // Clear form
        target.text.value = '';
    },
});