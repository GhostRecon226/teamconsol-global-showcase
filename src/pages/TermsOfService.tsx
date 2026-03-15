import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import teamConsolLogo from "@/assets/team-consol-logo.png";

const TermsOfService = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 15, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services provided by TeamConsol Global Shipping & Logistics ("TeamConsol," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              TeamConsol provides freight forwarding, customs clearance, door-to-door delivery, and related logistics services. All services are subject to availability, applicable regulations, and the terms outlined in individual service agreements or quotes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Quotes & Pricing</h2>
            <p className="text-muted-foreground leading-relaxed">
              All quotes provided are estimates and subject to change based on actual shipment details, weight, dimensions, and applicable surcharges. Final pricing will be confirmed upon booking. Quoted prices are valid for 30 days unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Shipment Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">As the shipper, you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Providing accurate and complete shipment information</li>
              <li>Proper packaging and labeling of all goods</li>
              <li>Ensuring compliance with all applicable export/import laws and regulations</li>
              <li>Declaring the accurate value of goods for customs and insurance purposes</li>
              <li>Obtaining any required permits, licenses, or documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Prohibited Items</h2>
            <p className="text-muted-foreground leading-relaxed">
              TeamConsol reserves the right to refuse shipments containing hazardous materials, illegal substances, perishable goods (unless agreed upon), weapons, or any items prohibited by applicable local or international laws. Shipping prohibited items may result in penalties and forfeiture of goods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Liability & Insurance</h2>
            <p className="text-muted-foreground leading-relaxed">
              TeamConsol's liability for loss or damage to goods is limited to the terms specified in the applicable carrier's bill of lading or air waybill. We strongly recommend purchasing additional cargo insurance for high-value shipments. TeamConsol is not liable for delays caused by customs, weather, or other circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment is due upon receipt of invoice unless otherwise agreed in writing. Late payments may incur interest charges. TeamConsol reserves the right to hold shipments until outstanding balances are settled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Cancellations & Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cancellations must be made in writing. Refund eligibility depends on the stage of shipment processing. Once cargo has been collected or shipped, cancellation fees may apply. Pre-paid services are non-refundable after service commencement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
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
            <Link to="/privacy" className="hover:text-foreground transition-colors underline">Privacy Policy</Link>
            <span className="text-foreground font-medium">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
