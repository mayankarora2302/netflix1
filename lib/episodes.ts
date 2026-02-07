import { RELATIONSHIP_START_DATE } from './dateUtils';

export interface Episode {
    id: number;
    title: string;
    subtitle: string;
    theme: string;
    releaseDate: Date;
    coverImage: string;
    description: string;
    duration: string;
    color: string;
    soundtrack?: string;
    songName?: string;
}


export const episodes: Episode[] = [
    {
        id: 1,
        title: "Episode 1: Rose Day",
        subtitle: "The First Bloom",
        theme: "Soft, romantic, hopeful",
        releaseDate: new Date('2026-02-07'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-06 at 12.37.56.jpeg',
        description: "Where it all began - the first petals of our love story unfold with tender moments and sweet beginnings.",
        duration: "12 min",
        color: "#FF6B9D",
        soundtrack: '/assets/audio/John_Legend_-_All_of_Me__Official_Video_(256k).mp3',
        songName: 'All of Me - John Legend',
    },
    {
        id: 2,
        title: "Episode 2: Propose Day",
        subtitle: "The Almost Proposal",
        theme: "Emotional, dramatic",
        releaseDate: new Date('2026-02-08'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-06 at 12.37.58 (2).jpeg',
        description: "A cinematic moment of vulnerability and courage - when words became promises and dreams took shape.",
        duration: "15 min",
        color: "#C41E3A",
        soundtrack: '/assets/audio/Elvis_Presley_-_Can_t_Help_Falling_In_Love__Official_Audio_(256k).mp3',
        songName: "Can't Help Falling in Love - Elvis Presley",
    },
    {
        id: 3,
        title: "Episode 3: Chocolate Day",
        subtitle: "Sweet Like Us",
        theme: "Warm, cozy, indulgent",
        releaseDate: new Date('2026-02-09'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-06 at 12.38.01.jpeg',
        description: "Indulge in the sweetness of our memories - every moment as delightful as the finest chocolate.",
        duration: "10 min",
        color: "#7B3F00",
        soundtrack: '/assets/audio/Alex_Warren_-_Carry_You_Home__Official_Video_(256k).mp3',
        songName: 'Carry You Home - Alex Warren',
    },
    {
        id: 4,
        title: "Episode 4: Teddy Day",
        subtitle: "Comfort Episode",
        theme: "Cute, comforting, wholesome",
        releaseDate: new Date('2026-02-10'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-06 at 12.38.03 (2).jpeg',
        description: "Wrapped in warmth and laughter - the cozy moments that make our love feel like home.",
        duration: "11 min",
        color: "#D4A574",
        soundtrack: '/assets/audio/FINNEAS_-_Let_s_Fall_in_Love_for_the_Night__Official_Video_(256k).mp3',
        songName: "Let's Fall in Love for the Night - FINNEAS",
    },
    {
        id: 5,
        title: "Episode 5: Promise Day",
        subtitle: "The Vow Episode",
        theme: "Emotional, deep, sincere",
        releaseDate: new Date('2026-02-11'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-01 at 20.47.15 (4).jpeg',
        description: "Sacred vows written in the language of forever - promises that bind our hearts across time.",
        duration: "14 min",
        color: "#4A5568",
        soundtrack: '/assets/audio/I_love_you__Full_song__Bodyguard_feat._Salman_khan,_Kareena_Kapoor(256k).mp3',
        songName: 'I Love You - Bodyguard',
    },
    {
        id: 6,
        title: "Episode 6: Hug Day",
        subtitle: "Safe Place",
        theme: "Warm, healing, emotional",
        releaseDate: new Date('2026-02-12'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-06 at 12.37.59 (1).jpeg',
        description: "In your arms, I found my sanctuary - where every embrace tells a story of belonging.",
        duration: "13 min",
        color: "#F4A460",
        soundtrack: '/assets/audio/Full_Song__Pehla_Pyaar___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Armaan_Malik___Vishal_Mishra(256k).mp3',
        songName: 'Pehla Pyaar - Kabir Singh',
    },
    {
        id: 7,
        title: "Episode 7: Kiss Day",
        subtitle: "The Moment",
        theme: "Passionate, romantic",
        releaseDate: new Date('2026-02-13'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-01 at 20.47.17.jpeg',
        description: "Stolen moments and lingering touches - when time stands still and hearts speak without words.",
        duration: "12 min",
        color: "#DC143C",
        soundtrack: '/assets/audio/Anne-Marie_-_2002_[Official_Video](256k).mp3',
        songName: '2002 - Anne-Marie',
    },
    {
        id: 8,
        title: "Episode 8: Valentine's Day",
        subtitle: "Season Finale - Part 1",
        theme: "Grand, emotional, unforgettable",
        releaseDate: new Date('2026-02-14'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (4).jpeg',
        description: "The grand celebration of our love - a cinematic finale that honors every moment we've shared.",
        duration: "20 min",
        color: "#E50914",
        soundtrack: '/assets/audio/Coldplay_-_Yellow__Official_Video_(256k).mp3',
        songName: 'Yellow - Coldplay',
    },
    {
        id: 9,
        title: "Episode 9: Anniversary",
        subtitle: "Season Finale - Part 2",
        theme: "Grand, emotional, unforgettable",
        releaseDate: new Date('2026-02-15'),
        coverImage: '/assets/images/WhatsApp Image 2026-02-01 at 20.47.18 (10).jpeg',
        description: "Our love story continues - celebrating the day that changed everything and looking forward to forever.",
        duration: "25 min",
        color: "#FF1744",
        soundtrack: '/assets/audio/Ed_Sheeran_-_Perfect(256k).mp3',
        songName: 'Perfect - Ed Sheeran',
    },
];

export function isEpisodeUnlocked(episode: Episode): boolean {
    // Temporarily unlocked - all episodes are accessible
    return true;
    // const now = new Date();
    // return now >= episode.releaseDate;
}

export function getNextEpisode(currentId: number): Episode | null {
    return episodes.find(ep => ep.id === currentId + 1) || null;
}

export function getUnlockedEpisodes(): Episode[] {
    return episodes.filter(isEpisodeUnlocked);
}

export function getLockedEpisodes(): Episode[] {
    return episodes.filter(ep => !isEpisodeUnlocked(ep));
}

export function getCurrentEpisode(): Episode | null {
    const unlocked = getUnlockedEpisodes();
    return unlocked.length > 0 ? unlocked[unlocked.length - 1] : null;
}
