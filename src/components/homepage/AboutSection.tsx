import { Button } from "@/components/ui/button";
import { Shield, Leaf, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "USA Made Quality",
      description: "All products manufactured in FDA-approved facilities with strict quality control"
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Pure, organic ingredients sourced from trusted suppliers worldwide"
    },
    {
      icon: Award,
      title: "Top Brand",
      description: "Recognized industry leader with decades of experience in wellness"
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Your wellness journey is our priority with personalized support"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Ray's Healthy Living
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For over two decades, we've been committed to providing premium health supplements 
                that make a real difference in people's lives. Our mission is to empower individuals 
                on their wellness journey with products they can trust.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our signature Colloidal Silver Plus to our comprehensive wellness formulations, 
                every product is crafted with the highest quality standards and backed by scientific research.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Our Quality Promise
              </Button>
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">100+</div>
                  <div className="text-sm text-gray-600">Premium Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success-green mb-2">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Our Promise</h3>
                <p className="text-sm text-gray-600">
                  "We stand behind every product with our quality guarantee and personalized customer support."
                </p>
                <p className="text-sm font-medium text-primary mt-2">- Ray, Founder</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;