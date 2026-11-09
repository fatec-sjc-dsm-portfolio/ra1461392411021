import { useEffect, useId, useRef, type ReactNode } from 'react'
import { LuX } from 'react-icons/lu'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  closeLabel: string
  children: ReactNode
}

/**
 * Accessible modal built on the native <dialog> element:
 * Esc closes it, focus stays inside, and clicking the backdrop closes it too.
 */
export default function Modal({ open, onClose, title, closeLabel, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      // A click whose target is the <dialog> itself landed on the backdrop.
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-bright-purple/30 bg-[color-mix(in_oklab,var(--color-dark-purple)_18%,var(--color-background))] p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-modal-in"
    >
      <div className="p-6 sm:p-8">
        <header className="mb-6 flex items-start justify-between gap-4">
          <h2 id={titleId} className="font-mono text-xl font-bold tracking-[0.12em] uppercase sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="-m-1 rounded-full p-1 text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LuX className="size-6" />
          </button>
        </header>
        {children}
      </div>
    </dialog>
  )
}
