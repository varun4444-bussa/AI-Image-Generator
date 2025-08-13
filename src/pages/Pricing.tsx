import React from 'react';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Pricing: React.FC = () => {
  const { user } = useAuth();

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for trying out AI Canvas',
      features: [
        '5 image generations per day',
        'Basic image styles',
        'Standard resolution (512x512)',
        'Community support',
        'Gallery storage (30 days)',
      ],
      limitations: [
        'Watermarked images',
        'No commercial use',
        'Limited support',
      ],
      cta: 'Current Plan',
      highlighted: false,
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      name: 'Pro',
      price: 19,
      period: 'month',
      description: 'Unlimited creativity for professionals',
      features: [
        'Unlimited image generations',
        'All image styles & filters',
        'High resolution (1024x1024)',
        'Priority support',
        'Unlimited gallery storage',
        'No watermarks',
        'Commercial use rights',
        'Advanced editing tools',
        'Bulk generation',
        'API access',
      ],
      limitations: [],
      cta: user?.subscription === 'pro' ? 'Current Plan' : 'Upgrade to Pro',
      highlighted: true,
      icon: <Crown className="w-6 h-6" />,
    },
  ];

  const handleUpgrade = (planName: string) => {
    if (planName === 'Pro') {
      // Mock Stripe integration
      alert('Redirecting to Stripe checkout...');
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#e0f2fe' }}>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 mb-6">
            <Crown className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Choose Your Creative Journey</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Start creating amazing AI art today. Upgrade anytime to unlock unlimited creativity.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden group ${
                plan.highlighted
                  ? 'ring-2 ring-purple-500 shadow-2xl shadow-purple-500/20'
                  : 'shadow-xl hover:shadow-2xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-2 text-sm font-medium rounded-bl-xl shadow-lg">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="p-8 relative">
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-2xl mr-4 shadow-lg ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-3xl font-bold ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-bold ${
                      plan.highlighted 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start group/item">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-1.5" />
                            </div>
                            <span className="text-gray-500 dark:text-gray-500 text-sm">
                              {limitation}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleUpgrade(plan.name)}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className={`w-full text-lg py-4 ${
                    plan.highlighted ? 'shadow-xl shadow-purple-500/25' : ''
                  }`}
                  disabled={user?.subscription === plan.name.toLowerCase()}
                >
                  {user?.subscription === plan.name.toLowerCase() ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      {plan.cta}
                    </>
                  ) : (
                    <>
                      {plan.highlighted && <Zap className="w-5 h-5 mr-2" />}
                      {plan.cta}
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;