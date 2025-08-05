export const TrustedPartners = () => {
  const partners = [
    { name: "ONE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ocean_Network_Express_logo.svg/1200px-Ocean_Network_Express_logo.svg.png" },
    { name: "MSC", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mediterranean_Shipping_Company_logo.svg" },
    { name: "HMM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/HMM_Logo_Basic_Form.svg" },
    { name: "Safmarine", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Safmarine_Logo%2C_October_2020.svg/250px-Safmarine_Logo%2C_October_2020.svg.png" },
    { name: "APL", logo: "https://www.cdnlogo.com/logos/a/56/apl.svg" },
    { name: "Maersk", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/2560px-Maersk_Group_Logo.svg.png" },
    { name: "IAA", logo: "https://companieslogo.com/img/orig/IAA_BIG-ff7e4abd.png?t=1720244492" },
    { name: "Copart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Copart_logo.svg/2560px-Copart_logo.svg.png" },
    { name: "Manheim", logo: "https://www.coxautoinc.com/wp-content/uploads/2017/07/Manheim-COLOR-Icon-with-CAI-BLACK-RGB-720x160-b81732b1-7422-4916-8d99-14239bc20107.png" },
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 text-center mb-8 mt-12">
          Trusted By Major Global Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="animate-scroll flex space-x-24 w-max items-center">
            {partners.map((partner, index) => (
              <img key={index} src={partner.logo} alt={partner.name} className="h-16" />
            ))}
            {partners.map((partner, index) => (
              <img key={`clone-${index}`} src={partner.logo} alt={partner.name} className="h-16" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};