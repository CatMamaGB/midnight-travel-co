import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} The Midnight Travel Co. All rights reserved.</p>
        <nav>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/disclosures">Disclosures</Link>
          <Link href="/accessibility">Accessibility</Link>
        </nav>
      </div>
    </footer>
  );
}
