import {useDispatch} from 'react-redux';

import {changeItemCount} from '../../store/slices/basketSlice';

import { Card, Button } from 'antd';

const ItemCount = ({count, id}) => {
    const dispatch = useDispatch();

    return(
        <div>
            Item number:
            <Button
                type='primary'
                onClick={() => dispatch(changeItemCount({id, sign: 'plus'}))}
            >+</Button>
            {count}
            <Button
                type='primary'
                onClick={() => dispatch(changeItemCount({id, sign: 'minus'}))}
            >–</Button>
        </div>
    )
};

export default function BasketItem({product}) {
    return(
        <Card
            key={product.id}
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="product" src={product.image} />}
        >
            <Card.Meta
                title={product.title}
                description={<ItemCount count={product.countNumber} id={product.id} />}
            />
        </Card>
    );
}