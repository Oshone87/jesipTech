import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111827] text-gray-300">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-4 mb-6">
                            <img src="/Jesip logo.jpeg" alt="JESIP Technology" className="h-16 md:h-20 w-auto rounded-md bg-white p-1" />
                            <span className="font-black text-2xl md:text-3xl tracking-tight text-white">
                                JESIP <span className="text-primary">TECH</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Leading provider of integrated engineering solutions and technical consultancy for industrial and civil sectors.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Equipment Maintenance</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Welding & Fabrication</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">HVAC Systems</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Conveyor Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>No 35 Unity Zone, Jakande Estate, Oke Afa, Isolo, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <div className="flex flex-col">
                                    <span>08115256049</span>
                                    <span>09031316694</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:jesiptechnology@gmail.com" className="hover:text-primary transition-colors">
                                    jesiptechnology@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} JESIP TECHNOLOGY LIMITED. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
