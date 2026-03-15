import { useState } from "react";
import { Plane, Ship, Truck, ShieldCheck, Package, DollarSign, Clock, Mail, Phone, MapPin, Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAirFreight from "@/assets/service-air-freight.jpg";
import serviceSeaFreight from "@/assets/service-sea-freight.jpg";
import serviceDoorToDoor from "@/assets/service-door-to-door.jpg";
import serviceCustoms from "@/assets/service-customs.jpg";
import aboutMain from "@/assets/about-main.jpg";
import aboutDelivery from "@/assets/about-delivery.jpg";
import aboutWarehouse from "@/assets/about-warehouse.jpg";

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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold uppercase tracking-wide">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Delivering your goods efficiently, no matter the distance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                From local deliveries to long-distance shipments, we ensure your goods reach their destination safely and on time.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our reliable last mile delivery solutions combine speed, precision, and care, so you can focus on your business while we handle the logistics.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get a Quote
                <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                </span>
              </a>
            </div>

            {/* Right: Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[480px]">
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img src={aboutMain} alt="Warehouse operations" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutDelivery} alt="Door-to-door delivery" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutWarehouse} alt="Warehouse team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="why-us" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Package className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Our Services</span>
          </div>

          {/* Header row */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 md:gap-10 mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Discover The Full Range Of Services We Offer For Shipping
            </h2>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-muted-foreground leading-relaxed">
                Logistics Services Include Freight Forwarding, Warehousing, Customs Clearance, And Transportation. These Services Help Businesses Move Their Products And Materials Through The Supply Chain.
              </p>
              <a href="#services" className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors w-fit">
                <span className="w-8 h-8 border border-primary rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </span>
                View All Services
              </a>
            </div>
          </div>

          {/* 2x2 Card Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { img: serviceAirFreight, title: "Air Freight" },
              { img: serviceSeaFreight, title: "Sea Freight" },
              { img: serviceDoorToDoor, title: "Door-to-Door Delivery" },
              { img: serviceCustoms, title: "Customs Clearance" },
            ].map(({ img, title }) => (
              <div key={title} className="group bg-secondary rounded-xl overflow-hidden">
                <div className="overflow-hidden rounded-xl m-2">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-52 md:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <span className="w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us-stats" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Why Choose Us</span>
          </div>

          {/* Header row */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 md:gap-10 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Trusted By Businesses Across The Globe
            </h2>
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed">
                We combine speed, reliability, and transparency to deliver a logistics experience that keeps your supply chain running smoothly — every single time.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "120+", label: "Countries Served" },
              { value: "50K+", label: "Shipments Delivered" },
              { value: "99%", label: "On-Time Delivery" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-secondary rounded-2xl p-6 md:p-8 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{value}</p>
                <p className="text-sm text-muted-foreground font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "Fast & Reliable", desc: "Strict timelines with real-time tracking so you always know where your cargo is." },
              { icon: ShieldCheck, title: "Fully Insured", desc: "Every shipment is covered with comprehensive cargo insurance for your peace of mind." },
              { icon: DollarSign, title: "Competitive Pricing", desc: "Transparent rates with no hidden fees — get the best value for your logistics spend." },
              { icon: Package, title: "End-to-End Service", desc: "From pickup to final delivery, we handle every step of your supply chain." },
              { icon: Ship, title: "Global Network", desc: "A trusted network of partners across 120+ countries ensures seamless worldwide coverage." },
              { icon: Plane, title: "Express Options", desc: "Need it fast? Our priority air freight gets your cargo there in record time." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-secondary rounded-2xl p-6 hover:bg-foreground transition-colors duration-300">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary-foreground/70 transition-colors">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Get In Touch</span>
          </div>

          {/* Header row */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 md:gap-10 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Let's Move Your Business Forward
            </h2>
            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed">
                Ready to ship? Reach out for a free quote or any inquiries. Our team is available around the clock to support your logistics needs.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-5">
            {/* Contact cards */}
            <div className="flex flex-col gap-5">
              {[
                { icon: Mail, label: "Email Us", value: "info@teamconsol.com", desc: "We respond within 24 hours" },
                { icon: Phone, label: "Call / WhatsApp", value: "+1 (800) 000-0000", desc: "Available Mon–Sat, 8am–6pm" },
                { icon: MapPin, label: "Visit Our Office", value: "123 Logistics Ave, Suite 100", desc: "Walk-ins welcome" },
              ].map(({ icon: Icon, label, value, desc }) => (
                <div key={label} className="group bg-secondary rounded-2xl p-5 flex items-start gap-4 hover:bg-foreground transition-colors duration-300">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-0.5 group-hover:text-primary-foreground transition-colors">{label}</h3>
                    <p className="text-base font-semibold text-foreground group-hover:text-primary-foreground transition-colors">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1 group-hover:text-primary-foreground/60 transition-colors">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="relative rounded-2xl overflow-hidden bg-foreground p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to ship worldwide?
                </h3>
                <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-md mb-8">
                  Join hundreds of businesses that trust TeamConsol for reliable, fast, and affordable logistics solutions.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/18000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get a Quote
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@teamconsol.com"
                  className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Send an Email
                </a>
              </div>
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-section py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl border p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
              {/* Brand + Social */}
              <div className="max-w-sm">
                <span className="text-lg font-bold text-foreground">
                  Team<span className="text-primary">Consol</span>
                </span>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  TeamConsol empowers businesses with seamless global shipping and logistics — making international trade easier, faster, and more affordable.
                </p>
                <div className="flex items-center gap-4 mt-5">
                  {/* X */}
                  <a href="#" aria-label="X" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-8 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>info@teamconsol.com</li>
                    <li>+1 (800) 000-0000</li>
                    <li>123 Logistics Ave, Suite 100</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
                    <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
                    <li><a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a></li>
                    <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <p>© {new Date().getFullYear()} TeamConsol Global Shipping & Logistics. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-foreground transition-colors underline">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors underline">Terms of Service</a>
              </div>
            </div>
          </div>
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