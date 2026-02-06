'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import MemoryGallery from '../MemoryGallery';
import TogetherSinceCounter from '../TogetherSinceCounter';
import LoveLetterReveal from '../LoveLetterReveal';

export default function Episode9Anniversary() {
    const [showLetter, setShowLetter] = useState(false);

    // TODO: PERSONALIZE - Add your final love letter
    const finalLoveLetter = `My love,
Okay so I’m writing this like a little romantic book scene (because you are that Pinterest, soft-light, main-character girl and I’m just lucky enough to exist in the plot). If our story were a Netflix series, this would be the final episode of season two. Not the ending. Just the part where everything finally makes sense when you look back at how it all began.

I still don’t know how you did it. You walked into college and something in me quietly decided, “yeah… her.” You didn’t even know me then, which is funny now, because I noticed you long before you noticed me. First on Instagram, then on campus, pretending it was casual when it really wasn't.

Then I came back from the internship and started showing up around you more. Not in a dramatic way, just enough to hope you'd notice. And you did.

That interview day for the cell still plays in my head like a scene I’d never skip. Me on stage, trying to sound confident and senior, acting like I had everything under control. Then you looked at me and suddenly I forgot how to speak. I stuttered a bit. Still my favourite moment. It felt like the story quietly marking itself, like a page being folded to come back to later.

The next day I showed up in that pink shirt, pretending to be calm while internally I was anything but. And then you joined. And slowly but eventually, without forcing anything, we started becoming us. Teasing, noticing, understanding. The kind of love that doesn't rush the plot. It just grows until one day you realise it’s already there.

Even now, my favourite scenes aren't the big ones. They’re the quiet episodes. The long walks. That path where I casually told you I plan to marry you one day, like it wasn’t the biggest thing I’ve ever meant. The way that path still feels like ours. The way you mispronounce words sometimes and how I keep those moments like little souvenirs I treasure and never want deleted. The way being with you feels soft and safe and exciting all at once.

So for our anniversary, I didn’t want something loud. I wanted something intentional. The kind of romance that lives in details, the way good stories do.

That’s why the songs became chapters, counting down to this episode.
7th: All of Me - because loving you has never been partial.
8th: Can’t Help Falling in Love - because this never felt like a choice.
9th: Carry You Home - for the days I just want to be your comfort.
10th: Let’s Fall in Love for the Night - for our slightly cinematic, filmy version of us.
11th: I Love You - because sometimes simple words say everything and you love the song.
12th: Pehla Pyaar - because this is a first for both of us.
13th: 2002 - because with you, love and friendship exist together.
14th: Yellow - because you made my world softer without even trying.
15th: Perfect - because this moment is ours.

If I had to sum up this entire season in one line, it would still be this: darling, you look perfect tonight. But more than that, you feel like home. Like certainty. Like the future I keep choosing without hesitation.

Happy anniversary, baby.
Thank you for being my favourite story so far. Not just the beginning, but the everyday parts in between. And if this is the end of season one, then I already know I want season two, three, and everything after that with you.

Come here.
(Let me love you properly.)

Always yours,
Janit`;

    // Remaining images
    const images = [
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (11).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (12).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (13).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (1).jpeg',
        '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (2).jpeg',
    ];

    return (
        <div className="space-y-16">
            {/* Anniversary Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <div className="text-8xl mb-6">💍</div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
                    Anniversary Special
                </h2>
                <h3 className="text-2xl md:text-4xl text-netflix-red mb-6">
                    Season Finale - Part 2
                </h3>
                <p className="text-xl text-netflix-lightGray max-w-3xl mx-auto leading-relaxed">
                    The day that changed everything. The day our forever began.
                </p>
            </motion.div>

            {/* Together Since Counter */}
            <TogetherSinceCounter />



            {/* Memory Gallery */}
            <MemoryGallery images={images} title="Anniversary Memories" />

            {/* Final Love Letter */}
            <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center">A Letter to You</h3>
                {!showLetter ? (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowLetter(true)}
                        className="mx-auto block bg-netflix-red hover:bg-red-700 px-8 py-4 rounded-lg font-bold text-lg netflix-glow transition-colors"
                    >
                        Open My Heart 💌
                    </motion.button>
                ) : (
                    <LoveLetterReveal letter={finalLoveLetter} signature="Forever Yours ❤️" />
                )}
            </div>

            {/* Renew Season 2 CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-br from-netflix-red/40 to-pink-900/40 rounded-lg p-12 text-center netflix-shadow"
            >
                <h3 className="text-4xl font-bold mb-6">The Story Continues...</h3>
                <p className="text-xl text-netflix-lightGray mb-8 max-w-2xl mx-auto">
                    This season may have ended, but our love story is just beginning.
                    Every day with you is a new episode, a new adventure, a new reason to fall in love all over again.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-netflix-lightGray transition-colors"
                >
                    Renew Season 2 of Our Love 💍
                </motion.button>
            </motion.div>

            {/* Credits Roll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center space-y-4 py-12"
            >
                <p className="text-sm text-netflix-lightGray uppercase tracking-widest">
                    A Netflix Original Series
                </p>
                <p className="text-2xl font-bold">Our Love on Netflix</p>
                <p className="text-lg text-netflix-lightGray">
                    Starring: Us ❤️
                </p>
                <p className="text-sm text-netflix-lightGray mt-8">
                    Created with love • Directed by destiny • Produced by fate
                </p>
                <p className="text-xs text-netflix-lightGray mt-4">
                    © {new Date().getFullYear()} Our Love Story. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
