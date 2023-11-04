import { Footer } from "@components/Footer/Footer";
import { NavBar } from "@components/NavBar/NavBar";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { Testimonial } from "@components/Testimonial/Testimonial";
import { COMPLETE_TESTIMONIALS } from "@components/TestimonialSlider/TestimonialSlider.stories";

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="fixed w-full top-0 z-50">
        <NavBar />
      </div>

      <PageHeader
        bgImageSrc="/images/page-headers/testimonials.jpg"
        title="Testimonials"
      />

      <ul className="flex flex-col w-full max-w-5xl mx-auto my-8">
        {COMPLETE_TESTIMONIALS?.map((testi, idx) => (
          <li key={idx} className="my-4 mx-auto">
            <Testimonial person={testi.person} statement={testi.statement} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
