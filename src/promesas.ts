import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time)
    })
    return promise;
  }

  const rta = await delay(455);
  console.log(rta);
  // delay(5000);



  //axios
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  // const product = await getProducts();
  // console.log(product.data);

  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }
  const productAsync = await getProductsAsync();
  console.log(productAsync);
})();
