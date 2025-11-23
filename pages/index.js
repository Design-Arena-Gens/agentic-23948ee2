import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const menuItems = [
  {
    category: 'Signature',
    title: 'Velvet Mocha Bliss',
    description:
      'Decadent dark chocolate folded into velvety espresso, finished with steamed cream and a dusting of cocoa.',
    price: '$6.50',
  },
  {
    category: 'Classics',
    title: 'Artisan Flat White',
    description:
      'Precision-pulled double ristretto shots delicately layered beneath micro-foamed milk for a silk-smooth finish.',
    price: '$4.80',
  },
  {
    category: 'Brew Bar',
    title: 'Single Origin Pour Over',
    description:
      'Hand-poured seasonal single origin beans, highlighting origin terroir with vibrant tasting notes.',
    price: '$5.90',
  },
  {
    category: 'Iced',
    title: 'Amber Cold Brew Tonic',
    description:
      '24-hour cold brew married with sparkling citrus tonic, served over crafted ice for a refreshing lift.',
    price: '$5.60',
  },
];

const experienceHighlights = [
  {
    icon: '☕',
    title: 'Curated Roasts',
    description:
      'Small-batch beans sourced from sustainable farms, roasted in-house for peak flavor expression.',
  },
  {
    icon: '🎵',
    title: 'Immersive Ambience',
    description:
      'Warm lighting, soft jazz, and the aroma of fresh grounds create a sanctuary from the city rush.',
  },
  {
    icon: '🥐',
    title: 'Gourmet Pairings',
    description:
      'Daily baked pastries and artisan bites crafted to complement our beverage portfolio perfectly.',
  },
  {
    icon: '🤎',
    title: 'Community Hub',
    description:
      'Work, connect, or unwind—Bean Scene welcomes every moment with heartfelt hospitality.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Bean Scene | Coffee Crafted to Perfection</title>
        <meta
          name="description"
          content="Experience the artistry of specialty coffee at Bean Scene. Discover curated roasts, crafted brews, and a warm gathering space."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <nav className={styles.navBar}>
            <a href="#home" className={styles.logo}>
              Bean Scene
            </a>
            <div className={styles.navLinks}>
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className={styles.authGroup}>
              <a className={styles.signIn} href="#sign-in">
                Sign In
              </a>
              <a className={styles.signUp} href="#sign-up">
                Sign Up
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section id="home" className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>since 2004</span>
              <h1 className={styles.heroTitle}>
                We&apos;ve got your morning covered with
                <span>Coffee</span>
              </h1>
              <p className={styles.heroDescription}>
                From the first grind at dawn to the last pour at dusk, Bean Scene is dedicated to crafting
                extraordinary coffee moments. Our beans are ethically sourced, masterfully roasted, and brewed with
                soul—delivering warmth in every sip.
              </p>
              <div className={styles.heroActions}>
                <a href="#menu" className={styles.primaryButton}>
                  Explore Our Menu
                </a>
                <a href="#about" className={styles.secondaryButton}>
                  Discover Our Story
                </a>
              </div>
            </div>
          </section>

          <section id="menu">
            <div className={styles.coffeeDivider} />
            <h2 className={styles.sectionTitle}>Signature Offerings</h2>
            <p className={styles.sectionSubtitle}>
              Crafted by expert baristas, our menu celebrates the artistry of coffee with carefully balanced flavors,
              hand-selected ingredients, and indulgent textures.
            </p>
            <div className={styles.menuGrid}>
              {menuItems.map((item) => (
                <article key={item.title} className={styles.menuCard}>
                  <p className={styles.menuCategory}>{item.category}</p>
                  <h3 className={styles.menuTitle}>{item.title}</h3>
                  <p className={styles.menuDescription}>{item.description}</p>
                  <span className={styles.menuPrice}>{item.price}</span>
                </article>
              ))}
            </div>
          </section>

          <section id="about">
            <div className={styles.coffeeDivider} />
            <div className={styles.aboutSection}>
              <div className={styles.aboutImage}>
                <Image
                  src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=1200&q=80"
                  alt="Barista pouring latte art at Bean Scene coffee bar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={styles.aboutContent}>
                <h3>Every Cup Tells a Story</h3>
                <p>
                  At Bean Scene, we believe coffee is a ritual worth savoring. Our roastery partners work directly with
                  growers to bring the finest beans to our brew bar. Each sip is an invitation to slow down and savor the
                  craftsmanship of passionate baristas.
                </p>
                <ul className={styles.aboutHighlights}>
                  <li>
                    <span className={styles.highlightBadge}>01</span>
                    Farm-to-cup traceability with fair trade partners across Colombia, Ethiopia, and Sumatra.
                  </li>
                  <li>
                    <span className={styles.highlightBadge}>02</span>
                    Seasonal tasting flights and cupping events hosted weekly in our brew lab.
                  </li>
                  <li>
                    <span className={styles.highlightBadge}>03</span>
                    Bespoke coffee subscriptions tailored to your flavor profile and brewing style.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.coffeeDivider} />
            <div className={styles.experienceSection}>
              {experienceHighlights.map((perk) => (
                <article key={perk.title} className={styles.experienceCard}>
                  <span className={styles.experienceIcon} aria-hidden="true">
                    {perk.icon}
                  </span>
                  <h4>{perk.title}</h4>
                  <p>{perk.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact">
            <div className={styles.coffeeDivider} />
            <div className={styles.contactSection}>
              <div className={styles.contactContent}>
                <div className={styles.contactDetails}>
                  <h3>Visit Bean Scene</h3>
                  <p>123 Brewlane Avenue, Portland</p>
                  <p>Open daily from 6:30 AM until the last evening pour.</p>
                  <div className={styles.contactHours}>
                    <strong>Weekdays:</strong> 6:30 AM – 9:00 PM
                    <br />
                    <strong>Weekends:</strong> 7:00 AM – 10:00 PM
                  </div>
                </div>
                <form className={styles.contactForm} autoComplete="off">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Let us know how we can brew something special." />
                  </div>
                  <button type="submit" className={styles.primaryButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Bean Scene. Crafted with passion and poured with heart.
        </footer>
      </div>
    </>
  );
}
