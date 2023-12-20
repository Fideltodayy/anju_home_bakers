import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Register the fonts with pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const DeliveryList = ({ deliveryNotes }) => {
  const [selectedNote, setSelectedNote] = useState(null);

  const columns = [
    {
      name: 'Customer Name',
      selector: 'customerName',
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: 'productName',
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: 'quantity',
      sortable: true,
    },
    {
      name: 'Unit Price',
      selector: 'unitPrice',
      sortable: true,
    },
  ];

  const handleRowClick = (row) => {
    setSelectedNote(row);
    generatePdf(row);
  };

  const generatePdf = (note) => {
    const content = {
      content: [
        { text: 'Delivery Note', style: 'header' },
        { text: '\n' },
        {
          table: {
            widths: ['*', '*', '*', '*'], // Adjust the widths as needed
            body: [
              [
                { text: 'Customer Name', bold: true },
                { text: 'Product Name', bold: true },
                { text: 'Quantity', bold: true },
                { text: 'Unit Price', bold: true },
              ],
              [
                note.customerName,
                note.productName,
                note.quantity.toString(),
                note.unitPrice.toString(),
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10],
        },
      },
    };

    const pdfDoc = pdfMake.createPdf(content);
    pdfDoc.open();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Delivery Notes</h2>
      <DataTable columns={columns} data={deliveryNotes} pagination onRowClicked={handleRowClick} />
    </div>
  );
};

export default DeliveryList;