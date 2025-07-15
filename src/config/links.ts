export interface Link {
  title: string;
  url: string;
  icon?: string;
  color?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

// Profile Configuration
export const profile: Profile = {
  name: "Ferrous Scales",
  title: "Dragon",
  bio: "Being a dragon on the internet",
  avatar: "/icon.jpeg" // Path to your image in the public folder
};

// Main Links Configuration
export const links: Link[] = [
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/kylebolin.bsky.social",
    color: "bg-gradient-to-r from-sky-400 to-blue-500",
    icon: "☁️"
  },
  {
    title: "Twitter/X",
    url: "https://twitter.com/Ferrous_DRGN",
    color: "bg-gradient-to-r from-black to-gray-800",
    icon: "🐦"
  },
  {
    title: "Steam",
    url: "https://steamcommunity.com/id/DOPEDRAG0N",
    color: "bg-gradient-to-r from-gray-800 to-gray-900",
    icon: "🎮"
  },
  {
    title: "Contact Me",
    url: "mailto:ferrous.scales@gmail.com",
    color: "bg-gradient-to-r from-red-500 to-pink-600",
    icon: "📧"
  }
];

 