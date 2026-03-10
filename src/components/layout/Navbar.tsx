import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const routes = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 sm:gap-4">
                        <img src="/Jesip logo.jpeg" alt="JESIP Technology" className="h-12 sm:h-16 md:h-20 w-auto rounded-md shadow-sm" />
                        <div className="flex flex-col sm:flex-row sm:items-center font-black tracking-tight text-slate-900">
                            <span className="text-lg sm:text-2xl md:text-3xl leading-none">
                                JESIP <span className="text-primary hidden sm:inline">TECHNOLOGIES</span>
                            </span>
                            <span className="text-primary text-[11px] leading-tight sm:hidden mt-1">
                                TECHNOLOGIES
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                to={route.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    location.pathname === route.path ? "text-primary" : "text-slate-600"
                                )}
                            >
                                {route.name}
                            </Link>
                        ))}
                        <Button asChild className="ml-4">
                            <Link to="/contact">Get a Quote</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {routes.map((route) => (
                            <Link
                                key={route.path}
                                to={route.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary py-2",
                                    location.pathname === route.path ? "text-primary" : "text-slate-600"
                                )}
                            >
                                {route.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-2" onClick={() => setIsOpen(false)}>
                            <Link to="/contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
