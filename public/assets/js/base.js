export function initializeDataTable() {
    $("#kt_datatable_example_1").DataTable({
        bSort: false,
        bDestroy : true,
        // "aaSorting": [],
        language: {
            paginate: {
                previous: "<i class='uil uil-angle-left'>",
                next: "<i class='uil uil-angle-right'>",
            },
        },

        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        },
        pageLength: 10,
        filter: true,
        deferRender: true,
        scrollY: 200,
        scrollCollapse: true,
        scroller: true,
        "searching": true,
    });
}
