export const getFilterValue = filter => {
  switch (filter) {
    case 'all':
      return 'Show all';
    case 'follow':
      return 'Follow';
    case 'followings':
      return 'Followings';
    default:
      break;
  }
};
