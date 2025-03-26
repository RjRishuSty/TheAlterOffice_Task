export const formatDate = (dateString, item, removeAMPM = false) => {
    if (!dateString) return "Invalid Date";
  
    const date = new Date(dateString);
    const now = new Date();
  
    // Check if the date is today
    // const isToday = date.toDateString() === now.toDateString();
  
    // if (isToday) {
    //   return "Today"; // Return "Today" if the date is today's date
    // }
  
    if (isNaN(date.getTime())) return "Invalid Date";
  
    const options = {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: !removeAMPM, // If removeAMPM is true, do not show AM/PM
    };
  
    return date.toLocaleString("en-US", options);
  };
  