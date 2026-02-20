"use client";
import { ReactNode, useEffect } from "react";

// @ts-expect-error: The Lenis library doesn't have built-in types yet.
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
      // Pengaturan Lenis disesuaikan untuk versi terbaru
          const lenis = new Lenis({
                duration: 1.2,
                      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            orientation: "vertical",
                                  gestureOrientation: "vertical",
                                        touchMultiplier: 2,
                                            });

                                                function raf(time: number) {
                                                      lenis.raf(time);
                                                            requestAnimationFrame(raf);
                                                                }

                                                                    requestAnimationFrame(raf);

                                                                        return () => {
                                                                              lenis.destroy();
                                                                                  };
                                                                                    }, []);

                                                                                      return <>{children}</>;
                                                                                      }
