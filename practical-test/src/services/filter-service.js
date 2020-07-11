export default function filterProducts(products, filter){
  if(filter && filter.length > 0){
    return products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return products;
}