const Projects = () => {
  const projects = [
    {
      title: "Absolute Surrender",
      subtitle: "The Film",
      description: "The story of Eric Liddell after Chariots of Fire. A remarkable journey of an extraordinary man whose Olympic race was just the beginning, and whose end was truly... absolute surrender.",
      image: "/images/chariots-of-fire.jpg",
      link: null,
      badge: "In Development"
    },
    {
      title: "The Final Race",
      subtitle: "Audio Book",
      description: "Experience the inspiring story of Eric Liddell in audio format. Perfect for commutes, workouts, or quiet reflection time.",
      image: "/images/thefinalrace.jpg",
      link: "https://www.amazon.com/The-Final-Race/dp/B07BLKKG6R",
      badge: "Available Now"
    },
    {
      title: "God Connects",
      subtitle: "Video Series Co-Author",
      description: "A collaborative video series exploring the depths of faith and connection with the divine. Eric served as co-author for this impactful project.",
      image: "/images/unnamed 8.jpg",
      link: "https://www.lhm.org/godconnects",
      badge: "Lutheran Hour Ministries"
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-24 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-amber-400 border border-amber-400/50 rounded-full mb-6">
            Beyond the Page
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Projects & Media
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From film to audio to educational content—stories told in many formats
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-stone-800/50 rounded-2xl overflow-hidden border border-stone-700 hover:border-amber-600/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden bg-stone-900 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 bg-amber-400/10 rounded-full mb-3">
                  {project.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-amber-500 text-sm mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Eric Liddell Story Preview */}
        <div className="mt-14 md:mt-20 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-900/30 to-stone-800/50 border border-amber-700/30">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 lg:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                The Story Behind Chariots of Fire
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The movie was nominated for seven Academy Awards, and it won four of them... 
                but <em>Chariots of Fire</em> was just the beginning of Eric Liddell's emotional 
                heart-wrenching story.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Though his Olympic feats were remarkable, arguably the most emotional and 
                inspirational parts of Liddell's life didn't take place until after the Olympics. 
                Following his gold medal victory, Eric returned to North China as a missionary, 
                ultimately giving his life in service to others during World War II.
              </p>
              <p className="text-amber-400 italic font-medium">
                "It is surrender" — Eric Liddell's final words
              </p>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full flex items-center justify-center bg-stone-900/50">
              <img 
                src="/images/chariots-of-fire193x277.jpg" 
                alt="Chariots of Fire"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent lg:from-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
