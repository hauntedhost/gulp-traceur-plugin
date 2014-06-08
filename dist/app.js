"use strict";
var Animal = function Animal(name) {
  this.name = name;
};
($traceurRuntime.createClass)(Animal, {}, {});
;
$((function() {
  new Message('hello worldsss').deliver();
  new Cat('sebastian').meow();
  $.getJSON('https://api.github.com/repos/somlor/kanban/commits', (function(data) {
    $('#main').append('<p>latest sha: ' + data[0].sha + '</p>');
  }));
}));
var Cat = function Cat(name) {
  $traceurRuntime.superCall(this, $Cat.prototype, "constructor", [name]);
};
var $Cat = Cat;
($traceurRuntime.createClass)(Cat, {meow: function() {
    $('#main').append('<p>meooow</p>');
  }}, {}, Animal);
;
var Message = function Message(message) {
  this.message = message;
};
($traceurRuntime.createClass)(Message, {deliver: function() {
    $('#main').html(this.message);
  }}, {});
;
