const Books = () => {
  const books = [
    {
      title: "Blood of the Mazzaroth",
      subtitle: "A Thrilling New Novel",
      description: "\"The sensational set up for this novel does not stop holding the reader enthralled.\" — Paul L. Maier. From the author of The Final Race comes a gripping theological thriller that challenges readers to question power, prophecy, and the hidden forces shaping history.",
      image: "/images/blood-of-mazzaroth.jpg",
      publisher: "Available Now",
      year: "2026",
      link: "https://www.amazon.com/dp/B0GLB837KH",
      badge: "NEW RELEASE",
      isNew: true
    },
    {
      title: "Lord of Legends",
      subtitle: "Jesus' Redemption Quest",
      description: "The compelling story of the original superhero, Jesus Christ. From child prodigy to miracle worker to sacrificial lamb and conquering King.",
      image: "/images/124620_3d.png",
      publisher: "Concordia Publishing",
      year: "2022",
      link: "https://books.cph.org/lord-of-legends",
      badge: "AVAILABLE"
    },
    {
      title: "Faith by Numbers",
      subtitle: "Deciphering Doctrine with Biblical Numerology",
      description: "Explore the fascinating patterns and meanings behind numbers in Scripture and discover how God uses numerical symbolism throughout the Bible.",
      image: "/images/faith-by-numbers.jpg",
      publisher: "CrossLink Publishing",
      year: "2019",
      link: "https://crosslinkpublishing.com/shop/faith-by-numbers/",
      badge: "AVAILABLE"
    },
    {
      title: "The Final Race",
      subtitle: "The Incredible Story Behind Chariots of Fire",
      description: "The #1 Amazon bestseller about Eric Liddell, the Olympic runner from Chariots of Fire fame, and his incredible journey from Olympic glory to sacrifice in a Japanese internment camp.",
      image: "/images/unnamed%207.jpg",
      publisher: "Tyndale House",
      year: "2018",
      link: "https://www.amazon.com/Final-Race-Eric-Eichinger/dp/1496419480",
      audioLink: "https://www.amazon.com/The-Final-Race/dp/B07BLKKG6R",
      badge: "#1 BESTSELLER",
      award: "/images/selahs_seal_finalist_2019.png",
      awardText: "Selah Awards Finalist 2019"
    },
  ]

  return (
    <section id="books" className="py-24 md:py-32 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-red-500 font-medium tracking-[0.3em] text-xs mb-4 uppercase">From Eric&apos;s Pen</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Books &amp; Writing
          </h2>
          <div className="divider-red w-24 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Each book is born from Eric&apos;s deep conviction that the greatest stories are already written&mdash;they just need someone willing to dig them up.
          </p>
        </div>

        {/* All Books Grid - Equal treatment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="group bg-[#141414] border border-white/5 hover:border-red-900/30 rounded-lg overflow-hidden transition-all duration-500">
              <div className="p-8 flex justify-center bg-[#111] relative">
                <div className="relative">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="max-h-[280px] object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  {book.award && (
                    <img 
                      src={book.award}
                      alt={book.awardText}
                      className="absolute -bottom-2 -right-2 w-16 h-16 object-contain"
                    />
                  )}
                </div>
                {book.isNew && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-red-900/60 border border-red-800/50 rounded-full">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-red-300 text-[10px] font-semibold tracking-wider">NEW</span>
                  </span>
                )}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider text-red-400 border border-red-900/30 bg-red-950/30 rounded-full mb-4">
                  {book.badge}
                </span>
                <h3 className={`${book.isNew ? 'font-display' : 'font-sans'} text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors`}>
                  {book.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-3 italic">{book.subtitle}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-3">{book.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 text-sm font-medium transition-colors gap-2"
                  >
                    Get the Book
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  {book.audioLink && (
                    <a 
                      href={book.audioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-neutral-500 hover:text-neutral-300 text-sm font-medium transition-colors gap-2"
                    >
                      Audiobook
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signed Copy CTA */}
        <div className="mt-20 md:mt-28 border-t border-white/5 pt-12 md:pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
                Want a Personal Touch?
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Eric loves connecting with readers. Request a personally signed copy, or reach out to invite him to your church, school, or event.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-start lg:justify-end gap-4 sm:gap-8">
              <a 
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 bg-red-800 hover:bg-red-700 text-white text-sm font-bold tracking-wider transition-colors"
              >
                REACH OUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books
