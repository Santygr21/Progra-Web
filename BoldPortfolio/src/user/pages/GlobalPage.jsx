import { NavBar } from "../components"
import {
  HomePage,
  AboutUsPage,
  ServicesPage,
  ValuesPage,
  WorkPage,
  // ProjectDetailPage,
  ContactUsPage
} from "../pages";

export function GlobalPage() {
  return (
    <>
      <NavBar />

      <section id="home">
        <HomePage />
      </section>

      <AboutUsPage />

      <section id="services">
        <ServicesPage />
      </section>

      <ValuesPage />

      <section id="work">
        <WorkPage />
      </section>

      <section id="contact">
        <ContactUsPage />
      </section>
    </>
  );
}