import createNextIntlPlugin from 'next-intl/plugin';

// Le indicamos al plugin dónde está el archivo que acabamos de crear
const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

