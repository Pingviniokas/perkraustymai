import { useState } from 'react';
import { MapPin, Calendar, Package, ArrowRight, Truck, Clock } from 'lucide-react';

interface PriceEstimate {
  basic: number;
  premium: number;
  enterprise: number;
}

const Calculator = () => {
  const [showPricing, setShowPricing] = useState(false);
  const [estimation, setEstimation] = useState<PriceEstimate | null>(null);

  const handleCalculate = () => {
    // Simulate price calculation
    setEstimation({
      basic: 1299,
      premium: 1899,
      enterprise: 2499
    });
    setShowPricing(true);
  };

  return (
    <div className="relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-600/5 rounded-3xl transform rotate-6 scale-105 blur-2xl" />
      
      {/* Main Calculator Card */}
      <div className="relative bg-white rounded-3xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Sužinokite kainą</h3>
        <div className="space-y-6">
          {/* From Address */}
          <div className="relative group">
            <MapPin className="absolute left-4 top-3.5 text-red-600 w-5 h-5 transition-transform group-hover:scale-110" />
            <input
              type="text"
              placeholder="Moving From"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all hover:border-red-600"
            />
            <div className="absolute inset-0 border border-red-600 rounded-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* To Address */}
          <div className="relative group">
            <MapPin className="absolute left-4 top-3.5 text-red-600 w-5 h-5 transition-transform group-hover:scale-110" />
            <input
              type="text"
              placeholder="Moving To"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all hover:border-red-600"
            />
          </div>

          {/* Additional Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Package className="absolute left-4 top-3.5 text-red-600 w-5 h-5" />
              <select className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none">
                <option>Select Size</option>
                <option>Studio</option>
                <option>1 Bedroom</option>
                <option>2-3 Bedrooms</option>
                <option>4+ Bedrooms</option>
              </select>
            </div>
            <div className="relative">
              <Calendar className="absolute left-4 top-3.5 text-red-600 w-5 h-5" />
              <input
                type="date"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button 
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-xl hover:from-red-700 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            Calculate Cost
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Price Estimates */}
        {showPricing && (
          <div className="mt-6 space-y-4">
            <h4 className="font-semibold text-gray-700">Select Your Package:</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'Basic Move', price: estimation?.basic, features: ['2 Movers', 'Basic Insurance', '4-Hour Window'] },
                { title: 'Premium', price: estimation?.premium, features: ['3 Movers', 'Full Insurance', '2-Hour Window'] },
                { title: 'Enterprise', price: estimation?.enterprise, features: ['4+ Movers', 'Premium Insurance', 'Exact Time'] }
              ].map((plan) => (
                <div 
                  key={plan.title}
                  className="p-4 rounded-xl border-2 border-gray-100 hover:border-red-600 transition-all cursor-pointer group"
                >
                  <h5 className="font-semibold mb-2">{plan.title}</h5>
                  <div className="text-2xl font-bold text-red-600 mb-4">
                    ${plan.price}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Info Cards */}
      <div className="absolute -right-12 -bottom-12 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="font-semibold">Free Quote</p>
            <p className="text-sm text-gray-600">No obligations</p>
          </div>
        </div>
      </div>

      <div className="absolute -left-12 top-1/3 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold">24/7 Support</p>
            <p className="text-sm text-gray-600">Always available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;