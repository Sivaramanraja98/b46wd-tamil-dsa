/*
    Stack

        - Data Structure : Abstract Data Type
        - Data stored on the top of the current top most element in the stack
        - if the stack is empty, the element we push will become the new top of the stack
        - behaviour: LIFO (Last In First Out) or FILO (First In Last Out)
        - operations:
            * push - pushes the element to the stack
            * pop - remove the top most element from the stack
            * peek - returns the current top most element in the stack
            * isEmpty - returns true if the stack is empty and false otherwise
        - Implementation
            - Array Implementation
            - Object Implementation
*/

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    peek() {
        return this.items[this.top];
    }

    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(6);
stack.pop();
stack.push(7);
stack.pop();stack.pop();stack.pop();

console.log(stack.isEmpty());