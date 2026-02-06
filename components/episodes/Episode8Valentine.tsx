'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MemoryGallery from '../MemoryGallery';
import TogetherSinceCounter from '../TogetherSinceCounter';

export default function Episode8Valentine() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
    }, []);

    // All remaining images for the grand finale
    const allImages = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (5).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (6).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (7).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (8).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (9).jpeg',
    ];

    return (
        <div className="space-y-16">
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-2xl"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: -50,
                                rotate: 0,
                            }}
                            animate={{
                                y: window.innerHeight + 50,
                                rotate: 360,
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: 'linear',
                            }}
                        >
                            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Grand Opening */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <div className="text-8xl mb-6">💝</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
                    Season Finale
                </h2>
                <h3 className="text-2xl md:text-4xl text-netflix-red mb-6">
                    Valentine's Day Special
                </h3>
                <p className="text-xl text-netflix-lightGray max-w-3xl mx-auto leading-relaxed">
                    Today we celebrate the love that has grown through every season, every episode, every moment.
                    This is our story—cinematic, emotional, and unforgettable.
                </p>
            </motion.div>

            {/* Together Since Counter */}
            <TogetherSinceCounter />

            {/* Love Declaration */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-red-900/40 to-pink-900/40 rounded-lg p-8 md:p-12 netflix-shadow text-center"
            >
                <h3 className="text-3xl font-bold mb-6">Valentine’s Day</h3>
                <div className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-6 text-left md:text-center">
                    <p className="text-2xl font-bold text-netflix-red text-center">
                        Happy Valentine’s Day Babygirl!! ❤️
                    </p>
                    <p>
                        There’s a moment from our story that I didn’t even know was important at the time. I found out about it later, once we were already us. And somehow, that makes it even more special.
                    </p>
                    <p>
                        Two years ago, I joked with Aashima that I needed to go somewhere on Valentine's day night. It was just a test to me then to see her reaction, a careless moment. But later, when we started dating, you told me how that made you feel. How you got a little tense. How something inside you suddenly wanted reassurance, even before there was a reason to ask for it and she gave it to you by saying that- “He loves you too much, he wouldn’t go out with anyone else”
                    </p>
                    <p>
                        When you told me that, it stayed with me. Because it meant that your heart had found me before I even realised I was home. You cared before you were supposed to. You felt something quietly, honestly, without knowing where it would lead.
                    </p>
                    <p>
                        That’s what I love most about us. Our story isn’t built on grand gestures. It’s built on moments that only make sense in hindsight. On feelings that showed up early and waited patiently for the right time to be named.
                    </p>
                    <p>
                        So today, on Valentine’s Day, I just want you to know this. I’m not going anywhere. I wasn’t then, and I’m not now. Every path I imagine, every future I see, somehow has you walking beside me. Look at the stars, look how they shine for you.
                    </p>
                    <p className="text-2xl font-bold text-netflix-red mt-6 text-center">
                        Happy Valentine’s Day, baby ❤️
                    </p>
                    <p className="italic text-center text-netflix-lightGray">
                        (You were already important to me, even before you and I knew what we would become.)
                    </p>
                    <p className="pt-4 text-center">
                        Always yours,<br />
                        Janit
                    </p>
                </div>
            </motion.div>

            {/* Full Memory Gallery */}
            <MemoryGallery images={allImages} title="Our Complete Love Story" />

            {/* Heart Rain Effect */}
            <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-b from-transparent via-red-900/20 to-pink-900/30">
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-3xl"
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: '-10%',
                                opacity: 0.8,
                            }}
                            animate={{
                                y: '110%',
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: 'linear',
                            }}
                        >
                            ❤️
                        </motion.div>
                    ))}
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-center">
                        Raining Love ❤️
                    </p>
                </div>
            </div>

            {/* Season Outro */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center space-y-6"
            >
                <p className="text-2xl font-semibold">
                    This season may be ending, but our story continues...
                </p>
                <p className="text-lg text-netflix-lightGray">
                    Tune in tomorrow for the Anniversary Special 💍
                </p>
            </motion.div>
        </div>
    );
}
