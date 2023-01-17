import { expect, assert } from 'chai';
import { describe } from 'mocha';
import { squares, squares4 } from '../src/index.js';


describe('squares', function() {
	it('it should return the correct counter-based predictable random numbers', 
	function() {
        // Note: the results below is for the specific (more or less randomly
        // chosen key used in the squares algorithm.
        expect(squares(0)).to.eq(680702563);
        expect(squares(1)).to.eq(3634619202);
        expect(squares(2)).to.eq(369304816);
        expect(squares(3)).to.eq(2097301042);
        expect(squares(4)).to.eq(1373722485);
        expect(squares(5)).to.eq(1005295230);
        expect(squares(6)).to.eq(3022599373);
        expect(squares(7)).to.eq(4149091461);
        expect(squares(8)).to.eq(3640550681);
        expect(squares(9)).to.eq(556747510);
        expect(squares(100)).to.eq(1083911291);
    });
});


describe('squares4', function() {
	it('it should return the correct counter-based predictable random numbers', 
	function() {
        // Note: the results below is for the specific (more or less randomly
        // chosen key used in the squares algorithm.
        expect(squares4(0)).to.eq(235921276);
        expect(squares4(1)).to.eq(3621862329);
        expect(squares4(2)).to.eq(2174617817);
        expect(squares4(3)).to.eq(1902139463);
        expect(squares4(4)).to.eq(1581096655);
        expect(squares4(5)).to.eq(2682164556);
        expect(squares4(6)).to.eq(1840141370);
        expect(squares4(7)).to.eq(1174598797);
        expect(squares4(8)).to.eq(1262179243);
        expect(squares4(9)).to.eq(2734098490);
        expect(squares4(10)).to.eq(1337643076);
        expect(squares4(100)).to.eq(843037697);
    });
});
