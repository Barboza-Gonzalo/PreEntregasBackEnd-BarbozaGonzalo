

class ProductManager {

    constructor(){
        this.products = []        

    }

    

    addProduct(title, description, price, thumbnail, code, stock){

        const product_id = this.products.length + 1
        const product = { id: product_id , title , description , price , thumbnail , code , stock  }

        let codeRep = this.products.find((product) => product.code === code)
         if ( !codeRep){
            this.products.push(product)
            
        }else{
            console.log("el producto ya fue agregado")
        } 
     
      

    }


    getProducts(){
        return this.products
    }

    getProductById(product_id){
        
        let busId = this.products.find((product)=> product.id === product_id)
        if(!busId){
            console.log("Not Found")
            return
        }

        return busId



    }
}




const productManager = new ProductManager ();


productManager.addProduct ("Mermelada","Arcor de Durazno", 600 , "xxxx",1,15)
productManager.addProduct ("Jugo","Arcor de Durazno", 150 , "xxxx",2,5)
productManager.addProduct ("Jugo","Arcor de Manzana", 150 , "xxxx",3,12)


