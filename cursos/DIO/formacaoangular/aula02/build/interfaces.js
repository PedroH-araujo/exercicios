"use strict";
const bot2 = {
    id: 2,
    name: "Zord",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
const bot = {
    id: 2,
    name: "Zord"
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Hello";
    }
}
const p = new Pessoa(1, "Pedro");
