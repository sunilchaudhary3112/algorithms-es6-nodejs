'use strict'
var LNode = require('./l_node');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtBegin(data) {
        let newNode = new LNode(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtEnd(data) {
        if (this.head == null) {
            this.insertAtBegin(data);
            return;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            let newNode = new LNode(data);
            currentNode.next = newNode;
        }
    }

    insertAfterNode(data, data_node) {
        if (this.head == null) {
            this.insertAtBegin(data);
            return;
        } else {
            let currentNode = this.head;
            while (currentNode.data != data_node && currentNode != null) {
                currentNode = currentNode.next;
            }
            if (currentNode != null) {
                let newNode = new LNode(data);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
        }
    }

    removeFromBegin() {
        if (this.head == null)
            return;
        let nodeToDelete;
        nodeToDelete = this.head;
        this.head = this.head.next;
        console.log(`Node deleted is ${nodeToDelete.data}`);
    }

    removeFromEnd() {
        if (this.head == null)
            return;
        if (this.head.next == null) {
            console.log(`Node deleted is ${this.head.data}`);
            this.head = null;
            return;
        }
        let currentNode, prevNode;
        currentNode = this.head;
        prevNode = currentNode;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        if (prevNode != null) {
            console.log(`Node deleted is ${currentNode.data}`);
            prevNode.next = null;
        }
    }

    removeNode(dataToDelete) {
        if (this.head == null) {
            return;
        }
        if (this.head.data == dataToDelete) {
            console.log(`Node deleted is ${this.head.data}`);
            this.head = this.head.next;
            return;
        }
        let currentNode, prevNode;
        currentNode = this.head;
        while (currentNode.data != dataToDelete && currentNode != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        if (currentNode != null) {
            console.log(`Node deleted is ${currentNode.data}`);
            if (prevNode != null && prevNode.next != null)
                prevNode.next = prevNode.next.next;
            else
                prevNode.next = null;
        }
    }
    
    display() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}