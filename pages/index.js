import Card from "../components/card/Card"
import ContactForm from "../components/contactForm/ContactForm"
import Hero from "../components/hero/Hero"
import Layout from "../components/layout/Layout"
import SectionBreak from "../components/sectionbreak/SectionBreak"

function Home() {
  return (
    <Layout>
      
      

      <Hero 
      heading="Welcome to the Copper Market" 
      subHeading="high quality products and deffenetly really cool webcite"
      buttonText="Learn More if you dare"
      bgImage="/pennygif1.gif"/>

      <h2>hrmm section</h2>
      <SectionBreak/>

    <div className="flex justify-space-evenly flex-wrap">
      <Card
        image="/babytim.png"
        alt="a cool im ma mage"
        title="BrUgFiSh"
        text="jhfahlhifhiourhiuogrhiuhiuqrghiuhiu"
        buttonText="learn More about yourmom"
        buttonLink="https://www.youtube.com/watch?v=Sv1fDOwyK4s&ab_channel=YoMama"
      />
      <Card
        image="/babytim.png"
        alt="a cool im ma mage"
        title="BrUgFiSh"
        text="jhfahlhifhiourhiuogrhiuhiuqrghiuhiu"
        buttonText="learn More about yourmom"
        buttonLink="https://www.youtube.com/watch?v=Sv1fDOwyK4s&ab_channel=YoMama"
      />
      <Card
        image="/babytim.png"
        alt="a cool im ma mage"
        title="BrUgFiSh"
        text="jhfahlhifhiourhiuogrhiuhiuqrghiuhiu"
        buttonText="learn More about yourmom"
        buttonLink="https://www.youtube.com/watch?v=Sv1fDOwyK4s&ab_channel=YoMama"
      />
    </div>
    <ContactForm />
    </Layout>
  )
}

export default Home