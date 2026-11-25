import React from 'react'
import { CardSubtitle, Container } from 'react-bootstrap'

const PageBanner = ({title,subtitle,backgroundImage}) => {
  return (
    <section className='page-banner' style={{ backgroundImage: 
        `linear-gradient(to right, #0000009f, #f4a91d63),url(${backgroundImage}`}}>
    
        <Container>
        <div>

            <p>Cine Verse</p>


            <h1>{title}</h1>
            <h5>{subtitle}</h5>


            <aside>
                Home/ {title}
            </aside>
        </div>

        </Container>
    
    </section>
  )
}

export default PageBanner