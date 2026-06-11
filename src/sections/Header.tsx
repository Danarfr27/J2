export default function Header() {
  return (
    <header 
      className="w-full relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #6A1B9A 0%, #4A148C 50%, #6A1B9A 100%)',
      }}
    >
      {/* Decorative character on left */}
      <div className="absolute left-0 top-0 bottom-0 w-48 opacity-60 pointer-events-none">
        <img 
          src="/pirate-character.png" 
          alt="" 
          className="h-full w-full object-contain object-left"
        />
      </div>

      {/* Decorative character on right */}
      <div className="absolute right-0 top-0 bottom-0 w-48 opacity-60 pointer-events-none">
        <img 
          src="/woman-character.png" 
          alt="" 
          className="h-full w-full object-contain object-right"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="7meter" 
            className="h-14 w-auto"
          />
        </div>

        {/* Removed login form; add call-to-action button linking to external image/page */}
        <div className="flex items-center gap-2">
          <a
            href="https://i.top4top.io/p_38136m4e11.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded"
          >
            DAFTAR GRATIS
          </a>
        </div>
      </div>
    </header>
  );
}
