import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    { id: 1, price: 6, title: 'my first book', description: 'nice book to read as 1st book' },
    { id: 2, price: 10, title: 'my second book', description: 'horror book' },
    { id: 3, price: 16, title: 'my third book', description: 'kids book' },
    { id: 4, price: 20, title: 'my fourth book', description: 'thriller novel' },
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
         return <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
