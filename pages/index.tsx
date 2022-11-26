import Head from 'next/head'
import HorizontalScroll from 'react-scroll-horizontal'
// import Image from 'next/image'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <div className='bg-slate-50 h-screen text-[#004d25] snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#48bf53]/20
      scrollbar-thumb-[#004d25]/80'>
      <Head>
        <title>Vance Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
          <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}
