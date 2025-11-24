import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image 
              src="/Forteen_Logo_.svg" 
              alt="Forteen Consulting" 
              width={180}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transforming professionals into leaders through comprehensive training and development programs.
            </p>
            <p className="text-gray-400">
              <strong>Great people. Great outcomes.</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-orange-500 transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bengaluru, India</li>
              <li>
                <a href="mailto:info@forteen.in" className="hover:text-orange-500 transition">
                  info@forteen.in
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/forteen.consulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                >
                  @forteen.consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Forteen Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
