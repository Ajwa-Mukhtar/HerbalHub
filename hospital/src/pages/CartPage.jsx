import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-900">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/AllCategories"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors duration-300"
          >
            Shop Herbal Products
          </Link>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-green-900 border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded mr-6"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-green-800">{item.title}</h3>
                  <p className="mb-4 text-gray-800">Price: {item.price}</p>
                  <p className="mb-4 text-gray-800">Quantity: {item.quantity}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Proceed to Checkout Button */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              to="/AllCategories"
              className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
