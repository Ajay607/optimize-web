import imgLarge from "../../../public/largeHeroImg/imgLargeOptmize.webp"

const OptimizeImg = () => {
  return (
    <div>
      <h1>Welcome to the CLS + LCP Demo</h1>

      {/* ❌ No width/height = potential CLS */}
      <img
  src={imgLarge}
  alt="Hero"
  width={1200}
  height={675}
  loading="eager" // only for hero images
  decoding="async"
/>


      {/* Simulated content */}
      <div style={{ padding: '1rem' }}>
        <section>
          <h2>Section 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel sapien eget leo dapibus rutrum.</p>
        </section>

        <section>
          <h2>Section 2</h2>
         <img
  src={imgLarge}
  alt="Another"
  width={800}
  height={450}
  loading="lazy"
  decoding="async"
/>

          <p>This is another section with an image to test cumulative layout shift.</p>
        </section>

        <section>
          <h2>Section 3</h2>
          <p>Repeat this section to simulate scrolling:</p>
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>Content block #{i + 1}: This adds scroll and makes image loading more noticeable.</p>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OptimizeImg;
