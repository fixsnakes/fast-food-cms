import React from 'react';

const ScrollableTable = () => {
  // Define the number of columns and rows
  const numColumns = 20; // Increased to ensure horizontal scroll
  const numRows = 20;   // Sufficient for vertical scroll

  // Generate headers (e.g., Column 1, Column 2, ..., Column 20)
  const headers = Array.from({ length: numColumns }, (_, i) => `Column ${i + 1}`);

  // Generate table data (e.g., Row 1 Col 1, Row 1 Col 2, ...)
  const data = Array.from({ length: numRows }, (_, rowIndex) =>
    Array.from({ length: numColumns }, (_, colIndex) => `Row ${rowIndex + 1} Col ${colIndex + 1}`)
  );

  return (
    <div className="overflow-auto h-[300px] w-[500px]">
      <table className="min-w-[1000px]">
        {/* Fixed header */}
        <thead className="sticky top-0 z-10">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2 bg-gray-200 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;