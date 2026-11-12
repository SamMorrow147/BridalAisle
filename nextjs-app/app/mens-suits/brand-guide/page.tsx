import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Woods Brand Guide",
  description: "Internal brand guide for The Woods at Bridal Aisle. Not linked from the public site.",
  robots: { index: false, follow: false },
};

const COLORS = [
  { name: 'Forest', hex: '#24362C', use: 'Page background, header, buttons' },
  { name: 'Bone', hex: '#F1EADF', use: 'Wordmark, text on dark' },
  { name: 'Brass', hex: '#A99A6F', use: "Men's Suits line, rules, labels" },
  { name: 'Walnut', hex: '#57402F', use: 'Rent section' },
];

const MULTI_COLOR = [
  {
    name: 'Dark backgrounds',
    detail: 'Bone and brass',
    file: 'the-woods-logo-on-dark',
    png: 'bone-brass',
    well: 'dark',
  },
  {
    name: 'Light backgrounds',
    detail: 'Forest and walnut',
    file: 'the-woods-logo-on-light',
    png: 'forest-walnut',
    well: 'light',
  },
];

const SOLID = [
  { name: 'Bone', hex: '#F1EADF', file: 'the-woods-logo-solid-bone', png: 'bone', well: 'dark' },
  { name: 'Brass', hex: '#A99A6F', file: 'the-woods-logo-solid-brass', png: 'brass', well: 'dark' },
  { name: 'Forest', hex: '#24362C', file: 'the-woods-logo-solid-forest', png: 'forest', well: 'light' },
  { name: 'Walnut', hex: '#57402F', file: 'the-woods-logo-solid-walnut', png: 'walnut', well: 'light' },
];

function LogoFile({
  name,
  detail,
  file,
  png,
  well,
}: {
  name: string;
  detail: string;
  file: string;
  png: string;
  well: string;
}) {
  return (
    <figure>
      <div className={`woods-guide-download-preview woods-guide-download-${well}`}>
        <img
          src={`/mens-suits/logo/${file}.svg?v=final`}
          alt={`${name} Woods lockup`}
          width={2528}
          height={1964}
        />
      </div>
      <figcaption>
        {name}
        <span>{detail}</span>
      </figcaption>
      <div className="woods-guide-download-links">
        <a href={`/mens-suits/logo/${file}.svg?v=final`} download>SVG</a>
        <a href={`/mens-suits/logo/png/${png}.png?v=colors`} download>PNG</a>
      </div>
    </figure>
  );
}

export default function WoodsBrandGuidePage() {
  return (
    <main className="woods-guide">
      <div className="woods-guide-inner">
        <h1>The Woods brand guide</h1>

        <section>
          <h2>Lockup</h2>
          <p>
            Trees, then The Woods, then Men&apos;s Suits, then by Bridal Aisle. Header, footer, and the phone menu use the multi-color mark on dark. Files are transparent.
          </p>

          <div className="woods-guide-download-links woods-guide-download-all">
            <a href="/mens-suits/logo/the-woods-logos-svg.zip" download>Download all SVG</a>
            <a href="/mens-suits/logo/the-woods-logos-png.zip" download>Download all PNG</a>
          </div>

          <h3 className="woods-guide-download-heading">Multi-color</h3>
          <div className="woods-guide-downloads">
            {MULTI_COLOR.map((logo) => (
              <LogoFile key={logo.file} {...logo} />
            ))}
          </div>

          <h3 className="woods-guide-download-heading">Solid</h3>
          <div className="woods-guide-downloads">
            {SOLID.map((logo) => (
              <LogoFile key={logo.file} {...logo} detail={logo.hex} />
            ))}
          </div>

          <div className="woods-guide-rules">
            <div>
              <h3>Use</h3>
              <ul>
                <li>Multi-color on the site: bone and brass on forest or walnut.</li>
                <li>Multi-color on bone or white: forest trees, walnut name, lines, and small type.</li>
                <li>A solid file when the whole mark has to be one ink.</li>
                <li>Bone and brass solids on dark. Forest and walnut solids on light.</li>
              </ul>
            </div>
            <div>
              <h3>Leave out</h3>
              <ul>
                <li>Suits on its own, or A department of Bridal Aisle.</li>
                <li>Men&apos;s Suits beside The Woods instead of under it.</li>
                <li>The trees without the words.</li>
                <li>Colors outside this set.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Color</h2>
          <ul className="woods-guide-swatches">
            {COLORS.map((color) => (
              <li key={color.hex}>
                <span className="woods-guide-chip" style={{ background: color.hex }} />
                <span className="woods-guide-swatch-name">{color.name}</span>
                <span className="woods-guide-hex">{color.hex}</span>
                <span className="woods-guide-use">{color.use}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
