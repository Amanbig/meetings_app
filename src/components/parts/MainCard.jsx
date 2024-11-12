import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function MainCard() {
  return (
    <div className='pt-20 pb-20 m-3 flex flex-col text-center justify-center dark:border-white dark:border-2 border-4 border-black rounded-xl'>
        <div className='p-2 text-xl font-bold'>Meetings Summarizer</div>
        <div className='p-2 text-5xl'>
        <div>Get answers. Find inspiration.</div>
        <div> Be more productive.</div>
        </div>
        <div className='p-3 text-xl'>
        <div>Free to use. Easy to try. Just ask and Bot can</div>
        <div>help with understanding, learning, getting news, and more.</div>
        </div>
        <div className='p-2 gap-2'>
          <Link href="/meetings">
          <Button>Start Now <ArrowRight/></Button>
          </Link>
            {/* <Button variant="link">Download Now <ArrowBigDownIcon/></Button> */}
        </div>
    </div>
  )
}