import React from 'react'
import Image from 'next/image'

async function Testimonials() {
  async function getData() {
    try {
  const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  
  const res = await fetch(url, { cache: "no-store" });
  const  data = await res.json();
        
       if(!res.ok) {
         console.log("failed to fetch data")
         throw new Error("Failed to fetch data")
       }
       return data;
    } catch(err) { 
         console.log(err)
    }
  
  }
  
  async function getImages(asset_id:any) {
    try {
  const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/assets/${asset_id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
  
  const res = await fetch(url, { cache: "no-store" });
  const  data = await res.json();
        
       if(!res.ok) {
         console.log("failed to fetch data")
         throw new Error("Failed to fetch data")
       }
       return "https:" + data.fields.file.url;
    } catch(err) { 
         console.log(err)
    }
  
  }
    const data = await getData();
    const testimonialsData = await data.items.filter(
      ((item:any) => item.sys.contentType.sys.id === "testimonials"
    ))
    console.log(testimonialsData[0])
  return (
    <section className='w-full relative min-h-[600px] bg-primary flex flex-col items-center '>
      
    <div className='text-center flex flex-col '>
      <h2 className='font-semibold text-2xl md:text-3xl mt-10'>Students<span className='text-secondary'> Testimonials</span></h2>
    </div>

    <div className='w-4/5 flex flex-wrap justify-center gap-8 mt-14 mb-10 items-center'>
      {testimonialsData.map(async(item:any,index:number) => {
        let image:any = await getImages(item.fields.image.sys.id)
        return (
        <div key={index} className='w-72 p-4  bg-white shadow-xl rounded-xl'>
        <div className='flex justify-center'>
          <Image src={image} alt='image' width={100} height={100} className='rounded-full border-2 border-black shrink-0 flex ' />
        </div>
        <div className=' flex flex-col items-center justify-center mt-4 text-center'>
          <span className='text-2xl font-medium'>
            {item.fields.name}</span>
          <p className='text-lg mb-2 font-light '>{item.fields.rank}</p>
          <p className=' italic text-center'>
            {item.fields.description}</p>
        </div>
       </div>
        )
      })}
       
    </div>

    </section>
  )
}

export default Testimonials
