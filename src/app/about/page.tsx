import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <div className="about-img w-full h-[70vh] flex items-center justify-center py-16">
          <h1 className="text-white text-7xl font-bold">Our Story</h1>
        </div>
        <div className="px-[10%] py-[60px] grid gap-y-8">
          <div className="">
            <h1>
              <span className="font-bold text-xl">
                Rudra Restaurant (Resto):
              </span>{" "}
              Founded in 2012, Rudra Restaurant, or simply &apos;Resto&apos; is
              a beloved culinary landmark nestled in the heart of Rudrapur, just
              a short drive from Haldwani, a charming hill station known for its
              serene landscapes and cool mountain air. Established to bring
              diverse and high-quality dining options to the area, Resto has
              become a popular spot for both locals and tourists seeking a
              memorable dining experience amid the natural beauty of
              Uttarakhand.
            </h1>
          </div>
          <div className="grid gap-y-6">
            <div className="">
              <h2 className="font-bold text-xl">Ambiance and Experience</h2>
              <p className="">
                Resto combines a warm, welcoming atmosphere with a touch of
                sophistication. Designed to reflect the tranquility and
                aesthetic of the surrounding hill regions, the interiors feature
                wooden accents, ambient lighting, and panoramic windows that
                offer stunning views of the nearby hills. The restaurant
                provides a cozy environment, ideal for families, couples, and
                groups of friends to relax and enjoy delicious food with
                attentive service.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold text-xl">Cuisine</h2>
              <p>
                Resto&apos;s menu showcases a blend of local Uttarakhandi
                flavors and popular Indian dishes, as well as international
                cuisine. The chefs take pride in sourcing fresh, locally grown
                ingredients to craft flavorful and authentic meals. Signature
                dishes include traditional Uttarakhandi thalis, Himalayan
                specialties, classic North Indian curries, and an array of
                vegetarian and non-vegetarian options. Additionally, Resto
                offers a selection of continental dishes, including Italian and
                Chinese, catering to diverse tastes.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold text-xl">Specialties</h2>
              <p>
                Resto is celebrated for its tandoori items, rich gravies, and
                delectable desserts. The in-house specialties include the
                Rudrapur-style mutton curry, stuffed paneer tikka, and a variety
                of unique hill station-inspired mocktails. Seasonal dishes and
                Uttarakhandi desserts, such as Bal Mithai and Singori, are also
                popular with guests.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold text-xl">Community and Tourism</h2>
              <p>
                Beyond being a restaurant, Resto has become a central part of
                Rudrapur&apos;s community life and a must-visit for tourists
                exploring Haldwani and the surrounding hill stations. Known for
                its friendly service and commitment to quality, Resto is a
                gathering place for celebrations, family outings, and cozy
                dinners after a day of sightseeing. The restaurant also hosts
                seasonal events, food festivals, and live music evenings,
                creating an enriching experience for diners.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold text-xl">Legacy and Vision</h2>
              <p>
                Since its inception, Resto has been driven by a commitment to
                culinary excellence and hospitality. The restaurant aspires to
                keep evolving while preserving its unique heritage, making it
                not only a dining destination but a beloved fixture in Rudrapur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
