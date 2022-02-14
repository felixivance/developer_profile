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
      <div className='flex items-center justify-between pl-3 pr-3'>
        {/* left  */}
        <div className=''>
          <Image src="/assets/images/jp_morgan.svg" alt="Jonathan Specter logo" className="w-10 h-10" width={100} height={70} />
        </div>
          
        {/* right */}
        <div className=''>
          <Image src="/assets/images/hamburger.svg" alt="Menu" className="w-10 h-10" width={50} height={20} />
        </div>
      </div>
    
    </div>
  )
}
