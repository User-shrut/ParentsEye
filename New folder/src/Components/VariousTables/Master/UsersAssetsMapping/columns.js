export const COLUMNS = () => [
    {
      Header: '',
      accessor: 'select',
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.isSelected}
          onChange={() => row.original.handleRowSelect(row.index)}
        />
      ),
    },
    {
      Header: 'SN',
      accessor: 'id',
    },
    {
      Header: 'User',
      accessor: '',
    },
    {
        Header: 'Group Name',
        accessor: '',
      },
      {
        Header: 'Assets',
        accessor: '',
      }
      
  ];
  