import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users } from 'lucide-react';

export default function About() {
    const values = [
        { icon: Shield, title: "Integrity", desc: "Uncompromising ethics in everything we do." },
        { icon: Target, title: "Innovation", desc: "Creating solutions for tomorrow's challenges." },
        { icon: Users, title: "Collaboration", desc: "Working together to achieve common goals." },
        { icon: Award, title: "Quality", desc: "Exceeding industry standards consistently." }
    ];

    const timeline = [
        { year: 2025, title: "Company Founded", desc: "JESIP TECHNOLOGY LIMITED was established in Lagos with a focus on core mechanical engineering." },
        { year: 2026, title: "Strategic Expansion", desc: "Expanded services to encompass industrial HVAC systems and material handling design." },
        { year: 2027, title: "International Recognition", desc: "Secured structural fabrication contracts for major regional energy projects." },
        { year: 2028, title: "Tech Integration Hub", desc: "Launched our automated conveyor system modeling and unit division." }
    ];

    const team = [
        { name: "Mr Paul Igwoba", role: "Chief Executive Officer", desc: "20+ years expertise in structural design and urban planning.", image: "" },
        { name: "Sarah Jenkins", role: "Operations Director", desc: "Leading complex project execution and logistics management.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
        { name: "Marcus Thorne", role: "Technical Director", desc: "Specialist in industrial infrastructure and renewable energy systems.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
        { name: "Elena Rodriguez", role: "Finance Head", desc: "Managing investment strategies and fiscal sustainability.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" }
    ];

    return (
        <>
            <Helmet>
                <title>About Us - JESIP Technology</title>
                <meta name="description" content="Learn about JESIP Technology's mission, vision, and journey in engineering excellence." />
            </Helmet>

            {/* Hero */}
            <section className="bg-slate-900 py-24 text-center border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Excellence in Engineering & Technology</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            JESIP TECHNOLOGY LIMITED delivers world-class technical solutions with a commitment to innovation, safety, and sustainable development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
                            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Target className="text-primary h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To deliver innovative, cost-effective, and world-class engineering solutions that empower industries, optimize operations, and foster sustainable growth for our global clients.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
                            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="text-primary h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To be the leading global engineering partner recognized for technical excellence, unwavering integrity, and pioneering technological advancements in the industrial landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 text-center rounded-2xl shadow-sm border border-slate-100"
                            >
                                <div className="mx-auto w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <v.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-slate-600 text-sm">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
                        <p className="text-slate-600 mt-4">Milestones that define our legacy.</p>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="text-[10px] font-bold text-white">{item.year}</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
                            <p className="text-slate-600">Expert minds driving innovation across engineering disciplines.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative bg-slate-200">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                                <p className="text-slate-600 text-sm">{member.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
