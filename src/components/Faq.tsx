'use client'

import React, { useState } from 'react'
import { faqs } from './../lib/data/data';
import Card from './Card';
import { Minus, Plus } from 'lucide-react';

const Faqs = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section className='p-6 max-w-xl mx-auto mb-16'>
            <h1 className='mb-8 text-center'>Frequently Asked Questions</h1>
            <div className='space-y-4'>
                {faqs.map((faq) => (
                    <Card key={faq.id}>
                        <div className='p-2 transition-all duration-500 overflow-hidden'>
                            <button
                                onClick={() => setSelected(selected === faq.id ? null : faq.id)}
                                className='w-full flex items-start justify-between gap-6 cursor-pointer outline-0'
                            >
                                <span className='font-bold text-start'>{faq.question}</span>

                                <span
                                    className={`transition-transform duration-300 ${selected === faq.id ? 'rotate-180 text-primary' : 'rotate-0'
                                        }`}
                                >
                                    {selected === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 overflow-hidden ${selected === faq.id
                                    ? 'max-h-40 opacity-100 mt-3'
                                    : 'max-h-0 opacity-0 mt-0'
                                    }`}
                            >
                                <p className='text-sm text-muted-foreground max-w-[90%]'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Faqs
