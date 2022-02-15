import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black h-[100%]">
      <Head>
        <title>Jonathan Specter Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
       
      
      </Head>
  
  {/* nav */}
      <div className='flex items-center justify-between p-3'>
        {/* left  */}
        <div className='text-white'>
          {/* <Image src="/assets/images/jp_morgan.svg" alt="Jonathan Specter logo" className="w-10 h-10" width={100} height={70} /> */}
          <p className='text-2xl text-gray-300 font-play-fair'>Johnathan Specter</p>
        </div>
          
        {/* right */}
        <div className=''>
          <Image src="/assets/images/hamburger.svg" alt="Menu" className="w-10 h-10" width={50} height={20} />
        </div>
      </div>

{/*     Main banner */}
      <section className='pl-3 pr-3 pt-10 '>
        <div className='text-white'>
          <p className='text-4xl font-play-fair max-w-lg'>Helping Companies build better, scalable software.</p>

          <p className='text-gray-400 max-w-2xl'>Award-winning web developer and author, with over 15+ years of working experience with 
            Fortune 500 companies like Apple, Google, Facebook and more. </p>
        </div>
      </section>
      {/* images  */}
     <section id="brands" className="pl-3 pr-3">
      <div className='flex  space-x-2 justify-items-center'>
        <div>
        <Image src="/assets/images/Walmart.svg" alt="walmart"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/jp_morgan.svg" alt="jp"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/Visa.svg" alt="visa"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/Tinder.svg" alt="tinder"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/Samsung.svg" alt="samsung"  width={100} height={100} />
        </div>
        <div>
          <Image src="/assets/images/Verizon.svg" alt="verizon"  width={100} height={100} />
        </div>
        </div>
     </section>

      <section className='pl-3 pr-3'>
        <div className='flex flex-col'>
        
          <div className='flex flex-col  text-white pt-3'>
            <Image src="/assets/images/Spense.png" alt="spense" className="rounded-md" width={500} height={400} />
            <p className="text-4xl font-play-fair ">Spense.com</p> 
            <p className="text-gray-400">Rethinking the way writers get paid, an open-source platform designed to help writers
              focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>
          <div className='flex flex-col text-white pt-3'>
            <Image src="/assets/images/YelpCamp.png" alt="spense" className="rounded-md" width={500} height={400} />
            <p className="text-4xl font-play-fair ">YelpCamp.com</p> 
            <p className="text-gray-400">Rethinking the way writers get paid, an open-source platform designed to help writers
              focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>

        </div>
      </section>

      <section className="pl-3 pr-3 bg-gray-800 text-white">
        <div className="pt-10 flex flex-col">
          <p className="text-4xl font-play-fair">A co-founder at one of the world's largest communities</p>
          <p className='text-gray-400'>
            The combined experience I have been working at top Fortune 500 companies has allowed me to develop 
            a skillset that helps me in not just development , but in every aspect in business.
          </p>
          <p className='text-gray-400'>
            I'm proud to announce that i am now working at one of the world's largest communities. Teaching
            young minds about how to sell yourself as a developer and open them to a whole new world of opportunities.
          </p>
          <p className='text-gray-400'>
            As a developer you have everything available to you and all thats holding you back is yourself.
          </p>
        </div>
      </section>
    </div>
  )
}
