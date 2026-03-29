import Event from "@/components/Events"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import Histoire from "@/components/Story"

function page() {
  return (
    <>
      <Nav />
      <Hero />
      <Histoire />
      <Event />
      <Gallery />
    </>
  )
}

export default page