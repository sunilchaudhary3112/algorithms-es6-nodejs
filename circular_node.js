var LNode = require('./l_node');
module.exports =  class CLNode extends LNode{
    constructor(data) {
        super(data);
        this.next = this;
    }
}