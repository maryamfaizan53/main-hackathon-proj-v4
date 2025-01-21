"use client";

import React, { useState } from "react";

const Billing: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("Bank Transfer");

  const handlePaymentChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          <form>
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block font-medium mb-1">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block font-medium mb-1">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mt-4">
              <label htmlFor="company-name" className="block font-medium mb-1">
                Company Name (Optional)
              </label>
              <input
                id="company-name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Country/Region */}
            <div className="mt-4">
              <label htmlFor="country" className="block font-medium mb-1">
                Country / Region
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>

            {/* Address */}
            <div className="mt-4">
              <label htmlFor="address" className="block font-medium mb-1">
                Street Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Town/City */}
            <div className="mt-4">
              <label htmlFor="city" className="block font-medium mb-1">
                Town / City
              </label>
              <input
                id="city"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Province */}
            <div className="mt-4">
              <label htmlFor="province" className="block font-medium mb-1">
                Province
              </label>
              <select
                id="province"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <option value="Western Province">Western Province</option>
                <option value="Central Province">Central Province</option>
                <option value="Eastern Province">Eastern Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="mt-4">
              <label htmlFor="zip" className="block font-medium mb-1">
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>

            {/* Additional Information */}
            <div className="mt-4">
              <label htmlFor="additional" className="block font-medium mb-1">
                Additional Information
              </label>
              <textarea
                id="additional"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-400"
                rows={4}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Product</h2>
          <div className="flex justify-between items-center mb-4">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-semibold">Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg text-yellow-500">
              Rs. 250,000.00
            </span>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <div className="space-y-2">
              <div>
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  checked={paymentMethod === "Bank Transfer"}
                  onChange={() => handlePaymentChange("Bank Transfer")}
                  className="mr-2"
                />
                <label htmlFor="bank" className="text-sm">
                  Direct Bank Transfer
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={() => handlePaymentChange("Cash on Delivery")}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-sm">
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>

          <button className="w-full mt-6 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
