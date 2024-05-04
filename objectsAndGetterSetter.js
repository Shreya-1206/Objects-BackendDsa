const product = new Object();

product.productName = "Jeera Powder";
product.price = "100 Rupees";

console.log(product);

/// getter setter methods for safety and for not accessing directly the properties

const item= {
    itemName : "Water Bottle",

    get item(){
        return this.itemName;
    },

    set changeItemName(name){
       if(name !== ""){
         this.itemName = name
       }
    }
};

const item1 = item.item;
console.log(item1);

item.changeItemName = "Diet Coke";
console.log(item.item)