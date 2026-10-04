"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const { endpoint, accessKey, subject } = site.contactForm;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    if (!accessKey) {
      setStatus("error");
      setError(`The form isn't connected yet — please email ${site.email}.`);
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          replyto: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error && caught.message
          ? `${caught.message} You can also email ${site.email}.`
          : `Couldn't send your message. Please email ${site.email}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form-sent" role="status">
        <p className="contact-form-title">Message sent ✓</p>
        <p>Thanks for reaching out — I&apos;ll get back to you soon.</p>
        <button
          type="button"
          className="button button-ghost"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-labelledby="contact-form-title">
      <p id="contact-form-title" className="contact-form-title">
        Or send me a message
      </p>
      <div className="contact-form-row">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={100} />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} required maxLength={5000} />
      </label>
      <input
        type="checkbox"
        name="botcheck"
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="contact-form-footer">
        <button type="submit" className="button" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" ? (
          <p className="contact-form-error" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
}
