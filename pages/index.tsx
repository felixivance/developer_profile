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
      <div className='flex '>
        {/* left  */}
        <div className=''>
          <Image src="/assets/images/jp_morgan.svg" alt="Jonathan Specter logo" className="w-10 h-10" width={100} height={50} />
        </div>
          
        {/* right */}
      </div>
    
    </div>
  )
}
