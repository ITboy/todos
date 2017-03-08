import {Template} from "meteor/templating";

import "./body.html";

import "./task.js";

import {Tasks} from "../api/tasks.js"

Template.body.helpers({
  tasks() {
    return Tasks.find({}, {sort: {createdAt: -1}});
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // prevent default browser form submit
    event.preventDefault();

    // get value from event
    const target = event.target;
    const text = target.text.value;

    // insert a task into collection
    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    //clear form
    target.text.value = '';
  },
});
