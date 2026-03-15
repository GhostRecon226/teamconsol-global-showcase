import { useState } from "react";
import { Plane, Ship, Truck, ShieldCheck, Package, DollarSign, Clock, Mail, Phone, MapPin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <span className="text-lg font-bold text-foreground">Team<span className="text-primary">Consol</span></span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-foreground transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">
              Get a Quote
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden p-2 rounded-md hover:bg-accent transition-colors" aria-label="Open menu">
                <Menu className="w-6 h-6 text-foreground" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col gap-6 mt-10">
                  {navLinks.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                  >
                    Get a Quote
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-foreground">
              <span className="text-primary">Logistics</span> That Move<br /><span className="text-muted-foreground">Your Business</span>
            </h1>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                From first mile to last, we power every step of your supply chain with dependable air and sea freight solutions worldwide.
              </p>
              <a href="#contact" className="inline-flex items-center gap-1 text-primary font-semibold hover:opacity-80 transition-opacity w-fit">
                Get a quote <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img src={heroBg} alt="Global shipping operations" className="w-full h-[300px] md:h-[480px] object-cover" />
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="text-primary">★</span> 4.8 <span className="text-muted-foreground font-normal">(1200 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About TeamConsol</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            TeamConsol Global Shipping & Logistics is an international logistics company dedicated to providing seamless shipping solutions worldwide. We manage every step of the supply chain — from pickup and transportation to customs clearance and final delivery — ensuring your cargo reaches its destination safely, on time, and within budget.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20 bg-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Plane, title: "Air Freight", desc: "Fast international shipping for urgent cargo. We connect you to major destinations worldwide with reliable air freight solutions." },
              { icon: Ship, title: "Sea Freight", desc: "Cost-effective shipping solution for large or bulk cargo. Ideal for businesses looking to optimize logistics costs." },
              { icon: Truck, title: "Door-to-Door Delivery", desc: "Complete logistics service from pickup to final delivery. We handle everything so you don't have to." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Why Choose Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "Reliable Partners", desc: "Trusted logistics network across the globe." },
              { icon: Package, title: "Safe Handling", desc: "Your cargo is handled with the utmost care." },
              { icon: DollarSign, title: "Competitive Pricing", desc: "Affordable rates without compromising quality." },
              { icon: Clock, title: "Fast Response", desc: "Quick quotes and responsive customer support." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 md:py-20 bg-section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg mb-8">Ready to ship? Contact us for a free quote or any inquiries.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Mail, label: "Email", value: "info@teamconsol.com" },
              { icon: Phone, label: "Phone / WhatsApp", value: "+1 (800) 000-0000" },
              { icon: MapPin, label: "Office", value: "123 Logistics Ave, Suite 100" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground mb-1">{label}</span>
                <span className="text-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lg font-bold text-primary-foreground">
            Team<span className="text-primary">Consol</span> Global Shipping & Logistics
          </span>
          <div className="flex items-center justify-center gap-6 mt-3 text-sm text-primary-foreground/60">
            <span>info@teamconsol.com</span>
            <span>+1 (800) 000-0000</span>
          </div>
          <p className="text-primary-foreground/40 text-xs mt-4">
            © {new Date().getFullYear()} TeamConsol Global Shipping & Logistics. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/18000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-primary-foreground">
          <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.825.737 5.58 2.137 8.012L.003 32l8.208-2.15A15.94 15.94 0 0016.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.297a13.26 13.26 0 01-6.76-1.849l-.485-.288-5.03 1.319 1.342-4.9-.316-.503A13.2 13.2 0 012.7 16c0-7.34 5.964-13.297 13.304-13.297S29.3 8.66 29.3 16s-5.956 13.297-13.296 13.297zm7.298-9.96c-.4-.2-2.367-1.168-2.734-1.3-.367-.134-.634-.2-.9.2-.267.4-1.034 1.3-1.267 1.567-.234.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.062-1.994-2.374-2.228-2.774-.234-.4-.025-.617.175-.816.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.234-2.967-.325-.78-.656-.674-.9-.687l-.767-.013c-.267 0-.7.1-1.067.5s-1.4 1.367-1.4 3.334 1.433 3.867 1.633 4.134c.2.267 2.823 4.31 6.84 6.044.956.412 1.702.658 2.284.843.96.305 1.833.262 2.523.159.77-.115 2.367-.968 2.7-1.903.334-.934.334-1.734.234-1.903-.1-.167-.367-.267-.767-.467z" />
        </svg>
      </a>
    </div>
  );
};

export default Index;