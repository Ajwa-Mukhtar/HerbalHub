import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { submitCheckout } from "../api/checkout";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation

const countries = [
  "Pakistan", "United States", "United Kingdom", "Canada", "Australia",
  "India", "Germany", "France", "Japan", "China", "Brazil", "South Africa",
];

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate(); // ✅ Init navigation

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [isLoading, setIsLoading] = useState(false);
  const [countryError, setCountryError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (country !== "Pakistan") {
      setCountryError("Sorry, we are only accepting orders within Pakistan at the moment.");
      return;
    } else {
      setCountryError("");
    }

    setIsLoading(true);

    const checkoutData = {
      FullName: fullName,
      UserEmail: email,
      PhoneNumber: phone,
      ShippingAddress: address,
      Country: country,
      City: city,
      PaymentMethod: paymentMethod,
      // ✅ Add cart items as products
      Products: cartItems.map(item => ({
        ProductName: item.title,
        Quantity: item.quantity || 1,
        Price: item.price
      }))
    };

    const response = await submitCheckout(checkoutData);
    console.log("Parsed response:", response);

    if (response && response.responseCode === 200) {
      alert("Your order has been placed successfully!");
      navigate("/AllCategories"); // ✅ Redirect after success
    } else {
      alert(response?.errorMessage || "Order failed. Try again.");
    }

    setIsLoading(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const priceNumber = Number(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    const quantity = item.quantity || 1;
    return sum + priceNumber * quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-900">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty. Please add items first.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Order Summary */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Order Summary</h3>
            <ul className="space-y-4 max-h-[400px] overflow-y-auto">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-4 border rounded-lg p-3 shadow-sm">
                  <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-green-900 text-lg">{item.title}</h4>
                    <p className="mt-1 text-green-700 font-semibold">
                      Rs. {item.price} × {item.quantity || 1}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right text-xl font-bold text-green-900">
              Total: Rs. {totalPrice}
            </div>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-green-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Billing Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full p-3 rounded border border-green-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded border border-green-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 rounded border border-green-300"
            />
            <input
              type="text"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full p-3 rounded border border-green-300"
            />

            <div>
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 rounded border border-green-300"
              >
                <option value="" disabled>Select Country</option>
                {countries.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
              {countryError && (
                <p className="text-red-600 mt-1 text-sm font-medium">{countryError}</p>
              )}
            </div>

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-3 rounded border border-green-300"
            />

            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-700">Payment Method</h4>
              <div className="flex flex-col space-y-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="cursor-pointer"
                  />
                  <span>Cash on Delivery</span>
                </label>

                <label className="flex flex-col cursor-pointer border p-3 rounded border-green-300">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                      className="cursor-pointer"
                    />
                    <span>Bank Transfer</span>
                  </div>

                  {paymentMethod === "bank" && (
                    <div className="mt-2 text-sm text-green-900 bg-green-100 p-3 rounded">
                      <p><strong>Bank Alfalah Limited</strong></p>
                      <p>Account Title: Attia Khan</p>
                      <p>Account Number: 0083976353748463848</p>
                      <p>IBAN: PK47937JF973J8J48JKII</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white py-3 rounded text-lg font-semibold ${
                isLoading ? "bg-green-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"
              }`}
            >
              {isLoading ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
