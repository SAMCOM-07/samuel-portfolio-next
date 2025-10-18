import { services } from '@/lib/data/data'
import React from 'react'

const Services = () => {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
            <p className="text-muted-foreground mb-12">
                Building clean, responsive, and user-focused web experiences.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group border border-border rounded-lg p-6 bg-card/50 hover:bg-accent/50 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md ${service.id === 1 || service.id === 4 ? 'md:col-span-2' : 'col-span-1'}`}
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Services
