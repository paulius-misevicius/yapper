import { X } from "lucide-react"
import { FocusTrap } from "focus-trap-react"
import { createPortal } from "react-dom"

interface MobileShelfModalProps {
    onClose: () => void
    children: React.ReactNode
    title: string
}

export default function MobileShelfModal({onClose, children, title}: MobileShelfModalProps) {

    const rootPortal = document.getElementById("portal")

    if (!rootPortal) return

    return createPortal(
        <>
            <div 
                onClick={onClose}
                className="fixed inset-0 flex bg-black/60 z-50"
            />
            <FocusTrap
                focusTrapOptions={{
                    clickOutsideDeactivates: true,
                    escapeDeactivates: true
                }}
            >
                <div className="w-full bg-(--surface-1) rounded-t-2xl p-8 flex flex-col gap-5 fixed bottom-0 z-100">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-lg">
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="size-7 flex items-center justify-center text-(--text-muted) active:text-(--text-primary)"
                        >
                            <X className="size-5" />
                        </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </FocusTrap>
        </>,
        rootPortal
    )
}