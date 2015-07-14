function HipsterTill() {
	this.orders = [];
	this.total = 0;
	this.menu = [
	  {
	    "shopName": "The Coffee Connection",
	    "address": "123 Lakeside Way",
	    "phone": "16503600708",
	    "prices": [
	      {
	        "Cafe Latte": 4.75,
	        "Flat White": 4.75,
	        "Cappucino": 3.85,
	        "Single Espresso": 2.05,
	        "Double Espresso": 3.75,
	        "Americano": 3.75,
	        "Cortado": 4.55,
	        "Tea": 3.65,
	        "Choc Mudcake": 6.40,
	        "Choc Mousse": 8.20,
	        "Affogato": 14.80,
	        "Tiramisu": 11.40,
	        "Blueberry Muffin": 4.05,
	        "Chocolate Chip Muffin": 4.05,
	        "Muffin Of The Day": 4.55
	      }
	    ]
	  }
	];
};

HipsterTill.prototype.addOrder = function(item, quantity) {
	var order = {};
	order[item] = quantity;
	this.orders.push(order);
};

HipsterTill.prototype.totalPrice = function() {
	for(var i=0; i < this.orders.length; i++) {
	var array = this.orders[i]
	for (var k in array) {
	 if (array.hasOwnProperty(k)) {
	 	var price = this.menu[0].prices[0][k]
	 	var quantity = array[k]
	    this.total = this.total + (price * quantity)
	   }
     }
   }
    return this.total
};
