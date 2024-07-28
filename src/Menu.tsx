import React from 'react';

function Menu() {
  return (
    <div>
      <h1 className="text-4xl text-red-500 text-center mt-10">Menu Page</h1>
      {/* Add your menu details here */}
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/react-app/assets/menu_item1-2fb13c58.jpg" alt="Overload Lugaw" className="w-80 h-96"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">Overload Lugaw</h3>
              <p className="mt-2 text-gray-600">A delicious rice porridge overloaded with toppings.</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/react-app/assets/menu_item-d801e64b.jpg" alt="Combo Sulit Sarap Meals" className="w-80 h-96"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">Combo Sulit Sarap Meals</h3>
              <p className="mt-2 text-gray-600">A combo meal that's both delicious and budget-friendly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
