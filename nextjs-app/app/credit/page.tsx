import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Credit | Bridal Aisle Boutique',
  description: 'Photography credits for the Bridal Aisle Boutique website. Thank you to our talented photographers.',
  alternates: {
    canonical: '/credit',
  },
};

export default function PhotoCreditPage() {
  const photographersColumn1 = [
    'Mel Morris Photography',
    'Jennas Photo journal',
    'Jypsie Soul Events and Photos',
    'Kallie Ann Photography',
    'Forever and Evergreens',
    'Nikayla & Co.',
    'Maisong Francis Photography',
    'Prairie Smoke Photography',
    'Cameron and Tia Weddings'
  ];
  
  const photographersColumn2 = [
    'Sarah Grace Photography',
    'Jen Jarmuzek Photography',
    'Ethan Hanes Photography',
    'Lauren Baker Photography',
    'Emma Halet Photography',
    'Codee Rose Photography',
    'Eric Vest Photography',
    'Tiffany Joann Photo',
    'Melissa Otto Photography',
    'Carly Mac Photography'
  ];

  return (
    <main className="page-container">
      <section className="content-section centered" style={{ padding: '8rem 3rem', background: '#f4f6f4' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Site Photography Credit</h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '4rem 8rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <div>
            {photographersColumn1.map((photographer, index) => (
              <h2 key={index} style={{ 
                fontSize: '1.125rem', 
                marginBottom: '0.5rem', 
                color: '#2f3233',
                fontWeight: 400,
                lineHeight: 1.4
              }}>
                {photographer}
              </h2>
            ))}
          </div>
          
          <div>
            {photographersColumn2.map((photographer, index) => (
              <h2 key={index} style={{ 
                fontSize: '1.125rem', 
                marginBottom: '0.5rem', 
                color: '#2f3233',
                fontWeight: 400,
                lineHeight: 1.4
              }}>
                {photographer}
              </h2>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

