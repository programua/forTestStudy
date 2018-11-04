'use strict';
module.exports = {
    arrayPush,
    arraySum
}

function arrayPush(num){
    var arrayA = [];
    for(var i = 0; i < num; i++){
        arrayA.push(i);
    }
    return arrayA.length;
}

// 引数numの回数分乱数を生成
// num個の要素を持つ配列を生成する
function arraySum(num){
    var random = [];
    for(var i=0; i<num; i++){
        random.push(Math.round( Math.random()*100 ));
    }

    return random;
}