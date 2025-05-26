import type { Metadata } from 'next';
import Image from "next/image";
import profilePic from '../../public/images/project3.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-white px-8">
      <div className="max-w-3xl bg-white p-10 rounded-xl shadow-xl text-center">
        
        <div className="w-36 h-36 mx-auto rounded-full border-8 border-blue-500 overflow-hidden shadow-lg">
          <Image
            src={profilePic}
            alt="Foto Profil"
            width={144}
            height={144}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mt-5">About Me!</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mt-2">Yayun Eldina</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Saya seorang pengembang web dengan pengalaman di <b>Next.js, TailwindCSS, Flutter, dan Laravel.</b>  
          Saya suka membangun proyek yang menarik dan bermanfaat.  
        </p>

        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.49v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.54 1 1.54 1 .9 1.54 2.34 1.1 2.91.84.1-.66.36-1.1.65-1.35-2.22-.26-4.56-1.1-4.56-4.92a3.85 3.85 0 0 1 1-2.68 3.58 3.58 0 0 1 .1-2.64s.85-.27 2.78 1a9.52 9.52 0 0 1 5.06 0c1.93-1.27 2.78-1 2.78-1a3.58 3.58 0 0 1 .1 2.64 3.85 3.85 0 0 1 1 2.68c0 3.82-2.34 4.65-4.56 4.92a2.3 2.3 0 0 1 .66 1.79v2.67c0 .27.18.6.69.5A10 10 0 0 0 12 2Z"/>
            </svg>
          </a>

          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5Zm-11.5 20h-3v-11h3v11Zm-1.5-12.5a1.75 1.75 0 1 1 1.75-1.75 1.75 1.75 0 0 1-1.75 1.75Zm14.5 12.5h-3v-5.5c0-1.25-.02-2.85-1.75-2.85s-2 1.38-2 2.75v5.6h-3v-11h2.9v1.5h.04a3.18 3.18 0 0 1 2.85-1.6c3.05 0 3.6 2 3.6 4.6v6.5Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}


// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }