---
title: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DD") %>
modified: 
tags: 
- dailynote/<% tp.date.weekday("YYYY-[W]ww", 0) %>
---

[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<< previous day]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> |next day >>]]

## Daily Note
```tasks
due <% tp.date.now("YYYY-MM-DD") %>
not done
```
## Notes created today
```dataview
LIST
WHERE created = date("{{date}}")
```
## Notes modified today
```dataview
LIST
WHERE modified = date(<% tp.date.now("YYYY-MM-DD") %>)
```
## Incoming Link
```dataview
LIST
FROM [[]]
```