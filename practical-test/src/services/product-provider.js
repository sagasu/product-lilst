const flattenBranches = (branches) => 
    branches.map((branch) => branch.products).flat();

const mergeProducts = (acc, curr) => {
  const existingProduct = acc[curr.id];
  let sold = curr.sold;
  if(existingProduct){
    sold = curr.sold + existingProduct.sold
  }
  return { ...acc, [curr.id]: { ...curr, sold } };
};

const getBranches = () =>
  Promise.all(
    [1, 2, 3].map((branchNumber) =>
      fetch(`api/branch${branchNumber}.json`).then((res) => res.json())
    )
  );

export default function getProducts (){
  return getBranches()
    .then(flattenBranches)
    .then(products => Object.values(products.reduce(mergeProducts, {})));
}