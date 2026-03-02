const Biography = () => {
  return (
    <section id="biography" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-amber-700 font-medium tracking-widest text-sm mb-4">ABOUT</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            The Author
          </h2>
          <div className="w-16 h-1 bg-amber-700"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <img 
                src="/images/Erics-Wife.jpg" 
                alt="Eric Eichinger with his wife" 
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-stone-300"></div>
                <span className="text-stone-400 text-xs tracking-widest">LOS ANGELES, CA</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-3">
            <div className="space-y-6 text-stone-600 leading-relaxed text-base sm:text-lg">
              <p>
                <span className="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight">Rev. Eric Eichinger</span> is an ordained 
                minister, part time Old Testament professor, and accomplished author who writes at the intersection of 
                ancient mystery and modern suspense.
              </p>
              <p>
                Drawing on years of theological training, pastoral experience, and rigorous research, Eichinger brings 
                profound depth, rapier wit, and intellectual precision to the thriller genre. He&apos;s written three previously 
                published books, and his work is best known for casting theological light into human darkness with 
                captivating technique.
              </p>
              <p>
                In <em>Blood of the Mazzaroth</em>, Eichinger delivers a high-stakes theological thriller that challenges readers 
                to question power, prophecy, and the hidden forces shaping history. The sacred and the secular dance in 
                a tightly paced narrative that feels both timeless and urgently contemporary.
              </p>
              <p>
                Eichinger lives and works in the greater Los Angeles area with his wife, three children, and one feisty 
                dachshund who could box out Lebron James for a rebound if dinner morsels fall from the table.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-stone-200">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-stone-900">4</div>
                <div className="text-stone-500 text-sm mt-1">Books Published</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-stone-900">15+</div>
                <div className="text-stone-500 text-sm mt-1">Years Ministry</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-stone-900">#1</div>
                <div className="text-stone-500 text-sm mt-1">Bestseller</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-12 md:mt-16 p-6 md:p-8 bg-white border border-stone-200">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Education & Athletics</h4>
                  <p className="text-stone-600">
                    B.A. Theatre, Michigan State University • Varsity Track & Field<br />
                    <span className="text-stone-400">800m: 1:51 | 1500m: 3:49 (≈ 4:04 mile)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
