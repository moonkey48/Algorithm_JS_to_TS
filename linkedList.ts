{
    interface Node {
        value: number;
        next: Node | null;
    }
    type InputValue = number;
    class NodeImpl implements Node {
        value:number;
        next: Node | null;

        constructor(value:number){
            this.value = value;
            this.next = null;
        }
    }

    class SinglyLinkedList{
        private head: Node | null;
        private tail: Node | null;

        constructor(){
            this.head = null;
            this.tail = null;
        }

        find(value:InputValue){
            let currentNode = this.head;
            if(currentNode===null){
                return false;
            }
            while(currentNode!.value !== value){
                currentNode = currentNode!.next;
            }
            return currentNode;
        }
        append(value:InputValue){
            const newNode = new NodeImpl(value);
            if(this.head === null){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail!.next = newNode;
                this.tail = newNode;
            }
        }
        remove(value:InputValue){
            let prevNode = this.head;
            while(prevNode!.next?.value !== value){
                prevNode = prevNode!.next;
            }
            if(prevNode!.next!==null){
                prevNode!.next = prevNode!.next.next;
            }
        }
        insert(node:Node, value:InputValue){
            const newNode = new NodeImpl(value);
            newNode.next = node.next;
            node.next = newNode;
        }
        display(){
            let str = '[';
            let currentNode = this.head;
            while(currentNode !== null){
                str += `${currentNode.value}, `;
                currentNode = currentNode.next;
            }
            str += ']';
        }
    }

    const linkedList = new SinglyLinkedList();
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    console.log(linkedList.find(1))
    linkedList.display()

    linkedList.display();
    console.log(linkedList.find(3));
    linkedList.remove(3)
    linkedList.display();


}