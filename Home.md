  
  
```widgets  
type: clock  
```  
  
> [!quote] The world is a book, and those who do not travel read only a page.
> — Augustinus Sanctus  
  
------  
```widgets  
type: countdown  
date: 2025-04-15 00:00  
to: ✨🎂 30th Birthday 🎂✨
```
---
  
>[!multi-column]  
>> [!example]+ Quick Access  
>> ```dataview  
>> LIST  
>> FROM #favourites  
>> SORT file.name ASC  
>> LIMIT 15  
>> ```  
>  
>> [!note]+ Recent  
>> ```dataview  
>> LIST  
>> FROM ""  
>> SORT file.mtime DESC  
>> LIMIT 15  
>> ```  


