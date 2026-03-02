const Articles = () => {
  const articles = [
    {
      source: "The Hollywood Reporter",
      title: "Dueling Projects to Explore What Happened After 'Chariots of Fire'",
      link: "http://www.hollywoodreporter.com/news/dueling-projects-explore-what-happened-815567",
      logo: "/images/hollywoodreporter-logo.jpg",
    },
    {
      source: "The Daily Record",
      title: "Family of Olympic hero Eric Liddell fear his devout Christianity will be downplayed in new Chinese-funded film of his life",
      link: "http://www.dailyrecord.co.uk/entertainment/movies/family-olympic-hero-eric-liddell-6261298",
      logo: "/images/dailyrecord_logo.jpg",
    },
    {
      source: "CP Entertainment",
      title: "Chariots of Fire Sequel to Focus on Christian Olympian's Mission Work, Martyrdom in China",
      link: "http://www.christianpost.com/news/chariots-of-fire-sequel-to-focus-on-christian-olympians-mission-work-martyrdom-in-china-143105/",
      logo: "/images/christianpost-logo.jpg",
    },
    {
      source: "The Jagged Word",
      title: "We Could Use A Liddell Perseverance",
      subtitle: "Blog by Eric Eichinger",
      link: "https://thejaggedword.com/2018/05/04/we-could-use-a-liddell-perseverance/",
    },
    {
      source: "WND",  
      title: "Heroes of the Catholic Church",
      link: "https://www.wnd.com/2018/10/heroes-of-the-catholic-church/",
    }
  ]

  const podcasts = [
    {
      name: "Listening In with Warren Smith",
      description: "Warren Smith talks with Eric Eichinger about his new biography of Olympic great Eric Liddell. Like Liddell, Eric was a track star and lived in China.",
      logo: "/images/listening-in-logo.jpg"
    },
    {
      name: "The Eric Metaxas Show",
      description: "Featured interview discussing The Final Race, Eric Liddell's legacy, and the importance of faith-driven storytelling.",
      link: "https://omny.fm/shows/the-eric-metaxas-show/eric-eichinger",
      logo: "/images/eric-metaxas=banner.jpg"
    },
    {
      name: "Cradle My Heart Radio",
      description: "Listen to Cradle My Heart Radio with Kim Ketola and guest Pastor Eric Eichinger discuss the highly debated topic of children and eternity.",
      link: "https://cradlemyheart.org/2018/01/26/aborted-babies-hope-heaven/",
      logo: "/images/pasted%20image%20940x347.jpg"
    },
    {
      name: "Moody Radio",
      description: "In-depth discussion about The Final Race and the enduring legacy of Eric Liddell.",
      link: "https://www.moodyradio.org/radioplayer.aspx?episode=213804"
    }
  ]

  return (
    <section id="articles" className="py-24 md:py-32 bg-[#0e0e0e] relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">Press &amp; Media</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            In the News
          </h2>
          <div className="divider-red w-24 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Featured in major publications and media outlets
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {articles.map((article, index) => (
            <a 
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#141414] border border-white/5 hover:border-red-900/30 rounded-lg overflow-hidden transition-all duration-500"
            >
              <div className="h-1 bg-gradient-to-r from-red-800 to-red-600 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-6">
                <div className="flex items-center mb-4 h-8">
                  {article.logo ? (
                    <img 
                      src={article.logo} 
                      alt={article.source}
                      className="h-6 object-contain brightness-75 group-hover:brightness-100 transition-all"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span className={`font-bold text-xs uppercase tracking-wider ${article.logo ? 'hidden' : ''} text-neutral-500`}>
                    {article.source}
                  </span>
                </div>
                <h3 className="font-sans text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-3">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-sm text-red-400/60 mt-2 italic">
                    {article.subtitle}
                  </p>
                )}
                <div className="mt-4 flex items-center text-red-400 text-sm font-medium gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Podcasts Section */}
        <div className="bg-[#141414] rounded-lg border border-white/5 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-white/5">
            <h3 className="font-sans text-2xl font-bold text-white mb-2">
              Podcast Appearances
            </h3>
            <p className="text-neutral-500">
              Hear Eric discuss his books, faith journey, and the inspiring story of Eric Liddell
            </p>
          </div>
          <div className="divide-y divide-white/5">
            {podcasts.map((podcast, index) => (
              <div key={index} className="p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group hover:bg-white/[0.02] transition-colors">
                {podcast.logo && (
                  <div className="flex-shrink-0">
                    <img 
                      src={podcast.logo}
                      alt={podcast.name}
                      className="w-20 h-20 rounded-lg object-cover border border-white/10"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-semibold text-white text-lg mb-2">
                    {podcast.name}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {podcast.description}
                  </p>
                  {podcast.link && (
                    <a 
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-red-400 hover:text-red-300 text-sm font-medium gap-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Listen Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12 bg-[#141414] rounded-lg border border-white/5 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-white/5">
            <h3 className="font-sans text-2xl font-bold text-white mb-2">
              Video: The Story of Eric Liddell
            </h3>
            <p className="text-neutral-500">
              Rev. Eric Eichinger shares the WW2 story of &ldquo;Chariots of Fire&rdquo; Christian Olympian Eric Liddell
            </p>
          </div>
          <div className="aspect-video bg-black">
            <iframe 
              src="https://player.vimeo.com/video/271784969?color=ef8300&byline=0&portrait=0" 
              className="w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Eric Liddell Story"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
