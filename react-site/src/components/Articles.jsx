const Articles = () => {
  const articles = [
    {
      source: "The Hollywood Reporter",
      title: "Dueling Projects to Explore What Happened After 'Chariots of Fire'",
      link: "http://www.hollywoodreporter.com/news/dueling-projects-explore-what-happened-815567",
      logo: "/images/hollywoodreporter-logo.jpg",
      color: "bg-red-600"
    },
    {
      source: "The Daily Record",
      title: "Family of Olympic hero Eric Liddell fear his devout Christianity will be downplayed in new Chinese-funded film of his life",
      link: "http://www.dailyrecord.co.uk/entertainment/movies/family-olympic-hero-eric-liddell-6261298",
      logo: "/images/dailyrecord_logo.jpg",
      color: "bg-blue-700"
    },
    {
      source: "CP Entertainment",
      title: "Chariots of Fire Sequel to Focus on Christian Olympian's Mission Work, Martyrdom in China",
      link: "http://www.christianpost.com/news/chariots-of-fire-sequel-to-focus-on-christian-olympians-mission-work-martyrdom-in-china-143105/",
      logo: "/images/christianpost-logo.jpg",
      color: "bg-purple-700"
    },
    {
      source: "The Jagged Word",
      title: "We Could Use A Liddell Perseverance",
      subtitle: "Blog by Eric Eichinger",
      link: "https://thejaggedword.com/2018/05/04/we-could-use-a-liddell-perseverance/",
      color: "bg-stone-700"
    },
    {
      source: "WND",  
      title: "Heroes of the Catholic Church",
      link: "https://www.wnd.com/2018/10/heroes-of-the-catholic-church/",
      color: "bg-amber-700"
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
      logo: "/images/pasted image 940x347.jpg"
    },
    {
      name: "Moody Radio",
      description: "In-depth discussion about The Final Race and the enduring legacy of Eric Liddell.",
      link: "https://www.moodyradio.org/radioplayer.aspx?episode=213804"
    }
  ]

  return (
    <section id="articles" className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-amber-700 bg-amber-200 rounded-full mb-6">
            Press & Media
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            In the News
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured in major publications and media outlets
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 md:mb-16">
          {articles.map((article, index) => (
            <a 
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-2 ${article.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {article.logo ? (
                    <img 
                      src={article.logo} 
                      alt={article.source}
                      className="h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span className={`font-bold text-sm uppercase tracking-wide ${article.logo ? 'hidden' : ''} text-gray-800`}>
                    {article.source}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-sm text-amber-600 mt-2 italic">
                    {article.subtitle}
                  </p>
                )}
                <div className="mt-4 flex items-center text-amber-700 text-sm font-medium">
                  Read Article
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Podcasts Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Podcast Appearances
            </h3>
            <p className="text-gray-600">
              Hear Eric discuss his books, faith journey, and the inspiring story of Eric Liddell
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {podcasts.map((podcast, index) => (
              <div key={index} className="p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {podcast.logo && (
                  <div className="flex-shrink-0">
                    <img 
                      src={podcast.logo}
                      alt={podcast.name}
                      className="w-20 h-20 rounded-lg object-cover shadow-md"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {podcast.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {podcast.description}
                  </p>
                  {podcast.link && (
                    <a 
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-amber-700 hover:text-amber-800 text-sm font-medium"
                    >
                      <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Video: The Story of Eric Liddell
            </h3>
            <p className="text-gray-600">
              Rev. Eric Eichinger shares the WW2 story of "Chariots of Fire" Christian Olympian Eric Liddell
            </p>
          </div>
          <div className="aspect-video bg-gray-900">
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
