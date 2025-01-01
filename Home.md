  
  
```widgets  
type: clock  
```  
  
> [!quote] All difficult things have their origin in that which is easy, and great things in that which is small.
> — Lao-Tzu  
  
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


