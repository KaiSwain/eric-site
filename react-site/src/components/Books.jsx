const Books = () => {
  const books = [
    {
      title: "Blood of the Mazzaroth",
      subtitle: "A Thrilling New Novel",
      description: "\"The sensational set up for this novel does not stop holding the reader enthralled.\" — Paul L. Maier, Author of The Skeleton in God's Closet series. From the author of The Final Race comes a gripping new thriller that will keep you on the edge of your seat.",
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
      description: "The compelling story of the original superhero, Jesus Christ. From child prodigy to miracle worker to sacrificial lamb and conquering King—a story more riveting than the greatest works of fiction.",
      image: "/images/124620_3d.png",
      publisher: "Concordia Publishing",
      year: "2022",
      link: "https://books.cph.org/lord-of-legends",
      badge: "Hot"
    },
    {
      title: "Faith by Numbers",
      subtitle: "Deciphering Doctrine with Biblical Numerology",
      description: "CrossLink Publishing proudly presents FAITH BY NUMBERS by Eric Eichinger. Explore the fascinating patterns and meanings behind numbers in Scripture and discover how God uses numerical symbolism throughout the Bible.",
      image: "/images/faith-by-numbers.jpg",
      publisher: "CrossLink Publishing",
      year: "2019",
      link: "https://www.crosslink.orghttps://crosslinkpublishing.com/shop/faith-by-numbers/",
      badge: "Available Now",
      video: "https://www.youtube.com/embed/your-video-id"
    },
    {
      title: "The Final Race",
      subtitle: "The Incredible Story of the Olympian Who Inspired Chariots of Fire",
      description: "The #1 Amazon bestseller about Eric Liddell, the Olympic runner from Chariots of Fire fame, and his incredible journey from Olympic glory to sacrifice in a Japanese internment camp during WWII.",
      image: "/images/unnamed 7.jpg",
      publisher: "Tyndale House",
      year: "2018",
      link: "https://www.amazon.com/Final-Race-Eric-Eichinger/dp/1496419480https://www.amazon.com/The-Final-Race-audiobook/dp/B07BLKKG6R/ref=sr_1_1?dib=eyJ2IjoiMSJ9.RXZVVtIzgKUaCjgQHdBNefwkbkZDYDbZtWFhcPar6v4D5KjZbrHSIMmbWpoThBFrA6XTBSdqvHiuYetAGuuZ0_wK_kmltzKxN0q3ZZ2c9vuDNPe2e90m_vDpj2m3SlWAz46CzQTRgPJr-TfKyWSNV6-KojAZCscv7XbjUXPrDbMOWlNwsmgER_YAXxWS5BJXxX2XD2vuZcj9A8IN67DcdHCSxI1w6cdrtpjnt1FRjjA.SSUoI-ZrAYhKVrEQj66qoJBgrkxW7MBS7jsMtqKZ1i8&dib_tag=se&keywords=the+final+race+by+eric&qid=1771949214&sr=8-1",
      badge: "#1 Bestseller",
      award: "/images/selahs_seal_finalist_2019.png",
      awardText: "Selah Awards Finalist 2019"
    },
  ]

  return (
    <section id="books" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-amber-700 font-medium tracking-widest text-sm mb-4">BIBLIOGRAPHY</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Published Works
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        {/* Books Grid */}
        <div className="space-y-16 md:space-y-24">
          {books.map((book, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-stone-100 rounded-lg -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="max-h-[360px] sm:max-h-[420px] md:max-h-[500px] mx-auto object-contain drop-shadow-xl"
                  />
                  {book.award && (
                    <img 
                      src={book.award}
                      alt={book.awardText}
                      className="absolute -bottom-4 -right-4 w-24 h-24 object-contain"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 text-xs font-medium tracking-wider ${
                    book.isNew 
                      ? 'text-white bg-red-600 border border-red-600 animate-pulse' 
                      : 'text-amber-700 border border-amber-200 bg-amber-50'
                  }`}>
                    {book.badge}
                  </span>
                  <span className="text-stone-400 text-sm">{book.publisher} • {book.year}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                  {book.title}
                </h3>
                <p className="text-stone-500 text-lg mb-6 italic">
                  {book.subtitle}
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {book.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium tracking-wide transition-colors"
                  >
                    ORDER NOW
                    <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  {book.title === "The Final Race" && (
                    <a 
                      href="https://www.amazon.com/The-Final-Race/dp/B07BLKKG6R"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-stone-300 text-stone-700 hover:border-stone-900 text-sm font-medium tracking-wide transition-colors"
                    >
                      AUDIOBOOK
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signed Copy CTA */}
        <div className="mt-20 md:mt-32 border-t border-stone-200 pt-12 md:pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                Request a Signed Copy
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Get a personally signed copy of The Final Race. Perfect for gifts or your personal collection.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-start lg:justify-end gap-4 sm:gap-8">
              <div className="text-left sm:text-right">
                <p className="text-3xl font-bold text-stone-900">$19.95</p>
                <p className="text-stone-500 text-sm">+ shipping</p>
              </div>
              <a 
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium tracking-wide transition-colors"
              >
                REQUEST
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books
