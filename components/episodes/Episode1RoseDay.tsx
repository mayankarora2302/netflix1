'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode1RoseDay() {
    // TODO: PERSONALIZE - Add your own love message
    const loveMessage = `Dear Bhavya,
Welcome to Our Story: Season 2, Episode 1
Roses may wither with time, but some feelings quietly grow stronger. Every moment with you feels like a garden slowly coming into bloom. Soft, beautiful, and filled with a kind of warmth that stays long after the moment passes.
When I look back at how our story began, it feels a lot like this first season. Simple, gentle, and unaware of how important it would become later. Before the big words, before the songs, before everything we are today, there was just this feeling. A quiet happiness in noticing you, in wanting to be around you, in not yet knowing how much you would mean to me.
So on this Rose Day, I just want to remind you of something simple. In the garden of my heart, you have always been the most special flower. Not because of grand moments, but because you made ordinary days feel beautiful without even trying.
This is the first page of our little story from the 7th to the 15th.
And I already know this book is my favourite one to read.
All of me loves all of you
With endless love,
Janit 🌹`;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.57.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.57 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.57 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.58.jpeg',
        '/assets/images/WhatsApp Image 2026-02-06 at 12.37.58 (1).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
            >
                <div className="text-6xl mb-6">🌹</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#FF6B9D' }}>
                    The First Bloom
                </h3>
                <p className="text-lg text-netflix-lightGray leading-relaxed whitespace-pre-line">
                    {loveMessage}
                </p>
            </motion.div>

            {/* Animated Rose Petals Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-32 overflow-hidden rounded-lg bg-gradient-to-r from-pink-900/20 to-red-900/20 flex items-center justify-center"
            >
                <div className="text-4xl space-x-4">
                    {['🌹', '🌹', '🌹', '🌹', '🌹'].map((rose, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="inline-block"
                        >
                            {rose}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Memory Gallery */}
            <MemoryGallery images={images} title="Our Rose Garden of Memories" />

            {/* Closing Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center italic text-xl text-netflix-lightGray"
            >
                "A rose by any other name would smell as sweet, but you are my only rose." 🌹
            </motion.div>
        </div>
    );
}
