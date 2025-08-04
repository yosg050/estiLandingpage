// app/netlify-form-detect/page.tsx
export const dynamic = "force-static";

export default function NetlifyFormDetectPage() {
  return (
    <form name="contact" method="POST" data-netlify="true" hidden>
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="tel" name="phone" />
      <textarea name="message"></textarea>
    </form>
  );
}
