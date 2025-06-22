# Exocortex Hello Notice Plugin

This plugin adds a simple command that displays a "Hello World!" notice inside Obsidian.
It also demonstrates the file layout used for RDF-friendly knowledge bases.

## Features
- Command **Show Hello Notice** pops up an Obsidian `Notice` with the text "Hello World!".

## RDF-friendly vault structure

The repository is organized so each Markdown file represents a small RDF subgraph in frontmatter.
The file name is the subject, each frontmatter key is a predicate, and the value is its object.
Because YAML frontmatter does not allow colons in keys, the prefix separator `:` is written as `__` in file names and property names.

### Ontology folders

All TBox ontologies live under `02 Ontology`:

- `0 Meta` – basic ontologies `owl`, `rdf` and `rdfs`.
- `1 Exo/exo` – the exocortex meta-ontology `http://exocortex.my/ontology/exo` containing decorator classes over `owl:Class`, `rdf:Resource` and others.
- `2 Custom` – domain ontologies depending on `exo` but not on external vocabularies. Examples include:
  - `ims` (Information Management System) with classes like `Concept`, `Context`, `Term`, `Definition`, `Quote`, `Person`.
  - `ems` (Effort Management System) with classes like `Effort`, `EffortStatus`, `Meeting`, `Project`, `Task`.
  Each ontology resides in its own folder and provides a file `!namespace-name.md` describing the namespace along with files for individual classes such as `ems__Effort.md`.

### Knowledge folders

All ABox data is stored in `03 Knowledge`. By default a single ontology `kitelev_personal` is used in this vault.

## Building

Run `npm install` once to install dependencies. Then compile the plugin with:

```bash
npm run build
```

The compiled files will appear in the `dist/` directory and `main.js` will be copied to the repository root.

## Installing via BRAT

This repository can be added to the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin's beta list to install and receive updates.
