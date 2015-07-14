describe("HipsterTill", function(){
	

	beforeEach(function() {
		till = new HipsterTill();
	});

	describe('display', function(){
		it('a name of the shop', function(){
			expect(till.menu[0].shopName).toEqual("The Coffee Connection")
		})

		it('an address of the shop', function(){
			expect(till.menu[0].address).toEqual("123 Lakeside Way")
		})

		it('a phone number of the shop', function(){
			expect(till.menu[0].phone).toEqual("16503600708")
		})

	})

	describe('accepts', function(){
		it('an order of one Tea', function(){
		till.addOrder("Tea", 1);
		expect(till.orders).toEqual([{Tea: 1}])
		})

		it('an order of one Tea and 2 Tiramisu', function(){
			till.addOrder("Tea", 1);
			till.addOrder("Tiramisu", 2);
			expect(till.orders).toEqual([{ Tea: 1 },{ Tiramisu: 2 }])
		})
	 });

	describe('calculate a price of', function(){
		it('one Tea', function(){
			till.addOrder("Tea", 1);
			expect(till.totalPrice()).toEqual(3.65);
		})

		it('two Tea', function(){
			till.addOrder("Tea", 2);
			expect(till.totalPrice()).toEqual(7.3);
		})

		it('one Tea and one Tiramisu', function(){
			till.addOrder("Tea", 1);
			till.addOrder("Tiramisu", 1);
			expect(till.totalPrice()).toEqual(15.05);
			
		})
	});

	describe('can calculate', function(){
		it('a tax', function(){
			till.addOrder("Tea", 2);
			till.addOrder("Tiramisu", 1);
			expect(till.tax()).toEqual(1.62);
		})
	})
})