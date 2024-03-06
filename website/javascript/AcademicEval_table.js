
document.addEventListener('DOMContentLoaded', function () {
    var newTableData = [
        // Your new table data here
    ];

    var newTable = new Tabulator("#new-table", {
        data: newTableData, //link your new table data here
        layout: "fitColumns",
        responsiveLayout: "collapse",
        movableColumns: true,
        columns: [
            { title: "Model", field: "model", headerSort: false, widthGrow: 1 },
            { title: "Retriever", field: "retriever", headerSort: false, widthGrow: 1 },
            {
                title: "AbS-Single", columns: [
                    { title: "F1", field: "abs_single_f1", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                    { title: "Win", field: "abs_single_win", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                ]
            },
            {
                title: "AbS-Multi", columns: [
                    { title: "F1", field: "abs_multi_f1", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                    { title: "Win", field: "abs_multi_win", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                ]
            },
            {
                title: "Related", columns: [
                    { title: "F1", field: "related_f1", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                    { title: "Win", field: "related_win", headerSort: false, hozAlign: "center", formatter: colorFormatter, widthGrow: 1 },
                ]
            },
        ],
    });
});
