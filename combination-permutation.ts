{
    //순열
    //순열의 시간복잡도는 O(n!)
    //arr에서 n개를 뽑았을때 만들 수 있는 경우의 수

    type InputArray = Array<number>

    function permutations(arr:InputArray,n:number){
        if(n===1) return arr.map(v=>[v]);
        let results:Array<Array<number>> = [];
        arr.forEach((fixed, idx, arr)=>{
            const rest = arr.filter((_, index)=>index!==idx);
            const perms = permutations(rest, n-1);
            const combine = perms!.map((v)=>[fixed,...v]);
            results.push(...combine);
        })
        return results;
    }
    function combinations(arr:InputArray, n:number){
        if(n===1) return arr.map(v=>[v]);

        const results:Array<Array<number>> = [];

        arr.forEach((fixed, idx, arr)=>{
            const rest = arr.slice(idx + 1);
            const combis = combinations(rest, n-1);
            const combine = combis!.map((v)=>[fixed, ...v]);
            results.push(...combine);
        })
        return results;
    }

    //console.log(permutations([1,2,3,5,8,13,21,34],3))
    console.log(combinations([1,2,3,5,8,13,21,34],3))
}