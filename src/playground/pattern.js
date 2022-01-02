function pattern(n){
    // *
    // **
    // ***
    // ****
    for(let i=0; i<n;i++){
        let identity = ''
        for(let j=0;j<=i;j++){
            identity += '*'
        }
        console.log(identity)
     
    }
}
// pattern(4)

function patternA(n){
// ****
// ****
// ****
// ****
    for(let i=0; i<n; i++){
        let identity = '';
        for(let j=0; j<n; j++){
            identity += '*'
        }
        console.log(identity)
    }
}
// patternA(4)

function patternB(n){
// ****
// ***
// **
// *
    for(let i=0; i<n;i++){
        let identity = ''
        for(let j=n;j>i;j--){
            identity += '*'
        }
        console.log(identity)
     
    }
}
// patternB(4)

function patternC(n){
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
    for(let i=0; i<n;i++){
        let identity = '1'
        for(let j=n;j>i;j--){
            identity += '*'
        }
        console.log(identity)
    
    }
}
// patternC(4)

function patternD(n){
    var c = n
    for(let i=0; i< 2*n-1;i++){
        let identity = ''
        if(c>i){
            for(let j=0;j<=i;j++){
                identity += '*'
            }
        }else{
           for(let k=(i-c+1);k<c;k++){
            identity += '*'
           }
        }
        console.log(identity)
    }
}
// patternD(5)

function patternD_1(n){
    for(let i=0; i< 2*n; i++){
        let totalCol = i>n ? 2*n-i:i
        let identity = ''
        for(let j=0; j< totalCol; j++){
            identity += '*'
        }
        console.log(identity)
    }
}

// patternD_1(5)

function patternE(n){
    for(let i=0; i< 2*n; i++){
        let totalCol = i>n ? 2*n-i:i
        let identity = ''
        let noOfSpaces = n-totalCol
        for(let s=0; s<noOfSpaces;s++){
            identity = ' '
        }
        for(let j=0; j< totalCol; j++){
            identity += '*'
        }
        console.log(identity)
    }
}
patternE(5)