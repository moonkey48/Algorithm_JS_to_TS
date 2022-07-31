{
    type InputValue = number;
    type ArrayItem = number | undefined | null;
    interface IHeap{
        push:(value:InputValue)=>void;
        pop:()=>InputValue;
    }

    class MinHeap implements IHeap{
        private heap:Array<InputValue | null>;
        constructor(){
            this.heap = [null];
        }
        private _swap(a:number,b:number){
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }
        push(value:InputValue){
            this.heap.push(value);
            let currentIndex = this.heap.length -1;
            let parentIndex = Math.floor(currentIndex/2);

            while(parentIndex !== 0 && this.heap[parentIndex] as number > value){
                this._swap(parentIndex, currentIndex)  
                
                currentIndex = parentIndex
                parentIndex = Math.floor(currentIndex/2);
            }
        }
        private _isEmpty(){
            return this.heap.length === 1;
        }
        pop(){
            if(this._isEmpty()) return 1;
            if(this.heap.length === 2) return this.heap.pop() as number;

            const returnValue = this.heap[1];
            this.heap[1] = this.heap.pop() as number;

            let currentIndex =1;
            let leftIndex = 2;
            let rightIndex = 3;
            
            while((this.heap[leftIndex] && (this.heap[currentIndex] as number) > (this.heap[leftIndex] as number)) ||
            (this.heap[rightIndex] && (this.heap[currentIndex] as number) > (this.heap[rightIndex] as number))){
                if(this.heap[leftIndex] === undefined){
                    this._swap(rightIndex, currentIndex);
                }else if(this.heap[rightIndex] === undefined){
                    this._swap(leftIndex, currentIndex)
                }else if((this.heap[leftIndex] as number) > (this.heap[rightIndex] as number)){
                    this._swap(rightIndex, currentIndex);
                }else if((this.heap[rightIndex] as number) >= (this.heap[leftIndex] as number)){
                    this._swap(leftIndex, currentIndex);
                }
    
                leftIndex = currentIndex *2;
                rightIndex = currentIndex*2+1;
            }

            return returnValue as number;
        }
    }
    class MaxHeap implements IHeap{
        private heap:Array<InputValue | null>;
        constructor(){
            this.heap = [null];
        }
        private _swap(a:number,b:number){
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
        }
        push(value:InputValue){
            this.heap.push(value);
            let currentIndex = this.heap.length -1;
            let parentIndex = Math.floor(currentIndex/2);

            while(parentIndex !== 0 && this.heap[parentIndex] as number < value){
                this._swap(parentIndex, currentIndex)  
                
                currentIndex = parentIndex
                parentIndex = Math.floor(currentIndex/2);
            }
        }
        private _isEmpty(){
            return this.heap.length === 1;
        }
        pop(){
            if(this._isEmpty()) return 1;
            if(this.heap.length === 2) return this.heap.pop() as number;

            const returnValue = this.heap[1];
            this.heap[1] = this.heap.pop() as number;

            let currentIndex =1;
            let leftIndex = 2;
            let rightIndex = 3;
            
            while((this.heap[leftIndex] && (this.heap[currentIndex] as number) < (this.heap[leftIndex] as number)) ||
            (this.heap[rightIndex] && (this.heap[currentIndex] as number) < (this.heap[rightIndex] as number))){
                if(this.heap[leftIndex] === undefined){
                    this._swap(rightIndex, currentIndex);
                }else if(this.heap[rightIndex] === undefined){
                    this._swap(leftIndex, currentIndex)
                }else if((this.heap[leftIndex] as number) < (this.heap[rightIndex] as number)){
                    this._swap(rightIndex, currentIndex);
                }else if((this.heap[rightIndex] as number) <= (this.heap[leftIndex] as number)){
                    this._swap(leftIndex, currentIndex);
                }
    
                leftIndex = currentIndex *2;
                rightIndex = currentIndex*2+1;
            }

            return returnValue as number;
        }
    }
    
    const minHeap = new MinHeap();
    minHeap.push(10);
    minHeap.push(3);
    minHeap.push(5);
    minHeap.push(8);
    console.log(minHeap.pop())
    console.log(minHeap.pop())
    console.log(minHeap.pop())
    console.log(minHeap.pop())

    const maxHeap = new MaxHeap();
    maxHeap.push(10);
    maxHeap.push(3);
    maxHeap.push(5);
    maxHeap.push(8);
    console.log(maxHeap.pop())
    console.log(maxHeap.pop())
    console.log(maxHeap.pop())
    console.log(maxHeap.pop())

}