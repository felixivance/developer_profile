import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black h-[100vh]">
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
      <div className='flex  space-x-2 justify-items-center'>
       <div>
       <Image src="/assets/images/Walmart.svg" alt="walmart"  width={100} height={100} />
       </div>
       <div>
        <Image src="/assets/images/jp_morgan.svg" alt="jp"  width={100} height={100} />
       </div>
       <div>
        <Image src="/assets/images/Visa.svg" alt="jp"  width={100} height={100} />
       </div>
       <div>
        <Image src="/assets/images/Tinder.svg" alt="jp"  width={100} height={100} />
       </div>
       <div>
        <Image src="/assets/images/Samsung.svg" alt="jp"  width={100} height={100} />
       </div>
       <div>
        <Image src="/assets/images/Verizon.svg" alt="jp"  width={100} height={100} />
       </div>
      </div>
    </div>
  )
}
