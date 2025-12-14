import { getDictionary } from '../../get-dictionary';
import { HomePage } from '@/components/home-page';
import { Locale } from '../../i18n-config';

export default async function Page(props: { params: Promise<{ lang: Locale }> }) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <HomePage dictionary={dictionary} lang={params.lang} />;
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [{ lang: 'jp' }, { lang: 'en' }];
}
