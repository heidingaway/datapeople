---
created: {{date}}
modified:
tags: 
- dailynote 
- unfiled/{{date}} 
- {{date}} 
---
## Notes created today
```dataview
LIST
WHERE created = date("{{date}}")
```
## Notes modified today
```dataview
LIST
WHERE modified = date({{date}})
```

## Ephemera

[[<% tp.date.now("DD-MM-YYYY", -1, tp.file.title, "DD-MM-YYYY") %>]] | [[<% tp.date.now("DD-MM-YYYY", 1, tp.file.title, "DD-MM-YYYY") %>]]