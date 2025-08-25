import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import healthConsultantImage from "@/assets/health-consultant.jpg";

const ConsultationSection = () => {
  const benefits = [
    "Personalized health assessment",
    "Custom supplement recommendations",
    "Ongoing support and monitoring",
    "Expert nutritional guidance"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-wellness-blue/10 to-success-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a Health Consultation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance from our certified health experts to optimize your wellness journey with the right supplements and lifestyle choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Consultant Info */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={healthConsultantImage} 
                alt="Certified Health Consultant - Professional Nutritionist" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900">Dr. Sarah Mitchell</h3>
                <p className="text-sm text-gray-600">Certified Nutritionist</p>
                <p className="text-xs text-gray-500 mt-1">15+ years experience</p>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-900">What You'll Get:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">30-Minute Session</p>
                      <p className="text-sm text-gray-600">Video call or phone</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">Free</p>
                      <p className="text-xs text-gray-500">Limited time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Booking Form */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-6 text-gray-900">Schedule Your Free Consultation</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="healthGoals">Health Goals & Concerns</Label>
                  <Textarea 
                    id="healthGoals" 
                    placeholder="Tell us about your health goals and any specific concerns..."
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                    size="lg"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Or reach us directly at{" "}
                  <a href="tel:+14434323295" className="text-primary font-medium hover:underline">
                    +1 (443) 432-3295
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;