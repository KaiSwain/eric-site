const Events = () => {
  const events = [
    {
      title: "Book Signings",
      description: "Eric enjoys traveling and speaking by request whenever possible. Whether at bookstores, churches, or special events.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Filmmaker Speaks",
      description: "Eric shares the story behind writing the screenplay for 'The Final Race' and his plans to bring the amazing final chapter of Eric Liddell's story to the big screen.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Guest Preaching",
      description: "Eric is available to preach and share messages of faith, perseverance, and hope at churches and conferences.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

  const highlights = [
    {
      image: "/images/jimcaviesel-buttonu3204-fr.jpg",
      title: "Meeting Jim Caviezel",
      description: "Hanging out at NRB in Nashville with Jim Caviezel. Upon taking a copy of The Final Race, Jim said he loved Chariots of Fire!",
    },
    {
      image: "/images/eric-metaxas=banner.jpg",
      title: "The Eric Metaxas Show",
      description: "Featured interview discussing The Final Race, Eric Liddell's legacy, and the importance of faith-driven storytelling.",
      link: "https://omny.fm/shows/the-eric-metaxas-show/eric-eichinger"
    },
    {
      image: "/images/book%20signing-buttonu3210-fr.jpg",
      title: "Book Signing Events",
      description: "Eric enjoys traveling and speaking by request whenever possible. Whether at bookstores, churches, or special events.",
    },
    {
      image: "/images/20180603_102759.jpg",
      title: "Guest Preaching",
      description: "Eric guest preaches at churches, sharing messages of faith, perseverance, and the inspiring stories behind his books.",
    }
  ]

  return (
    <section id="events" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">Speaking &amp; Appearances</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Events &amp; Media
          </h2>
          <div className="divider-red w-24 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Bringing stories of faith and perseverance to audiences across the country
          </p>
        </div>

        {/* Event Types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-[#141414] border border-white/5 hover:border-red-900/30 rounded-lg p-8 text-center transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-950/50 border border-red-900/30 text-red-400 mb-6 group-hover:bg-red-900/40 transition-colors">
                {event.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {event.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative rounded-lg overflow-hidden border border-white/5"
            >
              <div className="h-56 sm:h-64 bg-[#111]">
                {highlight.image && (
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-sans text-lg font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-3 line-clamp-2">
                  {highlight.description}
                </p>
                {highlight.link && (
                  <a 
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm transition-colors gap-2"
                  >
                    Listen to Interview
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interview */}
        <div className="mt-16 md:mt-20 rounded-lg overflow-hidden bg-[#141414] border border-white/5">
          <div className="p-6 sm:p-8 border-b border-white/5">
            <h3 className="font-sans text-2xl font-bold text-white mb-2">
              Featured Interview: The Eric Metaxas Show
            </h3>
            <p className="text-neutral-500">
              Listen to Eric&apos;s in-depth conversation about Eric Liddell&apos;s incredible story
            </p>
          </div>
          <div className="p-4 bg-[#0e0e0e]">
            <iframe 
              src="https://omny.fm/shows/the-eric-metaxas-show/eric-eichinger/embed" 
              width="100%" 
              height="180" 
              frameBorder="0"
              title="Eric Metaxas Show Interview"
              className="rounded"
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
            Invite Eric to Your Event
          </h3>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Eric brings energy, humor, and deep conviction to every stage. Available for church services, conferences, book signings, and more.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-red-800 hover:bg-red-700 text-white text-sm font-bold tracking-wider transition-colors gap-3"
          >
            GET IN TOUCH
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events
