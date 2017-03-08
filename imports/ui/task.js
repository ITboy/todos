import './task.html';

import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.body.events({
  'click .toggle-check'() {
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
});
