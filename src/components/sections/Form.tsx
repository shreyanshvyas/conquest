import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

/*
 * Conquest registration form
 *
 * Hidden Odoo fields:
 * program    = 97|Conquest 2026
 * university = 77|World University of Design, Sonepat
 *
 * Posts directly to the Odoo webform endpoint (native form submit).
 * Dropdowns are custom (native <select> option lists can't be styled); each one
 * keeps a hidden native <select> so the value posts to Odoo and "required" still works.
 */

type Option = { value: string; label: string };

const classOptions: Option[] = [
  { value: "Class 11", label: "Class 11" },
  { value: "Class 12", label: "Class 12" },
];

const streamOptions: Option[] = [
  { value: "Science", label: "Science" },
  { value: "Commerce", label: "Commerce" },
];

const trackOptions: Option[] = [
  { value: "97|Conquest 2026-AI", label: "Artificial Intelligence (AI)" },
  { value: "99|Conquest 2026-Cyber Security", label: "Cybersecurity" },
  { value: "100|Conquest 2026-Finance", label: "Finance" },
];

/* Shared look for every field: gray border, rounded, same placeholder gray */
const fieldBase =
  "h-[clamp(2.5rem,6vh,2.75rem)] w-full rounded-xl border bg-white px-3.5 text-sm text-brand-blue outline-none transition";
const field = `${fieldBase} border-brand-gray placeholder:text-brand-blue/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 user-invalid:border-brand-red`;
const placeholderColor = "text-brand-blue/50"; // same gray as input placeholders

