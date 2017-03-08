import './task.html';

import {Template} from 'meteor/templating';

import {Tasks} from '../api/tasks.js';

Template.body.events({
  'click .toggle-check'() {
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});
