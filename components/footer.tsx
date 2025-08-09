
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t dark:border-neutral-800 border-neutral-200 px-8 pt-20 pb-16 relative bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto text-sm text-muted-foreground dark:text-muted-dark flex sm:flex-row flex-col justify-between items-start">
        
        {/* Left: Logo + Copyright */}
        <div>
          <div className="mr-4 md:flex mb-6">
            <Link href="/" className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20 text-black dark:text-white">
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
              <span className="font-medium">Every AI</span>
            </Link>
          </div>
          <div>Copyright © 2024 Every Labs</div>
          <div className="mt-2">All rights reserved</div>
        </div>

        {/* Right 3-column section */}
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          
          {/* Column 1: Product */}
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href="/pricing" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Pricing</Link>
            <Link href="/blog" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Blog</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Contact</Link>
          </div>

          {/* Column 2: Legal */}
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Terms of Service</Link>
            <Link href="/refund-policy" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Refund Policy</Link>
          </div>

          {/* Column 3: Social */}
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href="https://twitter.com" target="_blank" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">Twitter</Link>
            <Link href="https://linkedin.com" target="_blank" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">LinkedIn</Link>
            <Link href="https://github.com" target="_blank" className="transition-colors hover:text-foreground dark:hover:text-white text-xs sm:text-sm">GitHub</Link>
          </div>

        </div>
      </div>

      {/* Bottom background text */}
      <div style={{ transform: "scaleY(1.2)" }} className="mt-16 text-[14vw] lg:text-[16vw] xl:text-[16vw] leading-none font-extrabold text-transparent bg-gradient-to-b dark:from-black dark:via-neutral-900 dark:to-neutral-500 from-white via-neutral-200 to-neutral-500 text-center select-none tracking-tight bg-clip-text">
        DEEPFUNDZ
      </div>
    </footer>
  )
}
