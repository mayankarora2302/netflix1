'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MemoryGallery from '../MemoryGallery';

export default function Episode3ChocolateDay() {
    const [isExpanded, setIsExpanded] = useState(false);

    // TODO: PERSONALIZE - Add your sweet memories
    const sweetMessage = `
    Life with you is sweeter than the finest chocolate.
    Every moment melts in my heart like a perfect truffle.
    You're the sweetness that makes every day worth savoring.
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.01 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.02.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.02 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.03.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.03 (1).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Chocolate Poster with Expand Functionality */}
            <div className="relative">
                <motion.div
                    layoutId="choco-poster"
                    onClick={() => setIsExpanded(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="cursor-pointer rounded-lg overflow-hidden netflix-shadow border border-netflix-darkGray/50 bg-black/40 group relative"
                >
                    <div className="relative aspect-[4/3] md:aspect-video w-full flex items-center justify-center">
                        <Image
                            src="/assets/images/Choco.jpeg"
                            alt="Chocolate Day"
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="bg-netflix-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                Click to Expand 🔍
                            </span>
                        </div>
                    </div>
                </motion.div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
                            onClick={() => setIsExpanded(false)}
                        >
                            <motion.button
                                className="absolute top-6 right-6 text-white text-4xl font-light hover:text-netflix-red transition-colors z-[110]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                }}
                            >
                                ×
                            </motion.button>
                            <motion.div
                                layoutId="choco-poster"
                                className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/images/Choco.jpeg"
                                    alt="Expanded Chocolate Poster"
                                    width={1200}
                                    height={1800}
                                    className="max-h-full w-auto object-contain rounded-sm"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Chocolate Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🍫</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#7B3F00' }}>
                    Sweet Like Us
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {sweetMessage}
                </p>
            </motion.div>

            {/* Chocolate Box Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {['🍫', '🍬', '🍭', '🍰'].map((candy, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-lg p-8 text-center text-5xl cursor-pointer"
                    >
                        {candy}
                    </motion.div>
                ))}
            </div>

            {/* Sweet Memories Carousel */}
            <MemoryGallery images={images} title="Our Sweetest Moments" />

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-xl italic text-amber-200"
            >
                "You're sweeter than chocolate, warmer than cocoa, and more precious than gold." ✨
            </motion.div>
        </div>
    );
}
