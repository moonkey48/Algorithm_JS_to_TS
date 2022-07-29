{
    /**
     * InputValue를 수정해서 Queue에 담을 수 있는 타입을 변경할 수 있습니다.
     * enqueue를 통해 추가를 하고 dequeue를 통해 front에 있는 값을 가져올 수 있습니다. 
     * size를 호출해서 queue의 크기를 알 수 있습니다.
     */
    type InputValue = number;
    interface INode{
        value:InputValue;
        next: INode | null;
    }
    interface IQueue{
        enqueue(value:InputValue):void;
        dequeue():InputValue;
    }


    class Node implements INode{
        value:InputValue;
        next: INode | null;
        constructor(value:InputValue){
            this.value = value;
            this.next = null;
        }
    }
    class Queue implements IQueue{
        private front:INode|null;
        private rear:INode|null;
        private _size:number
        get size():number{
            return this._size;
        }
        constructor(){
            this.front = null;
            this.rear = null;
            this._size = 0;
        }
        enqueue(value: InputValue): void {
            const newNode = new Node(value);
            if(this.front === null){
                this.front = newNode;
                this.rear = newNode;
            }else{
                this.rear!.next = newNode;
                this.rear = newNode;
            }
            this._size++;
        }
        dequeue(): InputValue {
            if(this.front === null){
                throw new Error('Queue is empty')
            }
            const value = this.front!.value;
            this.front = this.front!.next;
            this._size--;
            return value;
        }
    }

    
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(4);
    console.log(queue.size)
    console.log(queue.dequeue())
    console.log(queue.dequeue())
    console.log(queue.dequeue())
}