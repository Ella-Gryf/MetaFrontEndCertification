export const dateToday = () => {
  let today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');

  return (String(yyyy + '-' + mm + '-' + dd));
}