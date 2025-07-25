export const TrustedPartners = () => {
  const partners = [
    { name: "Ocean Network Express", logo: "https://logo.clearbit.com/one-line.com" },
    { name: "MSC", logo: "https://logo.clearbit.com/msc.com" },
    { name: "Hapag-Lloyd", logo: "https://logo.clearbit.com/hapag-lloyd.com" },
    { name: "Safmarine", logo: "https://logo.clearbit.com/safmarine.com" },
    { name: "APL", logo: "https://logo.clearbit.com/apl.com" },
    { name: "Maersk", logo: "https://logo.clearbit.com/maersk.com" },
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
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};