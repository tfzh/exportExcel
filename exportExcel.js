class exportExcel 
{
    constructor(table, file_name, sheet_name, down_id) 
    {
        this.uri = 'data:application/vnd.ms-excel;base64,';
        this.template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
        this.export(table, file_name,sheet_name,down_id);
    }
    export(table, file_name,sheet_name,down_id)
    {
        if (!table.nodeType) {
            table = document.getElementById(table);
        }
        let ctx = {
            worksheet: sheet_name || 'Worksheet',
            table: table.innerHTML
        };
        file_name = file_name || 'excel';
        document.getElementById(down_id).download = file_name;
        document.getElementById(down_id).href = this.uri + this.base64(this.format(this.template, ctx));
    };
    base64(s) 
    {
        return window.btoa(unescape(encodeURIComponent(s)));
    };
    format(s, c) 
    {
        return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
        });
    };
}

