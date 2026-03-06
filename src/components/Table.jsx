import { useSelector } from "react-redux";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

import { useState } from "react";
import * as XLSX from "xlsx";

function Table() {
  const data = useSelector((state) => state.table.data);

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = [
    { accessorKey: "accountName", header: "Account Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },

    {
      accessorKey: "website",
      header: "Website",
      cell: ({ getValue }) => (
        <a
          href={getValue()}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit
        </a>
      ),
    },

    { accessorKey: "industry", header: "Industry" },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            getValue()
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {getValue() ? "Active" : "Inactive"}
        </span>
      ),
    },

    { accessorKey: "remark", header: "Remark" },

    {
      header: "Actions",
      cell: () => (
        <button className="text-gray-500 hover:text-gray-800 text-lg">
          ⋮
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting },

    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // Export Excel
  const downloadExcel = () => {
    const filteredData = table
      .getFilteredRowModel()
      .rows.map((row) => row.original);

    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Accounts");
    XLSX.writeFile(wb, "accounts.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Account Lists
            </h2>
            <p className="text-gray-500 text-sm">
              Manage all your accounts here
            </p>
          </div>

          <button
            onClick={downloadExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
          >
            Export Excel
          </button>

        </div>

        {/* Search + Page Size */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">

          <input
            placeholder="Search accounts..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-40"
            value={table.getState().pagination.pageSize}
            onChange={(e) =>
              table.setPageSize(Number(e.target.value))
            }
          >
            {[5, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>

        </div>

        {/* Row Count */}
        <p className="text-sm text-gray-500 mb-3">
          Total Rows: {data.length} | Showing:{" "}
          {table.getRowModel().rows.length}
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border">

          <table className="min-w-[900px] w-full text-sm">

            <thead className="bg-gray-50">

              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>

                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="px-4 py-3 text-left font-semibold text-gray-600 border-b cursor-pointer whitespace-nowrap"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted()] ?? null}

                    </th>
                  ))}

                </tr>
              ))}

            </thead>

            <tbody>

              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">

                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 border-b text-gray-700 whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* for pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">

          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-40 w-full sm:w-auto"
          >
            Previous
          </button>

          <span className="text-gray-600 text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-40 w-full sm:w-auto"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Table;