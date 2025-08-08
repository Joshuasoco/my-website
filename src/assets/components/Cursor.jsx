import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const follower = useRef(null);
  const [hidden, setHidden] = useState(false);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!hidden) {
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          delay: 0.1,
          ease: "power3.out",
        });
      }
    };

    const onLinkHover = () => setHidden(true);
    const onLinkLeave = () => setHidden(false);

    window.addEventListener("mousemove", onMouseMove);

    // Update selector to include modal elements
    const elements = document.querySelectorAll("input, a, button, .bg-white, [class*='backdrop-blur-sm']");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", onLinkHover);
      element.addEventListener("mouseleave", onLinkLeave);
    });
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onLinkHover);
        element.removeEventListener("mouseleave", onLinkLeave);
      });
    };
  }, [hidden]);

  useEffect(() => {
    gsap.to(follower.current, {
      opacity: hidden ? 0 : 1,
      duration: 0.3,
      ease: "power3.out",
      pointerEvents: hidden ? "none" : "auto",
    });
  }, [hidden]);

  return isTouchDevice ? null : (
    <div
      ref={follower}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 1)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        opacity: 1,
      }}
    />
  );
}
