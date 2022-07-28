{
    type InputValue= number;

    interface Node{
        value:InputValue;
        left:Node|null;
        right:Node|null;
    }
    interface Tree{
        insert(value:InputValue):void;
        has(value:InputValue):boolean
        display():string;
    }

    class NodeImpl implements Node{
        value:InputValue
        left:Node|null;
        right:Node|null;
        constructor(value:InputValue){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    class BinarySearchTree implements Tree{
        private root:Node|null;
        constructor(){ 
            this.root = null;
        }
        insert(value: InputValue): void {
            const newNode = new NodeImpl(value);
            if(this.root === null){
                this.root = newNode;
                return;
            }

            let currentNode = this.root;
            while(currentNode !== null){
                if(currentNode.value < value){
                    if(currentNode.right === null){
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }else{
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
        has(value: InputValue): boolean {
            let currentNode = this.root;
            while(currentNode !== null){
                if(currentNode.value === value){
                    return true;
                }
                if(currentNode.value < value){
                    currentNode =  currentNode.right;
                }else{
                    currentNode = currentNode.left;
                }
            }
            return false;
        }
        display(): string {
            //dfs,bfs로 추후 개발 예정
            return 'not ready yet';
        }
    }
    const tree = new BinarySearchTree();
    tree.insert(30);
    tree.insert(20);
    tree.insert(10);
    tree.insert(50);
    console.log(tree.has(30))
    console.log(tree.has(20))
    console.log(tree.has(10))

}