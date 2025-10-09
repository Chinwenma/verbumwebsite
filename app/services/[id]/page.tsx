
import PageBanner from "@/app/components/pagebanner/PageBanner";
import { servicess } from "@/app/constants/Constant";
import Image from "next/image";
import Link from "next/link";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicess.find((item) => item.id === Number(id));

  if (!service) {
    return <div className="text-center py-20">Program not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <PageBanner
        title={service.title}
        subtitle="Learn more about our mission and values"
        backgroundImage="/assets/a1fiy-v6plo.avif"
      />

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed break-words">
           <Link
        href="/services"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Blogs
      </Link>
          <div className="w-full mx-auto mb-6">
            {" "}
            <Image
              src="/assets/hero-img.jpg"
              alt="h"
              height={200}
              width={200}
              className="w-full h-72 object-cover rounded"
            />
          </div>{" "}
          {service.body ? (
            service.body.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed tracking-wider text-justify">
                {para}
              </p>
            ))
          ) : (
            <p>More details about this program will be added soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}