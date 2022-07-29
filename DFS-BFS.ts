{
    function BFS(graph:any, startNode:string):Array<string>{
        const visited:string[] = [];
        const needVisit:Array<string> = [];

        needVisit.push(startNode);
        while(needVisit.length!==0){
            const node:string = needVisit.shift() as string;
            if(!visited.includes(node)){
                visited.push(node);
                needVisit.push(...needVisit, ...graph[node]);
            }
        }
        return visited;
    }
    function DFS(graph:any, startNode:string):Array<string>{
        const visited:string[] = [];
        const needVisit:Array<string> = [];

        needVisit.push(startNode);
        while(needVisit.length!==0){
            const node:string = needVisit.pop() as string;
            if(!visited.includes(node)){
                visited.push(node);
                needVisit.push(...needVisit, ...graph[node]);
            }
        }
        return visited;
    }

    const graph = {
        A: ['B', 'C'],
        B: ['A', 'D'],
        C: ['A', 'G', 'H', 'I'],
        D: ['B', 'E', 'F'],
        E: ['D'],
        F: ['D'],
        G: ['C'],
        H: ['C'],
        I: ['C', 'J'],
        J: ['I']
      };
      
    console.log(DFS(graph,'A'))
}