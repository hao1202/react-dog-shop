
import { useContext, useState } from 'react';
import './dogs.css';
import { CartContext } from '../../../Context/CartContext';

const DogsCard = (props) => {
    const [isAdded, setAdded] = useState(false);
    const { addToCart, setTotal } = useContext(CartContext);
    const handleClick = () => {
        setAdded(prev => prev ? false : true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
        }
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
    }

    const {
        id,
        name,
        breed,
        description,
        price,
        imageUrl
    } = props;

    return (
        <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>

            <div className="dogs-img-container">
                <img
                    src={imageUrl}
                    alt={name}
                    className="dog-img"
                />
            </div>

            <div className="dogs-desc">
                {description}
            </div>

            <div className="dogs-price">
                {price}
            </div>

            {isAdded ? (
                <button
                    disabled
                    className="dogs-btn-disabled"
                >
                    ADDED
                </button>
            ) : (
                <button
                    className="dogs-btn"
                    onClick={handleClick}
                >
                    ADD TO CART
                </button>
            )}

        </section>
    );
}

export default DogsCard;