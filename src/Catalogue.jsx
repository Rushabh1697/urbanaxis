import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Catalogue() {
  const { projectId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map route param to cloudinary tag and title
  const projectData = {
    'the-sea-dream': { tag: 'prabha', title: 'The Sea Dream', location: 'Mumbai' },
    'bangalore-house': { tag: 'banglore', title: 'Bangalore House', location: 'banglore' }
  };

  const currentProject = projectData[projectId];

  useEffect(() => {
    if (!currentProject) {
      setLoading(false);
      return;
    }

    const fetchImages = async () => {
      try {
        const response = await fetch(`https://res.cloudinary.com/dnnnouh5x/image/list/${currentProject.tag}.json`);
        if (!response.ok) {
          throw new Error('Please ensure "Resource list" is enabled in Cloudinary Settings -> Security.');
        }
        const data = await response.json();
        setImages(data.resources || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [currentProject]);

  if (!currentProject) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-screen">
        <h2 className="font-headline-lg text-on-surface">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface w-full">
      <div className="pt-32 px-margin-mobile md:px-margin-desktop max-w-[1600px] mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <Link to="/projects" className="inline-block font-label-sm text-secondary uppercase tracking-[0.2em] mb-8 hover:text-on-surface transition-colors">&larr; Back to Projects</Link>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-4">{currentProject.title}</h1>
          <p className="font-label-sm text-label-sm uppercase tracking-[0.4em] text-on-surface-variant/60">{currentProject.location}</p>
        </motion.div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="font-label-sm text-secondary uppercase tracking-[0.2em] animate-pulse">Loading Catalogue...</div>
          </div>
        ) : error ? (
          <div className="p-8 border border-red-500/30 bg-red-500/10 text-red-100 rounded-sm">
            <h3 className="font-headline-md mb-2">Could not load images</h3>
            <p className="font-body-md opacity-80">{error}</p>
            <p className="font-body-sm opacity-60 mt-4">Note: In your Cloudinary Dashboard, go to Settings &gt; Security &gt; Restricted media types and ensure "Resource list" is checked.</p>
          </div>
        ) : images.length === 0 ? (
          <div className="h-64 flex items-center justify-center italic text-on-surface-variant">
            No images found with tag '{currentProject.tag}'.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {images.map((img, idx) => (
              <motion.div 
                key={img.public_id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="aspect-[4/5] bg-surface-container relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-surface-container-highest/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={`https://res.cloudinary.com/dnnnouh5x/image/upload/f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`}
                  alt={`${currentProject.title} - ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[50%] transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


