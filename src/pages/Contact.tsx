import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    service: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            // USING WEB3FORMS - No client login required!
            const formData = new FormData();

            // Web3Forms Access Key provided by client
            formData.append('access_key', '50f10237-88d0-43cd-8a32-9a95771cdb78');

            formData.append('name', `${data.firstName} ${data.lastName}`);
            formData.append('email', data.email);
            if (data.service) formData.append('service', data.service);
            formData.append('message', data.message);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An error occurred while sending the message. Please try again later.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - JESIP Technology</title>
                <meta name="description" content="Get in touch with JESIP Technology for your engineering project needs." />
            </Helmet>

            <section className="bg-slate-50 py-24">
                <div className="container mx-auto px-4 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Let's build the <span className="text-primary">future</span> together.
                        </h1>
                        <p className="text-lg text-slate-600">
                            Our team of expert engineers is ready to help you with your next project.
                            Reach out to us for professional consultation and support.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                        {/* Left Column: Contact Info */}
                        <div className="w-full lg:w-5/12 space-y-6">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Our Office</h3>
                                    <p className="text-slate-600">
                                        No 35 Unity Zone, Jakande Estate,<br />
                                        Oke Afa, Isolo, Lagos, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Phone</h3>
                                    <div className="text-slate-600 flex flex-col">
                                        <a href="tel:08115256049" className="hover:text-primary transition-colors">08115256049</a>
                                        <a href="tel:09031316694" className="hover:text-primary transition-colors">09031316694</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Email</h3>
                                    <a href="mailto:jesiptechnology@gmail.com" className="text-slate-600 hover:text-primary transition-colors">
                                        jesiptechnology@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="w-full lg:w-7/12">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                                <p className="text-slate-500 mb-8">We usually respond within 24 business hours.</p>

                                {isSubmitted && (
                                    <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                                        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                            <Send className="h-4 w-4" />
                                        </div>
                                        <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">First Name</label>
                                            <Input {...register('firstName')} placeholder="John" className={errors.firstName ? "border-red-500" : ""} />
                                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700">Last Name</label>
                                            <Input {...register('lastName')} placeholder="Doe" className={errors.lastName ? "border-red-500" : ""} />
                                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Work Email</label>
                                        <Input {...register('email')} type="email" placeholder="john@company.com" className={errors.email ? "border-red-500" : ""} />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Service Required (Optional)</label>
                                        <select
                                            {...register('service')}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="equipment-maintenance">Industrial Equipment Maintenance</option>
                                            <option value="welding-fabrication">Welding & Fabrication</option>
                                            <option value="hvac-refrigeration">HVAC & Refrigeration</option>
                                            <option value="conveyor-systems">Conveyor Systems</option>
                                            <option value="other">Other / General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Project Details</label>
                                        <Textarea
                                            {...register('message')}
                                            placeholder="Tell us more about your project needs..."
                                            className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                    </div>

                                    <Button type="submit" size="lg" className="w-full text-base h-12" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
