export const COLUMNS = () => [
  // {
  //   Header: 'Device ID',
  //   accessor: 'deviceId',
  // },
  {
    Header: 'Device Name',
    accessor: 'deviceName',
  },
  // {
  //   Header: 'Start Time',
  //   accessor: 'startTime',
  //   Cell: ({ value }) => {
  //     const date = new Date(value); // Convert the value to a Date object
  //     date.setMinutes(date.getMinutes() + 330); // Add 5 hours and 30 minutes (330 minutes)
  //     return date.toLocaleString('en-IN', { hour12: true }); // Format the date for Indian locale (12-hour format)
  //   },
  // },
  // {
  //   Header: 'Start Time',
  //   accessor: 'startTime',
  // },
  {
    Header: 'Start Time',
    accessor: 'startTime',
    Cell: ({ value }) => {
      if (!value) {
        return "N/A"; // Return a placeholder if value is null/undefined
      }
  
      // Try parsing the date in the format 'DD/MM/YYYY, HH:MM:SS AM/PM'
      const [datePart, timePart] = value.split(', '); // Split date and time
      const [day, month, year] = datePart.split('/'); // Split day, month, year
      const formattedDate = `${month}/${day}/${year} ${timePart}`; // Rearrange to MM/DD/YYYY format
  
      const date = new Date(formattedDate); // Convert the rearranged value to a Date object
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return "Invalid Date"; // Return a fallback if the date is invalid
      }
  
      date.setMinutes(date.getMinutes() + 330); // Add 5 hours and 30 minutes (330 minutes)
      return date.toLocaleString('en-IN', { hour12: true }); // Format the date for Indian locale (12-hour format)
    },
  },
  
  // {
  //   Header: 'Start Time',
  //   accessor: 'startTime',
   
  // },
  // {
  //   Header: 'End Time',
  //   accessor: 'endTime',
  // },
  {
    Header: 'End Time',
    accessor: 'endTime',
    Cell: ({ value }) => {
      if (!value) {
        return "N/A"; // Return a placeholder if value is null/undefined
      }
  
      // Try parsing the date in the format 'DD/MM/YYYY, HH:MM:SS AM/PM'
      const [datePart, timePart] = value.split(', '); // Split date and time
      const [day, month, year] = datePart.split('/'); // Split day, month, year
      const formattedDate = `${month}/${day}/${year} ${timePart}`; // Rearrange to MM/DD/YYYY format
  
      const date = new Date(formattedDate); // Convert the rearranged value to a Date object
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return "Invalid Date"; // Return a fallback if the date is invalid
      }
  
      date.setMinutes(date.getMinutes() +330); // Add 5 hours and 30 minutes (330 minutes)
      return date.toLocaleString('en-IN', { hour12: true }); // Format the date for Indian locale (12-hour format)
    },
  },
  
  {
    Header: 'Distance (km)',
    accessor: 'distance',
    Cell: ({ value }) => {
      const distanceInKm = value / 1000;
      return distanceInKm > 500 ? 0 : distanceInKm.toFixed(2);
    },
  },
  // {
  //   Header: 'Average Speed',
  //   accessor: 'averageSpeed',
  // },
  {
    Header: 'Average Speed',
    accessor: 'averageSpeed',
    Cell: ({ value }) => {
      return value.toFixed(2); // Round the value to 2 decimal places
    },
  },
  {
    Header: 'Max Speed',
    accessor: 'maxSpeed',
  },
  {
    Header: 'Spent Fuel',
    accessor: 'spentFuel',
  },
  // {
  //   Header: 'Start Odometer',
  //   accessor: 'startOdometer',
  // },
  // {
  //   Header: 'End Odometer',
  //   accessor: 'endOdometer',
  // },
 
  {
    Header: 'Engine Hours',
    accessor: 'engineHours',
    Cell: ({ value }) => (value / 1000).toFixed(2), 
  }
];
