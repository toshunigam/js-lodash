var arr = [21,1,23,4,56,53,-323,4,0]
for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr.length;j++){
        if(arr[j]<arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)
