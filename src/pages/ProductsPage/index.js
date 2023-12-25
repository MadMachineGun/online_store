import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProducts } from '../../store/slices/productsSlice';
import { addNewItem } from '../../store/slices/basketSlice';

import { Card, Flex, Spin, Button } from 'antd';

export default function ProductsPage() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, []);

  const addItemToBasket = (item) => {
    dispatch(addNewItem(item));
  };

  return(
    <Flex
      gap='middle'
      horizontal='horizontal'
      justify='center'
    >
      {loading && (
        <Flex align='center' gap='middle'>
          <Spin size='large' />
        </Flex>
      )}

      {error && (
        <span>{error}</span>
      )}

      {
        products.map(product => {
          return (
            <Card
              key={product.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="product" src={product.image} />}
            >
              <Card.Meta title={product.title} description={product.description} />
              <Button onClick={() => addItemToBasket(product)} type="primary">Add to Basket</Button>
            </Card>
          )
        })
      }
    </Flex>
  );
}