export default function HeroRegistrationForm({
  track,
  onTrackChange,
}: {
  track?: string;
  onTrackChange?: (value: string) => void;
} = {}) {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setError("");

    const data = new FormData(e.currentTarget);

    // Honeypot: stop bot submissions
    if (data.get("website")) {
      e.preventDefault();
      return;
    }

    // Validate WhatsApp number
    const phoneDigits = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 12) {
      e.preventDefault();
      setError("Please enter a valid WhatsApp number.");
      return;
    }

    // Allow the browser to submit the form to Odoo
    setStatus("submitting");
  }

  return (
    <div id="hero-form" className="relative w-full scroll-mt-24">
      {/* Orange offset block behind the card */}
      <div
        aria-hidden="true"
        className="absolute -right-3 -top-3 h-24 w-24 rounded-2xl bg-brand-orange sm:-right-4 sm:-top-4"
      />

      {/* no overflow-hidden here, so dropdown menus aren't clipped by the card */}
      <div className="relative rounded-3xl bg-white text-brand-blue shadow-2xl shadow-black/25">
        <header className="border-b border-brand-gray px-6 pb-[clamp(0.75rem,2vh,1rem)] pt-[clamp(1rem,2.5vh,1.25rem)] sm:px-7">
          <h2 className="font-display text-[clamp(1.3rem,4.2vh,1.6rem)] uppercase leading-none">
            Fill in your details
          </h2>
        </header>

        <form
          action="https://align-together-edept.odoo.com/webform/submit/conquest"
          method="POST"
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-3 gap-y-[clamp(0.4rem,1.2vh,0.625rem)] px-6 py-[clamp(0.875rem,2.5vh,1.25rem)] sm:px-7"
        >
          {/* Hidden Odoo fields */}
          <input type="hidden" name="university" value="77|World University of Design, Sonepat" />

          {/* Row 1: Name */}
          <label className="sr-only" htmlFor="first_name">
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            autoComplete="given-name"
            placeholder="First name *"
            required
            className={field}
          />

          <label className="sr-only" htmlFor="last_name">
            Last name
          </label>
          <input
            id="last_name"
            name="last_name"
            autoComplete="family-name"
            placeholder="Last name *"
            required
            className={field}
          />

          {/* Row 2: Class and stream (independent) */}
          <Dropdown name="class" label="Class" placeholder="Class *" options={classOptions} />
          <Dropdown name="stream" label="Stream" placeholder="Stream *" options={streamOptions} />

          {/* Row 3: School and city */}
          <label className="sr-only" htmlFor="school">
            School
          </label>
          <input
            id="school"
            name="school"
            autoComplete="organization"
            placeholder="School *"
            required
            className={field}
          />

          <label className="sr-only" htmlFor="city">
            City
          </label>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            placeholder="City *"
            required
            className={field}
          />

          {/* Row 4: Phone and email */}
          <label className="sr-only" htmlFor="phone">
            WhatsApp number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="WhatsApp no. *"
            pattern="[0-9+\s\-]{10,15}"
            required
            className={field}
          />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email *"
            required
            className={field}
          />

          {/* Row 5: Track (full width) */}
          <Dropdown
            name="program"
            label="Track"
            placeholder="Choose your track *"
            options={trackOptions}
            value={track}
            onChange={onTrackChange}
            className="col-span-2"
          />

          {/* Honeypot: hidden from people */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          {/* Consent (required) */}
          <label className="col-span-2 mt-1 flex items-start gap-2.5 text-xs leading-5 text-brand-blue/80">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue" />
            <span>
              I am a parent/guardian, or have my guardian’s permission, and agree to the{" "}
              <a
                href="/privacy-policy"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue underline underline-offset-2"
              >
                terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                rel="noopener noreferrer"
                className="font-semibold text-brand-blue underline underline-offset-2"
              >
                privacy policy
              </a>
              . *
            </span>
          </label>

          {/* Apexr guidance session (optional, unticked) */}
          <label className="col-span-2 -mt-1 flex items-start gap-2.5 text-xs leading-5 text-brand-blue/80">
            <input
              type="checkbox"
              name="apexr_guidance"
              value="Yes"
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand-blue"
            />
            <span>
              Send my parent details of the free Apexr international university guidance session.{" "}
              <span className="text-brand-blue/55">(Optional)</span>
            </span>
          </label>

          {/* Validation error */}
          {error && (
            <p
              role="alert"
              className="col-span-2 rounded-lg bg-brand-red/10 px-3 py-2 text-xs font-semibold text-brand-red"
            >
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="col-span-2 mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange text-lg font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white disabled:cursor-wait disabled:opacity-70"
          >
            {status === "submitting" ? (
              "Registering…"
            ) : (
              <>
                Register free <span aria-hidden="true">→</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ───────────────────────── Custom dropdown ───────────────────────── */

function Dropdown({
  name,
  label,
  placeholder,
  options,
  value: controlledValue,
  onChange,
  className = "",
}: {
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}) {
  const id = useId();
  const listId = `${id}-list`;
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [innerValue, setInnerValue] = useState("");
  const value = controlledValue ?? innerValue;
  const setValue = (next: string) => {
    setInnerValue(next);
    onChange?.(next);
  };
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [dropUp, setDropUp] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const selected = options.find((o) => o.value === value);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  function openMenu() {
    // Open upward if there isn't room below (e.g. Track near the bottom of the screen)
    const rect = buttonRef.current?.getBoundingClientRect();
    const menuHeight = options.length * 40 + 16;
    if (rect) setDropUp(window.innerHeight - rect.bottom < menuHeight && rect.top > menuHeight);
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  }

  function choose(i: number) {
    setValue(options[i].value);
    setInvalid(false);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + options.length) % options.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  }

  const stateClasses = invalid
    ? "border-brand-red"
    : open
      ? "border-brand-blue ring-2 ring-brand-blue/15"
      : selected
        ? "border-brand-blue/40 bg-brand-mist"
        : "border-brand-gray hover:border-brand-blue/40";

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {/* Hidden native select: carries the value to Odoo and enforces "required" */}
      <select
        name={name}
        required
        value={value}
        onChange={() => {}}
        onInvalid={() => setInvalid(true)}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      >
        <option value="" />
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <button
        ref={buttonRef}
        type="button"
        aria-label={selected ? `${label}: ${selected.label}` : label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        className={`${fieldBase} relative flex items-center justify-between gap-2 text-left focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/15 ${stateClasses}`}
      >
        <span className={`truncate ${selected ? "font-semibold text-brand-blue" : placeholderColor}`}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className={`h-3.5 w-3.5 shrink-0 text-brand-blue transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {controlledValue && (
        <span
          key={controlledValue}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-brand-orange/0 transition-[box-shadow] duration-1000 ease-out starting:ring-4 starting:ring-brand-orange/70 motion-reduce:hidden"
        />
      )}

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={`absolute left-0 right-0 z-30 overflow-hidden rounded-xl border border-brand-gray bg-white p-1.5 shadow-xl shadow-brand-blue/15 ${
            dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"
          }`}
        >
          {options.map((o, i) => {
            const isSelected = o.value === value;
            const isActive = i === active;
            return (
              <li
                key={o.value}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()} // keep focus on the button
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isSelected
                    ? "bg-brand-blue font-semibold text-white"
                    : isActive
                      ? "bg-brand-mist text-brand-blue"
                      : "text-brand-blue"
                }`}
              >
                {o.label}
                {isSelected && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0"
                  >
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}