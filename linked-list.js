#!/usr/bin/env node

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // **************************** //

  addFirstNode(value) {
    const newNode = new Node();
    newNode.value = value;

    this.head = newNode;
    this.tail = newNode;
  }

  // **************************** //

  addNode(value) {
    const node = new Node();
    node.value = value;

    return node;
  }

  // **************************** //

  append(value) {
    if (this.head === null) {
      this.addFirstNode(value);
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      const node = this.addNode(value);
      current.nextNode = node;
      this.tail = node;
    }
  }

  // **************************** //

  prepend(value) {
    if (this.head === null) {
      this.addFirstNode(value);
    } else {
      const current = this.head;
      const newNode = this.addNode(value);
      this.head = newNode;
      this.head.nextNode = current;
    }
  }

  // **************************** //

  // size() {
  //   let current = this.head;
  //   let currentIndex = 0;

  //   while (current !== null) {
  //     currentIndex += 1;
  //     current = current.nextNode;
  //   }

  //   return currentIndex;
  // }

  // **************************** //

  // headNode() {
  //   return this.head;
  // }

  // **************************** //

  // tailNode() {
  //   return this.tail;
  // }

  // **************************** //

  // at(index) {
  //   let current = this.head;
  //   let currentIndex = 0;

  //   while (current !== null && currentIndex !== index) {
  //     currentIndex += 1;
  //     current = current.nextNode;
  //   }

  //   if (current === null) return null;
  //   else return current;
  // }

  // **************************** //

  // pop() {
  //   let current = this.head;
  //   let prev = null;

  //   if (current === null) return null;

  //   while (current.nextNode !== null) {
  //     prev = current;
  //     current = current.nextNode;
  //   }

  //   if (prev === null) {
  //     this.head = null;
  //     this.tail = null;
  //     return current;
  //   } else {
  //     prev.nextNode = null;
  //     this.tail = prev;
  //     return current;
  //   }
  // }

  // **************************** //

  // contains(value) {
  //   let current = this.head;

  //   if (current === null) return false;

  //   while (current !== null && current.value !== value) {
  //     current = current.nextNode;
  //   }

  //   if (current !== null) return true;
  //   else return false;
  // }

  // **************************** //

  // find(value) {
  //   let current = this.head;
  //   let currentIndex = 0;

  //   while (current !== null && current.value !== value) {
  //     currentIndex += 1;
  //     current = current.nextNode;
  //   }

  //   if (current === null) return null;
  //   return currentIndex;
  // }

  // **************************** //

  // toString() {
  //   let current = this.head;
  //   let totalStr = "";

  //   while (current !== null) {
  //     totalStr += `( ${current.value} ) -> `;
  //     current = current.nextNode;
  //   }

  //   totalStr += "null";
  //   return totalStr;
  // }

  // **************************** //

  // insertAt(value, index) {
  //   let current = this.head;
  //   let currentIndex = 0;
  //   let prev = null;

  //   while (current !== null && currentIndex !== index) {
  //     currentIndex += 1;
  //     prev = current;
  //     current = current.nextNode;
  //   }

  //   if (currentIndex === 0) {
  //     this.prepend(value);
  //   } else if (currentIndex !== index) {
  //     this.append(value);
  //   } else {
  //     const newNode = new Node();
  //     newNode.value = value;
  //     prev.nextNode = newNode;
  //     newNode.nextNode = current;
  //   }
  // }

  // **************************** //

  //   removeAt(index) {
  //     let current = this.head;
  //     let currentIndex = 0;
  //     let prev = null;

  //     if (current === null) return null;

  //     while (current !== null && currentIndex !== index) {
  //       currentIndex += 1;
  //       prev = current;
  //       current = current.nextNode;
  //     }

  //     if (currentIndex === 0) {
  //       this.head = current.nextNode;
  //       current = null;
  //     } else if (current === null) {
  //       return null;
  //     } else {
  //       prev.nextNode = current.nextNode;
  //       current = null;
  //     }
  //   }
}

class Node {
  value = null;
  nextNode = null;
}
