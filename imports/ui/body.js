import {Template} from "meteor/templating";

import "./body.html";

Template.body.helpers({
  tasks: [
    {text: "This is Task 1"},
    {text: "This is Task 2"},
    {text: "This is Task 3"},
  ],
});
