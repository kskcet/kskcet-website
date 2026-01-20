import React, { useState, useEffect } from 'react';
import GenericPage from '../components/GenericPage';
import { X, ChevronLeft, ChevronRight, Grid, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '../data/galleryManifest.json';

const Gallery = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    // Scroll to top when album is selected
    useEffect(() => {
        if (selectedAlbum) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedAlbum]);

    // Lightbox Handlers
    const openLightbox = (index) => setLightboxImageIndex(index);
    const closeLightbox = () => setLightboxImageIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedAlbum && lightboxImageIndex !== null) {
            setLightboxImageIndex((prev) => (prev + 1) % selectedAlbum.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedAlbum && lightboxImageIndex !== null) {
            setLightboxImageIndex((prev) => (prev - 1 + selectedAlbum.images.length) % selectedAlbum.images.length);
        }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImageIndex, selectedAlbum]);

    const bannerImage = "/images/banners/gallery/banner.jpg";

    return (
        <GenericPage title="Gallery" subtitle="Capturing Moments & Memories" backgroundImage={bannerImage}>
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 py-8">

                    <AnimatePresence mode="wait">
                        {!selectedAlbum ? (
                            // --- ALL ALBUMS VIEW ---
                            <motion.div
                                key="albums-grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">Photo Albums</h2>
                                    <span className="text-sm text-gray-500 font-medium">{galleryData.length} Albums</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {galleryData.map((album, idx) => (
                                        <motion.div
                                            key={album.id}
                                            onClick={() => setSelectedAlbum(album)}
                                            whileHover={{ y: -5 }}
                                            className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                                        >
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={album.cover}
                                                    alt={album.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-200 transition-colors line-clamp-2">
                                                        {album.title}
                                                    </h3>
                                                    <div className="flex items-center text-sm font-medium text-gray-300">
                                                        <ImageIcon size={14} className="mr-2" />
                                                        {album.count} Photos
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            // --- SINGLE ALBUM DETAIL VIEW ---
                            <motion.div
                                key="album-detail"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Breadcrumb / Back Button */}
                                <div className="flex items-center mb-8">
                                    <button
                                        onClick={() => setSelectedAlbum(null)}
                                        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors font-medium group"
                                    >
                                        <div className="bg-gray-100 p-2 rounded-full mr-3 group-hover:bg-blue-100 transition-colors">
                                            <ChevronLeft size={20} />
                                        </div>
                                        Back to Albums
                                    </button>
                                </div>

                                {/* Album Header */}
                                <div className="mb-10 text-center">
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                                        {selectedAlbum.title}
                                    </h2>
                                    <div className="flex items-center justify-center text-gray-500 space-x-4">
                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                            {selectedAlbum.count} Photos
                                        </span>
                                    </div>
                                </div>

                                {/* Photos Grid (Masonry-like using raw CSS columns for simplicity or grid) */}
                                <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                                    {selectedAlbum.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => openLightbox(idx)}
                                            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-zoom-in mb-4"
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery image ${idx + 1}`}
                                                className="w-full h-auto object-cover hover:brightness-110 transition-all duration-300"
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* --- LIGHTBOX MODAL --- */}
                <AnimatePresence>
                    {lightboxImageIndex !== null && selectedAlbum && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]">
                                <X size={32} />
                            </button>

                            {/* Nav Buttons */}
                            <button
                                className="absolute left-6 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-[110]"
                                onClick={prevImage}
                            >
                                <ChevronLeft size={48} />
                            </button>
                            <button
                                className="absolute right-6 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-[110]"
                                onClick={nextImage}
                            >
                                <ChevronRight size={48} />
                            </button>

                            {/* Image Container */}
                            <motion.div
                                className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedAlbum.images[lightboxImageIndex]}
                                    alt="Lightbox view"
                                    className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl pointer-events-auto"
                                />
                                <div className="mt-4 text-white/80 text-sm font-medium tracking-wider">
                                    {lightboxImageIndex + 1} / {selectedAlbum.images.length}
                                </div>
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </GenericPage>
    );
};

export default Gallery;
