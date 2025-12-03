import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  testId?: string;
}

export default function ImageZoom({ src, alt, className = "", testId }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt}
          className={`${className} transition-all duration-300`}
          data-testid={testId}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
            <ZoomIn className="w-4 h-4" />
            Click to Enlarge
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-screen h-screen max-w-none p-0 m-0 overflow-hidden bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={src} 
              alt={alt}
              className="w-[95vw] h-[95vh] object-contain"
              onClick={() => setIsOpen(false)}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-10"
              data-testid="button-close-zoom"
            >
              <span className="text-3xl leading-none">×</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
