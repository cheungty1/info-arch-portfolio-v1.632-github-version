import { Fragment } from 'react';
import Head from 'next/head';
import HeroSectionIndex from '@/components/layout/HeroSectionIndex/HeroSectionIndex';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>iWorld - Home</title>
        <meta 
          name='description'
          description='World news from around the globe, stay up to date with us in technology, economics and politics'
        />
      </Head>
      <HeroSectionIndex
        title='i' 
        description='World news from around the globe, stay up to date with us in technology, economics and politics'
        
        bgImage="/backgrounds/actionvance-EffbIFpOHU4-unsplash.webp"
      />
     
    </Fragment>
  )
}

export default HomePage;