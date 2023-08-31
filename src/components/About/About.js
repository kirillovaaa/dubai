import React from "react";
import "./About.css";
import video from "../../images/video.png";
import apart from "../../images/apart.png";
import apart2 from "../../images/apart2.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <button className="about__button">Our expertise</button>
        <h1 className="about__title">
          "The best apartment in Dubai" we will find your dream
        </h1>
        <p className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta
          volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec
          viverra orci tristique vel. In efficitur vehicula magna, varius
          pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus
          in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin.
          Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor.
          Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa.
          Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec
          neque vitae dolor dapibus elementum. Maecenas nec orci quis sem
          condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <img src={video} className="about__image" alt="video" />
      <p className="aboute__quote">
        “Don’t limit yourself. Many people limit themselves to what they think
        they can do. You can go as far as your mind lets you. What you believe,
        remember, you can achieve.”
        <span class="colortext"> — Mary Kay Ash</span>
      </p>
      <div className="about__apartment">
        <div className="about__apartment-container">
          <img src={apart} className="about__apartment-image" alt="apart" />
          <p className="about__apartment-description">
            Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis.
            Pellentesque augue elit, rutrum sit amet commodo vel, porta quis
            purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet
            purus, sit amet pellentesque neque est id tortor. In egestas, erat a
            dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec
            tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc,
            feugiat placerat urna rutrum eget. Nullam mattis justo consequat
            risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin
            at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque
            accumsan pretium tincidunt. Etiam viverra ultrices est vitae
            suscipit. Pellentesque elementum purus non nisl pharetra consequat.
            Nunc in venenatis orci.
          </p>
        </div>
        <div className="about__apartment-container">
          <img src={apart2} className="about__apartment-image" alt="apart" />
          <p className="about__apartment-description">
            Vivamus non diam vel lorem efficitur mattis in gravida ante. Ut
            ullamcorper dapibus ante, eu tincidunt orci feugiat vel. Curabitur
            eget lectus lectus. Pellentesque malesuada, felis at accumsan
            interdum, nisl mi fermentum est, eu suscipit dui lorem a dui.
            Aliquam rhoncus risus in leo vestibulum efficitur. Suspendisse
            tortor quam, faucibus a lacinia a, bibendum vitae quam. Suspen disse
            et metus et orci rutrum dictum eu eu nibh. Suspendisse blandit in
            diam in rhoncus. Nam volutpat hendrerit enim, sed aliquet quam
            gravida at. Nullam dictum sagittis nisi, eu porta sem mollis eu.
            Nulla faucibus sed ipsum sed sodales. Curabitur varius iaculis
            felis, in aliquet sem suscipit quis. Ut vulputate, magna ac bibendum
            elementum, nulla magna tincidunt urna, a venenatis dolor arcu sed
            leo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
