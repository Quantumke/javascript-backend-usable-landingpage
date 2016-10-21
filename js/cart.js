

//create array that will hold all ordered products
    var shoppingCart = [];

    //this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cart_total_price+=shoppingCart[product].Price;
            total_items=shoppingCart.length;
           for (var i in shoppingCart){
            //console.log(shoppingCart[i], i);
               items_app=shoppingCart[i],i;
               var arr = eval( '[' + JSON.stringify(items_app).slice(1,-1).replace(/"[^"]+":/g,'')+ ']');
               console.log(arr)
           }

        }
        //fill total cost of our shopping cart
        document.getElementById("cart_total").innerHTML=cart_total_price;
        document.getElementById("cart_items").innerHTML=total_items;
        document.getElementById("cart_item").innerHTML=total_items;
        document.getElementById("ct").innerHTML +=arr;
        document.getElementById("cart_inner_items").innerHTML=total_items;
    }

function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

    }
