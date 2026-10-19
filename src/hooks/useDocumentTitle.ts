import { useEffect } from "react";

/**
 * Replaces Next.js `export const metadata` for client-side routes.
 * Sets <title> and <meta name="description"> while the page is mounted.
 */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}
