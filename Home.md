  
  
```widgets  
type: clock  
```  
  
> [!quote] Each misfortune you encounter will carry in it the seed of tomorrows good luck.
> — Og Mandino  
  
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
  
---  
```widgets  
type: countdown  
date: 2024-10-27 21:00  
to:placeholder
``` 

