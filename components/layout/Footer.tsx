import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Links Section */}
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Digital Service</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meet your needs with trusted service providers.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">For Users</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/search" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Search Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/request/create" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Create Request
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">For Providers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/provider-dashboard" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Provider Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/provider-dashboard/profile" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Profile Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Service Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
