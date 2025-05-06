"use strict";

function Person(name) {
    this.name = name;
};

const pepe = new Person("Pepe");
const luis = new Person("Luis");

Person.prototype.saluda = function() { console.log("Hola soy", this.name )};

pepe.saluda();
luis.saluda();

function Agent(name) {
    Person.call(this, name);
};

Object.setPrototypeOf(Agent.prototype, Person.prototype);

const smith = new Agent("Smith");

smith.saluda();

function Superhero(name) {
    this.fly = function() { console.log(this.name, "fly")};
};

Object.assign(Agent.prototype, new Superhero())

smith.fly();