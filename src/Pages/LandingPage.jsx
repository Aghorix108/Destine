import React, { useEffect } from "react";
import "../Styles/LandingPage.css";
import axios from "axios";
import { FaLocationArrow, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BiDollarCircle, BiGlobe, BiSupport } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
function LandingPage() {
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const popularcards = [
    {
      title: "Bali",
      package: "3 Days 2 Nights",
      description:
        "Bali is a beautiful destination known for its beaches, temples, and vibrant culture.",
      image:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
    },
    {
      title: "Switzerland",
      package: "5 Days 4 Nights",
      description:
        "Switzerland offers breathtaking alpine scenery and charming towns perfect for a serene getaway.",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    },
    {
      title: "Dubai",
      package: "4 Days 3 Nights",
      description:
        "Dubai is a luxury hub featuring stunning skyscrapers, desert adventures, and world-class shopping.",
      image:
        "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg",
    },
    {
      title: "Paris",
      package: "6 Days 5 Nights",
      description:
        "Paris, the city of love, is famed for its art, architecture, and romantic ambiance.",
      image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    },
  ];
  const values = [
    {
      icon: BiGlobe,
      title: "Lots of Choices",
      description: "Over 500+ destinations across the globe to explore.",
    },
    {
      icon: BiSupport,
      title: "24/7 Support",
      description: "Our travel experts are here for you anytime, anywhere.",
    },
    {
      icon: BiDollarCircle,
      title: "Best Price Guarantee",
      description: "Get the best travel deals with no hidden charges.",
    },
  ];
  const recommendations = [
    {
      name: "Water Beach",
      description:
        "Tour package 3 days 2 nights with a good and friendly tour guide",
      rating: "4.5",
      price: "122.33",
      image:
        "https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg",
    },
    {
      name: "Mountain Escape",
      description:
        "Enjoy a peaceful 4-day stay in the hills with hiking and camping",
      rating: "4.7",
      price: "149.99",
      image:
        "https://images.pexels.com/photos/5529577/pexels-photo-5529577.jpeg",
    },
    {
      name: "Desert Safari",
      description:
        "2 nights in luxury desert tents with camel rides and local cuisine",
      rating: "4.3",
      price: "99.50",
      image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
    },
    {
      name: "Tropical Islands",
      description:
        "5 days all-inclusive package to explore coral reefs and island hopping",
      rating: "4.8",
      price: "199.00",
      image:
        "https://images.pexels.com/photos/3601455/pexels-photo-3601455.jpeg",
    },
    {
      name: "City Lights",
      description:
        "Weekend city tour with exclusive nightlife experiences and shopping",
      rating: "4.2",
      price: "89.99",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
    },
    {
      name: "Jungle Retreat",
      description:
        "Adventure in the wild with forest treks, waterfalls, and eco-lodges",
      rating: "4.6",
      price: "134.75",
      image: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",
    },
  ];
  const blogs = [
    {
      title: "Choosing a Travel Backpack: A Comprehensive Guide!",
      image:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    },
    {
      title: "Top 10 Must-Visit Destinations for 2025",
      image:
        "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg",
    },
    {
      title: "Travel Hacks to Save Money and Time on Your Trips",
      image:
        "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="hero-section">
          <div className="hero-heading-container">
            <h1>Explore The World Around You!</h1>
            <p>
              Take a break from the stress of the everyday life, plan trips and
              explore your favourite destinations
            </p>
          </div>
        </div>
        <div className="destination-section">
          <div className="destination-container">
            <div className="destination-input-container">
              <FaLocationArrow className="input-icon" />
              <input type="text" placeholder="What is Your Location" />
            </div>
            <div className="destination-input-container">
              <FaMapMarkerAlt className="input-icon" />
              <input type="text" placeholder="Where Do You Want To Go?" />
            </div>
            <div className="destination-input-container">
              <FaCalendarAlt className="input-icon" />
              <input type="date" />
            </div>

            <div className="destination-button-container">
              <button type="button" className="destination-container-search">
                Search Now
              </button>
            </div>
          </div>
        </div>
        <div className="popular-packages-section">
          <div className="heading-container">
            <h1 className="section-heading">Popular Packages</h1>
            <p className="section-description">
              The most popular tour packages presented to you
            </p>
          </div>
          <div className="popular-packages-card-ctontainer">
            {popularcards.map((card) => (
              <>
                {" "}
                <div className="popular-packages-cards">
                  <img src={card.image} alt="" />
                  <div className="card-heading">
                    <h1>{card.title}</h1>
                    <h3>{card.package}</h3>
                    <p>{card.description}</p>
                  </div>
                  <div className="overlay"></div>
                </div>
              </>
            ))}
          </div>
          <div className="popular-packages-cta-container">
            <button className="popular-package-cta">
              Explore More!
              <BsArrowRight className="cta-arrow" />
            </button>
          </div>
        </div>
        <div className="value-section">
          <div className="value-section-heading">
            <h1 className="section-heading">Top Value From Us For You</h1>
            <p className="section-description">
              Try a variety of benefits when using our services
            </p>
          </div>
          <div className="value-cards-container">
            {values.map((values) => {
              const Icon = values.icon;
              return (
                <div className="value-cards">
                  <div className="icon-container">
                    <Icon size={50} />
                  </div>
                  <div className="value-card-content">
                    <h1>{values.title}</h1>
                    <p>{values.description}</p>
                  </div>
                  <span className="value-card-cta">Know More!</span>
                </div>
              );
            })}
          </div>
          <div className="values-video">
            <video
              src="https://videos.pexels.com/video-files/4782485/4782485-uhd_2560_1440_30fps.mp4"
              controls
              muted
              playsInline
            ></video>
          </div>
        </div>
        <div className="travel-recommendations-section">
          <div className="travel-recommendatoins-header">
            <span>
              <h1>Travel Recommendations</h1>
              <p>
                The best travel recommendations from around the world for you
              </p>
            </span>
            <button>Know more!</button>
          </div>
          <div className="travel-recommendatoins-card-container">
            {recommendations.map((item, _) => (
              <div className="travel-recommendations-cards" key={_}>
                <img src={item.image} alt="" />
                <div className="recommendations-card-content">
                  <div className="recommendations-card-heading">
                    <h1>{item.name}</h1>
                    <h1>⭐{item.rating}</h1>
                  </div>
                  <p>{item.description}</p>
                  <div className="recommendation-card-footer">
                    <h1>${item.price}</h1>
                    <button className="recommendation-card-cta">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="blogs-section">
          <div className="blog-section-heading">
            <h1 className="section-heading">
              Our latest articles about travel
            </h1>
            <p className="section-description">
              Know the latest articles about travel
            </p>
          </div>
          <div className="blogs-cards-container">
            {blogs.map((blog) => (
              <div className="blog-cards">
                <img src={blog.image} alt="" />
                <div className="blog-card-overlay"></div>
                <div className="blog-card-content">
                  <h1>{blog.title}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="blog-section-cta">
            <button>Know more!</button>
          </div>
          <div className="mail-subscription-section">
            <div className="subscription-section-heading">
              <h1 className="section-heading subscription-section-heading">
                Subscribe to get the latest news about us!
              </h1>
              <p className="section-description  subscription-section-description">
                We Recomend you to subscribe, drop your mail below to get daily
                updates!
              </p>
            </div>
            <div className="subsciption-email-input">
              <MdEmail className="icon" size={30} />
              <input type="email" placeholder="Enter Your Mail Here...." />
              <button type="button" className="subsciption-email-input-button">
                Subscribe Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
