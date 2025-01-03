import React from 'react';
import { Info } from 'lucide-react';

type FoodWasteFactProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const FoodWasteFact = ({ title, description, icon = <Info className="h-6 w-6" /> }: FoodWasteFactProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="text-green-600 flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodWasteFact;