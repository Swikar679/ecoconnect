import React from 'react';
import { Scale, DollarSign, Trash2, Leaf } from 'lucide-react';
import FoodWasteFact from './FoodWasteFact';

const FoodWasteStats = () => {
  const facts = [
    {
      title: 'Global Impact',
      description: '1.3 billion tonnes of food is wasted globally each year, which is enough to feed 3 billion people.',
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: 'Economic Cost',
      description: 'Food waste costs the global economy nearly $1 trillion annually in lost revenue and environmental impact.',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Environmental Impact',
      description: 'Food waste is responsible for 8% of global greenhouse gas emissions.',
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: 'Household Waste',
      description: 'The average household throws away approximately 30% of the food they purchase.',
      icon: <Trash2 className="h-6 w-6" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {facts.map((fact, index) => (
        <FoodWasteFact
          key={index}
          title={fact.title}
          description={fact.description}
          icon={fact.icon}
        />
      ))}
    </div>
  );
};

export default FoodWasteStats;