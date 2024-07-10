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

<< [{{date.subtract(1, "day")}}] | [<{{date}}>] >>