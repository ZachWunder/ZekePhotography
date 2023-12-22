export default function ({ src, width, quality }) {
  const url = new URL(src);

  // Assuming src is the path to your image without the domain
  // Replace 'your_account_hash' with your actual Cloudflare account hash
  const cloudflareDomain = "https://imagedelivery.net";
  // Construct the Cloudflare URL
  let cloudflareURL = `${cloudflareDomain}/${url.pathname}?width=${width}`;

  // Optionally add quality parameter if needed
  if (quality) {
    cloudflareURL += `&quality=${quality}`;
  }

  return cloudflareURL;
}
