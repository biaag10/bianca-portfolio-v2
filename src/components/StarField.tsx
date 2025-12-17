// import { useEffect, useRef } from "react";

// const StarField = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const stars: HTMLDivElement[] = [];
//     const starCount = 150;

//     for (let i = 0; i < starCount; i++) {
//       const star = document.createElement("div");
//       star.className = "absolute rounded-full bg-foreground";
      
//       const size = Math.random() * 2 + 1;
//       star.style.width = `${size}px`;
//       star.style.height = `${size}px`;
//       star.style.left = `${Math.random() * 100}%`;
//       star.style.top = `${Math.random() * 100}%`;
//       star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
//       star.style.animationDelay = `${Math.random() * 3}s`;
//       star.classList.add("animate-twinkle");
      
//       container.appendChild(star);
//       stars.push(star);
//     }

//     return () => {
//       stars.forEach((star) => star.remove());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 overflow-hidden pointer-events-none z-0"
//       aria-hidden="true"
//     />
//   );
// };

// export default StarField;
