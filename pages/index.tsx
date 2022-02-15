import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black h-[100%] pl-8 pr-8">
      <Head>
        <title>Jonathan Specter Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
       
      
      </Head>
  
  {/* nav */}
      <div className='flex items-center justify-between p-3 text-white'>
        {/* left  */}
        <div className=''>
          {/* <Image src="/assets/images/jp_morgan.svg" alt="Jonathan Specter logo" className="w-10 h-10" width={100} height={70} /> */}
          <p className='text-2xl text-gray-300 font-play-fair'>Johnathan Specter</p>
        </div>
          {/* middle */}
          <div className=' space-x-6 text-gray-400 hidden md:inline-flex'>
            <p>Articles</p>
            <p>Chats</p>
            <p>Awards</p>
            <p>About</p>
          </div>
          {/* right desktop */}
        <div className='hidden md:inline-flex pr-3'>
            <div className='bg-yellow-300 pt-2 pb-2 pl-4 pr-4 text-black font-play-fair  '>
              Get in touch
              </div>
        </div>
        {/* right  mobile*/}
        <div className='md:hidden'>
          <Image src="/assets/images/hamburger.svg" alt="Menu" className="w-10 h-10" width={50} height={20} />
        </div>
      </div>

{/*     Main banner */}
      <section className='pl-3 pr-3 pt-10 '>
        <div className='text-white'>
          <p className='text-4xl font-play-fair max-w-lg'>Helping Companies build better, scalable software.</p>

          <p className='text-gray-400 max-w-2xl pt-3'>Award-winning web developer and author, with over 15+ years of working experience with 
            Fortune 500 companies like Apple, Google, Facebook and more. </p>
        </div>
      </section>
      {/* images  */}
     <section id="brands" className="pl-3 pr-3">
      <div className='flex space-x-4 items-center align-middle justify-center'>
        <div className=' '>
        <Image src="/assets/images/Walmart.svg" alt="walmart"  width={100} height={100} />
        </div>
        <div className=''>
          <Image src="/assets/images/jp_morgan.svg" alt="jp"  width={100} height={100} />
        </div>
        <div className=''>
          <Image src="/assets/images/Visa.svg" alt="visa"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/Tinder.svg" alt="tinder"  width={100} height={200} />
        </div>
        <div>
          <Image src="/assets/images/Samsung.svg" alt="samsung"  width={100} height={200} />
        </div>
        <div>
          <Image src="/assets/images/Verizon.svg" alt="verizon"  width={100} height={200} />
        </div>
        </div>
     </section>

      <section className='pl-3 pr-3 pb-6'>
        <div className=' md:inline-flex md:space-x-6'>
        
          <div className='flex flex-col  text-white pt-3'>
            <Image src="/assets/images/Spense.png" alt="spense" className="rounded-md" width={500} height={400} />
            <p className="text-4xl font-play-fair pt-4 pb-4 ">Spense.com</p> 
            <p className="text-gray-400">Rethinking the way writers get paid, an open-source platform designed to help writers
              focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>
          <div className='flex flex-col text-white pt-3 '>
            <Image src="/assets/images/YelpCamp.png" alt="spense" className="rounded-md" width={500} height={400} />
            <p className="text-4xl font-play-fair pt-4 pb-4 ">YelpCamp.com</p> 
            <p className="text-gray-400">Rethinking the way writers get paid, an open-source platform designed to help writers
              focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>

        </div>
      </section>

      <section className="pl-3 pr-3 bg-gray-800 text-white">
        <div className="pt-20 pb-20 md:flex md:space-x-4">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-play-fair">A co-founder at one of the world's largest communities</p>
            <p className='text-gray-400'>
              The combined experience I have been working at top Fortune 500 companies has allowed me to develop 
              a skillset that helps me in not just development , but in every aspect in business.
            </p>
            <p className='text-gray-400'>
              I'm proud to announce that i am now working at one of the world's largest communities. Teaching
              young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.
            </p>
          </div>
         <div className='flex flex-col space-y-4'>
          <p className='text-gray-400'>
              As a developer you have everything available to you and all thats holding you back is yourself.
            </p>
            <p className='text-gray-400'>
              A quote I live by  perfectly illustrates what i mean
            </p>
            <p className='text-gray-400'>
              "How big would you dream, if you knew you wouldn't fail?" You've already gone through the hardest
              parts of being a developer, its time to elavate your skills and become a leader in something you are passionate
              about.
            </p>
            <p className='text-gray-400'>
              I'm happy to chat over coffee sometime about how i can help your company
            </p>
         </div>
        </div>
      </section>
      <section className="pl-3 pr-3 text-white">
        <div className='flex flex-col pt-20 space-y-5 pb-20'>
          <p className='text-4xl font-play-fair'>Interested in working with me?</p>
          <p className='text-gray-400 max-w-2xl'>
            I am active on all social media platforms listed below, but you can also reach me via email,
            and i will get back to you within 24 hours.
          </p>
          <div className='w-[200px] '>
            <div className='bg-yellow-300 pl-9 pr-9 pt-4 pb-4 text-black font-play-fair text-2xl '>
             Get in touch
            </div>
          </div>
        </div>
        
      </section>
      {/* footer */}
      <footer className="p-4 bg-gray-800 text-white ">
        <div className='flex justify-between'>
          <p className='text-2xl text-gray-300 font-play-fair'>Johnathan Specter</p>
          <div className='flex space-x-4 items-center'>
            <div>
              <Image src="/assets/images/Github.svg" alt="spense" className="rounded-md" width={30} height={30} />
            </div>
            <div>
            <Image src="/assets/images/LinkedIn.svg" alt="spense" className="rounded-md" width={30} height={30}  />
            </div>
            <div>
            <Image src="/assets/images/Samsung.svg" alt="spense" className="rounded-md" width={60} height={40}  />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
