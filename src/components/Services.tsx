'use client';

import { motion, Variants } from "framer-motion";
import { services } from '@/lib/data/data';

const Services = () => {
    // Parent container controls stagger
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.35, // increased delay between each card
            },
        },
    };

    // Each card animation
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 80 }, // taller gap
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8, // slightly slower for smooth rise
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto text-center mt-16">
            <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                What I Offer
            </motion.h2>

            <motion.p
                className="text-muted-foreground mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
            >
                Building clean, responsive, and user-focused web experiences.
            </motion.p>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={cardVariants}
                        className={`group border border-border rounded-lg p-6 bg-card/50 hover:bg-accent/50 focus:bg-accent/50 transition-all hover:scale-[1.02] focus:scale-[1.02] shadow-sm hover:shadow-md ${service.id === 1 || service.id === 4
                                ? 'md:col-span-2'
                                : 'col-span-1'
                            }`}
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;