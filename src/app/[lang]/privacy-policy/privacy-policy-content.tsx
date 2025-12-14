"use client";

import { motion } from "framer-motion";

type Dictionary = typeof import("@/dictionaries/jp.json");

export default function PrivacyPolicyContent({ dictionary }: { dictionary: Dictionary }) {
  const { privacyPolicy } = dictionary;

  return (
    <main className="container mx-auto max-w-4xl px-6 lg:px-12 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            {privacyPolicy.title}
          </h1>

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                {privacyPolicy.intro}
              </p>
            </section>

            {privacyPolicy.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}

                {section.list && (
                  <ol className="list-decimal list-inside space-y-2 pl-4 mb-4">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )}

                {section.sublist && (
                  <ul className="list-disc list-inside pl-6 mt-2 space-y-1 mb-4">
                     {section.sublist.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="mb-2">{section.footer}</p>
                )}

                {section.footerList && (
                   <ol className="list-decimal list-inside space-y-2 pl-4">
                    {section.footerList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                )}
              </section>
            ))}

            <section>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="font-semibold">{privacyPolicy.companyInfo.name}</p>
                <p>{privacyPolicy.companyInfo.representative}</p>
                <p>{privacyPolicy.companyInfo.address}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
  );
}
