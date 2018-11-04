var assert = require('assert');
var arrayCtrl = require('../server/arrayControle');

before(function(done){
    console.log('[arrayControleTest] test start');
    done();
});
after(function(done){
    console.log('[arrayControleTest] test start');
    done();
});
beforeEach(function(done){
    console.log('[it] test start');
    done();
});
afterEach(function(done){
    console.log('[it] test end');
    done();
});

describe('arrayControle', function(){
        describe('arrayPush', function(){
            it('入力した数と同じ要素数になること(1桁)', function(done){
                assert.equal(8, arrayCtrl.arrayPush(8));
                done();
            });
            it('入力した数と同じ要素数になること(2桁)', function(done){
                assert.equal(10, arrayCtrl.arrayPush(10));
                done();
            });
            it('入力した数と同じ要素数になること(3桁)', function(done){
                assert.equal(100, arrayCtrl.arrayPush(100));
                done();
            });
        });

        // chaiが動いてないかも
        describe('arraySum', function(){
            it('戻り値が配列であること', function(done){
                assert.equal('object', typeof arrayCtrl.arraySum(10));
                done();
            });
            it('入力した数値分の要素を持った配列が返されること', function(done){
                assert.equal(10, arrayCtrl.arraySum(10).length);
                done();
            });
        });
    }
);