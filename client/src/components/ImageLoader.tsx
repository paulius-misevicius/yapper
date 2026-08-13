import { useState } from "react"

interface ImageLoaderProps {
    src: string
    alt: string
}

export default function ImageLoader({src, alt}: ImageLoaderProps) {

    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            {!isLoaded && <div className="absolute inset-0 animate-[shimmer_3s_infinite] rounded-[inherit] bg-[linear-gradient(90deg,var(--surface-2)_25%,var(--text-muted)_50%,var(--surface-2)_75%)] bg-[length:200%_100%]"/>}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`${isLoaded ? "opacity-100" : "opacity-0"} h-full w-full object-cover transition-opacity duration-200 ease-in`}
            />
        </div>
    )
}