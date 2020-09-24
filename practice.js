// console.log("Hello mahima");
//defining an object using object literals
let macbook={
    //encapsulated data
    model:2019,
    ram:8,
    turboboost:function(){
        console.log("can be done when using photoshop");
    }
};
macbook.turboboost();
//using factory function
function cats(type){
    return{
        type,
        obj:{
            name:"heelo",
        }
        ,
        purr:function(){
            console.log("Your cat purrs  day");
            console.log(type);
        }
    }
}
cats("siamese").purr();
// cats("black").purr();
//using constructor function
//the namespace of constructor function should begin with capital
function Crime(type,criminal){
    console.log(this);
    this.type=type;
    this.criminal=criminal;
    console.log(type,criminal);
    this.sentence=function(){
        console.log(type+ " "+criminal);
    }
}
//if not instantiated "this" refers to the window object
Crime(2,"mm");
const hi= new Crime(1,"mahima"); //creates an  object for crime //instantiation in other words
//after instantiation this keyword refers to the Crime object

console.log(hi);
hi.sentence();

//primitive vs refernce types
let x={m:10}; //refers to certain mem location
let y=x;

x.m=60;
console.log(y);

//reference types is object
