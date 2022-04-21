import { useEffect, useState } from 'react';

/**
 * Accepts a media query string then uses the matchMedia API to determine if it matches with the current document
 *
 * @param query media query string (e.g. `(min-width; 640px)`)
 * @returns `true` if query matches, otherwise `false`
 */
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!window || !window.matchMedia) {
      return undefined;
    }

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
