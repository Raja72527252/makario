import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Users, Store, TrendingUp } from 'lucide-react';
// Import customer images
import customer1 from '@/assets/our customers/IMG-20251204-WA0197.jpg';
import customer2 from '@/assets/our customers/IMG-20251204-WA0198.jpg';
import customer3 from '@/assets/our customers/IMG-20251204-WA0199.jpg';
import customer4 from '@/assets/our customers/IMG-20251204-WA0201.jpg';
import customer5 from '@/assets/our customers/IMG-20251204-WA0202.jpg';
import customer6 from '@/assets/our customers/IMG-20251204-WA0204.jpg';
import customer7 from '@/assets/our customers/IMG-20251204-WA0205.jpg';
import customer8 from '@/assets/our customers/IMG-20251204-WA0206.jpg';
import customer9 from '@/assets/our customers/IMG-20251204-WA0207.jpg';
import customer10 from '@/assets/our customers/IMG-20251204-WA0208.jpg';
import customer11 from '@/assets/our customers/IMG-20251204-WA0209.jpg';
import customer12 from '@/assets/our customers/IMG-20251204-WA0210.jpg';
import customer13 from '@/assets/our customers/IMG-20251204-WA0211.jpg';
import customer14 from '@/assets/our customers/IMG-20251204-WA0212.jpg';

const CustomerTrustSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const customers = [
    { id: 1, image: customer1, type: 'Retail', description: 'Premium Retail Partner', hover: 'Trusted by retail chains nationwide for consistent quality' },
    { id: 2, image: customer2, type: 'Wholesale', description: 'Bulk Distributor', hover: 'Supplying wholesale quantities to businesses across India' },
    { id: 3, image: customer3, type: 'Retail', description: 'Local Retailer', hover: 'Supporting local businesses with premium makhana' },
    { id: 4, image: customer4, type: 'Wholesale', description: 'Export Partner', hover: 'International wholesale partner for global distribution' },
    { id: 5, image: customer5, type: 'Retail', description: 'Store Manager', hover: 'Committed to delivering quality to end consumers' },
    { id: 6, image: customer6, type: 'Wholesale', description: 'Food Processor', hover: 'Using our makhana for premium food products' },
    { id: 7, image: customer7, type: 'Retail', description: 'E-Commerce Seller', hover: 'Serving thousands of customers online' },
    { id: 8, image: customer8, type: 'Wholesale', description: 'Logistics Partner', hover: 'Ensuring safe delivery across all regions' },
    { id: 9, image: customer9, type: 'Retail', description: 'Franchise Owner', hover: 'Building franchises with quality products' },
    { id: 10, image: customer10, type: 'Wholesale', description: 'Corporate Supplier', hover: 'Supplying to corporate offices and institutions' },
    { id: 11, image: customer11, type: 'Retail', description: 'Shop Owner', hover: 'Proud stockist of Makario premium makhana' },
    { id: 12, image: customer12, type: 'Wholesale', description: 'Bulk Order Client', hover: 'Regular bulk customer with consistent orders' },
    { id: 13, image: customer13, type: 'Retail', description: 'Retail Network', hover: 'Part of our trusted retail network' },
    { id: 14, image: customer14, type: 'Wholesale', description: 'Distribution Hub', hover: 'Key distribution hub for wholesale operations' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-heritage/5 via-golden/5 to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-golden/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-heritage/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="TRUSTED BY THOUSANDS"
          icon={Users}
          title="Our Customers Trust Us"
          highlightWord="Trust"
          highlightColor="green"
          description="From retail partners to wholesale distributors, businesses across India and globally choose Makario for premium quality makhana"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-[240px] md:auto-rows-[288px]">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={customer.image}
                alt={customer.description}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 ${
                customer.type === 'Retail' ? 'bg-green-500/80' : 'bg-blue-500/80'
              }`}>
                {customer.type === 'Retail' ? (
                  <span className="flex items-center gap-1">
                    <Store className="w-3 h-3" />
                    Retail
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Wholesale
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className={`transition-all duration-300 ${hoveredIndex === index ? 'opacity-0 -translate-y-2' : 'opacity-100'}`}>
                  <h3 className="font-bold text-sm md:text-base line-clamp-1">{customer.description}</h3>
                  <p className="text-xs text-gray-200">{customer.type} Partner</p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 translate-y-2'}`}>
                  <p className="text-sm font-semibold text-golden mb-2">{customer.description}</p>
                  <p className="text-xs leading-relaxed text-gray-100">{customer.hover}</p>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-golden/20">
          <div className="text-center group">
            <div className="text-4xl font-bold text-heritage mb-2">500+</div>
            <div className="text-golden font-semibold mb-1">Retail Partners</div>
            <div className="text-sm text-muted-foreground">Trusted retail network across India</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-heritage mb-2">100+</div>
            <div className="text-golden font-semibold mb-1">Wholesale Buyers</div>
            <div className="text-sm text-muted-foreground">Bulk distributors and suppliers</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-heritage mb-2">50+</div>
            <div className="text-golden font-semibold mb-1">Countries Served</div>
            <div className="text-sm text-muted-foreground">Global customer satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTrustSection;
