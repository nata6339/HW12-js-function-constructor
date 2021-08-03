function Hamburger(size) {
    this.modifiers = [];
    this.getPrice = function () {
        let totalPrice = 0;
        for (let i = 0; i < this.modifiers.length; i++) {
            totalPrice = totalPrice + this.modifiers[i].price;
        }
        return totalPrice;
    };
    this.getCalories = function () {
        let totalCalories = 0;
        for (let i = 0; i < this.modifiers.length; i++) {
            totalCalories = totalCalories + this.modifiers[i].calories;
        }
        return totalCalories;
    };
    this.addModifier = function (modifier) {
        this.modifiers.push(modifier);
    };
    this.addModifier(size);
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_MEDIUM = 'SIZE_MEDIUM';
Hamburger.SIZE_BIG = 'SIZE_BIG';

Hamburger.SIZE = {
    [Hamburger.SIZE_SMALL]: {
        price: 50,
        calories: 20
    },
    [Hamburger.SIZE_MEDIUM]: {
        price: 75,
        calories: 30
    },
    [Hamburger.SIZE_BIG]: {
        price: 100,
        calories: 40
    }
};

Hamburger.CHEESE = 'CHEESE';
Hamburger.SALAD = 'SALAD';
Hamburger.POTATO = 'POTATO';
Hamburger.TOPPING_SPICES = 'TOPPING_SPICES';
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';

Hamburger.ADDITIONS = {
    [Hamburger.CHEESE]: {
        price: 10,
        calories: 20
    },
    [Hamburger.SALAD]: {
        price: 20,
        calories: 5
    },
    [Hamburger.POTATO]: {
        price: 15,
        calories: 10
    },
    [Hamburger.TOPPING_SPICES]: {
        price: 15,
        calories: 0
    },
    [Hamburger.TOPPING_MAYO]: {
        price: 20,
        calories: 5
    }
};

const hamburger = new Hamburger(Hamburger.SIZE.SIZE_SMALL);
// добавляем добавки
hamburger.addModifier(Hamburger.ADDITIONS.TOPPING_MAYO);
hamburger.addModifier(Hamburger.ADDITIONS.POTATO);

// вывод результата
console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());
