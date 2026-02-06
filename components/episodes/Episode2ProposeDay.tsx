'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import MemoryGallery from '../MemoryGallery';

export default function Episode2ProposeDay() {
    const [isExpanded, setIsExpanded] = useState(false);

    // TODO: PERSONALIZE - Add your own proposal message/monologue
    const proposalMonologue = `
    From the moment I met you, I knew my life would never be the same.
    You are my sunrise, my sunset, and every beautiful moment in between.
    With you, I've found my home, my peace, my forever.
    Will you continue this journey with me, hand in hand, heart to heart?
  `;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.59.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.59 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.59 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.00.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.38.00 (1).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Episode Poster with Expand Functionality */}
            <div className="relative">
                <motion.div
                    layoutId="episode-poster"
                    onClick={() => setIsExpanded(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="cursor-pointer rounded-lg overflow-hidden netflix-shadow border border-netflix-darkGray/50 bg-black/40 group relative"
                >
                    <div className="relative aspect-[4/3] md:aspect-video w-full flex items-center justify-center">
                        <Image
                            src="/assets/images/Poster.png"
                            alt="Episode Poster"
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
                                layoutId="episode-poster"
                                className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
                            >
                                <Image
                                    src="/assets/images/Poster.png"
                                    alt="Expanded Poster"
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

            {/* Cinematic Letter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-lg p-8 md:p-12 netflix-shadow"
            >
                <div className="text-center mb-6">
                    <div className="text-6xl mb-4">💍</div>
                    <h3 className="text-3xl font-bold" style={{ color: '#C41E3A' }}>
                        A Promise of Forever
                    </h3>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto font-light whitespace-pre-line"
                >
                    {proposalMonologue}
                </motion.div>
            </motion.div>

            {/* Flashback Memory Reel */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-center">Flashback: Our Journey</h3>
                <MemoryGallery images={images} title="Moments Leading to Forever" />
            </div>

            {/* Dramatic Quote */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center"
            >
                <div className="text-5xl mb-4">❤️</div>
                <p className="text-2xl font-bold text-netflix-red">
                    You said YES to forever
                </p>
                <p className="text-lg text-netflix-lightGray mt-2">
                    And my heart has been full ever since
                </p>
            </motion.div>
        </div>
    );
}
