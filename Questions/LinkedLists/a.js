class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  printNodes() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.nextNode;
    }
  }
}

const myList = new LinkedList();
myList.append(20);
myList.append(21);
myList.append(22);
myList.prepend(40);
myList.prepend(20);

myList.printNodes();