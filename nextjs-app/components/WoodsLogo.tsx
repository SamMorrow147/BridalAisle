import Link from 'next/link';

export default function WoodsLogo({
  className = '',
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <span className={`woods-logo ${className}`.trim()}>
      <Link href="/mens-suits" className="woods-logo-mark" aria-label="The Woods Men's Suits" onClick={onClick}>
        <img
          src="/mens-suits/logo/the-woods-logo-on-dark.svg?v=final"
          alt=""
          width={2528}
          height={1964}
        />
      </Link>
      <Link href="/" className="woods-logo-byline" aria-label="Bridal Aisle" onClick={onClick} />
    </span>
  );
}
