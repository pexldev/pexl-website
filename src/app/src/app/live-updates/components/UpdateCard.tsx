import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Keep our interfaces neat and organized at the top
interface Author {
  name: string;
  avatar: string;
  timeAgo: string;
}

interface UpdateCardProps {
  id: string;            // Don't forget id - it's crucial for navigation!
  date: string;
  title: string;
  description: string;
  category: 'Technology' | 'Food' | 'Health' | 'Feature';
  author: Author;
  image?: string;
}

const UpdateCard = ({ id, title, description, category, author, image }: UpdateCardProps) => {
  // Fallback images - always good to have a backup plan! 🎯
  const avatarSrc = author.avatar || '/images/default-avatar.png';
  const cardImage = image || '/images/Our-website-is-live.png';
  
  // Our styling helper - keeping things clean and organized
  const getCategoryStyle = (category: string) => {
    const styles = {
      Technology: 'bg-blue-600/15 text-blue-500 border-blue-600/25 hover:bg-blue-600/20',
      Food: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      Health: 'bg-green-500/10 text-green-400 border-green-500/20',
      Feature: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    };
    return styles[category as keyof typeof styles] || styles.Feature;
  };

  return (
    // Our Link wrapper goes around everything - like a protective shell! 🛡️
    <Link href={`/blog/${id}`} className="block">
      <div className="group bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
        {/* Main Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={cardImage}
            alt={title}
            fill
            className="object-cover transform transition-transform group-hover:scale-110 duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(category)}`}>
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <p className="text-slate-600 text-sm mb-4">{description}</p>

          {/* Author Info Section */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image 
                  src={avatarSrc}
                  alt={author.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-700">{author.name}</span>
                <span className="text-xs text-slate-500">{author.timeAgo}</span>
              </div>
            </div>
            <span className="text-blue-500 text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
              Read more 
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UpdateCard;