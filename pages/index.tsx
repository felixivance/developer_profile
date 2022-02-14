import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black w-full">
      <Head>
        <title>Jonathan Specter Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
  {/* nav */}
      <div className='flex items-center justify-between p-3'>
        {/* left  */}
        <div className='text-white'>
          {/* <Image src="/assets/images/jp_morgan.svg" alt="Jonathan Specter logo" className="w-10 h-10" width={100} height={70} /> */}
          <p className='text-xl'>Johnathan Specter</p>
        </div>
          
        {/* right */}
        <div className=''>
          <Image src="/assets/images/hamburger.svg" alt="Menu" className="w-10 h-10" width={50} height={20} />
        </div>
      </div>

{/*     Main banner */}
      <section className='pl-3 pr-3'>
        <div className='text-white'>
          <p className='text-4xl'>Helping Companies build better, scalable software.</p>

          <p>Award-winning web developer and author, with over 15+ years of working experience with 
            Fortune 500 companies like Apple, Google, Facebook and more. </p>
        </div>
      </section>
    </div>
  )
}
