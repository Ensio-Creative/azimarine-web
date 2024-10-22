import React from 'react';
import FrontLayout from '@/app/layout/FrontLayout';
import Contact from '@/app/components/Contact';
import { services } from '@/utils/services';
import { stringToSlug } from '@/utils/stringtoslug';

// This function generates all possible params (slugs) for static generation
export async function generateStaticParams() {
  // Generate slugs from the services data
  const slugs = services.map(service => ({
    slug: stringToSlug(service.title),  // Convert the service title to slug
  }));

  // Return an array of params for dynamic routes
  return slugs;
}

// Main component (server component, no "use client")
const SingleService = ({ params }) => {
  const { slug } = params;

  // Find the matching service based on the slug
  const selectedService = services.find(service => stringToSlug(service.title) === slug);

  if (!selectedService) {
    return <p className="text-red-500">Service not found.</p>;
  }

  return (
    <FrontLayout>
      <div>
        <div className="lg:px-20 lg:py-32 sm:pb-20 sm:pt-28 px-4">
          <div>
            <p className="lg:text-5xl text-3xl lg:w-1/2 lg:mb-10 mb-6 font-bold text-blue text-left">
              {selectedService.title}
            </p>
            <img
              className="w-full lg:h-[550px] rounded-xl object-cover"
              src={`/images/services/${selectedService.img}.png`}
              alt={selectedService.title}
            />
            <div className="lg:w-[70%] lg:ml-auto mt-14">
              {selectedService.desc}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </FrontLayout>
  );
};

export default SingleService;
