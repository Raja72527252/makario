import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Award, Leaf, Zap, Droplet } from 'lucide-react';

const QualityMakhanaShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const qualityImages = [
    { id: 1, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Premium Grade Seeds', details: 'Hand-picked raw lotus seeds from pristine Bihar wetlands' },
    { id: 2, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Quality Selection', details: 'Carefully sorted for size and quality standards' },
    { id: 3, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Premium Batch', details: 'Top-grade makhana for export quality products' },
    { id: 4, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Natural Drying', details: 'Air-dried using traditional methods to preserve nutrients' },
    { id: 5, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Quality Control', details: 'Every batch inspected for perfection' },
    { id: 6, image: '/lovable-uploads/placeholder.svg', stage: 'Raw Stage', description: 'Premium Seeds', details: 'Finest lotus seeds from Bihar wetlands' },
    { id: 7, image: '/lovable-uploads/placeholder.svg', stage: 'Processed', description: 'Roasted Perfection', details: 'Golden, crispy roasted makhana with natural flavor' },
    { id: 8, image: '/lovable-uploads/placeholder.svg', stage: 'Processed', description: 'Fine Texture', details: 'Perfectly roasted for maximum crunch' },
    { id: 9, image: '/lovable-uploads/placeholder.svg', stage: 'Processed', description: 'Premium Quality', details: 'Export-grade roasted makhana ready for consumption' },
    { id: 10, image: '/lovable-uploads/placeholder.svg', stage: 'Processed', description: 'Golden Harvest', details: 'Beautifully golden roasted makhana' },
    { id: 11, image: '/lovable-uploads/placeholder.svg', stage: 'Processed', description: 'Quality Assured', details: 'Every batch meets international quality standards' },
  ];

  const qualityPoints = [
    { icon: Leaf, title: '100% Natural', description: 'No artificial colors, preservatives, or additives', color: 'from-green-400 to-emerald-600' },
    { icon: Award, title: 'Premium Grade', description: 'Hand-selected and graded for superior quality', color: 'from-golden to-amber-600' },
    { icon: Droplet, title: 'High Nutrition', description: 'Rich in protein, fiber, and essential minerals', color: 'from-blue-400 to-cyan-600' },
    { icon: Zap, title: 'Maximum Crunch', description: 'Traditional roasting for perfect texture', color: 'from-orange-400 to-red-600' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/20 via-golden/5 to-heritage/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-nature/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-golden/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="QUALITY SHOWCASE"
          icon={Award}
          title="From Raw to Premium Quality"
          highlightWord="Premium Quality"
          highlightColor="green"
          description="Experience the journey of our makhana from pristine Bihar wetlands to your table. Every step ensures superior quality and taste"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-white/50 hover:border-golden/30 hover:shadow-xl"
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-all duration-300`}></div>

                <div className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-bold text-lg text-heritage mb-2 group-hover:text-golden transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golden to-transparent group-hover:h-2 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-heritage mb-8 text-center">Our Quality Journey</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {qualityImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-56 md:h-64"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.image}
                  alt={image.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300"></div>

                <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 ${
                  image.stage === 'Raw Stage' ? 'bg-nature/80' : 'bg-golden/80'
                }`}>
                  {image.stage}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className={`transition-all duration-300 ${hoveredIndex === index ? 'opacity-0 translate-y-2' : 'opacity-100'}`}>
                    <h4 className="font-bold text-sm md:text-base">{image.description}</h4>
                    <p className="text-xs text-gray-200">{image.stage}</p>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-sm font-semibold text-golden mb-1">{image.description}</p>
                    <p className="text-xs leading-relaxed text-gray-100">{image.details}</p>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-golden/20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50 group hover:border-golden/30 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-bold text-heritage mb-4 flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              Raw Makhana Selection
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Hand-picked from pristine Bihar wetlands</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Sorted by size and quality grade</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Air-dried using traditional methods</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Inspected for purity and quality</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50 group hover:border-golden/30 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-bold text-heritage mb-4 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Processing Excellence
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Traditional roasting in small batches</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">No artificial additives or preservatives</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">Perfect golden color and crispy texture</span>
              </li>
              <li className="flex items-start gap-3 group/item">
                <span className="text-golden font-bold mt-0.5">✓</span>
                <span className="text-muted-foreground group-hover/item:text-heritage transition-colors">International quality standards compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityMakhanaShowcase;
