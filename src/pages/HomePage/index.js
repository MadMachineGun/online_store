import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import {fetchCategories} from '../../store/slices/categorySlice';

import { Card, Flex, Spin } from 'antd';

export default function HomePage() {
  const dispatch = useDispatch();
  const {signOut, token} = useAuth();

  const { categories, loading } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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

      {
        categories.map(category =>
          <Link to={`/products/${category.categoryName}`} key={category.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title={category.categoryName} description={category.categoryName} />
            </Card>
          </Link>
        )
      }
      <button onClick={() => signOut()}>Sign Out</button>
    </Flex>
  )
}
