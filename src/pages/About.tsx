import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, Clock, Shield, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We ensure your cargo reaches its destination safely and on time, every time."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and customer experience."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our extensive network spans across continents, connecting businesses worldwide."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority. We tailor our services to meet your unique needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Tenta Logistics</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in global logistics solutions, connecting businesses 
            and individuals worldwide with reliable, efficient shipping services.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2009, Tenta Logistics began as a small shipping company with a big vision: 
                    to make global logistics accessible, reliable, and affordable for businesses of all sizes.
                  </p>
                  <p>
                    Over the years, we've grown from a local operation to an international logistics provider, 
                    serving thousands of customers across 50+ countries. Our success is built on a foundation 
                    of trust, innovation, and unwavering commitment to customer satisfaction.
                  </p>
                  <p>
                    Today, we specialize in auto transport from US auctions, container shipping, and comprehensive 
                    logistics solutions that help our clients navigate the complexities of international trade.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="#contact">
                    <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                      Get Started Today
                    </Button>
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center"
                  alt="Logistics warehouse"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-logistics-blue p-4 rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-logistics-dark mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-logistics-dark mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide world-class logistics solutions that enable our clients to expand their 
                    global reach while maintaining the highest standards of service, reliability, and 
                    customer satisfaction. We are committed to making international shipping simple, 
                    transparent, and cost-effective.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-logistics-dark mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading global logistics provider, recognized for innovation, sustainability, 
                    and exceptional customer service. We envision a world where distance is no barrier 
                    to business success, and every shipment is handled with the care and precision it deserves.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-logistics-dark mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-card border-0 bg-white text-center">
                  <CardContent className="p-8">
                    <div className="bg-logistics-green p-4 rounded-full w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-logistics-dark mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-logistics-dark mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Tenta Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                position: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&crop=face",
                bio: "15+ years in international logistics with a focus on operational excellence."
              },
              {
                name: "Michael Chen",
                position: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                bio: "Expert in supply chain optimization and global shipping operations."
              },
              {
                name: "Elena Rodriguez",
                position: "Head of Customer Success",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                bio: "Passionate about delivering exceptional customer experiences and building relationships."
              }
            ].map((member, index) => (
              <Card key={index} className="shadow-card border-0 bg-gradient-card text-center">
                <CardContent className="p-8">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-logistics-dark mb-1">{member.name}</h3>
                  <p className="text-logistics-blue font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-logistics-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Tenta Logistics for their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
                Get Started
              </Button>
            </a>
            <a href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-logistics-dark px-8 py-4">
                View Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;