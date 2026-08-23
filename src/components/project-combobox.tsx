"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type ProjectOption = { id: string; name: string; number: string | null };

type ProjectComboboxProps = {
  projects: ProjectOption[];
  value: string;
  onChange: (name: string) => void;
};

function formatProject(project: ProjectOption) {
  return project.number ? `#${project.number} — ${project.name}` : project.name;
}

export function ProjectCombobox({ projects, value, onChange }: ProjectComboboxProps) {
  const selectedProject = useMemo(
    () => projects.find((project) => project.name === value) ?? null,
    [projects, value],
  );

  const [query, setQuery] = useState(() => (selectedProject ? formatProject(selectedProject) : ""));
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Only re-sync from the confirmed value (not on every keystroke — typing
  // doesn't touch `value` until a suggestion is actually picked).
  useEffect(() => {
    setQuery(selectedProject ? formatProject(selectedProject) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized || (selectedProject && formatProject(selectedProject).toLowerCase() === normalized)) {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(normalized) ||
        project.number?.toLowerCase().includes(normalized),
    );
  }, [projects, query, selectedProject]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [filteredProjects]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setQuery(selectedProject ? formatProject(selectedProject) : "");
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [selectedProject]);

  function selectProject(project: ProjectOption) {
    onChange(project.name);
    setQuery(formatProject(project));
    setOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setHighlightedIndex((index) => Math.min(index + 1, filteredProjects.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setHighlightedIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      if (open) {
        event.preventDefault();
        const project = filteredProjects[highlightedIndex];
        if (project) {
          selectProject(project);
        }
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setQuery(selectedProject ? formatProject(selectedProject) : "");
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        autoComplete="off"
        disabled={projects.length === 0}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={
          projects.length === 0 ? "No projects have been added yet" : "Search projects by name or number"
        }
        className="w-full min-w-0 rounded-[12px] border border-rule bg-bg px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-hi disabled:cursor-not-allowed disabled:opacity-60"
      />

      {open && projects.length > 0 ? (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-[12px] border border-rule bg-paper p-1 shadow-[0_20px_50px_-20px_rgba(2,6,23,0.35)]"
        >
          {filteredProjects.length === 0 ? (
            <li className="px-3 py-2 text-sm text-ink-2">No projects match &ldquo;{query}&rdquo;.</li>
          ) : (
            filteredProjects.map((project, index) => (
              <li key={project.id} role="option" aria-selected={project.name === value}>
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectProject(project)}
                  className={`block w-full rounded-[8px] px-3 py-2 text-left text-sm transition ${
                    index === highlightedIndex
                      ? "bg-hi-soft text-hi-deep"
                      : "text-ink hover:bg-bg"
                  }`}
                >
                  {formatProject(project)}
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
