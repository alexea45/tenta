import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LogIn, Eye, EyeOff, Shield, Truck } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Login Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Login Form */}
              <Card className="shadow-card border-0 bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-logistics-dark flex items-center justify-center gap-2">
                    <LogIn className="h-8 w-8 text-logistics-blue" />
                    Login to Your Account
                  </CardTitle>
                  <p className="text-gray-600 mt-2">Access your shipments and account information</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-1">
                      <Input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => setFormData({...formData, rememberMe: !!checked})}
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <a href="#" className="text-sm text-logistics-blue hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button className="w-full bg-logistics-blue hover:bg-logistics-blue/90 py-3 text-lg">
                    Sign In
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Don't have an account? 
                      <a href="#" className="text-logistics-blue hover:underline ml-1">Sign up here</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                    Access Your Logistics Dashboard
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Login to manage your shipments, track packages, view invoices, 
                    and access exclusive customer features.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-logistics-blue p-3 rounded-full">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-logistics-dark mb-2">
                        Real-time Tracking
                      </h3>
                      <p className="text-gray-600">
                        Monitor all your shipments in real-time with detailed tracking information 
                        and delivery updates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-logistics-green p-3 rounded-full">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-logistics-dark mb-2">
                        Secure Account
                      </h3>
                      <p className="text-gray-600">
                        Your account is protected with enterprise-level security and 
                        encrypted data transmission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-logistics-blue p-3 rounded-full">
                      <LogIn className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-logistics-dark mb-2">
                        Easy Management
                      </h3>
                      <p className="text-gray-600">
                        Manage invoices, shipping history, and account preferences 
                        from one convenient dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="bg-logistics-light border-logistics-blue border-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-logistics-dark mb-2">
                      New to Tenta Logistics?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create an account to access our full range of shipping services 
                      and customer benefits.
                    </p>
                    <Button variant="outline" className="border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white">
                      Create Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-logistics-dark mb-4">
            Need Help Logging In?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any login issues or account questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-logistics-green hover:bg-logistics-green/90 px-8 py-4">
                Contact Support
              </Button>
            </a>
            <a href="/tracking">
              <Button variant="outline" size="lg" className="border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white px-8 py-4">
                Track Without Login
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;