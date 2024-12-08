// updateData.ts

export interface UpdateCard {
    id: string;
    date: string;
    title: string;
    description: string;
    category: 'Technology' | 'Food' | 'Health' | 'Feature';
    author: {
      name: string;
      avatar: string;
      timeAgo: string;
    };
    image?: string;
  }
  
  export const updates: UpdateCard[] = [
    {
      id: '1',
      date: '2024-12-08',
      title: 'AI Coach: Your Personal Health Assistant',
      description: 'Experience personalized health guidance with our new AI coach. Smart insights, real-time feedback, and adaptive recommendations.',
      category: 'Technology',
      author: {
        name: 'Prateek',
        avatar: '/images/default-avatar.png',
        timeAgo: '2h ago'
      },
      image: '/images/Our-Website-is-live.png'
    },
    // Add more updates here as needed
  ];