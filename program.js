var LinkedList = require('./linked_list');
var CircularList = require('./circular_linked_list');
// let list = new LinkedList();

// list.insertAtBegin(4);
// list.insertAtBegin(3);
// list.insertAtBegin(2);
// list.insertAtBegin(1);
// list.insertAtEnd(6);
// list.insertAtEnd(7);
// list.insertAtEnd(8);
// list.insertAtEnd(9);
// list.insertAtEnd(10);
// list.insertAfterNode(5, 4);
// list.removeFromBegin();
// list.removeFromEnd();
// list.removeNode(5);
// list.display();

let list = new CircularList();
list.insertAtBegin(60);
list.insertAtBegin(40);
list.insertAtBegin(30);
list.insertAtBegin(10);
list.insertAfterNode(20, 10);
list.insertAfterNode(50, 40);
list.display();
