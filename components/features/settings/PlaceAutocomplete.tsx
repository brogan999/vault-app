"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Input } from "@/components/ui/input";
import { searchPlaces } from "@/app/actions/geocode";
import type { PlaceSuggestion } from "@/app/actions/geocode";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const DEBOUNCE_MS = 400;

export type PlaceValue = {
  displayName: string;
  lat: number | null;
  lng: number | null;
};

interface PlaceAutocompleteProps {
  value: string;
  onSelect: (place: PlaceValue) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export function PlaceAutocomplete({
  value,
  onSelect,
  placeholder = "e.g. London, New York",
  id = "place-autocomplete",
  className,
  disabled,
}: PlaceAutocompleteProps) {
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchIdRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync controlled value (e.g. from saved prefs)
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const runSearch = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      setDropdownRect(null);
      return;
    }
    const id = ++searchIdRef.current;
    setLoading(true);
    try {
      const results = await searchPlaces(query);
      // Ignore stale response if user typed again
      if (id !== searchIdRef.current) return;
      setSuggestions(results);
      setIsOpen(results.length > 0);
      setHighlightIndex(-1);
      // Position dropdown below input (measure after paint) when we have results
      if (results.length > 0) {
        requestAnimationFrame(() => {
          inputRef.current && measureDropdownPosition();
        });
      } else {
        setDropdownRect(null);
      }
    } catch {
      if (id !== searchIdRef.current) return;
      setSuggestions([]);
      setIsOpen(false);
      setDropdownRect(null);
    } finally {
      if (id === searchIdRef.current) setLoading(false);
    }
  }, []);

  const measureDropdownPosition = useCallback(() => {
    const el = inputRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setDropdownRect({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInputValue(v);
    onSelect({ displayName: v, lat: null, lng: null });

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(v), DEBOUNCE_MS);
  };

  const handleSelect = (place: PlaceSuggestion) => {
    setInputValue(place.displayName);
    onSelect({
      displayName: place.displayName,
      lat: place.lat,
      lng: place.lng,
    });
    setSuggestions([]);
    setIsOpen(false);
    setHighlightIndex(-1);
    setDropdownRect(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === "Escape") setIsOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => (i < suggestions.length - 1 ? i + 1 : i));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => (i > 0 ? i - 1 : -1));
    } else if (e.key === "Enter" && highlightIndex >= 0 && suggestions[highlightIndex]) {
      e.preventDefault();
      handleSelect(suggestions[highlightIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setHighlightIndex(-1);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightIndex < 0 || !listRef.current) return;
    const el = listRef.current.children[highlightIndex] as HTMLElement;
    el?.scrollIntoView({ block: "nearest" });
  }, [highlightIndex]);

  // Close on click outside
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const target = e.target as Node;
      if (containerRef.current?.contains(target)) return;
      const listbox = document.getElementById(`${id}-listbox`);
      if (listbox?.contains(target)) return;
      setIsOpen(false);
      setDropdownRect(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [id]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          id={id}
          type="text"
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls={isOpen ? `${id}-listbox` : undefined}
          aria-activedescendant={highlightIndex >= 0 ? `${id}-opt-${highlightIndex}` : undefined}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          disabled={disabled}
          className="pl-9 rounded-xl border-input"
        />
      </div>
      {loading && (
        <p className="absolute left-3 top-full mt-1 text-xs text-muted-foreground" aria-live="polite">
          Searching…
        </p>
      )}
      {isOpen && suggestions.length > 0 && dropdownRect && typeof document !== "undefined" &&
        createPortal(
          <ul
            id={`${id}-listbox`}
            ref={listRef}
            role="listbox"
            className="fixed z-[100] rounded-xl border border-border bg-card py-1 shadow-lg max-h-60 overflow-auto"
            style={{
              top: dropdownRect.top,
              left: dropdownRect.left,
              width: dropdownRect.width,
            }}
          >
            {suggestions.map((place, i) => (
              <li
                key={`${place.displayName}-${place.lat}-${place.lng}-${i}`}
                id={`${id}-opt-${i}`}
                role="option"
                aria-selected={highlightIndex === i}
                className={cn(
                  "cursor-pointer px-3 py-2 text-sm text-foreground hover:bg-muted/80",
                  highlightIndex === i && "bg-muted"
                )}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(place);
                }}
              >
                {place.displayName}
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
}
