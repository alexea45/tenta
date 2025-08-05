import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import cmaCgmLogo from "../assets/cma-cgm-logo.png";

const carriers = [
  {
    name: 'CMA CGM',
    logo: cmaCgmLogo,
    url: 'https://www.cma-cgm.com/ebusiness/tracking',
  },
  {
    name: 'MSC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Mediterranean_Shipping_Company_logo.svg',
    url: 'https://www.msc.com/en/track-a-shipment',
  },
  {
    name: 'ONE',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ocean_Network_Express_logo.svg/1200px-Ocean_Network_Express_logo.svg.png',
    url: 'https://www.one-line.com/en/tracking',
  },
  {
    name: 'Maersk',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maersk_Group_Logo.svg/2560px-Maersk_Group_Logo.svg.png',
    url: 'https://www.maersk.com/tracking',
  },
  {
    name: 'HMM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/HMM_Logo_Basic_Form.svg',
    url: 'https://www.hmm21.com/eng/tracking/index.jsp',
  },
  {
    name: 'Safmarine',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Safmarine_Logo%2C_October_2020.svg/250px-Safmarine_Logo%2C_October_2020.svg.png',
    url: 'https://www.maersk.com/tracking', // Safmarine is part of Maersk
  },
  {
    name: 'APL',
    logo: 'https://www.cdnlogo.com/logos/a/56/apl.svg',
    url: 'https://www.apl.com/ebusiness/tracking',
  },
];

const Tracking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="p-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Track Your Shipment</h2>
          <p className="text-center mb-10 text-gray-600">
            Click a carrier below to track your shipment on their official website.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {carriers.map((carrier, idx) => (
              <a
                key={idx}
                href={carrier.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center transition hover:shadow-lg hover:scale-105"
              >
                <img src={carrier.logo} alt={carrier.name} className="h-12 mb-4 object-contain" />
                <span className="text-center text-sm font-medium text-gray-700">{carrier.name}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tracking;