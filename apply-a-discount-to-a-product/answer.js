const applyProductDiscount = (products, targetId, discount) => {
  return products.map(product => 
    {
      const newPrice = Math.max(product.pricing.current - discount, 0);

      return  product.id === targetId && newPrice < product.pricing.current ?
        {
          ...product,
          pricing: {
            ...product.pricing,
            current: newPrice
          }
        } :
        product;
    }
  );
};

const products = [
  {
    id: 101,
    name: "Keyboard",
    pricing: {
      current: 80,
      original: 100,
      currency: "USD"
    }
  },
  {
    id: 102,
    name: "Mouse",
    pricing: {
      current: 0,
      original: 30,
      currency: "USD"
    }
  },
  {
    id: 103,
    name: "Monitor",
    category: "Electronics",
    pricing: {
      current: 250,
      original: 300,
      currency: "USD"
    }
  }
];

const targetId = 101;

const discount = 0;

document.getElementById("ans").textContent = JSON.stringify(applyProductDiscount(products, targetId, discount));