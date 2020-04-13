let myPhone = new Object();
//same as let myPhone = {}
myPhone.make = "Samsung";
myPhone.model = "Galaxy S6";
myPhone.warranty = "12";
myPhone.color = "black";


//Constructors
console.log(myPhone);

function phone(make_x, model_x, warranty_x, color_x) {
    this.make = make_x;
    this.model = model_x;
    this.warranty = warranty_x;
    this.color = color_x;
}
phone.prototype.seccam = "12px";

let newPhone = new phone("Iphone","5s",12,"gold")
newPhone.condition = "Like New";
newPhone.cameramp = "16mp";
console.log(newPhone);
