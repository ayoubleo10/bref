const product=require("./Product")
class inventory {
    constructor(){
        this.product=[];
    }
    listProduct(){
        this.product.forEach(()=>{
            console.log('${product.name}-${product.description}-${product.quantité}-${product.price}');
        })


    } 
}