// Check if article should be visible based on date
const shouldShowArticle = (dateString) => {
  // Parse the date string (format: "DD.MM.YYYY")
  const [day, month, year] = dateString.trim().split('.');
  const articleDate = new Date(year, month - 1, day); // month is 0-indexed

  // Get current date and set time to start of day
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate one day before the article date
  const oneDayBefore = new Date(articleDate);
  oneDayBefore.setDate(articleDate.getDate() - 1);
  oneDayBefore.setHours(0, 0, 0, 0);

  // Show article if current date is on or after one day before the article date
  return today >= oneDayBefore;
};

export default shouldShowArticle;
