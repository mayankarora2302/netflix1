'use client';

import { motion } from 'framer-motion';
import MemoryGallery from '../MemoryGallery';

export default function Episode6HugDay() {
    // TODO: PERSONALIZE - Add your comfort message
    const hugMessage = `Dear Lolli,
When I think of hugs, I don’t think of big moments. I think of our first evening after the CRP.
The walk to Dorabjee’s on the 15th. Nothing dramatic, just us walking, talking about random things, stretching time a little because neither of us really wanted the evening to end.

And then when I was dropping you back, that hug. Quiet, unplanned, and somehow exactly right. The kind where everything slows down for a few seconds. No overthinking, no words, just comfort. I remember thinking how natural it felt, like that space in your arms was already meant for me.

Some hugs don’t feel like goodbye. They feel like reassurance. Like saying, without speaking, that this is where you’re supposed to be. That’s what that moment felt like to me. Easy, warm, and certain in a way that’s hard to explain but impossible to forget.

So today, on Hug Day, I’m just remembering that feeling. The calm of it. The way it stayed with me even after you walked away. And how, with you, comfort never feels forced. It just happens.

Happy Hug Day, my love 🤍
(You’ll always be my favourite hug.)
Always yours,
Janit`;

    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16.jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (2).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (3).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (4).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.16 (5).jpeg',
    ];

    return (
        <div className="space-y-12">
            {/* Hug Theme Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-6xl mb-6">🤗</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#F4A460' }}>
                    My Safe Place
                </h3>
                <p className="text-lg text-netflix-lightGray max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                    {hugMessage}
                </p>
            </motion.div>

            {/* Heartbeat Animation */}
            <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-r from-orange-900/20 to-red-900/20 flex items-center justify-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="text-8xl"
                >
                    ❤️
                </motion.div>

                <div className="absolute bottom-4 text-center w-full">
                    <p className="text-sm text-netflix-lightGray">
                        Your heartbeat is my favorite lullaby
                    </p>
                </div>
            </div>

            {/* Embrace Gallery */}
            <MemoryGallery images={images} title="Moments in Your Arms" />

            {/* Comfort Monologue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-lg p-8 md:p-12 text-center"
            >
                <p className="text-2xl font-semibold mb-4">In Your Embrace</p>
                <p className="text-lg text-netflix-lightGray leading-relaxed max-w-2xl mx-auto">
                    Every hug from you feels like coming home. In your arms, I find peace, warmth, and unconditional love.
                    You hold me not just with your arms, but with your heart, and that's where I want to stay forever.
                </p>
            </motion.div>

            {/* Closing */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-xl italic text-orange-200"
            >
                "Home isn't a place, it's your embrace." 🏠💛
            </motion.div>
        </div>
    );
}
