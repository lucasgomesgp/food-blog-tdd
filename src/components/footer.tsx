import { LinkFooter } from './link-footer'

export function Footer() {
  return (
    <footer className="bg-gray-footer-principal w-full py-9 flex flex-col items-center justify-center gap-6 mt-10">
      <div className="flex gap-6">
        <LinkFooter page="/about" title="About" />
        <LinkFooter page="/privacy-policy" title="Privacy Policy" />
        <LinkFooter page="/contact" title="Contact" />
      </div>
      <p className="text-gray-black font-merriweather text-sm font-bold leading-5">
        Copyright &copy; 2024 Food Ninja Blog. All Rights Reserved.
      </p>
    </footer>
  )
}
