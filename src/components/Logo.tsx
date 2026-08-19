import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({ className = "h-12 w-12", priority = false, alt = "Atlas VIP Eğitim Kurumu" }: LogoProps) {
  return (
    <Image
      src="/logo/atlas_vip_logo.jpg"
      alt={alt}
      width={512}
      height={512}
      sizes="(max-width: 640px) 80px, 176px"
      className={`rounded-full object-cover ${className}`}
      preload={priority}
    />
  );
}
