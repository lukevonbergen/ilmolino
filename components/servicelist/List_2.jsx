'use client';

const categoryIcons = {
  Coffee: '☕',
  'Pastries & Baked Goods': '🥐',
  'Sandwiches & Light Bites': '🥪',
};

export default function MenuList() {
  const menu = [
    {
      category: 'Coffee',
      items: [
        { name: 'Espresso', price: '£2.40', desc: 'Rich and bold single shot of Italian espresso.' },
        { name: 'Cappuccino', price: '£2.90', desc: 'Creamy, frothy and full-bodied.' },
        { name: 'Latte', price: '£3.10', desc: 'Smooth and velvety milk coffee.' },
        { name: 'Iced Mocha', price: '£3.60', desc: 'A refreshing chocolate espresso blend over ice.' },
        { name: 'Fresh Juices', price: '£3.50', desc: 'Seasonal blends, squeezed to order.' },
      ],
    },
    {
      category: 'Pastries & Baked Goods',
      items: [
        { name: 'Pasteis de Nata', price: '£2.80', desc: 'Portuguese custard tarts with a caramelised top.' },
        { name: 'Almond Croissant', price: '£3.10', desc: 'Buttery, flaky pastry with almond filling.' },
        { name: 'Apricot Croissant', price: '£3.10', desc: 'Sweet and tangy fruit-filled croissant.' },
        { name: 'Chocolate & Lemon Cannoli', price: '£2.90', desc: 'Crispy shells with rich, zesty fillings.' },
      ],
    },
    {
      category: 'Sandwiches & Light Bites',
      items: [
        { name: 'Spinach & Cream Cheese Piadina', price: '£5.90', desc: 'Savory flatbread wrap with fresh greens.' },
        { name: 'Aubergine & Mozzarella Focaccia', price: '£6.50', desc: 'Warm focaccia filled with Mediterranean flavour.' },
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Il Molino Menu</h2>

        <div className="space-y-16">
          {menu.map(({ category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6 border-b pb-2">
                <span className="text-xl">{categoryIcons[category]}</span>
                <h3 className="text-2xl font-semibold text-gray-800">{category}</h3>
              </div>
              <ul className="space-y-6">
                {items.map(({ name, price, desc }) => (
                  <li key={name} className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="md:w-2/3">
                      <h4 className="font-medium text-gray-900">{name}</h4>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0 md:text-left">
                      <p className="text-gray-800 font-semibold">{price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}