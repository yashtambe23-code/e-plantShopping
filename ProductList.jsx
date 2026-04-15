import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

// At least 6 unique plants, grouped into categories
const categories = [
  {
    name: 'Indoor Plants',
    plants: [
      { id: 1, name: 'Monstera Deliciosa', price: 25, thumbnail: 'https://via.placeholder.com/150?text=Monstera' },
      { id: 2, name: 'Snake Plant', price: 18, thumbnail: 'https://via.placeholder.com/150?text=Snake' },
      { id: 3, name: 'Fiddle Leaf Fig', price: 45, thumbnail: 'https://via.placeholder.com/150?text=Fiddle' },
    ],
  },
  {
    name: 'Outdoor Plants',
    plants: [
      { id: 4, name: 'Rose Bush', price: 30, thumbnail: 'https://via.placeholder.com/150?text=Rose' },
      { id: 5, name: 'Lavender', price: 12, thumbnail: 'https://via.placeholder.com/150?text=Lavender' },
      { id: 6, name: 'Bamboo Palm', price: 38, thumbnail: 'https://via.placeholder.com/150?text=Bamboo' },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Plants</h1>
      {categories.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {category.plants.map((plant) => (
              <div key={plant.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px' }}>
                <img src={plant.thumbnail} alt={plant.name} width="150" height="150" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
