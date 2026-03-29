import Event from "@/components/Events"
import Footer from "@/components/Footer"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import RSVP from "@/components/Rsvp"
import Histoire from "@/components/Story"

function page() {
  return (
    <>
      <Nav />
      <Hero />
      <Histoire />
      <Event />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  )
}

export default page