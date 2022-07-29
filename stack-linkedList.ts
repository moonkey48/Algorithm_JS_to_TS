{
    type InputValue = number;
    interface INode{
        value:InputValue;
        next: INode | null;
    }
    interface IStack{
        push(value:InputValue):void;
        pop():InputValue;
    }


    class Node implements INode{
        value: InputValue;
        next: INode | null;
        constructor(value:InputValue){
            this.value = value;
            this.next = null;
        }
    }
    class Stack implements IStack{
        private top: INode | null;
        private size: number;
        constructor(){
            this.top = null;
            this.size = 0;
        }
        push(value:InputValue){
            const newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
            this.size++;
        }
        pop(): InputValue {
            if(this.top === null){
                throw new Error('Stack is empty');
            }
            const returnValue = this.top.value;
            this.top = this.top.next;
            this.size--;
            return returnValue;
        }
    }

    const stack = new Stack();
    stack.push(10);
    stack.push(30);
    stack.push(20);
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())

}
