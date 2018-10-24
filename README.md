# exportExcel.js
a class to export table data to Excel
exportExcel.js
How to use?
```
<button class="layui-btn" style="margin-left: 30px;" v-on:click="export_excel"><a href="" id="eexcel" style="color: white;">导出Excel</a></button>
```

```
let excel = new exportExcel(table_id,file_name,sheet_name,"eexcel");
```
