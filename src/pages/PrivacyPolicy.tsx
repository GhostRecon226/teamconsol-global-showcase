import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import teamConsolLogo from "@/assets/team-consol-logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto flex items-center py-3 px-4">
          <Link to="/">
            <img src={teamConsolLogo} alt="TeamConsol Global Shipping & Logistics" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 15, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you request a quote, contact us via email or phone, or interact with our services. This may include your name, email address, phone number, company name, shipping details, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process and manage your shipments and logistics requests</li>
              <li>Communicate with you about our services, quotes, and updates</li>
              <li>Improve and optimize our services and customer experience</li>
              <li>Comply with legal obligations and industry regulations</li>
              <li>Prevent fraud and ensure the security of our operations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners, carriers, and customs authorities as necessary to fulfill your shipment and logistics needs. We may also disclose information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at{" "}
              <a href="mailto:info@teamconsol.com" className="text-primary hover:underline">info@teamconsol.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@teamconsol.com" className="text-primary hover:underline">info@teamconsol.com</a>{" "}
              or call us at <a href="tel:+18000000000" className="text-primary hover:underline">+1 (800) 000-0000</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TeamConsol Global Shipping & Logistics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-foreground font-medium">Privacy Policy</span>
            <Link to="/terms" className="hover:text-foreground transition-colors underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
