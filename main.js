#!/usr/bin/env node

import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

// Append
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Prepend
// list.prepend("dog");
// list.prepend("cat");
// list.prepend("parrot");
// list.prepend("hamster");
// list.prepend("snake");
// list.prepend("turtle");

// Size - returns total number of Nodes
// console.log(list.size());

// Get Head Node
// console.log(list.headNode());

// Get Tail Node
console.log(list.tailNode());

// Return Node at Given Index
// console.log(list.at(-25));

// Remove Last Element from List
// console.log(list.pop());

// Returns "true" if passed value is in list - otherwise returns "false"
// console.log(list.contains("parrot"));

// Returns Index of node containing value - returns "null" if not found
// console.log(list.find("skunk"));

// Represents LinkedList as string
// console.log(list.toString());
// console.log(list);

// Inserts new node with provided value at given index
// list.insertAt("skunk", 25);

// Removes node at given index
// list.removeAt(3);
