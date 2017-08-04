var CLNode = require('./circular_node');

module.exports = class CircularList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtBegin(data) {
        let newNode = new CLNode(data);
        if (this.head == null) {
            this.head = newNode;
            this.length++;
        } else {
            let curentNode;
            curentNode = this.head;
            while (curentNode.next.data != this.head.data) {
                curentNode = curentNode.next;
            }
            newNode.next = this.head;
            curentNode.next = newNode;
            this.head = newNode;
            this.length++
        }
    }

    insertAfterNode(data, data_node) {
        if (this.head == null) {
            insertAtBegin(data);
        } else if (this.length == 1) {
            let newNode = new CLNode(data);
            this.head.next = newNode;
            newNode.next = this.head;
            this.length++;
        } else {
            let newNode = new CLNode(data);
            let curentNode, prevNode, len;
            curentNode = this.head;
            len = this.length;
            while (curentNode.data != data_node && len >= 0) {
                curentNode = curentNode.next;
                len--;
            }
            if (len >= 0) {
                newNode.next = curentNode.next;
                curentNode.next = newNode;
                this.length++;
            }
        }
    }


    display() {
        let curentNode;
        curentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(curentNode.data);
            curentNode = curentNode.next;
        }
    }
}