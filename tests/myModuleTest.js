var assert = require('assert');
var myModule = require('../server/myModule');

// 一つのテストファイルごとに呼び出される
// ※describeごとではない
before(
    function(done){
        console.log('[describe]before test');
        done();
    }
);
after(
    function(done){
        console.log('[describe]after test');
        done();
    }
);

// itごとに呼び出される
beforeEach(
    function(done){
        console.log('[it]before test');
        done();
    }
);
afterEach(
    function(done){
        console.log('[it]after test');
        done();
    }
);



describe('myModule', function(){
    describe('greet',function(){
        it('引数に応じて決まった文字列を返す', function(){
            assert.equal(myModule.greet('taro'),'Hello,taro')
        })
    });
    
    describe('greetAsync', function(){
        it('引数に応じてコールバック内で決まった文字列になること', function(done){
            myModule.greetAsync('hanako',function(greet){
                assert.equal(greet, 'Hello,hanako');
                done();
            })
        });        
    });
});
;

