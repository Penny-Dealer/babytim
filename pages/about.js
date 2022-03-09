import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/button/Button'

function about() {
  return (
    <Layout>
      <h1>About the Copper Market</h1>
      <label>On the penny market you will find many things disigned and manufactured by me, The LA Penny Dealer</label>

      <style jsx>{`
            section {
          background-image: url(bgGif.gif);
          background-repeat: no-repeat;
          background-position: right center;
          background-size: 300px;
        }`}</style>
       
        <Link href="https://www.youtube.com/watch?v=g2mLOVHZ2u4&ab_channel=AustinMcConnell">
          <a>
           <Button large>learn even more</Button>
         </a>
        </Link>

      
    </Layout>
  )
}

export default about;
