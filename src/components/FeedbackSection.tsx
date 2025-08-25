import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MessageSquare, ThumbsUp, Users } from "lucide-react";

const FeedbackSection = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      rating: 5,
      text: "The Colloidal Silver Plus has been a game-changer for my immune system. Ray's products are consistently high quality!",
      product: "Colloidal Silver Plus",
      verified: true
    },
    {
      name: "Michael Thompson",
      rating: 5,
      text: "Excellent customer service and fast shipping. The health consultation was incredibly helpful.",
      product: "Kava Liquid Caps",
      verified: true
    },
    {
      name: "Lisa Chen",
      rating: 4,
      text: "Love the natural approach. These supplements fit perfectly into my wellness routine.",
      product: "Wellness Bundle",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Feedback & Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your experience matters to us. Read what our customers say and share your own feedback to help us serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Customer Reviews */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8 out of 5</span>
                <span className="text-sm text-gray-500">(2,847 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <span className="bg-success-green text-white text-xs px-2 py-0.5 rounded">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">Purchased: {testimonial.product}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
                    <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-primary">
                        <ThumbsUp className="w-3 h-3" />
                        <span>Helpful (12)</span>
                      </button>
                      <span>•</span>
                      <span>3 days ago</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6">
              <Button variant="outline">
                View All Reviews
              </Button>
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-2" />
                  Share Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedbackName">Your Name</Label>
                  <Input id="feedbackName" placeholder="Enter your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedbackEmail">Email Address</Label>
                  <Input id="feedbackEmail" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedbackProduct">Product Purchased</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a product</option>
                    <option value="colloidal-silver">Colloidal Silver Plus</option>
                    <option value="kava">Kava Liquid Caps</option>
                    <option value="wellness-bundle">Wellness Bundle</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <Star className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedbackMessage">Your Review</Label>
                  <Textarea 
                    id="feedbackMessage" 
                    placeholder="Share your experience with our products and service..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover">
                  Submit Review
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  Your review will be published after verification
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Customer Satisfaction</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-gray-600">Would Recommend</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">4.8</div>
                    <div className="text-xs text-gray-600">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">50K+</div>
                    <div className="text-xs text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success-green">24h</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;