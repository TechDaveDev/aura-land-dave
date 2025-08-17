interface StoreButtonProps {
  platform: 'App Store' | 'Google Play';
  icon: React.ReactNode;
  className?: string;
}

export const StoreButton = ({ platform, icon, className = '' }: StoreButtonProps) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl transition-all duration-300 group ${className}`}
    >
      <div className="text-white w-8 h-8">{icon}</div>
      <div>
        <p className="text-xs text-slate-300 group-hover:text-white transition-colors">
          {
            platform === 'App Store'
              ? 'Download on the'
              : 'GET IN ON'
          }
        </p>
        <p className="text-sm font-semibold text-white leading-tight">
          {platform}
        </p>
      </div>
    </a>
  )
}
