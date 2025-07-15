import Image from "next/image";
import { profile, links } from "@/config/links";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {profile.avatar.startsWith('/') ? (
              <Image
                src={profile.avatar}
                alt={`${profile.name} avatar`}
                width={128}
                height={128}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold text-white">
                {profile.avatar}
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
          <p className="text-gray-300 mb-4">{profile.title}</p>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            {profile.bio}
          </p>
        </div>

        {/* Main Links */}
        <div className="max-w-md mx-auto space-y-4 mb-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 rounded-lg text-white font-medium text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${link.color}`}
            >
              <div className="flex items-center justify-center space-x-2">
                {link.icon && <span className="text-xl">{link.icon}</span>}
                <span>{link.title}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>Built with Next.js & Tailwind CSS</p>
          <p className="mt-1">© 2024 {profile.name}</p>
        </div>
      </div>
    </div>
  );
}
