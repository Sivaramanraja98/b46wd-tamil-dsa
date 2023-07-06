// Data Structures

/*
    Arrays Vs Strings 

    Arrays
        - Data Structure (Built-In)
        - all the array elements store in the consecutive memory locations
        - Indexing: first element is stored at the index 0
        - all the other elements are stored in the consecutive indexes
        - Accessing: array-name[index] => element at the index (Random Access)
        - Mutable: Changeable
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            - push - pushes the element to the end of the array
            - pop - removes the element from the end of the array
            - unshift - inserts the element to the beginning of the array
            - shift - removes the element from the beginning of the array
            - forEach
            - map
            - sort
            - filter
            - reduce
            - includes
            - join
            - length - property

    Strings
        - Data Structure (Built-In): sequence of characters
        - consecutive
        - indexing: first character will be at the starting index 0, subsequent characters in the successive indexes
        - Immutable: Non-Changeable
        - Methods:
            - toLowerCase()
            - toUpperCase()
            - trim()
            - includes()
            - substr()
            - slice()

*/

// let array = [1, 2, 3, 4, 5];

// // console.log(array);

// // console.log(array[0]);

// // console.log(array[4]);

// array[0] = 10;

// console.log(array);

// let string = 'apple';

// string[1] = 'm';

// console.log(string);

// let array = [1, 2, 3, 4, 5];

// array.push(6);
// array.unshift(12);
// array.shift();
// array.pop();

// console.log(array);

/*
    Linked List

        - Data Structure: Abstract Data Type
        - Types:
            1. Singly Linked List
            2. Doubly Linked List
            3. Circularly Linked List

        - Singly Linked List
        - Abstract Data Type: User defined data type - user defines its behaviour, data, operations
        - non-consecutive memory
        - chain of nodes/objects from different memory locations linked to each other
        - every node has a structure of two fields
            - data: actual data we want to store inside the memory
            - address: address of the next node in the memory
        - head pointer: points to the start node of the linked list
        - head: null - signifies that the linked list is empty
        - tail node: is the last node in the linked list; address of the tail node will be null
        - accessing: linear access
        - insertion: O(1)
        - deletion: O(1)
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    unshift(data) {
        let newNode = new Node(data);

        if (this.head == null) {
            // the list is empty
            this.head = newNode;
        } else {
            newNode.next = this.head;

            this.head = newNode;
        }
    }

    push(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            // list is empty
            this.head = newNode;
        } else {
            // list is non empty
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next = null; tail points to the tailnode
            tail.next = newNode;
        }
    }

    pop() {
        // if the list is not empty
        if (this.head != null) {
            if (this.head.next == null) {
                // the list has only one node
                this.head = null;
            } else {
                // the list has more than one node
                let thead = this.head;
                while (thead.next.next != null) {
                    thead = thead.next;
                }
                // thead.next.next = null
                thead.next = null;
            }
        }
    }

    shift() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    parse() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    length() {
        let nodes = 0;
        let thead = this.head;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }
}

let list = new LinkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(6);
console.log(list.parse());
list.pop();
console.log(list.parse());
list.unshift(2);
list.unshift(1);
list.unshift(10);
console.log(list.parse());
list.shift();
// list.shift();
console.log(list.parse());
console.log(list.length());
/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: null
            }
        }
    }
*/

// let node = new Node(3);
// let node1 = new Node(4);

// node.next = node1;

// console.log(node);

/*
    node = Node {
        data: 3,
        next: Node {
            data: 4,
            next: null
        }
    }
*/

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: Node {
                    data: 5,
                    next: null
                }
            }
        }
    }

    bc => thead.next.next = null
    rc => thead.next.next != null

    thead = Node {
        data: 5,
        next: null
    }

*/