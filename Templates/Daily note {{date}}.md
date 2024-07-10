---
title: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DD") %>
modified: 
tags: 
- dailynote 
- unfiled/<% tp.date.now("YYYY-MM-DD") %>
- <% tp.date.now("YYYY-MM-DD") %>
---
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

## Ephemera


<<[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]>>