import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Networking" },
  { src: gallery2, alt: "Group Photo" },
  { src: gallery3, alt: "Keynote" },
  { src: gallery4, alt: "Workshop" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
    <div className="container max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-4 text-primary mb-6">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-widest font-display text-primary">Memories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 mt-2 leading-tight uppercase">
          MOMENTS OF SUCCESS
        </h2>
        {/* Poppins for body text */}
        <p className="text-base sm:text-lg text-neutral-600 mt-6 max-w-xl mx-auto font-body font-normal leading-relaxed">
          See the energy, connections, and breakthroughs from our previous gatherings.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden aspect-[4/5] group border border-neutral-100 rounded-md"
          >
            {/* Removed hover overlay and text per USER REQUEST */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover shadow-xl shadow-black/5"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
