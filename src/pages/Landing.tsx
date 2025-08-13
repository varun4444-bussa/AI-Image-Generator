import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Zap, Shield, Sparkles, Star, Users, Rocket, Heart, Globe, Camera } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FcGoogle } from 'react-icons/fc';

const Landing: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "AI-Powered Creation",
      description: "Transform your ideas into stunning visuals with advanced AI technology",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Lightning Fast",
      description: "Generate high-quality images in seconds, not hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Secure & Private",
      description: "Your creations are protected and only accessible to you",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Creators" },
    { icon: <Camera className="w-6 h-6" />, value: "2M+", label: "Images Generated" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "User Rating" },
    { icon: <Globe className="w-6 h-6" />, value: "120+", label: "Countries" }
  ];

  const handleGoogleLogin = () => {
    // Implementation of handleGoogleLogin
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implementation of handleSubmit
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: '#e0f2fe' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20`}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">New: Advanced AI Models Available</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Ideas Into{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Magic
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </span>
              {' '}Instantly
            </h1>
            
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Create stunning AI-generated images from simple text prompts. Join thousands of artists, marketers, and creators who are bringing their wildest imagination to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-200">
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Creating Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  View Pricing
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-purple-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Loved by creators worldwide</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Canvas?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to make AI art creation simple, fast, and accessible for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              See the Magic in Action
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              From simple prompts to stunning visuals in seconds. Watch your imagination come to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-white/70 text-sm ml-2">AI Canvas Studio</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white font-mono text-sm">
                      "A futuristic city floating in space with neon lights and flying cars"
                    </p>
                  </div>
                </div>
              </Card>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span className="text-lg">Choose your style (Realistic, Anime, 3D, Artistic)</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="text-lg">AI generates your masterpiece in seconds</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span className="text-lg">Download, share, or save to your gallery</span>
                </div>
              </div>
            </div>
            
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
              <div className="relative p-4">
                <img 
                  src="https://image.pollinations.ai/prompt/A%20futuristic%20city%20floating%20in%20space%20with%20neon%20lights%20and%20flying%20cars,%20photorealistic,%20high%20quality,%20detailed,%20professional%20photography?width=600&height=600&seed=99999&model=flux&enhance=true"
                  alt="AI Generated Art Example"
                  className="w-full rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about AI Canvas and our plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly.",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                question: "What happens to my images if I downgrade?",
                answer: "Your existing images will remain accessible in your gallery. However, on the free plan, images older than 30 days will be automatically deleted.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund.",
                gradient: "from-pink-500 to-red-500"
              },
              {
                question: "Can I use generated images commercially?",
                answer: "Pro plan subscribers have full commercial rights to their generated images. Free plan users are limited to personal use only.",
                gradient: "from-green-500 to-blue-500"
              }
            ].map((faq, index) => (
              <Card key={index} hover className="relative overflow-hidden group">
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${faq.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="font-medium">Join 50,000+ creators worldwide</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Create{' '}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Art?
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI Canvas to bring their wildest ideas to life. Start your creative journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Start Creating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;