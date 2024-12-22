<%*  
var file = await app.workspace.getActiveFile()  
await app.vault.modify(file, "")  
%>  
  
```widgets  
type: clock  
```  
  
<% tp.web.daily_quote() %>  
  
------  
```widgets  
type: countdown  
date: 2024-12-25 00:00  
to: ✨🎄❄ Christmas ❄🎄✨
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


