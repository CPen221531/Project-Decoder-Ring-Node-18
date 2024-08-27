class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    find(value) {
      let current = this.head;
  
      while (current !== null) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
  
      return null;
    }
  
    findWithPrevious(value) {
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        if (current.value === value) {
          return { current, previous };
        }
        previous = current;
        current = current.next;
      }
  
      return { current: null, previous: null };
    }
  
    remove(value) {
      const { current, previous } = this.findWithPrevious(value);
  
      if (!current) {
        return false; // Node not found
      }
  
      if (previous === null) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
  
      return true;
    }
  }
  
  module.exports = LinkedList;