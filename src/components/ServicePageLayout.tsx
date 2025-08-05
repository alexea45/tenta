import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, LucideIcon } from "lucide-react";

interface Logo {
  src: string;
  alt: string;
  href: string;
}

interface ServicePageLayoutProps {
  icon: LucideIcon;
  heroTitle: string;
  heroSubtitle: string;
  sectionTitle: string;
  sectionParagraphs: string[];
  features: string[];
  image: string;
  imageAlt: string;
  ctaTitle: string;
  ctaSubtitle: string;
  logos?: Logo[];
}

export const ServicePageLayout = ({
  icon: Icon,
  heroTitle,
  heroSubtitle,
  sectionTitle,
  sectionParagraphs,
  features,
  image,
  imageAlt,
  ctaTitle,
  ctaSubtitle,
  logos,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Icon className="h-16 w-16 mx-auto mb-4 text-white" />
          <h1 className="text-5xl font-bold mb-6">{heroTitle}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-logistics-dark mb-6">
                {sectionTitle}
              </h2>
              {sectionParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">
                  {p}
                </p>
              ))}
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-logistics-green" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={image}
                alt={imageAlt}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          {logos && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-logistics-dark mb-8">
                Platforms We Support
              </h3>
              <div className="flex justify-center items-center gap-12">
                {logos.map((logo, index) => (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer" key={index}>
                    <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-logistics-dark mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-logistics-blue hover:bg-logistics-blue/90 px-8 py-4">
              Get a Quote
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}; 