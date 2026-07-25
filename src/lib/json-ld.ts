/**
 * Safely serialize a JSON-LD object for embedding inside a
 * <script type="application/ld+json"> via dangerouslySetInnerHTML.
 *
 * JSON.stringify does NOT escape "<", so a value containing "</script>"
 * (e.g. an attacker-influenced title) would close the script tag early and
 * allow markup injection. We rewrite the dangerous characters to their
 * \uXXXX JSON escapes: valid JSON (parsers read them back as the original
 * character) that the HTML parser can never mistake for a tag boundary.
 * U+2028 / U+2029 are escaped too — legal in JSON, but JS line terminators.
 */
const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

const ESCAPES: Record<string, string> = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  [LS]: "\\u2028",
  [PS]: "\\u2029",
};

const DANGEROUS = new RegExp(`[<>&${LS}${PS}]`, "g");

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(DANGEROUS, (c) => ESCAPES[c]);
}
