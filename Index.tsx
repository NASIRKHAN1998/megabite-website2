import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import DealsSection from "@/components/DealsSection";
import OrderSection from "@/components/OrderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MegaBite Fast Food | Taste the Mega Bite - Best Burgers in Lahore</title>
        <meta
          name="description"
          content="MegaBite Fast Food serves the best burgers, crispy fries, and delicious fast food in Lahore. Order online for fast delivery or visit us today!"
        />
        <meta
          name="keywords"
          content="fast food, burgers, pizza, fries, delivery, Lahore, MegaBite, restaurant"
        />
        <link rel="canonical" href="https://megabite.pk" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MegaBite Fast Food | Taste the Mega Bite" />
        <meta
          property="og:description"
          content="Best burgers, crispy fries, and delicious fast food in Lahore. Order online for fast delivery!"
        />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://megabite.pk" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "MegaBite Fast Food",
            image: "https://megabite.pk/hero-food.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Food Street, Block A, Gulberg III",
              addressLocality: "Lahore",
              addressCountry: "PK",
            },
            telephone: "+923001234567",
            servesCuisine: "Fast Food",
            priceRange: "₨₨",
            openingHours: ["Mo-Fr 11:00-23:00", "Sa-Su 12:00-00:00"],
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        <Header />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <DealsSection />
        <OrderSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
