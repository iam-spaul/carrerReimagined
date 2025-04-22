import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface EventCardProps {
  title: string;
  type: string;
  date: string;
  imageUrl: string;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  type,
  date,
  imageUrl,
  className = '',
}) => {
  return (
    <Card className={`flex flex-col ${className}`}>
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-medium text-purple-600 mb-1">{type}</span>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-auto">{date}</p>
      </div>
    </Card>
  );
};

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageUrl?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  imageUrl,
  className = '',
}) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex flex-col h-full">
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
        <div className="mt-auto flex items-center">
          {imageUrl && (
            <div className="mr-3 w-10 h-10 rounded-full overflow-hidden">
              <img
                src={imageUrl}
                alt={author}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Card;