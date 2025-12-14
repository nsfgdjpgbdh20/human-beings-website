import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Navigation } from "@/components/navigation";

// Since this is a server component, we can fetch data directly.
// However, to use framer-motion, we need a client component wrapper or import specifically.
// The original code was "use client". Let's convert the main page to server to fetch dict,
// but keep the motion parts in a client component or use simple client wrapping.
// Actually, easier pattern: Make this a server component, fetch dictionary,
// and pass it to a client component that renders the UI.

// Let's create a client wrapper for the content part to keep animations working.
import PrivacyPolicyContent from "./privacy-policy-content";

export default async function PrivacyPolicyPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header - Shared Navigation */}
      <Navigation dictionary={dictionary.navigation} lang={params.lang} />

      {/* Main Content */}
      <PrivacyPolicyContent dictionary={dictionary} />

      {/* Footer - Replicated from Home Page or simplified */}
      <footer className="relative border-t border-gray-300/60 bg-white/80 py-12">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm tracking-[0.35em] text-gray-500">
            {dictionary.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
