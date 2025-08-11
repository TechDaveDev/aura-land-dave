interface FeedbackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isFeatured?: boolean;
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-accent-sand" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const FeedbackCard = ({ isFeatured = false, quote, author, position, avatar }: FeedbackCardProps) => {
  return (
    <div className={`relative p-8 rounded-2xl ${isFeatured ? 'bg-brand-blue text-white' : 'bg-background-secondary'}`}>
      <div className={`absolute top-4 right-4 text-6xl opacity-10 ${isFeatured ? 'text-white' : 'text-text-primary'}`}>
        <svg width="60" height="47" viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.5 24C59.5 36.9787 49.2287 47 36.5 47C23.7713 47 13.5 36.9787 13.5 24C13.5 11.0213 23.7713 1 36.5 1C49.2287 1 59.5 11.0213 59.5 24Z" stroke="currentColor" stroke-opacity="0.5" />
          <path d="M23 24C23 30.0751 18.0751 35 12 35C5.92487 35 1 30.0751 1 24C1 17.9249 5.92487 13 12 13C18.0751 13 23 17.9249 23 24Z" stroke="currentColor" stroke-opacity="0.5" />
        </svg>
      </div>
      <div className="relative">
        <StarRating />
        <p className={`mt-4 text-lg ${isFeatured ? 'text-gray-200' : 'text-text-secondary'}`}>
          {quote}
        </p>
        <div className="flex items-center mt-6">
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-offset-2 ring-offset-current" />
          <div>
            <p className={`font-bold ${isFeatured ? 'text-white' : 'text-text-primary'}`}>{author}</p>
            <p className={`text-sm ${isFeatured ? 'text-gray-300' : 'text-text-secondary'}`}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
