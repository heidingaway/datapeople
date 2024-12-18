  
  
```widgets  
type: clock  
```  
  
> [!quote] Always tell the truth. That way, you don't have to remember what you said.
> — Mark Twain  
  
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

