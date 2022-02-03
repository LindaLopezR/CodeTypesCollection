// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by code-types-collection.js.
import { name as packageName } from "meteor/code-types-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('code-types-collection - example', function (test) {
  test.equal(packageName, "code-types-collection");
});
