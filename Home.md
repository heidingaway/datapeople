  
  
```widgets  
type: clock  
```  
  
> [!quote] He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.
> — Tryon Edwards  
  
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


