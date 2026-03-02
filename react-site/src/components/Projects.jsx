const Projects = () => {
  const projects = [
    {
      title: "Absolute Surrender",
      subtitle: "The Film",
      description: "The story of Eric Liddell after Chariots of Fire. A remarkable journey of an extraordinary man whose Olympic race was just the beginning.",
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
      image: "/images/unnamed%208.jpg",
      link: "https://www.lhm.org/godconnects",
      badge: "Lutheran Hour Ministries"
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0e0e0e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">Beyond the Page</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects &amp; Media
          </h2>
          <div className="divider-red w-24 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            From film to audio to educational content&mdash;stories told in many formats
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#141414] border border-white/5 hover:border-red-900/30 rounded-lg overflow-hidden transition-all duration-500"
            >
              <div className="h-48 overflow-hidden bg-[#111] flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider text-red-400 border border-red-900/30 bg-red-950/30 rounded-full mb-4">
                  {project.badge}
                </span>
                <h3 className="font-sans text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-red-400/60 text-sm mb-3">{project.subtitle}</p>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm transition-colors gap-2"
                  >
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Eric Liddell Story */}
        <div className="mt-16 md:mt-24 rounded-lg overflow-hidden bg-gradient-to-r from-red-950/30 to-[#111] border border-red-900/20">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 lg:p-12">
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-4">
                The Story Behind Chariots of Fire
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                The movie was nominated for seven Academy Awards, and it won four of them&hellip; 
                but <em className="text-red-400">Chariots of Fire</em> was just the beginning of Eric Liddell&apos;s emotional 
                heart-wrenching story.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Though his Olympic feats were remarkable, arguably the most emotional and 
                inspirational parts of Liddell&apos;s life didn&apos;t take place until after the Olympics. 
                Following his gold medal victory, Eric returned to North China as a missionary, 
                ultimately giving his life in service to others during World War II.
              </p>
              <p className="text-red-400 italic font-medium">
                &ldquo;It is surrender&rdquo; &mdash; Eric Liddell&apos;s final words
              </p>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full flex items-center justify-center bg-[#0a0a0a]">
              <img 
                src="/images/chariots-of-fire193x277.jpg" 
                alt="Chariots of Fire"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-transparent lg:from-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
