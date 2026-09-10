import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Rolex/Apple-style section storytelling — matches the Home hero's feel:
 * a continuous, clearly-felt scale/fade/drift driven by scroll across
 * MOST of the section's time in the viewport, with only a short
 * fully-sharp beat at the center for readability (not a long static
 * plateau). One unified timeline (never two independent tweens on the
 * same properties — those fight each other every scroll frame).
 * Applied to an INNER wrapper (never the section element itself) so it
 * never touches an ancestor's `background-attachment: fixed` parallax.
 */
export default function useSectionReveal(ref, options = {}) {
  const {
    fromScale = 0.86,
    toScale = 0.9,
    blur = 7,
    fromY = 6,
    toY = -6,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        el,
        {
          opacity: 0.2,
          scale: fromScale,
          yPercent: fromY,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          filter: "blur(0px)",
          ease: "power1.out",
          duration: 2,
        }
      )
        .to(el, {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "none",
        })
        .to(el, {
          opacity: 0.25,
          scale: toScale,
          yPercent: toY,
          filter: `blur(${Math.max(3, blur - 2)}px)`,
          ease: "power1.in",
          duration: 2,
        });

      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [ref, fromScale, toScale, blur, fromY, toY]);
}
