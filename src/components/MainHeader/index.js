import {useState} from 'react';
import {useSelector} from 'react-redux';

import BasketItem from '../BusketItem';

import {Badge, Layout, Modal} from 'antd';

const {Header} = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

export default function MainHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const items = useSelector(state => state.basket.items);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <Header style={headerStyle}>
                <Badge count={items.length}>
                    <div style={{cursor: "pointer"}} onClick={showModal}>
                        Wish List
                    </div>
                </Badge>
            </Header>

            <Modal
                title="Your wish list"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {
                    items.map(item => <BasketItem product={item} />)
                }
            </Modal>
        </>

    )
}