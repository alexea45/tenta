export const TrustedPartners = () => {
  const partners = [
    { name: "Copart", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=center" },
    { name: "IAAI", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Manheim", logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop&crop=center" },
    { name: "Maersk", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=100&fit=crop&crop=center" },
    { name: "MSC", logo: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=200&h=100&fit=crop&crop=center" },
    { name: "Hapag-Lloyd", logo: "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=200&h=100&fit=crop&crop=center" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-logistics-dark mb-4">
          We are trusted by major global brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mt-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-all duration-300 w-full max-w-[180px] flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};