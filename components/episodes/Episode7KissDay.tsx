'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode7KissDay() {
    // TODO: PERSONALIZE - Add your romantic message
    const kissMessage = `If this week is our little season, then today feels like the episode where the story finally smiles at itself.

I still remember that night near Farmaish Lane. Standing near the car, on that open road, talking about nothing important and yet not really wanting the moment to end. You know how it started. A little too much talking from my side, a little unnecessary convincing, and yes… some very intentional “manipulation” just to stretch the moment a little longer. (I still maintain it was strategic.)

And then it happened. Our first kiss. Not dramatic, not planned, just natural. Like the conversation had quietly led us there all along. I remember how everything suddenly felt still for a second, like the world gave us space to realise what we already knew.

What I loved most about that moment wasn’t just the kiss. It was how comfortable it felt after. No awkwardness, no rush. Just us, smiling like we had crossed into a new chapter without needing to say it out loud.

Some moments stay because they feel right the instant they happen. That was one of them. Soft, a little funny, a little nervous, and completely ours.

Happy Kiss Day, my love 💋
(The chapter where talking finally worked in my favour.)

Always yours,
Janit`;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.17 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (3).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Kiss Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">💋</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#DC143C' }}>
                    The Moment
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {kissMessage}
                </p>
            </motion.div>

            {/* Floating Hearts */}
            <div className="relative h-56 overflow-hidden rounded-lg bg-gradient-to-r from-red-900/30 to-pink-900/30">
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: '100%',
                                opacity: 0,
                            }}
                            animate={{
                                y: '-100%',
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: 'linear',
                            }}
                        >
                            {i % 2 === 0 ? '💋' : '❤️'}
                        </motion.div>
                    ))}
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-2xl font-semibold text-center">
                        Sealed with a Kiss 💋
                    </p>
                </div>
            </div>

            {/* Love Timeline */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">Our Love Timeline</h3>
                <div className="relative max-w-3xl mx-auto">
                    {[
                        { milestone: 'First Glance', emoji: '👀' },
                        { milestone: 'First Conversation', emoji: '💬' },
                        { milestone: 'First Date', emoji: '🌹' },
                        { milestone: 'First Kiss', emoji: '💋' },
                        { milestone: 'Forever Together', emoji: '💍' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className="flex-1 bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-lg p-4 text-center">
                                <p className="font-semibold">{item.milestone}</p>
                            </div>
                            <div className="text-4xl">{item.emoji}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Polaroid Memories */}
            <MemoryGallery images={images} title="Captured Moments" />

            {/* Romantic Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-lg p-8"
            >
                <p className="text-3xl font-bold mb-3">💋</p>
                <p className="text-2xl font-semibold mb-2">Every Kiss, A Promise</p>
                <p className="text-lg text-netflix-lightGray italic">
                    "Your kiss is the poetry my soul has been writing all along."
                </p>
            </motion.div>
        </div>
    );
}
