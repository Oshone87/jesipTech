import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/JESIP HERO.jpeg")' }}
            >
                <div className="absolute inset-0 bg-slate-900/70" />
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-blue-300 border border-primary/30 text-sm font-medium mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
                        Excellence & Innovation
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Engineering the <br /><span className="text-primary font-bold text-blue-800">Future</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Technical excellence in professional engineering services for modern infrastructure, energy solutions, and industrial innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild className="text-base bg-blue-800 h-14 px-8">
                            <Link to="/services" className='text-white'>
                                Our Services 
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base h-14 px-8 border-white text-black hover:bg-white/90">
                            <Link to="/projects" className='bg-white'>View Projects</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
