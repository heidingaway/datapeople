---
title: <% tp.date.weekday("YYYY-[W]ww", 0) %>
created: <% tp.date.now("YYYY-MM-DD") %>
modified: 
tags: 
- dailynote
---

## Notes
- 🚂
## Outcomes
1. 🪂
## Index of the week
[[<% tp.date.weekday("YYYY-MM-DD", 1) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 2) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 3) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 4) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 5) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 6) %>]]
[[<% tp.date.weekday("YYYY-MM-DD", 7) %>]]
## Unfiled Notes
```dataview
list
FROM #unfiled 

```
## Unfinished Tasks
```tasks
not done
```
## Unlinked Notes
```dataview
list from [[]] and !outgoing([[]])
```

## Completed this week
```tasks
done <% tp.date.weekday("YYYY-MM-DD", 1) %> <% tp.date.weekday("YYYY-MM-DD", 7) %>
```
## Outgoing Link

## Incoming Link
```dataview
LIST
FROM [[]]
```