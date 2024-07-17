---
title: README
aliases: 
created: 2024-07-08
modified: 2024-07-12
status: evergreen
zettel: reference
tags:
  - README
---
# README
## Processes
```dataview
LIST
FROM #README/process SORT title
```
## Definitions
```dataview
LIST
FROM #README/definition
```
## Naming Convention
Tags: PARA/subject, unfiled/date
- unfiled must become archive after breaking out items into notes for filing

## Obsidian Tips
[Obsidian Cheatsheet](https://publish-01.obsidian.md/access/09cfa50ec31c0f01873549787f02a7e0/assets/Markdown%20Cheat%20Sheet.pdf)
Dataview: [Dataview in Obsidian: a beginner's guide](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/)
Dataview: 
- [Structure of a Query](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/)
- [Querying Internal Links](https://blacksmithgu.github.io/obsidian-dataview/reference/sources/#links)
## Hotkey
- command + 0 : numbered footnote
- Command + = : named footnote
- Create new document with template: control + N
- Insert template: control + E
- Toggle editing and reading view: cmd + E
## Calendar
```dataview
CALENDAR file.ctime 
FROM #dailynote 
```

## Resource Hubs
```dataview
LIST
FROM #RESOURCES/definition
```