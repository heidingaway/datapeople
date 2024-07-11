---
title: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DD") %>
modified: 
status:
zettel: fleeting
tags: 
- dailynote 
- unfiled/<% tp.date.now("YYYY-MM-DD") %>
- <% tp.date.now("YYYY-WW") %>
---
## Daily Note[^1]

### Ephemera
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


[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<< previous day]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> |next day >>]]
# Footnotes

[^1]: [[Daily Note]]