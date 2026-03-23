import React from 'react'
import PhysicsFall from '@/components/about/PhysicsFall';
import StickyProcess from '@/components/about/StickyProcess';
import OurTeam from '@/components/about/OurTeam';
import MaskReveal from '@/components/common/MaskReveal';
import MaskAbout from '@/components/about/MaskAbout';

const page = () => {
    return (
        <div className='relative'>
            <div className="front-view">
                <PhysicsFall />
                <StickyProcess />
                <OurTeam />
            </div>
            <MaskReveal>
                <MaskAbout />
            </MaskReveal>
        </div>
    )
}

export default page