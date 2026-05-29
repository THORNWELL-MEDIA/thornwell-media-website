"use client";

import { useEffect, useState } from "react";

const PASSWORD = "winner";
const STORAGE_KEY = "tw-preview-access";

export default function LaunchingSoonGate() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      window.history.replaceState({}, "", window.location.pathname);
      return;
    }
    setUnlocked(window.localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
    }
  }

  if (unlocked === null) {
    return <div style={{ position: "fixed", inset: 0, background: "#1F1F1F", zIndex: 99999 }} />;
  }
  if (unlocked) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#1F1F1F",
        color: "#FAFAFA",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter Tight', 'Inter', system-ui, -apple-system, sans-serif",
        padding: "32px",
      }}
    >
      <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "10px 16px",
            border: "2px solid #FFB422",
            background: "#F4A300",
            borderRadius: "0",
            color: "#1F1F1F",
            fontSize: "11px",
            letterSpacing: "3px",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Thornwell Media
        </div>
        <h1
          style={{
            fontFamily: "'Fraunces', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(48px, 8vw, 84px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            lineHeight: 1.0,
          }}
        >
          Launching Soon
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.55,
            color: "rgba(250, 250, 250, 0.78)",
            margin: "0 0 48px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Marketing built like an operator, not an agency. Brand systems, search-dominance programs, and lead engines for ambitious operating companies.
        </p>
        <div style={{ borderTop: "1px solid rgba(250, 250, 250, 0.15)", paddingTop: "32px" }}>
          <form onSubmit={submit} style={{ display: "flex", gap: "8px", maxWidth: "320px", margin: "0 auto" }}>
            <input
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              placeholder="Client access"
              style={{
                flex: 1,
                background: "rgba(250, 250, 250, 0.08)",
                border: error ? "1px solid #F87171" : "1px solid rgba(250, 250, 250, 0.2)",
                borderRadius: "0",
                padding: "10px 14px",
                color: "#FAFAFA",
                fontSize: "14px",
                outline: "none",
                fontFamily: "inherit",
              }}
              autoComplete="off"
            />
            <button
              type="submit"
              style={{
                background: "#F4A300",
                color: "#1F1F1F",
                border: "none",
                borderRadius: "0",
                padding: "10px 20px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Enter
            </button>
          </form>
          {error && (
            <p style={{ color: "#F87171", fontSize: "12px", marginTop: "12px", marginBottom: 0 }}>
              Incorrect access code.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
