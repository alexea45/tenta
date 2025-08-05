import cmaCgmLogo from "../assets/cma-cgm-logo.png";

export const TrustedPartners = () => {
  const partners = [
    { name: "CMA CGM", logo: cmaCgmLogo, href: "https://www.cma-cgm.com/" },
    { name: "ONE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ocean_Network_Express_logo.svg/1200px-Ocean_Network_Express_logo.svg.png", href: "https://www.one-line.com/en" },
    { name: "MSC", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mediterranean_Shipping_Company_logo.svg", href: "https://www.msc.com/" },
    { name: "HMM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/HMM_Logo_Basic_Form.svg", href: "https://www.hmm21.com/" },
    { name: "Safmarine", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Safmarine_Logo%2C_October_2020.svg/250px-Safmarine_Logo%2C_October_2020.svg.png", href: "https://www.safmarine.com/" },
    { name: "APL", logo: "https://www.cdnlogo.com/logos/a/56/apl.svg", href: "https://www.apl.com/" },
    { name: "Maersk", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/2560px-Maersk_Group_Logo.svg.png", href: "https://www.maersk.com/" },
    { name: "IAA", logo: "https://companieslogo.com/img/orig/IAA_BIG-ff7e4abd.png?t=1720244492", href: "https://www.iaai.com/" },
    { name: "Copart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Copart_logo.svg/2560px-Copart_logo.svg.png", href: "https://www.copart.com/" },
    { name: "Manheim", logo: "https://www.coxautoinc.com/wp-content/uploads/2017/07/Manheim-COLOR-Icon-with-CAI-BLACK-RGB-720x160-b81732b1-7422-4916-8d99-14239bc20107.png", href: "https://www.manheim.com/" },
    { name: "AutoNation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AutoNation_logo.svg/1280px-AutoNation_logo.svg.png", href: "https://www.autonation.com/" },
    { name: "CarMax", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Carmaxlogo2021.png", href: "https://www.carmax.com/" },
    { name: "Ritchie Bros.", logo: "https://help.ritchiebros.com/wp-content/uploads/2022/12/RBA-copy-SMALL.png", href: "https://www.rbauction.com/" },
    { name: "IronPlanet", logo: "https://cranenetworknews.com/wp-content/uploads/2016/05/s3-29179-IronPlanetlogo.jpg", href: "https://www.ironplanet.com/" },
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
              <a href={partner.href} target="_blank" rel="noopener noreferrer" key={index}>
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto hover:opacity-80 transition" />
              </a>
            ))}
            {partners.map((partner, index) => (
              <a href={partner.href} target="_blank" rel="noopener noreferrer" key={`clone-${index}`}>
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto hover:opacity-80 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};