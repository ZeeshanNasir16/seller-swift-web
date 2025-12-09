export default function buildMailto(
  to: string,
  opts?: { subject?: string; body?: string }
) {
  const p = new URLSearchParams();
  if (opts?.subject) p.set('subject', opts.subject);
  if (opts?.body) p.set('body', opts.body);
  return `mailto:${to}${p.toString() ? `?${p.toString()}` : ''}`;
}
