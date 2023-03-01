module.exports = {
  format_time: (date) => {  console.log(date)

    return new Date(date/1000).toString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};
