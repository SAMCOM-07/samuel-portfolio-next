'use client'

import React, { useState } from 'react'
import { faqs } from './../lib/data/data';
import Card from './Card';
import { Minus, Plus } from 'lucide-react';


const Faqs = () => {

    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section className='p-6 max-w-xl mx-auto'>
            <h1 className='mb-8 mt-24 text-center'>Frequently Asked Questions</h1>
            <div className='space-y-4'>
                {
                    faqs.map((faq) =>
                        <Card key={faq.id}>
                            <div className={`p-2 transition-all duration-500 overflow-hidden`}>
                                <button onClick={() => setSelected(selected === faq.id ? null : faq.id)}
                                    className='w-full flex items-start justify-between gap-6 cursor-pointer outline-0'>
                                    <span className='font-bold text-start'>{faq.question}</span>
                                    {selected === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                                </button>


                                {selected === faq.id &&
                                    <p className={`text-sm text-muted-foreground max-w-[90%]  mt-3`}>{faq.answer}</p>
                                }

                            </div>
                        </Card>
                    )
                }
            </div>
        </section>
    )
}

export default Faqs
