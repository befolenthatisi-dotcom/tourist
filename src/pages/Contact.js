import EnquiryForm from "../components/EnquiryForm";

const travelTips = [
  { icon: "🛂", title: "Getting there", text: "Most visitors arrive by road from South Africa through border posts such as Maseru Bridge, or fly into Moshoeshoe I International Airport near Maseru." },
  { icon: "💰", title: "Money", text: "The currency is the Loti (M), which is on par with the South African Rand. Carry cash for small villages and remote areas." },
  { icon: "🧥", title: "What to pack", text: "Warm layers, even in summer, because the highlands get cold at night. Bring sturdy shoes and rain protection." },
  { icon: "🗓️", title: "Best time to visit", text: "Summer (November to March) for waterfalls and hiking, winter (June to August) for snow and skiing." },
];

function Contact() {
  return (
    <div className="page contact-page">
      <h1 className="page-title">Plan Your Visit</h1>
      <p className="contact-intro">
        Have a question about a destination or want help planning your trip?
        Fill in the form and we will get back to you.
      </p>

      <div className="contact-layout">
        <aside className="contact-info">
          <h2>Before You Visit</h2>
          <p className="contact-info-lead">
            A few quick tips to help you plan your trip to the Kingdom in the Sky.
          </p>

          <ul className="tips-list">
            {travelTips.map((tip) => (
              <li key={tip.title}>
                <span className="tip-icon">{tip.icon}</span>
                <div>
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="contact-details">
            <h4>Contact details</h4>
            <p>📧 info@explorelesotho.example</p>
            <p>📞 +266 5758 9668</p>
            <p>🕘 Monday to Friday, 8:00 to 17:00</p>
            <p>⏱️ We reply within 2 working days.</p>
          </div>
        </aside>

        <div className="contact-form-wrap">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;