const Events = () => {
  const events = [
    {
      title: "Book Signings",
      description: "Eric enjoys traveling and speaking by request whenever possible. Whether at bookstores, churches, or special events.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Filmmaker Speaks",
      description: "Eric shares the story behind writing the screenplay for 'The Final Race' and his plans to bring the amazing final chapter of Eric Liddell's story to life on the big screen.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Guest Preaching",
      description: "Eric is available to preach and share messages of faith, perseverance, and hope at churches and conferences.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      fallbackBg: "bg-gradient-to-br from-amber-600 to-amber-800"
    },
    {
      image: "/images/eric-metaxas=banner.jpg",
      title: "The Eric Metaxas Show",
      description: "Featured interview discussing The Final Race, Eric Liddell's legacy, and the importance of faith-driven storytelling.",
      link: "https://omny.fm/shows/the-eric-metaxas-show/eric-eichinger"
    },
    {
      image: "/images/book signing-buttonu3210-fr.jpg",
      title: "Book Signing Events",
      description: "Eric enjoys traveling and speaking by request whenever possible. Whether at bookstores, churches, or special events.",
      fallbackBg: "bg-gradient-to-br from-stone-600 to-stone-800"
    },
    {
      image: "/images/20180603_102759.jpg",
      title: "Guest Preaching",
      description: "Eric guest preaches at churches, sharing messages of faith, perseverance, and the inspiring stories behind his books.",
      fallbackBg: "bg-gradient-to-br from-amber-700 to-amber-900"
    }
  ]

  return (
    <section id="events" className="py-20 md:py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-amber-700 bg-amber-200 rounded-full mb-6">
            Speaking & Appearances
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing stories of faith and perseverance to audiences across the country
          </p>
        </div>

        {/* Event Types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                {event.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
              className="group relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className={`h-56 sm:h-64 ${highlight.fallbackBg || ''}`}>
                {highlight.image && (
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-200 text-sm mb-3">
                  {highlight.description}
                </p>
                {highlight.link && (
                  <a 
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm"
                  >
                    Listen to Interview
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interview */}
        <div className="mt-14 md:mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Featured Interview: The Eric Metaxas Show
            </h3>
            <p className="text-gray-600">
              Listen to Eric's in-depth conversation about Eric Liddell's incredible story
            </p>
          </div>
          <div className="p-4 bg-gray-50">
            <iframe 
              src="https://omny.fm/shows/the-eric-metaxas-show/eric-eichinger/embed" 
              width="100%" 
              height="180" 
              frameBorder="0"
              title="Eric Metaxas Show Interview"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            Invite Eric to Speak
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Available for book signings, speaking engagements, church services, and conferences
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition-colors"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events
