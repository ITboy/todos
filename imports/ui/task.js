import './task.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});
Template.body.events({
  'click .toggle-check'() {
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});
