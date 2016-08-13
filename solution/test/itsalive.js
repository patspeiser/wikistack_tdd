/*var chai = require('chai');
var expect = chai.expect;
var spies = require('chai-spies');
chai.use(spies);
 
describe('Testing suite capabilities', function(){
	it('confirms math works', function(){
		expect(2+2).to.equal(4);
	})
})

describe('testing set timeout is async and that done works', function(){
	it('seems about 1000 ms', function(done){
		var start = new Date();
		setTimeout(function(){
			var duration = new Date - start;
			expect(duration).to.be.closeTo(1000, 50);
			done();
		}, 1000)
	})
})

describe('foreach', function(){
	it('invokes once for each element in  array', function(){
		var array = [1,2,3,4,5];
		function inc(el){
			return el;
		}
		console.log(inc);
		inc = chai.spy(inc);
		array.forEach(inc)
		expect(inc).to.have.been.called.exactly(array.length);
	})
});

*/
