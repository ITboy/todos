import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import "./body.html";

import "./task.js";

import { Tasks } from "../api/tasks.js";

Template.body.onCreated(function(){
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.body.helpers({
  tasks() {
    const instance = Template.instance();

    if (instance.state.get('hideCompleted')) {
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    } else {
      return Tasks.find({}, { sort: { createdAt: -1 } });
    }
  },
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  }
});

Template.body.events({
  // add new task
  'submit .new-task'(event) {
    // prevent default browser form submit
    event.preventDefault();

    // get value from event
    const target = event.target;
    const text = target.text.value;

    // insert a task into collection
    Meteor.call('tasks.insert', text);

    //clear form
    target.text.value = '';
  },

  // hide completed tasks
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
