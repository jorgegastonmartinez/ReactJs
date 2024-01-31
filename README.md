# Título del Proyecto
Entrega Final. Curso React JS Comisión 49920.


## Autor
Jorge Martinez.

## Sobre mi proyecto
Este proyecto es una ecommerse de la chocolatería San Gines. 

Contenido:

+ En la HomePage de la App, se visualizan todos los productos.
+ Filtrado de productos por categorías.
+ Al clickear sobre uno de ellos, se enviará a una pagina de detalle del producto, donde se puede agregar la cantidad deseada de productos al carrito. Si el producto fue añadido exitosamente, se muestra un mensaje.
+ Si hay productos añadidos al carrito, se mostrarán con un numerito debajo del icono CartWidget.
+ En el carrito, que se encuentra en la navbar, se muestran todos los productos añadidos. Allí es posible borrar productos de forma individual, vaciar el carrito por completo y volver a la tienda para seguir cargando productos. Si en el carrito no hay productos añadidos se mostrará el mensaje “no hay productos en el carrito”.
+ Al finalizar la compra nos dirigirá a una pagina donde el usuario deberá cargar correctamente todos los datos para poder concretar la compra.
+ Una vez finalizada la compra nos mostrará el ID de la orden de la compra, a través de un mensaje, solo si, el usuario cargó todos los datos correctamente, se podrá obtener el ID y el formulario se enviará a firebase.

## Documentación
> Html, css, javascript y react js.
> Uso de funciones flechas, funciones de orden superior, manejo y modificación del DOM, firebase, async, await, objetos, arrays y librerías.


### Instalar dependencias

`
npm install 
`
## Instrucciones de uso
* Descargue el proyecto, desde GitHub, con el comando git clone
* Instale las dependencias.
* Corra la app con el comando npm run dev.
* Utilice las categorías para filtrar la búsqueda de los productos.
* Seleccionar el producto que desee comprar.
* En el detalle se puede seleccionar cantidades. Con el button "agregar al carrito”, podrás ir agregando los productos al carrito de compras.
* Para realizar el pedido, dirigirse al carrito de compras, ubicado en la parte superior, dentro de la navbar.
* Allí podrás agregar mas productos (volviendo a la tienda) eliminar productos, vaciar carrito, ver los precios detallados, el subtotal de cada producto, el total de todos los productos agregados al carrito y finalizar la compra.
* Completar el formulario para poder realizar la compra. Cuando los datos del formulario se cargaron correctamente, se mostrará el ID de compra.
* En el siguiente link de firebase `https://console.firebase.google.com/u/1/project/e-commerse-d742e/firestore/data/~2FstoreOrders?hl=es` , se verán reflejadas las ordenes de pedidos y la tienda con todos los productos cargados.

  
