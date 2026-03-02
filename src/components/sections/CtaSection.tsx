import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CtaSection() {
    return (
        <section className="py-24 bg-[#111827] text-gray-300 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="bg-primary rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl overflow-hidden relative">

                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>

                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to start your next project?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10">
                            Our multidisciplinary team is ready to provide the technical expertise and management required for your industrial success.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild className="text-black font-bold bg-white hover:bg-slate-100 h-14 px-8 text-base">
                                <Link to="/contact">Schedule Consultation</Link>
                            </Button>
                            <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800 text-white border-transparent h-14 px-8 text-base shadow-lg">
                                <Link to="/contact">Contact Support</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
