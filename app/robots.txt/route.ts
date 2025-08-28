export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://kr-thehand.com/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}