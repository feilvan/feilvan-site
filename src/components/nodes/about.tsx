import { Github, Instagram, Linkedin, Mail } from "lucide-preact";

export default function About() {
  return (
    <>
      <div class="flex flex-col">
        <img
          src="/images/banner.webp"
          alt="banner"
          class="gradient-fade w-[480px]"
        />
        <div class="flex gap-4 px-4 pb-4 -mt-12 z-1">
          <div class="w-24">
            <img
              src="/images/profile.webp"
              alt="profile"
              class="w-24 rounded-full border-2 border-gray-900"
            />
          </div>
          <div class="flex flex-col items-start">
            <span class="text-lg">Fuad Elhasan Irfani</span>
            <span class="text-sm text-gray">
              Front-End Developer & Digital Artist
            </span>
            <div class="flex gap-1 mt-2">
              <a
                href="https://github.com/feilvan"
                target="_blank"
                rel="noopener noreferrer"
                class="ui-button flex gap-2 items-center"
              >
                <Github size={12} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
                target="_blank"
                rel="noopener noreferrer"
                class="ui-button flex gap-2 items-center"
              >
                <Linkedin size={12} />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/feilvan/"
                target="_blank"
                rel="noopener noreferrer"
                class="ui-button flex gap-2 items-center"
              >
                <Instagram size={12} />
                Instagram
              </a>
            </div>
            <a
              href="mailto:fuad@feilvan.art"
              class="ui-button mt-1 flex gap-2 items-center"
            >
              <Mail size={12} />
              fuad@feilvan.art
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
