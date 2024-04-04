

class ProductManager {

    constructor(){
        this.products = []
        this.nextID = 1
               

    }

    

    addProduct(product){
        if (!this.isProductValid(product)) {
            console.log("Error: El producto no es válido")
            return
        }
        
        if (this.isCodeDuplicate(product.code)) {
            console.log("Error: El código del producto ya está en uso")
            return
        }
            product.id = this.nextID++
            this.products.push(product)          
       
    
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


    deleteProduct (product_id){
        let busId = this.products.findIndex((product)=> product.id === product_id)
        if (busId !== -1) {
            this.products.splice(busId, 1);
        }
    }


    updateProduct(product_id , updatedFields ){
        const busId = this.products.findIndex(product => product.id === product_id);
        if (busId !== -1) {
            this.products[busId] = { ...this.products[busId], ...updatedFields };
            
        
           
        }

    }
    isCodeDuplicate(code) {
        return this.products.some((p) => p.code === code)
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

}




const productManager = new ProductManager ();


productManager.addProduct ({title: "Mermelada", description: "Arcor de Durazno", price: 1500, thumbnail: 'ru/xxxxx.jpg', code: '001', stock: 16})
productManager.addProduct ({title: "Mermelada", description: "Arcor de Manzana", price: 1500, thumbnail: 'ru/xxxxx.jpg', code: '002', stock: 12})
productManager.addProduct ({title: "Mermelada", description: "Arcor de Durazno", price: 1500, thumbnail: 'ru/xxxxx.jpg', code: '001', stock: 55})
productManager.addProduct ({title: "Mermelada", description: "Arcor de Naranja", price: 1500, thumbnail: 'ru/xxxxx.jpg', code: '003', stock: 15})




